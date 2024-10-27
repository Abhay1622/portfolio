"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "../lib/utils";
import Link from "next/link";

export function NavbarDemo({ scrollToCourses }: { scrollToCourses?: () => void }) {
  return (
    <div className="relative w-full flex items-center justify-center bg-red-500">
      <Navbar className="top-0" scrollToCourses={scrollToCourses || (() => {})} />
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
    <div className={cn("fixed top-10 inset-x-0 max-w-9xl mx-auto z-50", className)}>
      <Menu setActive={setActive}>
        <Link href={"/"}>
          <MenuItem setActive={setActive} active={active} item="Home" />
        </Link>

        <button onClick={scrollToCourses}>
          <MenuItem setActive={setActive} active={active} item="Projects" />
        </button>

        <Link href={"/experiences"}>
          <MenuItem setActive={setActive} active={active} item="Experience" />
        </Link>

        <Link href={"/certificates"}>
          <MenuItem setActive={setActive} active={active} item="Certifications" />
        </Link>
      </Menu>
    </div>
  );
}

export default Navbar;
