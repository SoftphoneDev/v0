import React from 'react';

export default function CallToActionSection() {
  return (
    <section className="bg-black text-white border-8 border-black p-12 shadow-brutal-inverse text-center">
      <h2 className="text-4xl font-black tracking-tighter uppercase mb-6">Ready to Elevate Your Communication?</h2>
      <p className="text-xl mb-8 font-mono">Sign up today and experience the future of business calls.</p>
      <div className="flex justify-center gap-6">
        <button className="bg-lime-400 text-black border-4 border-white px-6 py-3 font-bold text-lg shadow-brutal-white hover:translate-y-1 hover:shadow-none transition-all">
          SIGN UP NOW
        </button>
        <button className="bg-white text-black border-4 border-black px-6 py-3 font-bold text-lg shadow-brutal hover:translate-y-1 hover:shadow-none transition-all">
          REQUEST DEMO
        </button>
      </div>
    </section>
  );
}
