import { KnowledgeBank } from "@/components/KnowledgeBank";
import { Navigation } from "@/components/Navigation";
import { Toaster } from "@/components/ui/toaster";

export default function KnowledgeBankPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation activeTab="knowledge" />
      <main className="container mx-auto px-6 py-8 max-w-7xl">
        <KnowledgeBank />
      </main>
      <Toaster />
    </div>
  );
}
