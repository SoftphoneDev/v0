"use client";

import { useState } from "react";
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
          {children}
        </main>
        <Footer /> {/* Use Footer component */}
      </div>
    </div>
  );
}
