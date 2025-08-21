'use client'

import { HoverEffect } from "./ui/card-hover-effect";

export const skills = [
  {
    "title": "Programming Languages",
    "description": "Proficient in JavaScript, C++, and TypeScript with a strong foundation in Data Structures and Algorithms (DSA) and Object-Oriented Programming (OOP)."
  },
  {
    "title": "Frontend Development",
    "description": "Experienced in building responsive UIs with React.js, Next.js, HTML5, CSS3, Tailwind CSS, and Bootstrap. Skilled with ShadCN UI for modern, accessible design."
  },
  {
    "title": "Backend & Databases",
    "description": "Hands-on experience with Node.js, Express.js, Prisma, and PHP. Worked with MongoDB, PostgreSQL, and MySQL. Strong understanding of REST APIs and server-side logic."
  },
  {
    "title": "Authentication & Security",
    "description": "Implemented secure user authentication using NextAuth with Google/email providers, session management, and protected routes across full-stack applications."
  },
  {
    "title": "Version Control & Deployment",
    "description": "Proficient with Git/GitHub for version control and collaboration. Experienced in deploying applications on Vercel and Render with 99.9% uptime."
  },
  {
    "title": "Performance Optimization",
    "description": "Improved Core Web Vitals with 40% faster page loads and 25% lower bounce rates. Executed cross-browser testing for 99% compatibility and accessibility compliance."
  },
  {
    "title": "CMS & Platform Experience",
    "description": "Developed custom WordPress websites with plugin integration, SEO optimization, and theme customization."
  },
  {
    "title": "Projects & Real-world Applications",
    "description": "Built InterviewPrep AI, BookCabin, and CloudVault platforms using MERN & Next.js stacks. Designed production-ready apps with responsive design and seamless UX."
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
