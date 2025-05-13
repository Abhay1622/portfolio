"use client"; // Ensure this is a client component
import { useRef } from "react";
import Coursedata from "@/data/coursedata.json";
import { BackgroundGradient } from "./ui/background-gradient";
import Image from "next/image";
import { NavbarDemo } from "./Navbar";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
  image: string;
  url: string;
}

export default function Projects() {
  const coursesSectionRef = useRef<HTMLDivElement | null>(null);

  const scrollToCourses = () => {
    coursesSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Correct the filtering by referencing Coursedata.courses
  const featuredProjects = Coursedata.courses.filter((course: Course) => course.isFeatured);

  return (
    <>
      <NavbarDemo scrollToCourses={scrollToCourses} />

      <div ref={coursesSectionRef} className="bg-gray-900 text-white py-20 px-10">
        <div className="text-center mb-10">
          <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold text-white/[0.1] bg-clip-text bg-gradient-to-b from-neutral-50 to-neutral-400 pb-1">
            Projects
          </h1>
        </div>
        <div className="mt-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {featuredProjects.map((course: Course) => (
              <div key={course.id} className="flex justify-center">
                <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                  <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                    <Image
                      src={course.image}
                      alt={course.title}
                      height={400}
                      width={400}
                      className="object-contain"
                    />
                    <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                      {course.title}
                    </p>
                    <p className="text-sm text-neutral-700 dark:text-neutral-300 flex-grow">
                      {course.description}
                    </p>
                    <a
                      href={course.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-4"
                    >
                      <button className="flex items-center justify-center px-6 py-2 text-sm font-semibold text-white bg-gradient-to-r from-purple-500 to-blue-500 rounded-full shadow-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300 ease-in-out">
                        View Project
                      </button>
                    </a>
                  </div>
                </BackgroundGradient>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
