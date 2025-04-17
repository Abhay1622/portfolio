'use client'
import Link from "next/link";
import Image from 'next/image';
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";
import { ShootingStars } from "./ui/shooting-stars";
import { StarsBackground } from "./ui/stars-background";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const words = `Innovative Full Stack Developer with a Passion for Next.js, API Integrations & Scalable Solutions | MCA Graduate from IET Lucknow`;
export default function HomeDetails() {
    return (
        <div className="h-screen md:h-[45rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0 pt-[7.5rem] sm:pt-10 md:pt-20 lg:pt-30">
            <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
            <div className="p-4 relative z-10 w-full text-center">
                <div className="flex items-center justify-center">
                    <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden bg-transparent border border-blue-300">
                        <Image
                            src="/It_s_me-removebg-preview.png"
                            alt="Ankit Soni"
                            width={400} 
                            height={400}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
                <h1 className="mt-10 text-3xl sm:text-4xl md:text-6xl font-bold text-white/[0.1] bg-clip-text bg-gradient-to-b from-neutral-50 to-neutral-400">
                    Ankit Soni
                </h1>
                <TextGenerateEffect words={words} />

                <div className="mt-4">
                    <Link href="https://drive.google.com/file/d/1cdDTs3dBbxNlaTzkgdqPVPEeY2OoSMfr/view?usp=drivesdk">
                        <Button
                            borderRadius="1.75rem"
                            className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
                        >
                            Download Resume
                        </Button>
                    </Link>
                </div>
            </div>
            <ShootingStars />
            <StarsBackground />
        </div>
    );
}

