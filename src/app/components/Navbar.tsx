"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "../lib/utils";
import Link from "next/link";

export function NavbarDemo({ scrollToCourses }: { scrollToCourses: () => void }) {
  return (
    <div className="relative w-full flex items-center justify-center bg-red-500">
      <Navbar className="top-0" scrollToCourses={scrollToCourses} />
      <p className="text-black dark:text-white bg"></p>
    </div>
  );
}

function Navbar({
  className,
  scrollToCourses,
}: {
  className?: string;
  scrollToCourses: () => void;
}) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-9xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>
          <MenuItem setActive={setActive} active={active} item="Home"></MenuItem>
        </Link>

        <Link href={"/experiences"}>
          <MenuItem setActive={setActive} active={active} item="Experience"></MenuItem>
        </Link>

        <button onClick={scrollToCourses}>
          <MenuItem setActive={setActive} active={active} item="Projects"></MenuItem>
        </button>

        <Link href={"/certificates"}>
          <MenuItem setActive={setActive} active={active} item="Certifications"></MenuItem>
        </Link>

        <MenuItem setActive={setActive} active={active} item="Contact">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="mailto:sethankit027@gmail.com">Email</HoveredLink>
            <HoveredLink href="https://www.facebook.com/profile.php?id=100009636765395&mibextid=ZbWKwL">
              Facebook
            </HoveredLink>
            <HoveredLink href="https://www.linkedin.com/in/ankit-soni-98107b243/">LinkedIn</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
