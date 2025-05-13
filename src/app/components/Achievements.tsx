"use client";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";

export function Achievements() {
    return (
        <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
            <BackgroundBeamsWithCollision>
            <div className="mt-0 text-4xl md:text-7xl font-bold text-white/[0.1] bg-clip-text bg-gradient-to-b from-neutral-50 to-neutral-400 pb-20">
                Achievements
            </div>
            <InfiniteMovingCards
                items={achievements}
                direction="right"
                speed="slow"
            />
            </BackgroundBeamsWithCollision>
        </div>
        
    );
}

const achievements = [
    {
        quote: "Achieved the highest grades in Computer-Based Optimization Techniques (CBOT) during my third semester, showcasing my dedication and skill in complex problem-solving.",
        name: "Academic Excellence",
        title: "Third Semester Achievement",
    },
    {
        quote: "Successfully completed Summer Training in Full Stack Web Development at Techpile Technology Private Limited, mastering MERN stack, REST APIs, and production deployment.",
        name: "Professional Training",
        title: "Full Stack Developer - Techpile (2023)",
    },
    {
        quote: "Secured All India Rank (AIR) 197 out of 10,000 and Category Rank 38 in UPCET, reflecting my competitive spirit and academic strength.",
        name: "National Ranking",
        title: "UPCET Accomplishment",
    },
    {
        quote: "Awarded 1 star on CodeChef and 3 stars on HackerRank in C++, demonstrating my proficiency and commitment to coding.",
        name: "Coding Achievements",
        title: "CodeChef & HackerRank",
    },
    {
        quote: "Solved over 200+ problems on platforms like LeetCode, CodeChef, HackerRank, and Coding Ninjas, building a strong foundation in data structures and algorithms.",
        name: "Problem-Solving",
        title: "Online Coding Platforms",
    },
    {
        quote: "Recognized as the consistent top coder in my college, ranked 1st in internal competitive programming events.",
        name: "Campus Excellence",
        title: "Top Coder - College Ranking",
    },
    {
        quote: "Held the position of Branch Head of the Information Technology Department during 2022–2023, managing technical initiatives and leading peers.",
        name: "Leadership",
        title: "Branch Head – IT Department",
    }
];


