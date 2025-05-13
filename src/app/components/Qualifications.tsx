"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const Education = [
    {
        title: "Bachelor of Technology (B.Tech) in Computer Science and Engineering – Rajarshi Rananjay Sinh Institute of Management & Technology, Amethi (2020–2024)",
        description:
            "Focused on software development, data structures and algorithms, database systems, web technologies, and machine learning. Engaged in multiple projects and summer training programs to build hands-on experience in full-stack development."
    },
    {
        title: "12th Grade (CBSE) – SUN FLOWER PUB SCH NANDGANJ TEH SAIDPUR GHAZIPUR (2020)",
        description:
            "Completed higher secondary education with a strong foundation in Mathematics and Science, securing 74% overall."
    },
    {
        title: "10th Grade (CBSE) – Bal Niketan Senior Secondary School, Varanasi (2019)",
        description:
            "Built a strong academic base in core subjects including Science, Mathematics, and English, scoring 71%."
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
