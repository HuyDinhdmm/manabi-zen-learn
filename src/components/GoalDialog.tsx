import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Goal } from "@/types/goal";

interface GoalDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSave: (goal: Omit<Goal, "id" | "createdAt">) => void;
  goal?: Goal;
}

export const GoalDialog = ({ open, onOpenChange, onSave, goal }: GoalDialogProps) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState<Goal["category"]>("theory");
  const [targetHours, setTargetHours] = useState("10");
  const [currentHours, setCurrentHours] = useState("0");
  const [deadline, setDeadline] = useState("");

  useEffect(() => {
    if (goal) {
      setTitle(goal.title);
      setDescription(goal.description);
      setCategory(goal.category);
      setTargetHours(goal.targetHours.toString());
      setCurrentHours(goal.currentHours.toString());
      setDeadline(goal.deadline || "");
    } else {
      setTitle("");
      setDescription("");
      setCategory("theory");
      setTargetHours("10");
      setCurrentHours("0");
      setDeadline("");
    }
  }, [goal, open]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      title: title.trim(),
      description: description.trim(),
      category,
      targetHours: Number(targetHours),
      currentHours: Number(currentHours),
      deadline: deadline || undefined,
    });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] bg-card border-border">
        <DialogHeader>
          <DialogTitle className="text-foreground font-light text-xl">
            {goal ? "目標を編集" : "新しい目標"}
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title" className="text-sm font-light">タイトル</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              maxLength={100}
              className="bg-background border-border"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description" className="text-sm font-light">説明</Label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              maxLength={500}
              className="bg-background border-border min-h-[80px]"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="category" className="text-sm font-light">カテゴリー</Label>
              <Select value={category} onValueChange={(value) => setCategory(value as Goal["category"])}>
                <SelectTrigger className="bg-background border-border">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="theory">理論</SelectItem>
                  <SelectItem value="practice">実践</SelectItem>
                  <SelectItem value="project">プロジェクト</SelectItem>
                  <SelectItem value="skill">スキル</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="deadline" className="text-sm font-light">期限</Label>
              <Input
                id="deadline"
                type="date"
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
                className="bg-background border-border"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="targetHours" className="text-sm font-light">目標時間</Label>
              <Input
                id="targetHours"
                type="number"
                min="1"
                max="1000"
                value={targetHours}
                onChange={(e) => setTargetHours(e.target.value)}
                required
                className="bg-background border-border"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="currentHours" className="text-sm font-light">現在の時間</Label>
              <Input
                id="currentHours"
                type="number"
                min="0"
                max="1000"
                value={currentHours}
                onChange={(e) => setCurrentHours(e.target.value)}
                required
                className="bg-background border-border"
              />
            </div>
          </div>

          <DialogFooter className="gap-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="font-light"
            >
              キャンセル
            </Button>
            <Button type="submit" className="font-light">
              {goal ? "更新" : "作成"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
