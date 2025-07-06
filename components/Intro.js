import React from "react";
import { newsreader } from "@/lib/fonts";

const Intro = () => (
  <section className="mt-7 mb-10 w-full ml-1.5">
    <p className={`text-[16px]`} 
    style={{ fontFamily: "var(--font-mono)" }}>
      <span className={`${newsreader.className} italic text-gray-200 -tracking-tighter`}>
        Bringing ideas to life.
      </span>
      <span className="ml-2 text-gray-300">
        Full-stack Software Engineer based near Fort Lauderdale, 
        specialized in the development of modern websites, apps, tools, 
        and everything <br/>in between.
      </span>
    </p>
  </section>
);

export default Intro;
