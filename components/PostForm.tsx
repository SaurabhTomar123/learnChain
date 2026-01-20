"use client"

import {useState} from "react";
import { usePostContext } from "@/context/PostContext";
import { Section } from "@/app/types/blog";

export default function PostForm(){
    const {addPost} = usePostContext();
    const [title,setTitle] = useState("");
    const [section,setSection] = useState<Section>('News');

    const handleSubmit = (e: React.FormEvent) =>{
        e.preventDefault();
        if(!title)
            return;

        addPost({
            title,
            content: "Sample Content for Me",
            section,
            hashtags : ["#web3,#blockchain"]
        });

        setTitle("")
    };

    return(
          <form onSubmit = {handleSubmit} className="space-y-4 p-4 border rounded-xl">
            <input 
                value ={title}
                onChange ={(e) => setTitle(e.target.value)}
                placeholder="Post Title"
                className ="w-full p-2 border rounded" />
                <select
                  value = {section}
                  onChange = {(e) => setSection(e.target.value as Section)}
                  className = "w-full p-2 border rounded">
                    <option value="News">News</option>
                    <option value="Jobs">Jobs</option>
                    <option value="Tutorials">Tutorials</option>
                    <option value="Opinion">Opinion</option>

                <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Publish to LearnChain Post</button>
                  </select>
            
            </form>
    );
}