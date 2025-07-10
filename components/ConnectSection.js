import React from "react";
import { MdArrowOutward } from "react-icons/md";


const ConnectSection = () => {
    return(
        <div className="flex flex-col mb-32">
            <h1 className="text-2xl font-semibold text-gray-200 mb-4">Connect</h1>
            <p className="flex gap-1.5"
                style={{ fontFamily: "var(--font-mono)"}}
            >
                Contact me at <span className="border-b-[1px] border-yellow-500 hover:border-b-2">anmolmahobiya092@gmail.com</span>                      
                <MdArrowOutward className='text-[20px] mb-1.5 text-yellow-500'/>
           </p>
            <p className="flex gap-1.5"
                style={{ fontFamily: "var(--font-mono)"}}
            >
                Find me on <span className="border-b-[1px] border-green-400 hover:border-b-2">GitHub</span>                      
                <MdArrowOutward className='text-[20px] mb-1.5 text-green-400'/>
           </p>
            <p className="flex gap-1.5"
                style={{ fontFamily: "var(--font-mono)"}}
            >
                Connect with me on <span className="border-b-[1px] border-blue-400 hover:border-b-2">LinkedIn</span>                      
                <MdArrowOutward className='text-[20px] mb-1.5 text-blue-400'/>
           </p>
            <p className="flex gap-1.5"
                style={{ fontFamily: "var(--font-mono)"}}
            >
                Follow me on <span className="border-b-[1px] border-purple-400 hover:border-b-2">X</span>                      
                <MdArrowOutward className='text-[20px] mb-1.5 text-purple-400'/>
           </p>
        </div>
    )
}

export default ConnectSection;