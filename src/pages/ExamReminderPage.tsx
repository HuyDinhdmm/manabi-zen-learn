import { ExamManager } from "@/components/ExamManager";
import { Navigation } from "@/components/Navigation";
import { Toaster } from "@/components/ui/toaster";
import { mockExams } from "@/data/mockData";

export default function ExamReminderPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation activeTab="exam-reminder" />
      <main className="container mx-auto px-6 py-8 max-w-7xl">
        <ExamManager initialExams={mockExams} />
      </main>
      <Toaster />
    </div>
  );
}
