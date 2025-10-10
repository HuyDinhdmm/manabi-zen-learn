import { Card } from "@/components/ui/card";
import { ProgressRing } from "./ProgressRing";
import { GoalCard } from "./GoalCard";
import { Calendar, Target, TrendingUp, BookOpen } from "lucide-react";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { Goal } from "@/types/goal";
import { useMemo } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from "recharts";

export const Dashboard = () => {
  const [goals] = useLocalStorage<Goal[]>("manabi-goals", []);

  const stats = useMemo(() => {
    const totalHours = goals.reduce((acc, goal) => acc + goal.currentHours, 0);
    const targetHours = goals.reduce((acc, goal) => acc + goal.targetHours, 0);
    const completedGoals = goals.filter(g => g.currentHours >= g.targetHours).length;
    const dailyAverage = totalHours / 7;
    const weeklyProgress = targetHours > 0 ? (totalHours / targetHours) * 100 : 0;

    return {
      totalHours,
      targetHours,
      completedGoals,
      dailyAverage,
      weeklyProgress,
    };
  }, [goals]);

  const chartData = useMemo(() => {
    const categoryData = goals.reduce((acc, goal) => {
      const existing = acc.find(item => item.category === goal.category);
      if (existing) {
        existing.hours += goal.currentHours;
        existing.target += goal.targetHours;
      } else {
        acc.push({
          category: goal.category,
          hours: goal.currentHours,
          target: goal.targetHours,
        });
      }
      return acc;
    }, [] as Array<{ category: string; hours: number; target: number }>);

    return categoryData;
  }, [goals]);

  const recentGoals = useMemo(() => {
    return [...goals]
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
      .slice(0, 3);
  }, [goals]);

  const convertGoalToCardFormat = (goal: Goal) => ({
    title: goal.title,
    progress: Math.min((goal.currentHours / goal.targetHours) * 100, 100),
    category: goal.category as "theory" | "practice" | "project",
    dueDate: goal.deadline ? new Date(goal.deadline).toLocaleDateString("en-US", { month: "short", day: "numeric" }) : "No deadline",
  });

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      <div className="space-y-2">
        <h1 className="text-3xl font-light tracking-tight text-foreground">
          おかえりなさい
        </h1>
        <p className="text-muted-foreground font-light">
          Your learning journey continues
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6 border-border bg-card space-y-3">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-secondary flex items-center justify-center">
              <Calendar className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground font-light">Daily Average</p>
              <p className="text-2xl font-light text-foreground">{stats.dailyAverage.toFixed(1)}h</p>
            </div>
          </div>
        </Card>

        <Card className="p-6 border-border bg-card space-y-3">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-secondary flex items-center justify-center">
              <Target className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground font-light">Active Goals</p>
              <p className="text-2xl font-light text-foreground">{goals.length}</p>
            </div>
          </div>
        </Card>

        <Card className="p-6 border-border bg-card space-y-3">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-secondary flex items-center justify-center">
              <TrendingUp className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground font-light">Completed</p>
              <p className="text-2xl font-light text-foreground">{stats.completedGoals}</p>
            </div>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-6 border-border bg-card space-y-4">
          <h2 className="text-lg font-light text-foreground">Learning Progress</h2>
          <div className="flex items-center justify-center gap-8 py-6">
            <ProgressRing progress={Math.round(stats.dailyAverage * 10)} size={80} />
            <ProgressRing progress={Math.round(stats.weeklyProgress)} size={80} />
          </div>
        </Card>

        <Card className="p-6 border-border bg-card space-y-4">
          <h2 className="text-lg font-light text-foreground">Category Breakdown</h2>
          {chartData.length > 0 ? (
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis 
                  dataKey="category" 
                  stroke="hsl(var(--muted-foreground))"
                  style={{ fontSize: '12px' }}
                />
                <YAxis 
                  stroke="hsl(var(--muted-foreground))"
                  style={{ fontSize: '12px' }}
                />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px',
                    fontSize: '12px',
                  }}
                />
                <Bar dataKey="hours" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          ) : (
            <div className="h-[200px] flex items-center justify-center">
              <div className="text-center space-y-2">
                <BookOpen className="h-8 w-8 mx-auto text-muted-foreground" />
                <p className="text-sm text-muted-foreground font-light">No data yet</p>
              </div>
            </div>
          )}
        </Card>
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-light text-foreground">Recent Goals</h2>
        {recentGoals.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {recentGoals.map((goal) => (
              <GoalCard key={goal.id} {...convertGoalToCardFormat(goal)} />
            ))}
          </div>
        ) : (
          <Card className="p-12 border-dashed border-2 border-border bg-muted/20 text-center">
            <p className="text-muted-foreground font-light">Create your first goal to start tracking progress</p>
          </Card>
        )}
      </div>
    </div>
  );
};
