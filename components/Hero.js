import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center bg-black text-gray-300">
      <div className="flex w-full max-w-5xl mx-auto">
        {/* Main Text */}
        <div className="flex-1 flex flex-col justify-center items-start mt-32">
          <p className="text-lg md:text-xl font-normal max-w-xl leading-relaxed">
            Hey there! I'm a passionate <span className="font-bold text-[#c9c9c98f]">Full-Stack Web Developer</span>
             with <span className="font-bold text-[#c9c9c98f]">3+ years </span> 
             of professional experience turning ideas into reality, 6 completed projects,
              <span className="font-bold text-[#c9c9c98f]"> 4.6k+ hours
              </span> of dedicated work, and countless hours spent 
                exploring creative side projects.
          </p>
        </div>

        {/* Social Links */}
        <div className="hidden md:flex flex-col items-center justify-center ml-12 space-y-6 mt-32">
          <a href="https://www.linkedin.com/in/anmol-mahobiya/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
          <Image src="/linkedIn.svg" alt="LinkedIn" width={20} height={20} />
          </a>
          <a href="https://github.com/AnmoL-09" target="_blank" rel="noopener noreferrer" className="hover:text-gray-100 transition-colors">
          <Image src="/github.svg" alt="GitHub" width={20} height={20} />
          </a>
          <a href="https://x.com/SnippetSurge" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition-colors">
          <Image src="/twitter.svg" alt="Instagram" width={20} height={20} />
          </a>
          <a href="mailto:anmolmahobiya092@gmail.com" className="hover:text-green-400 transition-colors">
          <Image src="/email.svg" alt="Email" width={20} height={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
