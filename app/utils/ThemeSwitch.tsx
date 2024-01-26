"use client";
import { useState, useEffect, use } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { FiSun, FiMoon } from "react-icons/fi";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  useEffect(() => setMounted(true), []);
  return (
    <div className="bg-white dark:bg-slate-800 flex flex-col gap-2 py-2 w-10 h-20 justify-center mx-auto rounded-full">
      <button
        className=" mx-auto block dark:hidden"
        onClick={() => setTheme("light")}
      >
        <Image
          src="/Images/nagivation/light.svg"
          alt="dashboard"
          width={24}
          height={24}
          style={{ width: "25px", height: "auto" }}
        />
      </button>
      <button
        onClick={() => setTheme("light")}
        className=" mx-auto hidden dark:block"
      >
        <Image
          src="/Images/nagivation/turn-light.svg"
          alt="dashboard"
          width={24}
          height={24}
          style={{ width: "25px", height: "auto" }}
        />
      </button>
      <button
        className=" mx-auto block dark:hidden"
        onClick={() => setTheme("dark")}
      >
        <Image
          src="/Images/nagivation/dark.svg"
          alt="dashboard"
          width={24}
          height={24}
          style={{ width: "25px", height: "auto" }}
        />
      </button>
      <button
        className=" mx-auto hidden dark:block"
        onClick={() => setTheme("dark")}
      >
        <Image
          src="/Images/nagivation/inactive-sun.svg"
          alt="dashboard"
          width={24}
          height={24}
          style={{ width: "25px", height: "auto" }}
        />
      </button>
    </div>
  );
}
