'use client'

import Link from "next/link";
import React, { useRef, useEffect, useState } from "react";

const svgIcons = [
  "react.svg", "nodejs.svg", "vite.svg", "docker.svg", 
  "github.svg", "javascript.svg", "prisma.svg", // 7 for inner orbit

  "typescript.svg", "vite.svg", "postgresql.svg", "cpp.svg", 
  "css3.svg", "html5.svg", "nextjs.svg", "express.svg", "git.svg", 
  "firebase.svg", "mongodb.svg", "notion.svg", "vscode.svg", 
  "tailwindcss.svg", // 13 for outer orbit
];

const innerOrbitIcons = svgIcons.slice(0, 7);
const outerOrbitIcons = svgIcons.slice(7);

const projects = [
  {
    title: "Trajectra 3D",
    color: "text-lime-300",
    arrow: "text-lime-300",
    underline: "border-b-[1px] border-lime-300 hover:border-b-2",
    desc: "GPU-accelerated cellular automata playground simulating artificial life patterns with customizable interactions.",
    link: "https://github.com/AnmoL-09/Trajectra-3D",
  },
  {
    title: "JanSathi – Digital Citizen Services",
    color: "text-blue-300",
    arrow: "text-blue-300",
    underline: "border-b-[1px] border-blue-300 hover:border-b-2",
    desc: "AI-powered platform simplifying access to RTI, grievances, and government schemes with bilingual support and mobile-first design.",
    link: "https://github.com/AnmoL-09/Jansathi_ByteBenders",    
  },
  {
    title: "FinSmart – Financial Management",
    color: "text-emerald-300",
    arrow: "text-emerald-300",
    underline: "border-b-[1px] border-emerald-300 hover:border-b-2",
    desc: "AI-powered financial manager for tracking expenses, planning budgets, and gaining actionable insights with multi-account and multi-currency support.",
    link: "https://github.com/sumant09876/finsmart",
  },    
];

const orbitIconStyle = (angle, radius) => ({
  position: "absolute",
  left: `calc(50% + ${radius * Math.cos(angle)}px - 18px)`,
  top: `calc(50% + ${radius * Math.sin(angle)}px - 18px)`,
  width: 36,
  height: 36,
});

const Hero = () => {
  const [isClient, setIsClient] = useState(false);
  const [innerDeg, setInnerDeg] = useState(0);
  const [outerDeg, setOuterDeg] = useState(0);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;
    let start = null;
    let frame;
    function animate(ts) {
      if (!start) start = ts;
      const elapsed = (ts - start) / 1000;
      // 60s for inner (counterclockwise), 75s for outer (clockwise)
      setInnerDeg(((-360 * (elapsed / 60)) % 360));
      setOuterDeg(((360 * (elapsed / 75)) % 360));
      frame = requestAnimationFrame(animate);
    }
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [isClient]);

  if (!isClient) {
    return null;
  }

  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 mt-8 mb-12">
     
      {/* Left: Two concentric orbits with SVGs */}
      <div className="relative w-[320px] h-[320px] flex items-center justify-center">
        {/* Larger orbit */}
        <div className="absolute left-1/2 top-1/2 w-[320px] h-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dotted border-gray-500 opacity-60" />
        {/* Smaller orbit */}
        <div className="absolute left-1/2 top-1/2 w-[150px] h-[150px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dotted border-gray-500 opacity-60" />
        
        {/* Inner orbit icons (counterclockwise) */}
        <div className="absolute inset-0 z-10" style={{ transform: `rotate(${innerDeg}deg)` }}>
          {innerOrbitIcons.map((icon, i) => {
            const angle = (2 * Math.PI * i) / innerOrbitIcons.length - Math.PI / 2;
            return (
              <div
                key={icon}
                style={{
                  position: "absolute",
                  left: `calc(50% + ${75 * Math.cos(angle)}px - 25px)`,
                  top: `calc(50% + ${75 * Math.sin(angle)}px - 25px)`,
                  width: 50,
                  height: 50,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "50%",
                }}
                className="z-10"
              >
                <img
                  src={`/${icon}`}
                  alt={icon.replace(".svg", "")}
                  style={{ width: "80%", height: "80%", objectFit: "contain", transform: `rotate(${-innerDeg}deg)` }}
                />
              </div>
            );
          })}
        </div>

        {/* Outer orbit icons (clockwise) */}
        <div className="absolute inset-0 z-10" style={{ transform: `rotate(${outerDeg}deg)` }}>
          {outerOrbitIcons.map((icon, i) => {
            const angle = (2 * Math.PI * i) / outerOrbitIcons.length - Math.PI / 2;
            return (
              <div
                key={icon}
                style={{
                  position: "absolute",
                  left: `calc(50% + ${155 * Math.cos(angle)}px - 25px)`,
                  top: `calc(50% + ${155 * Math.sin(angle)}px - 25px)`,
                  width: 50,
                  height: 50,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "50%",
                }}
                className="z-10"
              >
                <img
                  src={`/${icon}`}
                  alt={icon.replace(".svg", "")}
                  style={{ width: "80%", height: "80%", objectFit: "contain", transform: `rotate(${-outerDeg}deg)` }}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Right: Projects list */}
      <div className="flex-1 min-w-[260px]">
        <h2 className="text-lg font-semibold mb-4 text-gray-300">Projects</h2>
        <div className="flex flex-col gap-6">
          {projects.map((proj, i) => (
            <div key={i}>
              <div className="flex items-center gap-2">
                <Link href={proj.link} className={`font-bold ${proj.color} ${proj.underline}`}>{proj.title}</Link>
                <span className={`text-[20px] ${proj.arrow}`}>→</span>
                <span className="text-xs text-gray-400">&lt;/&gt;</span>
              </div>
              <p className="text-gray-400 text-[15px] mt-1 font-mono whitespace-pre-line">{proj.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
