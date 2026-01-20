export type Section = "News" | "Jobs" | "Tutorials" | "Opinions";

export interface blogPost {
    id: string;
    title: string;
    content: string;
    section : Section;
    hashtags  : string[];
    createdAt: string; 
    updatedAt: string;
}