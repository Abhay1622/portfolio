'use client'

import { HoverEffect } from "./ui/card-hover-effect";

export const skills = [
    {
        title: "Programming Languages",
        description:
            "Proficient in C++, Core Java, and Python (basic), focusing on Object-Oriented Programming (OOP) principles.",
    },
    {
        title: "Web Technologies",
        description:
            "Skilled in HTML5, CSS3, JavaScript, ReactJS, NextJS, and PHP, with experience in frameworks like Laravel, Bootstrap, and Tailwind CSS.",
    },
    {
        title: "Database Management",
        description:
            "Strong foundation in Database Management Systems (DBMS) and SQL, with hands-on experience in MySQL for database design and management.",
    },
    {
        title: "Tools & Development Platforms",
        description:
            "Experience using Git, GitHub, PostMan for API testing, and VS Code as the primary development environment for efficient coding.",
    },
    {
        title: "Project Experience",
        description:
            "Developed real-time applications such as a CodePen-like editor, BookStore Management System, Live Weather Tracker, and a Digital Clock, showcasing proficiency in various technologies.",
    },
    {
        title: "UI Libraries & Styling",
        description:
            "Utilized Material UI, CodeMirror, and DaisyUI for modern, Aceternity UI, Masic Ui and responsive UI designs, ensuring attractive and user-friendly interfaces.",
    },
];

function Skills() {
    return (
        <div>
            <div className="text-center mb-10 pt-20">
                <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold text-white/[0.1] bg-clip-text bg-gradient-to-b from-neutral-50 to-neutral-400">
                    Skills
                </h1>
            </div>
            <div className="max-w-5xl mx-auto px-8">
                <HoverEffect items={skills} />
            </div>
        </div>
    )
}

export default Skills;
