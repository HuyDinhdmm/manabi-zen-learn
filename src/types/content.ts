export interface ResourceLink {
  title: string;
  url: string;
}

export type ResourceType = "theory" | "case-study" | "project" | "video";

export interface Resource {
  id: number;
  title: string;
  type: ResourceType;
  description: string;
  tags: string[];
  image?: string;
  content?: string;
  links?: ResourceLink[];
  video?: string;
}
