"use client"

import {useState} from "react";
import { usePostContext } from "@/context/PostContext";
import { Section } from "@/app/types/blog";

export default function PostForm(){
    const {addPost} = usePostContext();
    const [title,setTitle] = useState("");
    const [content,setContent] = useState("");
    const [section,setSection] = useState<Section>('News');
    const [tagInput,setTagInput] = useState("");

    const handleSubmit = (e: React.FormEvent) =>{
        e.preventDefault();
        if(!title || !content)
            return;

        const hashtags = tagInput
        .split(',')
        .map(tag => tag.trim())
        .filter(tag => tag!== '');

        addPost({
            title,
            content,
            section,
            hashtags
        });


        //Reset form
        setTitle("")
        setContent("")
        setTagInput("") 
        setSection("News");
    };

    return(
          <form onSubmit = {handleSubmit} className="center space-y-4 p-6 border rounded-2xl bg-white shadow-sm border-gray-200">
           <h3 className="text-lg font-bold text-gray-800 mb-2">Create New Post</h3>

           {/* Title Input */}
           <div >
            <label className="text-xs font-semibold text-gray-500 uppercase">Title</label>
            <input 
                value ={title}
                onChange ={(e) => setTitle(e.target.value)}
                placeholder="e.g., Ethereum Shanghai Upgrade"
                className ="w-full p-3 mt-1 border rounded-lg focus:ring-2  focus:ring-blue-500 outline-none transition-all" />
                </div>
                {/* Section Selector */}
                <div>
                    <label className = "text-xs font-semibold text-gray-500 uppercase">Category</label>
                <select
                  value = {section}
                  onChange = {(e) => setSection(e.target.value as Section)}
                  className = "w-full p-3 mt-1 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none ">
                    <option value="News">News</option>
                    <option value="Jobs">Jobs</option>
                    <option value="Tutorials">Tutorials</option>
                    <option value="Opinion">Opinion</option>
                  </select>
                  </div>

                  {/* Content Textarea */}
                  <div>
                    <label className="text-xs font-semibold text-gray-500 uppercase">Content</label>
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        placeholder="Write your post content here..."
                        className="w-full p-3 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                    />
                  </div>
                  {/* Hashtags Input */}
                  <div>
                    <label className="text-xs font-semibold text-gray-500 uppercase">Hashtags</label>
                    <input
                        value={tagInput}
                        onChange={(e) => setTagInput(e.target.value)}
                        placeholder="e.g., #ethereum, #blockchain"
                        className="w-full p-3 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                    />
                  </div>
<button 
                type="submit" 
                className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-100"
            >
                Publish to LearnChain
            </button>
            </form>
    );
}