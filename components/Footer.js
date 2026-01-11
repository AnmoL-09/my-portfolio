import React from 'react'
import { MdArrowOutward } from 'react-icons/md'

const Footer = () => {
  return (
    <div className='flex justify-between border-t border-gray-600 p-4 bg-[#2e2e2e]'>
      <a href="https://youtu.be/gWI1d891COE?si=uW4JbqWak_Rari43&t=38" target='_blank'>
         <p className="flex gap-0.5"
         style={{ fontFamily: "var(--font-mono)"}}
         >
         <span className='border-b-[1.5px] border-blue-400 hover:border-b-[2px]'>
         Airplanes are beautiful dreams.            
        </span>       
         <MdArrowOutward className='text-[20px] mb-1.5'/>
         </p>
      </a>

         <p>2026 v1</p>
    </div>
  )
}

export default Footer