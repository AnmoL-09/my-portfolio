import React from 'react'
import { MdArrowOutward } from "react-icons/md";
import Link from 'next/link';
import { montserrat } from '@/lib/fonts';
import Cat from '@/components/CatAnimation';

const Header = () => {
  return (
    <header className="w-full flex items-center justify-between  py-2 px-6 md:px-1">
      <div className="flex items-center gap-0.5">
        <h1 className={`${montserrat.className} font-normal text-[20px] 
        tracking-normal underline transition-all cursor-pointer text-gray-300
        duration-200 decoration-amber-600 decoration-2 underline-offset-4 hover:decoration-[3px]`}>
          <Link href='https://drive.google.com/file/d/1onvp1vi12QaoMrunLr4IP-c4UMJhlhe0/view?usp=sharing' target='_blank'>AnmoL</Link>
        </h1>
        <MdArrowOutward className='text-[20px] mb-1.5 text-amber-600'/>
      </div>
      <Cat/>
    </header>
  )
}

export default Header