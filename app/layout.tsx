import React from "react";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./components/globals/Navbar";
import SideNavBar from "./components/globals/SideNavBar";
import ThemesProvider from "../app/utils/ThemesProvider";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Analytics Dashboard",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${jakarta.className} bg-slate-50 dark:bg-slate-900 flex flex-col text-black dark:text-white`}
      >
        <ThemesProvider>
          <div className="flex">
            <div className="border dark:border-slate-800 border-y-0 border-l-0 py-7 flex flex-col justify-center items-center">
              <SideNavBar />
            </div>
            <div className="w-full">
              <Navbar />
              {children}
            </div>
          </div>
        </ThemesProvider>
      </body>
    </html>
  );
}
