import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Exam } from "@/types/exam";

interface ExamDialogProps {
  isOpen: boolean;
  exam?: Exam;
  onSave: (exam: Exam) => void;
  onCancel: () => void;
}

export const ExamDialog = ({ isOpen, exam, onSave, onCancel }: ExamDialogProps) => {
  const [formData, setFormData] = useState<Partial<Exam>>({
    title: "",
    subject: "",
    description: "",
    date: "",
    time: "",
    location: "",
    duration: 60,
    notes: "",
  });

  useEffect(() => {
    if (exam) {
      setFormData(exam);
    } else {
      setFormData({
        title: "",
        subject: "",
        description: "",
        date: "",
        time: "",
        location: "",
        duration: 60,
        notes: "",
      });
    }
  }, [exam, isOpen]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "duration" ? (value ? parseInt(value, 10) : 60) : value,
    }));
  };

  const handleSave = () => {
    if (!formData.title || !formData.subject || !formData.date) {
      alert("Please fill in required fields: Title, Subject, and Date");
      return;
    }

    const now = new Date().toISOString();
    const newExam: Exam = {
      id: exam?.id || `exam-${Date.now()}`,
      title: formData.title || "",
      subject: formData.subject || "",
      description: formData.description,
      date: formData.date || "",
      time: formData.time,
      location: formData.location,
      duration: formData.duration || 60,
      notes: formData.notes,
      createdAt: exam?.createdAt || now,
      updatedAt: now,
    };

    onSave(newExam);
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onCancel()}>
      <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{exam ? "Edit Exam" : "Add New Exam"}</DialogTitle>
        </DialogHeader>

        <Card className="p-6 border-0 bg-transparent space-y-4">
          <div>
            <label className="text-sm font-light text-foreground">
              Exam Title *
            </label>
            <Input
              name="title"
              value={formData.title || ""}
              onChange={handleInputChange}
              placeholder="e.g., React Midterm Exam"
              className="mt-1"
            />
          </div>

          <div>
            <label className="text-sm font-light text-foreground">
              Subject *
            </label>
            <Input
              name="subject"
              value={formData.subject || ""}
              onChange={handleInputChange}
              placeholder="e.g., Front-end Development"
              className="mt-1"
            />
          </div>

          <div>
            <label className="text-sm font-light text-foreground">
              Description
            </label>
            <Textarea
              name="description"
              value={formData.description || ""}
              onChange={handleInputChange}
              placeholder="Brief description of the exam"
              className="mt-1 min-h-[60px]"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-light text-foreground">
                Date *
              </label>
              <Input
                name="date"
                type="date"
                value={formData.date || ""}
                onChange={handleInputChange}
                className="mt-1"
              />
            </div>
            <div>
              <label className="text-sm font-light text-foreground">
                Time
              </label>
              <Input
                name="time"
                type="time"
                value={formData.time || ""}
                onChange={handleInputChange}
                className="mt-1"
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-light text-foreground">
              Location
            </label>
            <Input
              name="location"
              value={formData.location || ""}
              onChange={handleInputChange}
              placeholder="e.g., Room 101, Building A or Online"
              className="mt-1"
            />
          </div>

          <div>
            <label className="text-sm font-light text-foreground">
              Duration (minutes)
            </label>
            <Input
              name="duration"
              type="number"
              value={formData.duration || 60}
              onChange={handleInputChange}
              className="mt-1"
            />
          </div>

          <div>
            <label className="text-sm font-light text-foreground">Notes</label>
            <Textarea
              name="notes"
              value={formData.notes || ""}
              onChange={handleInputChange}
              placeholder="Additional notes or reminders"
              className="mt-1 min-h-[60px]"
            />
          </div>
        </Card>

        <div className="flex gap-3 justify-end mt-6">
          <Button variant="outline" onClick={onCancel}>
            Cancel
          </Button>
          <Button onClick={handleSave} className="gap-2">
            {exam ? "Update Exam" : "Add Exam"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
