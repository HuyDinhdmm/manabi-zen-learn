import React from "react";
import { Home, BookOpen, Search, Target, FileQuestion, Timer } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

interface NavigationProps {
  activeTab?: string;
  onTabChange?: (tab: string) => void;
}

const tabs: Array<{
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  route?: string;
  pathMatch?: string; // For matching routes
}> = [
  { id: "dashboard", label: "Dashboard", icon: Home, route: "/", pathMatch: "/" },
  { id: "knowledge", label: "Knowledge Bank", icon: BookOpen, pathMatch: "/knowledge" },
  { id: "search", label: "Search", icon: Search, pathMatch: "/search" },
  { id: "goals", label: "Goals", icon: Target, pathMatch: "/goals" },
  { id: "quiz", label: "Quiz", icon: FileQuestion, route: "/quiz", pathMatch: "/quiz" },
  { id: "pomodoro", label: "Pomodoro", icon: Timer, route: "/pomodoro", pathMatch: "/pomodoro" },
];

export const Navigation = ({ activeTab, onTabChange }: NavigationProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Determine active tab from route if not provided
  const getActiveTab = () => {
    if (activeTab) return activeTab;
    
    const currentPath = location.pathname;
    
    // Check for exact matches first
    if (currentPath === "/") return "dashboard";
    
    // Check for path matches
    for (const tab of tabs) {
      if (tab.pathMatch && currentPath.startsWith(tab.pathMatch)) {
        return tab.id;
      }
    }
    
    // Check for resource detail pages
    if (currentPath.startsWith("/resource")) return "knowledge";
    
    return "dashboard";
  };
  
  const currentActiveTab = getActiveTab();
  
  return (
    <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center cursor-pointer" onClick={() => navigate("/")}>
              <span className="text-primary-foreground font-light text-sm">ま</span>
            </div>
            <span className="text-xl font-light tracking-tight cursor-pointer" onClick={() => navigate("/")}>Manabi</span>
          </div>

          <div className="flex items-center gap-1">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = currentActiveTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    if (tab.route) {
                      navigate(tab.route);
                    } else if (onTabChange && !tab.route) {
                      onTabChange(tab.id);
                    } else if (tab.id === "dashboard") {
                      navigate("/");
                    }
                  }}
                  className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-all duration-200 ${
                    isActive
                      ? "bg-secondary text-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span className="font-light text-sm hidden md:inline">
                    {tab.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};
