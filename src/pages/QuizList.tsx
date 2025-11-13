import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Target, FileQuestion, ArrowRight } from "lucide-react";
import { mockQuizzes } from "@/data/mockData";
import { Quiz } from "@/types/quiz";
import { Navigation } from "@/components/Navigation";

export default function QuizList() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = Array.from(new Set(mockQuizzes.map(q => q.category)));

  const filteredQuizzes = mockQuizzes.filter((quiz) => {
    const matchesSearch = 
      quiz.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      quiz.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      quiz.tags?.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = !selectedCategory || quiz.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    return `${mins} phút`;
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation activeTab="quiz" />
      <div className="container mx-auto px-6 py-8 max-w-7xl">
        <div className="space-y-8 animate-fade-in">
          {/* Header */}
          <div className="space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-light tracking-tight text-foreground">
                クイズ
              </h1>
              <p className="text-muted-foreground font-light">
                Test your knowledge with interactive quizzes
              </p>
            </div>

            {/* Search and Filter */}
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Search quizzes..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 font-light"
                />
              </div>
              <div className="flex gap-2 overflow-x-auto pb-1">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={`px-4 py-2 rounded-lg border transition-colors whitespace-nowrap text-sm font-light ${
                    !selectedCategory
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-card border-border hover:bg-secondary/50"
                  }`}
                >
                  All
                </button>
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg border transition-colors whitespace-nowrap text-sm font-light ${
                      selectedCategory === category
                        ? "bg-primary text-primary-foreground border-primary"
                        : "bg-card border-border hover:bg-secondary/50"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Quiz List */}
          {filteredQuizzes.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground font-light">No quizzes found</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredQuizzes.map((quiz, index) => (
                <Card
                  key={quiz.id}
                  className="p-6 border-border bg-card hover:shadow-lg transition-all duration-300 hover-scale animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="space-y-4">
                    <div>
                      <Badge variant="outline" className="mb-3 font-light text-xs">
                        {quiz.category}
                      </Badge>
                      <h3 className="font-light text-lg text-foreground mb-2">
                        {quiz.title}
                      </h3>
                      <p className="text-sm text-muted-foreground font-light line-clamp-2">
                        {quiz.description}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <FileQuestion className="h-4 w-4" />
                        <span className="font-light">{quiz.questions.length} questions</span>
                      </div>
                      {quiz.timeLimit && (
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          <span className="font-light">{formatTime(quiz.timeLimit)}</span>
                        </div>
                      )}
                      {quiz.passingScore && (
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Target className="h-4 w-4" />
                          <span className="font-light">Passing: {quiz.passingScore}%</span>
                        </div>
                      )}
                    </div>

                    {quiz.tags && quiz.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {quiz.tags.slice(0, 2).map((tag, idx) => (
                          <Badge
                            key={idx}
                            variant="outline"
                            className="border-border text-muted-foreground font-light text-xs"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    )}

                    <Button
                      onClick={() => navigate(`/quiz/${quiz.id}`)}
                      className="w-full font-light gap-2"
                    >
                      Start Quiz
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

