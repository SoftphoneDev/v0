import React from 'react';

export default function HeroSection() {
  return (
    <section className="bg-blue-600 text-white border-8 border-black p-12 shadow-brutal flex flex-col items-center">
      <h1 className="text-6xl font-black tracking-tighter uppercase mb-6">Your Modern Softphone Solution</h1>
      <div className="flex gap-6 mb-10">
        <button className="bg-yellow-500 text-black border-4 border-black px-8 py-4 font-bold text-xl shadow-brutal hover:translate-y-1 hover:shadow-none transition-all">
          GET STARTED
        </button>
        <button className="bg-white text-blue-600 border-4 border-black px-8 py-4 font-bold text-xl shadow-brutal hover:translate-y-1 hover:shadow-none transition-all">
          LEARN MORE
        </button>
      </div>
      {/* Placeholder for Big Image */}
      <div className="w-full max-w-3xl h-96 bg-white border-8 border-black shadow-brutal flex items-center justify-center">
        <p className="text-black text-3xl font-black uppercase">Big Image Placeholder</p>
      </div>
    </section>
  );
}
