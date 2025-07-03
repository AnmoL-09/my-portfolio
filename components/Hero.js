import React from "react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center items-start bg-black text-[#a8a5a5] mt-0">
      <div className="flex flex-row w-full max-w-7xl mx-auto items-center justify-center min-h-[60vh] -mt-30 gap-x-40">
        {/* Main Text */}
        <div className="flex-1 flex flex-col justify-center items-start -ml-60 w-full">
          <p className="text-xl md:text-2xl font-normal max-w-4xl w-full leading-8 md:leading-[2.5rem] text-left mx-auto"
           style={{fontFamily: 'Poppins, sans-serif'}}>
            Hey there! I'm a passionate 
            <span className="font-bold text-[#c9c9c98f]"> Full-Stack Web Developer</span> with 
            <span className="font-bold text-[#c9c9c98f]"> 3+ years </span>
             of professional experience turning ideas into reality, 6 completed projects, 
             <span className="font-bold text-[#c9c9c98f]"> 4.6k+ hours</span> of dedicated work, 
             and countless hours spent exploring creative side projects.
          </p>
        </div>
        {/* Social Links */}
        <div className="flex flex-col items-center justify-center gap-6">
          <a href="https://www.linkedin.com/in/anmol-mahobiya/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
            {/* LinkedIn SVG */}
            <svg fill="#c9c9c9" viewBox="0 0 512 512" stroke="#c9c9c9" width="24" height="24">
              <g>
                <path d="M116.504,500.219V170.654H6.975v329.564H116.504 L116.504,500.219z M61.751,125.674c38.183,0,61.968-25.328,61.968-56.953c-0.722-32.328-23.785-56.941-61.252-56.941 C24.994,11.781,0.5,36.394,0.5,68.722c0,31.625,23.772,56.953,60.53,56.953H61.751L61.751,125.674z M177.124,500.219 c0,0,1.437-298.643,0-329.564H286.67v47.794h-0.727c14.404-22.49,40.354-55.533,99.44-55.533 c72.085,0,126.116,47.103,126.116,148.333v188.971H401.971V323.912c0-44.301-15.848-74.531-55.497-74.531 c-30.254,0-48.284,20.38-56.202,40.08c-2.897,7.012-3.602,16.861-3.602,26.711v184.047H177.124L177.124,500.219z"/>
              </g>
            </svg>
          </a>
          <a href="https://github.com/AnmoL-09" target="_blank" rel="noopener noreferrer" className="hover:text-gray-100 transition-colors">
            {/* GitHub SVG */}
            <svg fill="#c9c9c9" viewBox="0 0 24 24" width="24" height="24">
              <path d="M12 0.297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387 0.6 0.113 0.82-0.258 0.82-0.577 0-0.285-0.01-1.04-0.015-2.04-3.338 0.724-4.042-1.61-4.042-1.61-0.546-1.387-1.333-1.756-1.333-1.756-1.089-0.745 0.084-0.729 0.084-0.729 1.205 0.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495 0.997 0.108-0.775 0.418-1.305 0.762-1.605-2.665-0.305-5.466-1.334-5.466-5.931 0-1.31 0.469-2.381 1.236-3.221-0.124-0.303-0.535-1.523 0.117-3.176 0 0 1.008-0.322 3.301 1.23 0.957-0.266 1.983-0.399 3.003-0.404 1.02 0.005 2.047 0.138 3.006 0.404 2.291-1.553 3.297-1.23 3.297-1.23 0.653 1.653 0.242 2.873 0.118 3.176 0.77 0.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921 0.43 0.372 0.823 1.102 0.823 2.222 0 1.606-0.014 2.898-0.014 3.293 0 0.322 0.216 0.694 0.825 0.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
            </svg>
          </a>
          <a href="https://x.com/SnippetSurge" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition-colors">
            {/* Twitter SVG */}
            <svg fill="#c9c9c9" width="24" height="24" viewBox="-143 145 512 512" stroke="#c9c9c9">
              <path d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M215.2,361.2 c0.1,2.2,0.1,4.5,0.1,6.8c0,69.5-52.9,149.7-149.7,149.7c-29.7,0-57.4-8.7-80.6-23.6c4.1,0.5,8.3,0.7,12.6,0.7 c24.6,0,47.3-8.4,65.3-22.5c-23-0.4-42.5-15.6-49.1-36.5c3.2,0.6,6.5,0.9,9.9,0.9c4.8,0,9.5-0.6,13.9-1.9 C13.5,430-4.6,408.7-4.6,383.2v-0.6c7.1,3.9,15.2,6.3,23.8,6.6c-14.1-9.4-23.4-25.6-23.4-43.8c0-9.6,2.6-18.7,7.1-26.5 c26,31.9,64.7,52.8,108.4,55c-0.9-3.8-1.4-7.8-1.4-12c0-29,23.6-52.6,52.6-52.6c15.1,0,28.8,6.4,38.4,16.6 c12-2.4,23.2-6.7,33.4-12.8c-3.9,12.3-12.3,22.6-23.1,29.1c10.6-1.3,20.8-4.1,30.2-8.3C234.4,344.5,225.5,353.7,215.2,361.2z"/>
            </svg>
          </a>
          <a href="mailto:anmolmahobiya092@gmail.com" className="hover:text-green-400 transition-colors">
            {/* Email SVG */}
            <svg width="24" height="24" viewBox="-3.2 -3.2 38.40 38.40" fill="#c9c9c9" stroke="#c9c9c9">
              <polyline points="3,10 16,18 29,10 " fill="none" stroke="#c9c9c9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10"/>
              <path d="M25,5H7C4.8,5,3,6.8,3,9v14c0,2.2,1.8,4,4,4h2v4l0,0c3.9-2.6,8.5-4,13.2-4H25c2.2,0,4-1.8,4-4V9 C29,6.8,27.2,5,25,5z" fill="none" stroke="#c9c9c9" strokeWidth="2" strokeLinejoin="round" strokeMiterlimit="10"/>
            </svg>
          </a>
        </div>
      </div>
      {/* Scroll Mouse Animation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <div className="w-7 h-12 rounded-full border-2 border-[#a8a5a5] flex items-start justify-center relative">
          <div className="w-1 h-3 bg-[#a8a5a5] rounded-full animate-scroll-mouse mt-2"></div>
        </div>
      </div>
    </section>
  );
}
