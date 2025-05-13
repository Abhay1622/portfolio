'use client'

import { HoverEffect } from "./ui/card-hover-effect";

export const skills = [
    {
        "title": "Programming Languages & Core Concepts",
        "description": "Strong foundation in Data Structures and Algorithms (DSA), Object-Oriented Programming (OOP), and proficient in C++, Python, and JavaScript. Experienced in problem-solving and writing optimized code."
    },
    {
        "title": "Frontend Technologies",
        "description": "Skilled in React.js, Next.js, HTML5, CSS3, Tailwind CSS, and Bootstrap. Experienced with UI libraries like Shadcn UI and Aceternity UI for creating accessible and responsive interfaces."
    },
    {
        "title": "Backend & Database Technologies",
        "description": "Hands-on experience with Node.js, Express.js, PHP, and working with MySQL and MongoDB. Strong understanding of RESTful APIs, data fetching, and integration with frontend interfaces."
    },
    {
        "title": "Version Control & Dev Tools",
        "description": "Proficient with Git and GitHub for version control and collaboration. Comfortable using VS Code, Postman for API testing, and deploying applications via platforms like Vercel."
    },
    {
        "title": "CMS & Platform Experience",
        "description": "Worked extensively with WordPress for custom website development. Familiar with plugin integration, SEO optimization, and theme customization."
    },
    {
        "title": "Projects & Real-world Applications",
        "description": "Built projects including Prepwise AI Mock Interview Platform and Easy-Eats food app. Experience in deploying production-ready web applications with responsive design and smooth UX."
    }
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
