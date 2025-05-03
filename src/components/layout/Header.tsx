"use client";

import { Circle, Square } from "lucide-react";
import Link from "next/link";

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

export default function Header({ darkMode, setDarkMode }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 w-full border-b-8 border-black bg-primary">
      <div className="w-4/5 mx-auto flex h-20 items-center justify-between"> {/* Apply w-4/5 and mx-auto */}
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center">
            <div className="h-12 w-12 bg-yellow-500 border-4 border-black rotate-12"></div>
            <div className="h-12 w-12 bg-blue-600 border-4 border-black -ml-6 -rotate-12"></div>
            <span className="font-black text-2xl tracking-tighter ml-4 text-white">BAUHAUS.BRUTAL</span>
          </Link>
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
  );
}
