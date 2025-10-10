import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export const SearchBar = () => {
  return (
    <div className="relative w-full max-w-2xl">
      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
      <Input
        type="text"
        placeholder="Search theory, case studies, projects..."
        className="pl-11 h-12 bg-card border-border focus-visible:ring-primary font-light"
      />
    </div>
  );
};
