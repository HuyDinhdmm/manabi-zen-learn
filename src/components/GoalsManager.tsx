import { useState } from "react";
import { Plus, Pencil, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { GoalDialog } from "./GoalDialog";
import { Goal } from "@/types/goal";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { toast } from "@/hooks/use-toast";

const categoryColors: Record<Goal["category"], string> = {
  theory: "bg-primary/10 text-primary border-primary/20",
  practice: "bg-success/10 text-success border-success/20",
  project: "bg-accent text-accent-foreground border-accent",
  skill: "bg-secondary/50 text-foreground border-secondary",
};

const categoryLabels: Record<Goal["category"], string> = {
  theory: "理論",
  practice: "実践",
  project: "プロジェクト",
  skill: "スキル",
};

export const GoalsManager = () => {
  const [goals, setGoals] = useLocalStorage<Goal[]>("manabi-goals", []);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingGoal, setEditingGoal] = useState<Goal | undefined>();
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [goalToDelete, setGoalToDelete] = useState<string | null>(null);

  const handleSaveGoal = (goalData: Omit<Goal, "id" | "createdAt">) => {
    if (editingGoal) {
      setGoals(goals.map(g => 
        g.id === editingGoal.id 
          ? { ...goalData, id: editingGoal.id, createdAt: editingGoal.createdAt }
          : g
      ));
      toast({
        title: "目標を更新しました",
        description: "変更が保存されました",
      });
    } else {
      const newGoal: Goal = {
        ...goalData,
        id: crypto.randomUUID(),
        createdAt: new Date().toISOString(),
      };
      setGoals([...goals, newGoal]);
      toast({
        title: "目標を作成しました",
        description: "新しい目標が追加されました",
      });
    }
    setEditingGoal(undefined);
  };

  const handleEditGoal = (goal: Goal) => {
    setEditingGoal(goal);
    setDialogOpen(true);
  };

  const handleDeleteGoal = (id: string) => {
    setGoalToDelete(id);
    setDeleteDialogOpen(true);
  };

  const confirmDelete = () => {
    if (goalToDelete) {
      setGoals(goals.filter(g => g.id !== goalToDelete));
      toast({
        title: "目標を削除しました",
        description: "目標が削除されました",
      });
      setGoalToDelete(null);
    }
  };

  const formatDeadline = (deadline?: string) => {
    if (!deadline) return null;
    const date = new Date(deadline);
    return date.toLocaleDateString("ja-JP", { year: "numeric", month: "short", day: "numeric" });
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-700">
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <h1 className="text-3xl font-light tracking-tight text-foreground">目標</h1>
          <p className="text-muted-foreground font-light">Track and manage your learning objectives</p>
        </div>
        <Button 
          onClick={() => {
            setEditingGoal(undefined);
            setDialogOpen(true);
          }}
          className="font-light gap-2"
        >
          <Plus className="h-4 w-4" />
          新しい目標
        </Button>
      </div>

      {goals.length === 0 ? (
        <Card className="p-12 border-dashed border-2 border-border bg-muted/20 text-center">
          <p className="text-muted-foreground font-light">目標を追加して学習を始めましょう</p>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {goals.map((goal) => {
            const progress = Math.min((goal.currentHours / goal.targetHours) * 100, 100);
            return (
              <Card key={goal.id} className="p-5 border-border bg-card hover:shadow-md transition-all duration-300">
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <h3 className="font-light text-lg text-foreground mb-1">{goal.title}</h3>
                      {goal.description && (
                        <p className="text-sm text-muted-foreground font-light line-clamp-2">
                          {goal.description}
                        </p>
                      )}
                    </div>
                    <div className="flex gap-1">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleEditGoal(goal)}
                        className="h-8 w-8 text-muted-foreground hover:text-foreground"
                      >
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleDeleteGoal(goal.id)}
                        className="h-8 w-8 text-muted-foreground hover:text-destructive"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground font-light">
                        {goal.currentHours}h / {goal.targetHours}h
                      </span>
                      <span className="text-foreground font-light">{progress.toFixed(0)}%</span>
                    </div>
                    <Progress value={progress} className="h-2" />
                  </div>

                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className={`${categoryColors[goal.category]} font-light text-xs`}>
                      {categoryLabels[goal.category]}
                    </Badge>
                    {goal.deadline && (
                      <span className="text-xs text-muted-foreground font-light">
                        {formatDeadline(goal.deadline)}
                      </span>
                    )}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      )}

      <GoalDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        onSave={handleSaveGoal}
        goal={editingGoal}
      />

      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent className="bg-card border-border">
          <AlertDialogHeader>
            <AlertDialogTitle className="font-light">目標を削除しますか？</AlertDialogTitle>
            <AlertDialogDescription className="font-light">
              この操作は取り消せません。目標が完全に削除されます。
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="font-light">キャンセル</AlertDialogCancel>
            <AlertDialogAction onClick={confirmDelete} className="font-light bg-destructive text-destructive-foreground hover:bg-destructive/90">
              削除
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};
