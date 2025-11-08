export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number; // Index of correct option (0-based)
  explanation?: string;
  category?: string;
  difficulty?: "easy" | "medium" | "hard";
}

export interface Quiz {
  id: string;
  title: string;
  description: string;
  category: string;
  questions: Question[];
  timeLimit?: number; // Time limit in seconds
  passingScore?: number; // Passing score percentage (0-100)
  tags?: string[];
}

export interface QuizResult {
  quizId: string;
  score: number; // Percentage (0-100)
  totalQuestions: number;
  correctAnswers: number;
  incorrectAnswers: number;
  timeSpent: number; // Time spent in seconds
  completedAt: string; // ISO timestamp
  answers: {
    questionId: string;
    selectedAnswer: number;
    isCorrect: boolean;
  }[];
}

