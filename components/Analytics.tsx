"use client"

import { usePostContext } from "@/context/PostContext"

export default function Analytics(){
    const {stats} = usePostContext();

    return(
        <div className="grid grid-cols-3 gap-4 p-4 bg-gray-50 rounded-xl">
            {(Object.keys(stats) as Array<keyof typeof stats>).map(key =>(
                <div key = {key} className="text-center p-3 border rounded-lg bg-white shadow-sm">
                    <p className="text-sm text-gray-500">{key}</p>
                    <p className= "text-2xl font-bold text-blue-600">{stats[key]}</p>
                </div>
            ))}
        </div>
    )
}