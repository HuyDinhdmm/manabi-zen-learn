import { useState } from "react";
import { Dashboard } from "@/components/Dashboard";
import { KnowledgeBank } from "@/components/KnowledgeBank";
import { SearchBar } from "@/components/SearchBar";
import { Navigation } from "@/components/Navigation";

const Index = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <Dashboard />;
      case "knowledge":
        return <KnowledgeBank />;
      case "search":
        return (
          <div className="space-y-8 animate-in fade-in duration-700">
            <div className="space-y-4">
              <h1 className="text-3xl font-light tracking-tight text-foreground">
                探す
              </h1>
              <p className="text-muted-foreground font-light">
                Find the perfect resource for your learning journey
              </p>
              <div className="pt-4">
                <SearchBar />
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["Theory", "Case Study", "Project", "Video"].map((tag) => (
                <button
                  key={tag}
                  className="p-4 rounded-lg border border-border bg-card hover:bg-secondary/50 transition-colors text-sm font-light"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        );
      case "goals":
        return (
          <div className="space-y-6 animate-in fade-in duration-700">
            <div className="space-y-2">
              <h1 className="text-3xl font-light tracking-tight text-foreground">
                目標
              </h1>
              <p className="text-muted-foreground font-light">
                Track and manage your learning objectives
              </p>
            </div>
            <div className="flex items-center justify-center h-64 border border-dashed border-border rounded-lg bg-muted/20">
              <p className="text-muted-foreground font-light">
                Goals management coming soon...
              </p>
            </div>
          </div>
        );
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="container mx-auto px-6 py-8 max-w-7xl">
        {renderContent()}
      </main>
    </div>
  );
};

export default Index;
