import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { mockResources, mockUniversities } from "@/data/mockData";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, BookOpen, Video, FileText, Code, Building2, User, Download, Star, Play } from "lucide-react";
import { Navigation } from "@/components/Navigation";

const typeColors: Record<string, string> = {
  theory: "bg-primary/10 text-primary border-primary/20",
  "case-study": "bg-success/10 text-success border-success/20",
  project: "bg-accent text-accent-foreground border-accent",
  video: "bg-secondary/50 text-foreground border-secondary",
};

const typeIcons: Record<string, React.ReactNode> = {
  theory: <BookOpen className="h-6 w-6 text-primary" />,
  "case-study": <FileText className="h-6 w-6 text-success" />,
  project: <Code className="h-6 w-6 text-accent-foreground" />,
  video: <Video className="h-6 w-6 text-foreground" />,
};

const documentTypeColors: Record<string, string> = {
  theory: "bg-primary/10 text-primary border-primary/20",
  exercise: "bg-success/10 text-success border-success/20",
  practice: "bg-accent/10 text-accent border-accent/20",
  exam: "bg-secondary/10 text-secondary border-secondary/20",
};

const documentTypeIcons: Record<string, React.ReactNode> = {
  theory: <BookOpen className="h-4 w-4 text-primary" />,
  exercise: <FileText className="h-4 w-4 text-success" />,
  practice: <Code className="h-4 w-4 text-accent" />,
  exam: <FileText className="h-4 w-4 text-secondary" />,
};

const documentTypeLabels: Record<string, string> = {
  theory: "Lý thuyết",
  exercise: "Bài tập",
  practice: "Thực hành",
  exam: "Đề thi",
};

