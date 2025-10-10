import { Calendar, BookOpen, Target, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";
import { ProgressRing } from "@/components/ProgressRing";
import { GoalCard } from "@/components/GoalCard";

export const Dashboard = () => {
  const todayProgress = 65;
  const weeklyProgress = 42;

  const goals: Array<{
    title: string;
    progress: number;
    dueDate: string;
    category: "theory" | "practice" | "project";
  }> = [
    {
      title: "Master Machine Learning Theory",
      progress: 65,
      dueDate: "May 15",
      category: "theory" as const,
    },
    {
      title: "Complete React Case Study",
      progress: 80,
      dueDate: "May 10",
      category: "practice" as const,
    },
    {
      title: "Build Portfolio Project",
      progress: 30,
      dueDate: "May 30",
      category: "project" as const,
    },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-light tracking-tight text-foreground">
          おかえりなさい
        </h1>
        <p className="text-muted-foreground font-light">
          Your learning journey continues
        </p>
      </div>

      {/* Progress Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6 border-border bg-card hover:shadow-md transition-shadow duration-300">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground font-light">Today</p>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-light tracking-tight">
                  {todayProgress}%
                </span>
              </div>
            </div>
            <ProgressRing progress={todayProgress} size={64} />
          </div>
        </Card>

        <Card className="p-6 border-border bg-card hover:shadow-md transition-shadow duration-300">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground font-light">
                This Week
              </p>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-light tracking-tight">
                  {weeklyProgress}%
                </span>
              </div>
            </div>
            <ProgressRing progress={weeklyProgress} size={64} />
          </div>
        </Card>

        <Card className="p-6 border-border bg-card hover:shadow-md transition-shadow duration-300">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground font-light">Streak</p>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-light tracking-tight">12</span>
                <span className="text-sm text-muted-foreground">days</span>
              </div>
            </div>
            <div className="h-16 w-16 rounded-full bg-accent flex items-center justify-center">
              <TrendingUp className="h-7 w-7 text-primary" />
            </div>
          </div>
        </Card>
      </div>

      {/* Active Goals */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-light tracking-tight">Active Goals</h2>
          <button className="text-sm text-primary hover:text-primary/80 transition-colors font-light">
            View all
          </button>
        </div>
        <div className="grid grid-cols-1 gap-4">
          {goals.map((goal, index) => (
            <GoalCard key={index} {...goal} />
          ))}
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="p-4 border-border bg-secondary/30 hover:bg-secondary/50 transition-colors">
          <div className="flex items-center gap-3">
            <BookOpen className="h-5 w-5 text-primary" />
            <div>
              <p className="text-2xl font-light">24</p>
              <p className="text-xs text-muted-foreground font-light">
                Resources
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-4 border-border bg-secondary/30 hover:bg-secondary/50 transition-colors">
          <div className="flex items-center gap-3">
            <Target className="h-5 w-5 text-primary" />
            <div>
              <p className="text-2xl font-light">8</p>
              <p className="text-xs text-muted-foreground font-light">
                Projects
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-4 border-border bg-secondary/30 hover:bg-secondary/50 transition-colors">
          <div className="flex items-center gap-3">
            <Calendar className="h-5 w-5 text-primary" />
            <div>
              <p className="text-2xl font-light">45</p>
              <p className="text-xs text-muted-foreground font-light">
                Hours
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-4 border-border bg-secondary/30 hover:bg-secondary/50 transition-colors">
          <div className="flex items-center gap-3">
            <TrendingUp className="h-5 w-5 text-primary" />
            <div>
              <p className="text-2xl font-light">92%</p>
              <p className="text-xs text-muted-foreground font-light">
                Completion
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
