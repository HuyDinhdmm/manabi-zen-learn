import React from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Video, FileText, Code, ExternalLink } from "lucide-react";
import { mockResources } from "@/data/mockData";

const resources = mockResources;

const typeColors: Record<string, string> = {
  theory: "bg-primary/10 text-primary border-primary/20",
  "case-study": "bg-success/10 text-success border-success/20",
  project: "bg-accent text-accent-foreground border-accent",
  video: "bg-secondary/50 text-foreground border-secondary",
};

const typeIcons: Record<string, React.ReactNode> = {
  theory: <BookOpen className="h-5 w-5 text-primary" />,
  "case-study": <FileText className="h-5 w-5 text-success" />,
  project: <Code className="h-5 w-5 text-accent-foreground" />,
  video: <Video className="h-5 w-5 text-foreground" />,
};

export const KnowledgeBank = () => {
  const navigate = useNavigate();
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
    <div className="space-y-6 animate-fade-in">
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
          const handleClick = () => {
            navigate(`/resource/${resource.id}`);
          };
          
          return (
            <Card
              key={resource.id}
              className="overflow-hidden border-border bg-card hover:shadow-lg transition-all duration-300 cursor-pointer hover-scale group animate-fade-in"
              style={{ animationDelay: `${index * 50}ms` }}
              onClick={handleClick}
            >
              {'image' in resource && resource.image && (
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={resource.image}
                    alt={resource.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  <div className={`absolute top-3 right-3 h-10 w-10 rounded-lg ${typeColors[resource.type]} flex items-center justify-center shadow-lg backdrop-blur-sm`}>
                    {typeIcons[resource.type]}
                  </div>
                </div>
              )}
              <div className="p-5">
                <div className="space-y-3">
                  <h3 className="font-light text-base group-hover:text-primary transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-light line-clamp-2">
                    {resource.description}
                  </p>

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
              </div>
            </Card>
          );
        })}
        </div>
      )}
    </div>
  );
};
