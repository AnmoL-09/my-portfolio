import React from "react";
import { newsreader } from "@/lib/fonts";

const Now = () => (
  <section className="mt-12 mb-8 px-2 md:px-0">
    <h2 className="text-2xl font-semibold text-gray-200 mb-4">Now</h2>
    <p className="text-gray-300 text-[17px] leading-relaxed mb-5"
    style={{ fontFamily: "var(--font-mono)" }}
    >
      Learning by doing, following what interests me,
      and trying to build things that feel solid and impactful.
      I try to stay aware that {' '}
    <span className={`${newsreader.className} italic font-semibold text-white`}> 
      everything around me 
      is the result of someone else's time and effort.
    </span>
    </p>
    
    <p className="text-gray-300 text-[17px] leading-relaxed"
        style={{ fontFamily: "var(--font-mono)" }}
    >
      Right now, I just want to code. 
      I want to build things, try out new tools,
       dig deeper into the world of programming and technology,
        and understand how things work under the hood. 
        It's exciting to keep learning and see how all 
        the pieces fit together.
    </p>
  </section>
);

export default Now; 