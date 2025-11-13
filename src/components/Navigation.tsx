import React, { useState } from "react";
import { Home, BookOpen, Target, FileQuestion, Timer, Calendar, Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface NavigationProps {
  activeTab?: string;
}

const tabs: Array<{
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  route: string;
}> = [
  { id: "dashboard", label: "Dashboard", icon: Home, route: "/" },
  { id: "knowledge", label: "Knowledge Bank", icon: BookOpen, route: "/knowledge" },
  { id: "goals", label: "Goals", icon: Target, route: "/goals" },
  { id: "quiz", label: "Quiz", icon: FileQuestion, route: "/quiz" },
  { id: "pomodoro", label: "Pomodoro", icon: Timer, route: "/pomodoro" },
  { id: "exam-reminder", label: "Exam Reminder", icon: Calendar, route: "/exam-reminder" },
];

export const Navigation = ({ activeTab }: NavigationProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const getActiveTab = () => {
    const currentPath = location.pathname;

    // Check tất cả các route
    if (currentPath === "/") return "dashboard";
    if (currentPath === "/knowledge") return "knowledge";
    if (currentPath === "/goals") return "goals";
    if (currentPath.startsWith("/quiz")) return "quiz";
    if (currentPath.startsWith("/pomodoro")) return "pomodoro";
    if (currentPath === "/exam-reminder") return "exam-reminder";
    if (currentPath.startsWith("/resource")) return "knowledge";

    return "dashboard";
  };

  const currentActiveTab = getActiveTab();

  const handleNavigation = (tab: typeof tabs[0]) => {
    setIsMenuOpen(false);
    navigate(tab.route);
  };

  const renderTabButton = (tab: typeof tabs[0]) => {
    const Icon = tab.icon;
    const isActive = currentActiveTab === tab.id;
    return (
      <button
        key={tab.id}
        onClick={() => handleNavigation(tab)}
        className={`px-3 py-2 rounded-lg flex items-center gap-2 transition-all duration-200 whitespace-nowrap ${
          isActive
            ? "bg-primary/10 text-primary font-medium border-b-2 border-primary"
            : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
        }`}
        title={tab.label}
      >
        <Icon className="h-4 w-4" />
        <span className="font-light text-sm hidden lg:inline">{tab.label}</span>
      </button>
    );
  };

  return (
    <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div
            className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity flex-shrink-0"
            onClick={() => navigate("/")}
          >
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-light text-sm">ま</span>
            </div>
            <span className="text-lg font-light tracking-tight hidden sm:inline">Manabi</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1 flex-1 justify-center mx-8">
            {tabs.map((tab) => renderTabButton(tab))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 space-y-2 animate-in fade-in slide-in-from-top-2">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = currentActiveTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleNavigation(tab)}
                  className={`w-full px-4 py-2 rounded-lg flex items-center gap-3 transition-all duration-200 text-left ${
                    isActive
                      ? "bg-primary/10 text-primary font-medium"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                  }`}
                >
                  <Icon className="h-4 w-4 flex-shrink-0" />
                  <span className="text-sm">{tab.label}</span>
                </button>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
};
