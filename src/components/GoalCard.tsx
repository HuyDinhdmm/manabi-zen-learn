import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";

interface GoalCardProps {
  title: string;
  progress: number;
  dueDate: string;
  category: "theory" | "practice" | "project";
}

const categoryColors = {
  theory: "bg-primary/10 text-primary border-primary/20",
  practice: "bg-success/10 text-success border-success/20",
  project: "bg-accent text-accent-foreground border-accent",
};

export const GoalCard = ({
  title,
  progress,
  dueDate,
  category,
}: GoalCardProps) => {
  return (
    <Card className="p-5 border-border bg-card hover:shadow-md transition-all duration-300 group cursor-pointer">
      <div className="space-y-3">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-light text-base group-hover:text-primary transition-colors">
            {title}
          </h3>
          <Badge
            variant="outline"
            className={`${categoryColors[category]} font-light text-xs`}
          >
            {category}
          </Badge>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground font-light">Progress</span>
            <span className="text-foreground font-light">{progress}%</span>
          </div>
          <div className="h-1.5 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-primary rounded-full transition-all duration-700 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Calendar className="h-3.5 w-3.5" />
          <span className="font-light">Due {dueDate}</span>
        </div>
      </div>
    </Card>
  );
};