export default function ResourceDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const resource = mockResources.find((r) => r.id === Number(id));

  if (!resource) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="flex items-center justify-center min-h-[calc(100vh-4rem)]">
          <div className="text-center animate-fade-in">
            <h1 className="text-2xl font-light text-foreground mb-4">Resource not found</h1>
            <Button onClick={() => navigate("/")} variant="outline">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Go back
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-6 animate-fade-in">
        {/* Header */}
        <div className="flex items-center gap-4">
          <Button
            onClick={() => navigate("/")}
            variant="ghost"
            size="icon"
            className="hover-scale"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div className="flex items-center gap-3">
            <div className={`h-12 w-12 rounded-lg ${typeColors[resource.type]} flex items-center justify-center animate-scale-in`}>
              {typeIcons[resource.type]}
            </div>
            <div>
              <Badge
                variant="outline"
                className={`${typeColors[resource.type]} font-light text-xs mb-2`}
              >
                {resource.type}
              </Badge>
              <h1 className="text-3xl font-light tracking-tight text-foreground">
                {resource.title}
              </h1>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        {'image' in resource && resource.image && (
          <Card className="overflow-hidden border-border animate-scale-in" style={{ animationDelay: '100ms' }}>
            <div className="relative h-64 md:h-96 overflow-hidden">
              <img
                src={resource.image}
                alt={resource.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>
          </Card>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-2 animate-fade-in" style={{ animationDelay: '200ms' }}>
          {resource.tags.map((tag, idx) => (
            <Badge
              key={idx}
              variant="outline"
              className="border-border text-muted-foreground font-light"
            >
              {tag}
            </Badge>
          ))}
        </div>

        {/* Description */}
        <Card className="p-6 border-border animate-fade-in" style={{ animationDelay: '300ms' }}>
          <h2 className="text-xl font-light text-foreground mb-3">Overview</h2>
          <p className="text-muted-foreground font-light leading-relaxed">
            {resource.description}
          </p>
        </Card>

        {/* Content */}
        {'content' in resource && resource.content && (
          <Card className="p-6 border-border animate-fade-in" style={{ animationDelay: '400ms' }}>
            <h2 className="text-xl font-light text-foreground mb-3">Content</h2>
            <p className="text-muted-foreground font-light leading-relaxed">
              {resource.content}
            </p>
          </Card>
        )}

        {/* Video Link */}
        {'video' in resource && resource.video && (
          <Card className="p-6 border-border hover:shadow-lg transition-all duration-300 animate-fade-in hover-scale" style={{ animationDelay: '500ms' }}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Video className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-light text-foreground">Watch Video</h3>
                  <p className="text-sm text-muted-foreground font-light">View the tutorial</p>
                </div>
              </div>
              <Button
                onClick={() => window.open(resource.video, '_blank')}
                className="gap-2"
              >
                <ExternalLink className="h-4 w-4" />
                Open
              </Button>
            </div>
          </Card>
        )}

        {/* University Documents */}
        <div className="space-y-6 animate-fade-in" style={{ animationDelay: '600ms' }}>
          <div className="space-y-2">
            <h2 className="text-xl font-light text-foreground">Tài liệu từ các trường đại học</h2>
            <p className="text-muted-foreground font-light">
              Tài liệu học tập từ các trường đại học hàng đầu Việt Nam
            </p>
          </div>

          <div className="space-y-6">
            {mockUniversities.map((university, uniIndex) => (
              <Card key={university.id} className="border-border bg-card animate-fade-in" style={{ animationDelay: `${700 + uniIndex * 100}ms` }}>
                <div className="p-6 space-y-4">
                  {/* University Header */}
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Building2 className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-light text-lg text-foreground">{university.name}</h3>
                      <p className="text-sm text-muted-foreground font-light">{university.shortName}</p>
                    </div>
                  </div>

                  {/* Documents Grid */}
                  {university.documents.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {university.documents.map((document, docIndex) => (
                        <Card
                          key={document.id}
                          className="p-4 border-border bg-background hover:shadow-md transition-all duration-300 cursor-pointer hover-scale group"
                          onClick={() => document.fileUrl && window.open(document.fileUrl, '_blank')}
                        >
                          <div className="space-y-3">
                            {/* Document Header */}
                            <div className="flex items-start gap-3">
                              <div className={`h-8 w-8 rounded-lg ${documentTypeColors[document.type]} flex items-center justify-center flex-shrink-0`}>
                                {documentTypeIcons[document.type]}
                              </div>
                              <div className="flex-1 min-w-0">
                                <h4 className="font-light text-sm text-foreground group-hover:text-primary transition-colors line-clamp-2">
                                  {document.title}
                                </h4>
                                <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                                  <User className="h-3 w-3" />
                                  <span className="font-light truncate">{document.author}</span>
                                </div>
                              </div>
                            </div>

                            {/* Description */}
                            <p className="text-xs text-muted-foreground font-light line-clamp-2">
                              {document.description}
                            </p>

                            {/* Rating */}
                            <div className="flex items-center gap-2">
                              <div className="flex items-center gap-1">
                                <Star className="h-3 w-3 text-yellow-500 fill-current" />
                                <span className="text-xs font-light text-foreground">{document.rating}</span>
                              </div>
                              <span className="text-xs text-muted-foreground font-light">
                                ({document.reviewCount} đánh giá)
                              </span>
                            </div>

                            {/* Tags and Actions */}
                            <div className="space-y-2">
                              <div className="flex gap-1 flex-wrap">
                                <Badge
                                  variant="outline"
                                  className={`${documentTypeColors[document.type]} font-light text-xs`}
                                >
                                  {documentTypeLabels[document.type]}
                                </Badge>
                                {document.tags.slice(0, 1).map((tag, idx) => (
                                  <Badge
                                    key={idx}
                                    variant="outline"
                                    className="border-border text-muted-foreground font-light text-xs"
                                  >
                                    {tag}
                                  </Badge>
                                ))}
                              </div>
                              
                              <div className="flex items-center gap-2">
                                {document.videoUrl && (
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    className="h-7 px-2 text-xs font-light gap-1"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      window.open(document.videoUrl, '_blank');
                                    }}
                                  >
                                    <Play className="h-3 w-3" />
                                    Video
                                  </Button>
                                )}
                                {document.fileUrl && (
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    className="h-7 px-2 text-xs font-light gap-1"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      window.open(document.fileUrl, '_blank');
                                    }}
                                  >
                                    <Download className="h-3 w-3" />
                                    Tải xuống
                                  </Button>
                                )}
                              </div>
                            </div>
                          </div>
                        </Card>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-4">
                      <p className="text-sm text-muted-foreground font-light">Chưa có tài liệu</p>
                    </div>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Quality Assessment */}
        <div className="space-y-4 animate-fade-in" style={{ animationDelay: '800ms' }}>
          <h2 className="text-xl font-light text-foreground">Đánh giá chất lượng tài liệu</h2>
          <Card className="p-6 border-border bg-card">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Overall Rating */}
              <div className="text-center space-y-2">
                <div className="flex items-center justify-center gap-1">
                  <Star className="h-5 w-5 text-yellow-500 fill-current" />
                  <span className="text-2xl font-light text-foreground">4.7</span>
                </div>
                <p className="text-sm text-muted-foreground font-light">Đánh giá tổng thể</p>
                <p className="text-xs text-muted-foreground">Dựa trên 1,247 đánh giá</p>
              </div>

              {/* Rating Breakdown */}
              <div className="space-y-2">
                <h3 className="font-light text-foreground text-sm">Phân bố đánh giá</h3>
                {[
                  { stars: 5, percentage: 68, count: 847 },
                  { stars: 4, percentage: 22, count: 274 },
                  { stars: 3, percentage: 7, count: 87 },
                  { stars: 2, percentage: 2, count: 25 },
                  { stars: 1, percentage: 1, count: 14 }
                ].map((rating) => (
                  <div key={rating.stars} className="flex items-center gap-2">
                    <span className="text-xs text-muted-foreground w-8">{rating.stars}★</span>
                    <div className="flex-1 bg-muted/20 rounded-full h-2">
                      <div 
                        className="bg-primary h-2 rounded-full transition-all duration-500"
                        style={{ width: `${rating.percentage}%` }}
                      />
                    </div>
                    <span className="text-xs text-muted-foreground w-8">{rating.count}</span>
                  </div>
                ))}
              </div>

              {/* Quality Metrics */}
              <div className="space-y-3">
                <h3 className="font-light text-foreground text-sm">Chất lượng nội dung</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground font-light">Độ chính xác</span>
                    <div className="flex items-center gap-1">
                      <div className="w-16 bg-muted/20 rounded-full h-1.5">
                        <div className="bg-green-500 h-1.5 rounded-full" style={{ width: '95%' }} />
                      </div>
                      <span className="text-xs text-foreground">95%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground font-light">Độ cập nhật</span>
                    <div className="flex items-center gap-1">
                      <div className="w-16 bg-muted/20 rounded-full h-1.5">
                        <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: '88%' }} />
                      </div>
                      <span className="text-xs text-foreground">88%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground font-light">Độ dễ hiểu</span>
                    <div className="flex items-center gap-1">
                      <div className="w-16 bg-muted/20 rounded-full h-1.5">
                        <div className="bg-purple-500 h-1.5 rounded-full" style={{ width: '92%' }} />
                      </div>
                      <span className="text-xs text-foreground">92%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground font-light">Tính thực tiễn</span>
                    <div className="flex items-center gap-1">
                      <div className="w-16 bg-muted/20 rounded-full h-1.5">
                        <div className="bg-orange-500 h-1.5 rounded-full" style={{ width: '85%' }} />
                      </div>
                      <span className="text-xs text-foreground">85%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Resource Links */}
        {'links' in resource && resource.links && resource.links.length > 0 && (
          <div className="space-y-3 animate-fade-in" style={{ animationDelay: '900ms' }}>
            <h2 className="text-xl font-light text-foreground">Related Resources</h2>
            <div className="grid gap-3">
              {resource.links.map((link, idx) => (
                <Card
                  key={idx}
                  className="p-4 border-border hover:shadow-lg transition-all duration-300 cursor-pointer hover-scale group animate-fade-in"
                  style={{ animationDelay: `${1000 + idx * 50}ms` }}
                  onClick={() => window.open(link.url, '_blank')}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <BookOpen className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-light text-foreground group-hover:text-primary transition-colors">
                          {link.title}
                        </h3>
                        <p className="text-xs text-muted-foreground font-light truncate max-w-xs">
                          {link.url}
                        </p>
                      </div>
                    </div>
                    <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
