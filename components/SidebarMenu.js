import React from "react";

const routes = [
  "HOME",
  "ABOUT",
  "MY STACK",
  "PROJECTS",
  "BLOGS",
  "CONTACT",
];

export default function SidebarMenu({ open, onClose }) {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-[80vw] max-w-lg bg-black z-[100] flex flex-col px-8 py-8 origin-right transition-transform duration-500 ease-in-out ${open ? "scale-x-100" : "scale-x-0"}`}
      style={{
        boxShadow: open ? "-4px 0 24px 0 rgba(0,0,0,0.7)" : "none",
        transform: open ? "scaleX(1)" : "scaleX(0)",
        transition: "transform 0.5s cubic-bezier(0.77,0,0.175,1)",
      }}
      tabIndex={open ? 0 : -1}
      aria-hidden={!open}
    >
      <button
        className="self-end mb-12 text-[#333333] text-base 
        tracking-widest font-semibold focus:outline-none transition-opacity duration-300 cursor-pointer"
        onClick={onClose}
        aria-label="Close menu"
      >
        Close
      </button>
      <nav className="flex flex-col gap-7 mt-40 ml-30">
        {routes.map((route) => (
          <a
            key={route}
            href={`#${route.replace(/\s+/g, '').toLowerCase()}`}
            className="text-6xl font-extrabold tracking-tight text-transparent
             bg-clip-text bg-gradient-to-r from-[#c9c9c9] to-[#ededed] hover:opacity-80 transition-opacity duration-200"
            onClick={onClose}
          >
            {route}
          </a>
        ))}
      </nav>
    </div>
  );
} 