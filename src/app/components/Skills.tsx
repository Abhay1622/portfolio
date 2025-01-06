'use client'

import { HoverEffect } from "./ui/card-hover-effect";

export const skills = [
    {
        title: "Programming Languages & Core Concepts",
        description:
            "Strong foundation in Data Structures and Algorithms (DSA), Object-Oriented Programming (OOP), and proficient in C++, Java, and basic Python, with a focus on problem-solving and software design principles.",
    },
    {
        title: "Frontend Technologies",
        description:
            "Skilled in React.js, Next.js, HTML5, CSS3, and Tailwind CSS, with hands-on experience using UI libraries such as Material UI, Shadcn UI, daisyUI, and Aceternity UI for building responsive and attractive user interfaces.",
    },
    {
        title: "Backend & Database Technologies",
        description:
            "Proficient in Node.js, Express.js, and MongoDB for backend development, along with a strong understanding of REST APIs for efficient data handling. Experienced in working with both SQL and NoSQL databases.",
    },
    {
        title: "Database Management",
        description:
            "Expertise in Database Management Systems (DBMS) and SQL, with practical experience in MongoDB and MySQL for efficient database design, optimization, and management.",
    },
    {
        title: "Tools & Technologies",
        description:
            "Experienced with Git, GitHub, and VS Code for version control and development. Skilled in using Postman for API testing, CodeMirror for code editing, Zod for data validation, and JWT for secure authentication.",
    },
    {
        title: "Project Experience",
        description:
            "Developed real-time applications including a CodePen-like editor, BookStore Management System, Live Weather Tracker, and a Digital Clock, showcasing proficiency in various frontend and backend technologies.",
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
