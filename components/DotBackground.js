import { cn } from "@/lib/utils";
import React from "react";

export function DotBackground() {
  return (
    <div
      className="pointer-events-none z-0 fixed inset-0 h-[100vh] w-full bg-white dark:bg-[#2e2e2e]">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
          "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]"
        )} />
    </div>
  );
}
