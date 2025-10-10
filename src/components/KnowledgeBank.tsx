import React from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Video, FileText, GitBranch, ExternalLink } from "lucide-react";

const resources = [
  {
    title: "Introduction to Machine Learning",
    type: "theory",
    tags: ["AI", "ML", "Fundamentals"],
    icon: BookOpen,
    description: "Comprehensive overview of ML concepts and algorithms",
  },
  {
    title: "React Hooks Deep Dive",
    type: "case-study",
    tags: ["React", "JavaScript", "Hooks"],
    icon: Video,
    description: "Real-world examples of React Hooks implementation",
  },
  {
    title: "Building a REST API",
    type: "project",
    tags: ["Backend", "API", "Node.js"],
    icon: GitBranch,
    description: "Step-by-step guide to creating scalable APIs",
  },
  {
    title: "Design Patterns in TypeScript",
    type: "theory",
    tags: ["TypeScript", "Patterns", "Architecture"],
    icon: FileText,
    description: "Essential design patterns for modern development",
  },
  {
    title: "Data Visualization with D3",
    type: "case-study",
    tags: ["D3", "Visualization", "Frontend"],
    icon: Video,
    description: "Creating interactive charts and graphs",
  },
  {
    title: "Microservices Architecture",
    type: "theory",
    tags: ["Architecture", "Distributed Systems"],
    icon: BookOpen,
    description: "Principles of designing microservices systems",
  },
  {
    title: "Linear Regression in Practice",
    type: "project",
    tags: ["AI", "ML", "theory-to-practice"],
    icon: GitBranch,
    description: "A small Python project demonstrating regression model visualization.",
    video: "https://youtu.be/sample-regression-demo",
  },
  {
    title: "How Gradient Descent Works (Explainer Video)",
    type: "video",
    tags: ["AI", "math", "learning"],
    icon: Video,
    description: "A 3-minute animation explaining how gradient descent optimizes models.",
    video: "https://youtu.be/sample-gradient-descent",
  },
];

const typeColors: Record<string, string> = {
  theory: "bg-primary/10 text-primary border-primary/20",
  "case-study": "bg-success/10 text-success border-success/20",
  project: "bg-accent text-accent-foreground border-accent",
  video: "bg-secondary/50 text-foreground border-secondary",
};

export const KnowledgeBank = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [selectedType, setSelectedType] = React.useState<string | null>(null);

  const filteredResources = resources.filter((resource) => {
    const matchesSearch = 
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesType = !selectedType || resource.type === selectedType;
    
    return matchesSearch && matchesType;
  });

  return (
    <div className="space-y-6 animate-in fade-in duration-700">
      <div className="space-y-4">
        <div className="space-y-2">
          <h1 className="text-3xl font-light tracking-tight text-foreground">
            知識バンク
          </h1>
          <p className="text-muted-foreground font-light">
            Your curated collection of learning resources
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search resources..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 font-light"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-1">
            {["theory", "case-study", "project", "video"].map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(selectedType === type ? null : type)}
                className={`px-4 py-2 rounded-lg border transition-colors whitespace-nowrap text-sm font-light ${
                  selectedType === type
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-card border-border hover:bg-secondary/50"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
      </div>

      {filteredResources.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground font-light">No resources found</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredResources.map((resource, index) => {
          const Icon = resource.icon;
          const handleClick = () => {
            if ('video' in resource && resource.video) {
              window.open(resource.video, '_blank');
            }
          };
          
          return (
            <Card
              key={index}
              className="p-5 border-border bg-card hover:shadow-md transition-all duration-300 group cursor-pointer"
              onClick={handleClick}
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="h-10 w-10 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <div className="space-y-2">
                  <h3 className="font-light text-base group-hover:text-primary transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-light line-clamp-2">
                    {resource.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  <Badge
                    variant="outline"
                    className={`${typeColors[resource.type]} font-light text-xs`}
                  >
                    {resource.type}
                  </Badge>
                  {resource.tags.slice(0, 2).map((tag, idx) => (
                    <Badge
                      key={idx}
                      variant="outline"
                      className="border-border text-muted-foreground font-light text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          );
        })}
        </div>
      )}
    </div>
  );
};
