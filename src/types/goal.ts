export interface Goal {
  id: string;
  title: string;
  description: string;
  category: "theory" | "practice" | "project" | "skill";
  targetHours: number;
  currentHours: number;
  deadline?: string;
  createdAt: string;
}
