import React from 'react'
import { MdArrowOutward } from 'react-icons/md'

const Footer = () => {
  return (
    <div className='flex justify-between border-t border-gray-600 p-4 bg-[#2e2e2e]'>
         <p className="flex gap-0.5"
         style={{ fontFamily: "var(--font-mono)"}}
         >
         Engineers turn dream into reality.                     
         <MdArrowOutward className='text-[20px] mb-1.5'/>
         </p>

         <p>2025</p>
    </div>
  )
}

export default Footer