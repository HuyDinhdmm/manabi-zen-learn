export interface Exam {
  id: string;
  title: string;
  subject: string;
  description?: string;
  date: string; // ISO date string (YYYY-MM-DD)
  time?: string; // HH:MM format, optional
  location?: string;
  duration?: number; // minutes
  notes?: string;
  createdAt: string;
  updatedAt: string;
}
