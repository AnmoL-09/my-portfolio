import Image from "next/image";
import React from "react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-6 bg-transparent">
      <div className="text-xl font-bold tracking-widest
       text-[#c9c9c98f]">
        Anmol Mahobiya
      </div>
      <div className="flex items-center space-x-8 text-[#c9c9c98f] text-sm">
        <button className="focus:outline-none flex items-center gap-2 cursor-pointer group">
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
        
        <span className=" text-[#c9c9c98f] cursor-pointer">Menu</span>
      </div>
    </header>
  );
}
