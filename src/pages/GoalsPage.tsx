import { GoalsManager } from "@/components/GoalsManager";
import { Navigation } from "@/components/Navigation";
import { Toaster } from "@/components/ui/toaster";

export default function GoalsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation activeTab="goals" />
      <main className="container mx-auto px-6 py-8 max-w-7xl">
        <GoalsManager />
      </main>
      <Toaster />
    </div>
  );
}
