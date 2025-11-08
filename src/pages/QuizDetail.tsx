import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Clock, ArrowLeft, CheckCircle2, XCircle, FileQuestion } from "lucide-react";
import { mockQuizzes } from "@/data/mockData";
import { QuizResult } from "@/types/quiz";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { Navigation } from "@/components/Navigation";

type QuizState = "intro" | "taking" | "review" | "finished";

export default function QuizDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const quiz = mockQuizzes.find((q) => q.id === id);
  const [quizState, setQuizState] = useState<QuizState>("intro");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [results, setResults] = useLocalStorage<QuizResult[]>("manabi-quiz-results", []);

  useEffect(() => {
    if (quiz?.timeLimit && quizState === "taking") {
      setTimeRemaining(quiz.timeLimit);
      const interval = setInterval(() => {
        setTimeRemaining((prev) => {
          if (prev <= 1) {
            handleFinishQuiz();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [quizState, quiz?.timeLimit]);

  const handleStartQuiz = () => {
    setQuizState("taking");
    setStartTime(Date.now());
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
  };

  const handleAnswerSelect = (questionId: string, answerIndex: number) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: answerIndex,
    }));
  };

  const handleNext = () => {
    if (quiz && currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  const handleFinishQuiz = () => {
    if (!quiz) return;
    
    const timeSpent = startTime ? Math.floor((Date.now() - startTime) / 1000) : 0;
    const answers = quiz.questions.map((q) => ({
      questionId: q.id,
      selectedAnswer: selectedAnswers[q.id] ?? -1,
      isCorrect: selectedAnswers[q.id] === q.correctAnswer,
    }));

    const correctAnswers = answers.filter((a) => a.isCorrect).length;
    const score = Math.round((correctAnswers / quiz.questions.length) * 100);

    const result: QuizResult = {
      quizId: quiz.id,
      score,
      totalQuestions: quiz.questions.length,
      correctAnswers,
      incorrectAnswers: quiz.questions.length - correctAnswers,
      timeSpent,
      completedAt: new Date().toISOString(),
      answers,
    };

    setResults([...results, result]);
    setQuizState("finished");
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  if (!quiz) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="flex items-center justify-center min-h-[calc(100vh-4rem)]">
          <div className="text-center animate-fade-in">
            <h1 className="text-2xl font-light text-foreground mb-4">Quiz not found</h1>
            <Button onClick={() => navigate("/quiz")} variant="outline">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Go back
            </Button>
          </div>
        </div>
      </div>
    );
  }

  const currentQuestion = quiz.questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / quiz.questions.length) * 100;
  const answeredCount = Object.keys(selectedAnswers).length;

  // Intro screen
  if (quizState === "intro") {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-6 py-8 max-w-4xl">
          <Button
            onClick={() => navigate("/quiz")}
            variant="ghost"
            size="icon"
            className="mb-6 hover-scale"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>

          <Card className="p-8 border-border animate-fade-in">
            <div className="space-y-6">
              <div>
                <Badge variant="outline" className="mb-4 font-light">
                  {quiz.category}
                </Badge>
                <h1 className="text-3xl font-light tracking-tight text-foreground mb-3">
                  {quiz.title}
                </h1>
                <p className="text-muted-foreground font-light text-lg">
                  {quiz.description}
                </p>
              </div>

              <div className="space-y-4 pt-4 border-t border-border">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <FileQuestion className="h-5 w-5" />
                  <span className="font-light">{quiz.questions.length} questions</span>
                </div>
                {quiz.timeLimit && (
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Clock className="h-5 w-5" />
                    <span className="font-light">Time limit: {formatTime(quiz.timeLimit)}</span>
                  </div>
                )}
                {quiz.passingScore && (
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5" />
                    <span className="font-light">Passing score: {quiz.passingScore}%</span>
                  </div>
                )}
              </div>

              <Button
                onClick={handleStartQuiz}
                size="lg"
                className="w-full font-light"
              >
                Start Quiz
              </Button>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  // Taking quiz
  if (quizState === "taking") {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-6 py-8 max-w-4xl">
          {/* Header */}
          <div className="mb-6 space-y-4">
            <div className="flex items-center justify-between">
              <Button
                onClick={() => navigate("/quiz")}
                variant="ghost"
                size="icon"
                className="hover-scale"
              >
                <ArrowLeft className="h-5 w-5" />
              </Button>
              {quiz.timeLimit && (
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border">
                  <Clock className="h-4 w-4 text-primary" />
                  <span className="font-mono font-light text-foreground">
                    {formatTime(timeRemaining)}
                  </span>
                </div>
              )}
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground font-light">
                  Question {currentQuestionIndex + 1} of {quiz.questions.length}
                </span>
                <span className="text-muted-foreground font-light">
                  {answeredCount} answered
                </span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>
          </div>

          {/* Question */}
          <Card className="p-6 border-border animate-fade-in">
            <div className="space-y-6">
              <div>
                {currentQuestion.difficulty && (
                  <Badge
                    variant="outline"
                    className={`mb-3 font-light text-xs ${
                      currentQuestion.difficulty === "easy"
                        ? "bg-green-500/10 text-green-500 border-green-500/20"
                        : currentQuestion.difficulty === "medium"
                        ? "bg-yellow-500/10 text-yellow-500 border-yellow-500/20"
                        : "bg-red-500/10 text-red-500 border-red-500/20"
                    }`}
                  >
                    {currentQuestion.difficulty}
                  </Badge>
                )}
                <h2 className="text-xl font-light text-foreground mb-4 whitespace-pre-line">
                  {currentQuestion.question}
                </h2>
              </div>

              <div className="space-y-3">
                {currentQuestion.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(currentQuestion.id, index)}
                    className={`w-full text-left p-4 rounded-lg border transition-all duration-200 ${
                      selectedAnswers[currentQuestion.id] === index
                        ? "border-primary bg-primary/10 text-foreground"
                        : "border-border bg-card hover:bg-secondary/50 text-foreground"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`h-6 w-6 rounded-full border-2 flex items-center justify-center font-light text-sm ${
                          selectedAnswers[currentQuestion.id] === index
                            ? "border-primary bg-primary text-primary-foreground"
                            : "border-border"
                        }`}
                      >
                        {String.fromCharCode(65 + index)}
                      </div>
                      <span className="font-light">{option}</span>
                    </div>
                  </button>
                ))}
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <Button
                  onClick={handlePrevious}
                  disabled={currentQuestionIndex === 0}
                  variant="outline"
                  className="font-light"
                >
                  Previous
                </Button>
                <Button
                  onClick={
                    currentQuestionIndex === quiz.questions.length - 1
                      ? handleFinishQuiz
                      : handleNext
                  }
                  className="font-light"
                >
                  {currentQuestionIndex === quiz.questions.length - 1 ? "Finish Quiz" : "Next"}
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  // Finished - Show results
  if (quizState === "finished") {
    const result = results[results.length - 1];
    const passed = result.score >= (quiz.passingScore || 0);

    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-6 py-8 max-w-4xl">
          <Card className="p-8 border-border animate-fade-in">
            <div className="space-y-6 text-center">
              <div>
                {passed ? (
                  <CheckCircle2 className="h-16 w-16 text-green-500 mx-auto mb-4" />
                ) : (
                  <XCircle className="h-16 w-16 text-red-500 mx-auto mb-4" />
                )}
                <h1 className="text-3xl font-light tracking-tight text-foreground mb-2">
                  {passed ? "Congratulations!" : "Keep Learning!"}
                </h1>
                <p className="text-muted-foreground font-light">
                  {passed
                    ? "You passed the quiz!"
                    : `You need ${quiz.passingScore}% to pass. Don't give up!`}
                </p>
              </div>

              <div className="space-y-4 py-6 border-y border-border">
                <div>
                  <div className="text-4xl font-light text-foreground mb-1">
                    {result.score}%
                  </div>
                  <div className="text-sm text-muted-foreground font-light">Your Score</div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <div className="text-2xl font-light text-foreground">
                      {result.correctAnswers}
                    </div>
                    <div className="text-xs text-muted-foreground font-light">Correct</div>
                  </div>
                  <div>
                    <div className="text-2xl font-light text-foreground">
                      {result.incorrectAnswers}
                    </div>
                    <div className="text-xs text-muted-foreground font-light">Incorrect</div>
                  </div>
                  <div>
                    <div className="text-2xl font-light text-foreground">
                      {formatTime(result.timeSpent)}
                    </div>
                    <div className="text-xs text-muted-foreground font-light">Time</div>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 justify-center">
                <Button
                  onClick={() => navigate("/quiz")}
                  variant="outline"
                  className="font-light"
                >
                  Back to Quizzes
                </Button>
                <Button
                  onClick={() => {
                    setQuizState("intro");
                    setSelectedAnswers({});
                    setCurrentQuestionIndex(0);
                  }}
                  className="font-light"
                >
                  Retake Quiz
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  return null;
}

