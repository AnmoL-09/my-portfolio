'use client'
import React, { useEffect, useState } from 'react'
import { MdArrowOutward } from "react-icons/md";
import { FiSun, FiMoon } from "react-icons/fi";
import {Newsreader, Comic_Neue} from 'next/font/google'

const newsreader = Newsreader({
    subsets:['serif'],
    weight:'300',
})

const comicneue = Comic_Neue({
    subsets: ['latin'],
    weight: '400'
})


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
    <header className="w-full flex items-center justify-between py-2 px-6 md:px-1">
      <div className="flex items-center gap-1">
        <h1 className={`${comicneue.className} font-semibold text-[20px] tracking-wider underline transition-all 
        duration-200 decoration-blue-600 decoration-2 underline-offset-4`}>
          Anmol
        </h1>
        <MdArrowOutward className='text-[18px] text-blue-600'/>
      </div>
      <button
        aria-label="Toggle dark mode"
        onClick={toggleTheme}
        className="text-xl pl-2 rounded-full hover:bg-blue-900/20 transition cursor-pointer"
      >
        {theme === 'dark' ? <FiSun/> : <FiMoon/>}
      </button>
    </header>
  )
}

export default Header