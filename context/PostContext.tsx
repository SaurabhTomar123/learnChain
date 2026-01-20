"use client"

import { createContext, useContext, useState, ReactNode, use } from "react"
import { blogPost,Section} from "@/app/types/blog"


interface PostContextType {
    posts : blogPost[];
    addPost : (post: Omit<blogPost, 'id' | 'createdAt' | 'updatedAt'>) => void;
    //Derived analytics logic
    stats : Record<Section,number>;
}
const PostContext =createContext<PostContextType | undefined> (undefined);

export function PostProvider({children }: {children : React.ReactNode}){
    const [posts,setPosts] = useState<blogPost[]>([]);

   const addPost = (newPostData : Omit<blogPost, "id" | 'createdAt' | 'updatedAt'>) => {
    const newPost : blogPost ={
        ...newPostData,
        id: Math.random().toString(36).substr(2, 9),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
    };
    setPosts((prevPosts) => [...prevPosts, newPost]);
   };
   //Calculate analytics automatically whenver posts changes 
   const stats ={
    News : posts.filter(p => p.section === "News").length,
    Jobs : posts.filter(p => p.section === "Jobs").length,
    Tutorials : posts.filter(p => p.section === "Tutorials").length,
    Opinions : posts.filter(p => p.section === "Opinions").length,
   };
    return (
        <PostContext.Provider value = {{posts, addPost, stats}}>
            {children}
        </PostContext.Provider>
    )
}

//Custom hook for easy context access
export const usePostContext = () => {
    const context = useContext(PostContext);
    if (!context) {
        throw new Error("usePostContext must be used within a PostProvider");
    }   
    return context;
}