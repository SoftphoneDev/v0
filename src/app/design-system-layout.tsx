"use client";

import { useState } from "react";
import { Circle, Square } from "lucide-react";
import Link from "next/link";
import React from "react"; // Import React

export default function DesignSystemLayout({ children }: { children?: React.ReactNode }) { // Make children optional
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`min-h-screen font-mono ${darkMode ? "dark" : ""}`}>
      <div className="bg-background text-foreground min-h-screen">
        {/* Navigation */}
        <header className="sticky top-0 z-40 w-full border-b-8 border-black bg-primary">
          <div className="container flex h-20 items-center justify-between">
            <div className="flex items-center gap-6">
              <div className="flex items-center">
                <div className="h-12 w-12 bg-yellow-500 border-4 border-black rotate-12"></div>
                <div className="h-12 w-12 bg-blue-600 border-4 border-black -ml-6 -rotate-12"></div>
                <span className="font-black text-2xl tracking-tighter ml-4 text-white">BAUHAUS.BRUTAL</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="h-10 w-10 bg-yellow-500 border-4 border-black flex items-center justify-center hover:bg-yellow-400 transition-colors"
                aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
              >
                {darkMode ? <Circle className="h-5 w-5" /> : <Square className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </header>

        <main className="container py-12">
          <div className="space-y-12">
            <div className="flex justify-between">
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
      </div>
    </div>
  );
}
