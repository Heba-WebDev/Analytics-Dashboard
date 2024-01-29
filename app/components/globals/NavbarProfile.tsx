"use client";
import { useState } from "react";
import Image from "next/image";
export default function NavbarUser() {
  const [showUserOptions, setShowUserOptions] = useState(false);
  return (
    <div className=" relative">
      <button
        onClick={() => setShowUserOptions(!showUserOptions)}
        className="relative lg:w-[220px] lg:h-[49px] lg:first-line flex justify-between items-center
          lg:gap-2 lg:px-2 lg:border dark:border-slate-700 rounded-full"
      >
        <Image
          src="/Images/nagivation/Profile.svg"
          alt="notification"
          width={15}
          height={30}
          style={{ width: "35px", height: "auto" }}
          className=""
        />
        <div className="hidden lg:flex flex-col justify-center">
          <p className=" mb-[-4px] mt-[-1px]">Justin Bergson</p>
          <p className=" text-gray-500 text-sm">Justin@gmail.com</p>
        </div>
        <Image
          src="/Images/nagivation/ArrowDown-2.svg"
          alt="options"
          width={15}
          height={30}
          style={{ width: "16px", height: "auto" }}
          className="hidden lg:block"
        />
      </button>
      {showUserOptions && (
        <div
          className="absolute shadow-lg bg-white dark:bg-slate-700 w-[210px]
      h-[120px] top-16 -left-[520%]"
        >
          Settings
        </div>
      )}
    </div>
  );
}
