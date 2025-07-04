'use client'
import React, { useState } from "react";
import Image from "next/image";
import SidebarMenu from "./SidebarMenu";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="w-full bg-transparent">
      <header className="fixed top-4 left-0 w-full z-50 flex items-center 
      justify-between px-8 py-6  tracking-widest">
        <div className="text-2xl font-semibold tracking-widest text-[#c9c9c98f]">
          Anmol Mahobiya
        </div>
        <div className="flex items-center space-x-8 text-[#c9c9c98f] text-sm">
          <button
            className={`focus:outline-none flex items-center gap-2 cursor-pointer group transition-opacity duration-500 ${menuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
            style={{ transition: 'opacity 0.5s' }}
          >
            Light
            <span className="transition-transform duration-800 group-hover:rotate-90">
              <Image
                src="/light-mode.svg"
                alt="sun"
                width={15}
                height={15}
              />
            </span>
          </button>
          <span
            className={`text-[#c9c9c98f] cursor-pointer transition-opacity duration-500 ${menuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
            onClick={() => setMenuOpen(true)}
            style={{ transition: 'opacity 0.5s' }}
          >
            Menu
          </span>
        </div>
      </header>
      <SidebarMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
      <div className="h-20" /> 
      <hr className="border-t border-[#c9c9c94f] w-full mt-8 opacity-25" />
    </div>
  );
}
