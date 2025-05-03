"use client";

import { useState } from "react";
import Link from "next/link";
import React from "react";
import Header from "@/components/layout/Header"; // Import Header
import Footer from "@/components/layout/Footer"; // Import Footer

export default function DesignSystemLayout({ children }: { children?: React.ReactNode }) {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`min-h-screen font-mono flex flex-col ${darkMode ? "dark" : ""}`}>
      <div className="bg-background text-foreground flex flex-col flex-grow">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} /> {/* Use Header component */}

        <main className="w-4/5 mx-auto py-12 flex-grow"> {/* Set width to 80% and center */}
          <div className="space-y-12">
            <div className="flex justify-center"> {/* Center the nav */}
              <nav className="grid w-full max-w-3xl grid-cols-4 h-16 gap-4">
                <Link
                  href="/overview"
                  className="bg-yellow-500 text-black border-4 border-black text-lg font-bold h-full flex items-center justify-center shadow-brutal hover:translate-y-1 hover:shadow-none transition-all"
                >
                  OVERVIEW
                </Link>
                <Link
                  href="/typography"
                  className="bg-blue-600 text-white border-4 border-black text-lg font-bold h-full flex items-center justify-center shadow-brutal hover:translate-y-1 hover:shadow-none transition-all"
                >
                  TYPOGRAPHY
                </Link>
                <Link
                  href="/colors"
                  className="bg-red-600 text-white border-4 border-black text-lg font-bold h-full flex items-center justify-center shadow-brutal hover:translate-y-1 hover:shadow-none transition-all"
                >
                  COLORS
                </Link>
                <Link
                  href="/components"
                  className="bg-black text-white border-4 border-black text-lg font-bold h-full flex items-center justify-center shadow-brutal hover:translate-y-1 hover:shadow-none transition-all"
                >
                  COMPONENTS
                </Link>
              </nav>
            </div>
            {children}
          </div>
        </main>
        <Footer /> {/* Use Footer component */}
      </div>
    </div>
  );
}
