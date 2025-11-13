import React, { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Exam } from "@/types/exam";
import { ExamDialog } from "@/components/ExamDialog";
import { ExamCalendar } from "@/components/ExamCalendar";

interface ExamManagerProps {
  initialExams: Exam[];
}

export const ExamManager = ({ initialExams }: ExamManagerProps) => {
  const [exams, setExams] = useState<Exam[]>(initialExams);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedExam, setSelectedExam] = useState<Exam | undefined>();

  const handleAddExam = () => {
    setSelectedExam(undefined);
    setIsDialogOpen(true);
  };

  const handleEditExam = (exam: Exam) => {
    setSelectedExam(exam);
    setIsDialogOpen(true);
  };

  const handleSaveExam = useCallback((exam: Exam) => {
    setExams((prev) => {
      const existingIndex = prev.findIndex((e) => e.id === exam.id);
      if (existingIndex >= 0) {
        const updated = [...prev];
        updated[existingIndex] = exam;
        return updated;
      } else {
        return [...prev, exam];
      }
    });
    setIsDialogOpen(false);
    setSelectedExam(undefined);
  }, []);

  const handleDeleteExam = useCallback((id: string) => {
    if (confirm("Are you sure you want to delete this exam?")) {
      setExams((prev) => prev.filter((exam) => exam.id !== id));
    }
  }, []);

  const handleCancelDialog = () => {
    setIsDialogOpen(false);
    setSelectedExam(undefined);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <h1 className="text-3xl font-light tracking-tight text-foreground">
            試験リマインダー
          </h1>
          <p className="text-muted-foreground font-light">
            Manage your exam schedule and stay organized
          </p>
        </div>
        <Button onClick={handleAddExam} className="gap-2">
          <Plus className="h-4 w-4" />
          Add Exam
        </Button>
      </div>

      <ExamCalendar
        exams={exams}
        onEdit={handleEditExam}
        onDelete={handleDeleteExam}
      />

      <ExamDialog
        isOpen={isDialogOpen}
        exam={selectedExam}
        onSave={handleSaveExam}
        onCancel={handleCancelDialog}
      />
    </div>
  );
};
