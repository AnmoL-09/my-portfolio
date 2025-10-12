import React from "react";
import { newsreader } from "@/lib/fonts";

const Now = () => (
  <section className="mt-12 mb-8 px-2 md:px-0">
    <h2 className="text-2xl font-semibold text-[#0aefff] mb-4">
        Experience
    </h2>
    <p className="text-gray-300 text-[17px] leading-relaxed mb-5"
    style={{ fontFamily: "var(--font-mono)" }}
    >

    <span className={`${newsreader.className} italic font-semibold text-white`}> 
    <span className="underline">Software Engineering Intern</span> (June 2025 – Present) <br/>
Coveten Technologies Pvt Ltd. Bangalore, Karnataka <br/>
    </span>

• Built responsive client-side dashboards using React.js, Tailwind CSS, and JavaScript to
enhance user experience.<br/>
• Integrated MongoDB with backend services for building scalable CRUD operations and real-time updates.<br/>
• Used Git/GitHub for version control, managing feature branches and collaborating via pull requests.<br/>
• Worked in agile sprints, contributing to planning and coordinating with designers and backend teams to deliver
full-stack features.<br/>
    </p>
  </section>
);

export default Now; 