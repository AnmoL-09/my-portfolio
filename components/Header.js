'use client'
import React, { useEffect, useState } from 'react'
import { MdArrowOutward } from "react-icons/md";
import { FiSun, FiMoon } from "react-icons/fi";
import Link from 'next/link';
import { publicSans } from '@/lib/fonts';

const Header = () => {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    // On mount, check localStorage or system preference
    const stored = localStorage.getItem('theme');
    if (stored) {
      setTheme(stored);
      document.documentElement.classList.toggle('dark', stored === 'dark');
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(prefersDark ? 'dark' : 'light');
      document.documentElement.classList.toggle('dark', prefersDark);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <header className="w-full flex items-center justify-between  py-2 px-6 md:px-1">
      <div className="flex items-center gap-0.5">
        <h1 className={`${publicSans.className} font-normal text-[20px] 
        tracking-wider underline transition-all cursor-pointer text-gray-300
        duration-200 decoration-amber-600 decoration-2 underline-offset-4 hover:decoration-[3px]`}>
          <Link href='https://github.com/AnmoL-09'>Anmol</Link>
        </h1>
        <MdArrowOutward className='text-[20px] mb-1.5 text-amber-600'/>
      </div>
      <button
        aria-label="Toggle dark mode"
        onClick={toggleTheme}
        className="text-[22px] pl-2 rounded-full transition cursor-pointer"
      >
        {theme === 'dark' ? <FiSun/> : <FiMoon/>}
      </button>
    </header>
  )
}

export default Header