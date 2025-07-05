import React from "react";

const AnimatedBackground = () => (
  <div
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      zIndex: 1,
      pointerEvents: "none",
      overflow: "hidden",
    }}
  >
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 1200 800"
      style={{
        display: "block",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      {/* Central nucleus */}
      <circle cx="600" cy="400" r="20" fill="#888" opacity="0.2" />
      
      {/* Ring 1 - Largest orbit */}
      <ellipse 
        cx="600" 
        cy="400" 
        rx="500" 
        ry="200" 
        fill="none" 
        stroke="#888" 
        strokeWidth="2" 
        opacity="0.3"
        style={{
          animation: "rotate-ring-1 60s linear infinite",
          transformOrigin: "600px 400px",
        }}
      />
      
      {/* Ring 2 - Medium orbit */}
      <ellipse 
        cx="600" 
        cy="400" 
        rx="350" 
        ry="140" 
        fill="none" 
        stroke="#888" 
        strokeWidth="2" 
        opacity="0.3"
        style={{
          animation: "rotate-ring-2 45s linear infinite",
          transformOrigin: "600px 400px",
        }}
      />
      
      {/* Ring 3 - Smallest orbit */}
      <ellipse 
        cx="600" 
        cy="400" 
        rx="200" 
        ry="80" 
        fill="none" 
        stroke="#888" 
        strokeWidth="2" 
        opacity="0.3"
        style={{
          animation: "rotate-ring-3 30s linear infinite",
          transformOrigin: "600px 400px",
        }}
      />
      
      {/* Electrons on Ring 1 */}
      <circle cx="1100" cy="400" r="8" fill="#888" opacity="0.5">
        <animateTransform 
          attributeName="transform" 
          type="rotate" 
          from="0 600 400" 
          to="360 600 400" 
          dur="60s" 
          repeatCount="indefinite" 
        />
      </circle>
      <circle cx="100" cy="400" r="6" fill="#888" opacity="0.5">
        <animateTransform 
          attributeName="transform" 
          type="rotate" 
          from="0 600 400" 
          to="360 600 400" 
          dur="60s" 
          repeatCount="indefinite" 
        />
      </circle>
      
      {/* Electrons on Ring 2 */}
      <circle cx="950" cy="400" r="7" fill="#888" opacity="0.5">
        <animateTransform 
          attributeName="transform" 
          type="rotate" 
          from="0 600 400" 
          to="360 600 400" 
          dur="45s" 
          repeatCount="indefinite" 
        />
      </circle>
      <circle cx="250" cy="400" r="5" fill="#888" opacity="0.5">
        <animateTransform 
          attributeName="transform" 
          type="rotate" 
          from="0 600 400" 
          to="360 600 400" 
          dur="45s" 
          repeatCount="indefinite" 
        />
      </circle>
      
      {/* Electrons on Ring 3 */}
      <circle cx="800" cy="400" r="6" fill="#888" opacity="0.5">
        <animateTransform 
          attributeName="transform" 
          type="rotate" 
          from="0 600 400" 
          to="360 600 400" 
          dur="30s" 
          repeatCount="indefinite" 
        />
      </circle>
      <circle cx="400" cy="400" r="4" fill="#888" opacity="0.5">
        <animateTransform 
          attributeName="transform" 
          type="rotate" 
          from="0 600 400" 
          to="360 600 400" 
          dur="30s" 
          repeatCount="indefinite" 
        />
      </circle>
    </svg>
    
    <style>{`
      @keyframes rotate-ring-1 {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
      @keyframes rotate-ring-2 {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(-360deg); }
      }
      @keyframes rotate-ring-3 {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `}</style>
  </div>
);

export default AnimatedBackground; 