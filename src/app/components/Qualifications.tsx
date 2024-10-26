"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const Education = [
    {
        title: "Master of Computer Applications (MCA) - Institute of Engineering and Technology, Lucknow (2021-2023)",
        description:
            "Specialized in software development, algorithms, and system design. Gained expertise in Java, Python, and C++, with hands-on experience in cloud computing and software architecture."
    },
    {
        title: "Bachelor of Science (B.Sc.) in Mathematics - Mahatma Gandhi Kashi Vidyapeeth University, Varanasi (2017-2020)",
        description:
            "Built a strong foundation in advanced mathematics, logical reasoning, and quantitative analysis, fueling my analytical approach in software engineering."
    },
    {
        title: "12th Grade (10+2) with Mathematics - Shree Kamlakar Chaubey Adarsh Seva Inter College, Varanasi (2017)",
        description:
            "Focused on core mathematics, deepening my knowledge in calculus, algebra, and trigonometry—skills that directly influence my technical problem-solving today."
    },
    {
        title: "Secondary Education - Sanatan Dharm Inter College, Varanasi (2015)",
        description:
            "Early academic foundation in science and mathematics, setting the stage for my journey in analytical thinking and structured problem-solving."
    }
];

export function Qualifications() {
    return (
        
        <div className="bg-gray-900 text-white">
        <div className="text-center mb-10 py-20">
            <h1 className="text-4xl md:text-7xl font-bold text-white/[0.1] bg-clip-text bg-gradient-to-b from-neutral-50 to-neutral-400">
                Qualifications
            </h1>
        </div>
        <div>
            <StickyScroll content={Education} />
        </div>
    </div>
    );
}
