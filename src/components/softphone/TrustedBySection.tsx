import React from 'react';

export default function TrustedBySection() {
  return (
    <section className="space-y-8 bg-gray-100 border-y-8 border-black py-12">
      <h2 className="text-3xl font-black tracking-tighter uppercase text-center mb-8">
        TRUSTED BY LEADING COMPANIES
      </h2>
      <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-8 px-6"> {/* Increased gap */}
        {/* Actual Logos (using placeholders) */}
        <img src="https://placehold.co/150x60/gray/white?text=Logo+A" alt="Logo A" className="h-10 object-contain" />
        <img src="https://placehold.co/150x60/gray/white?text=Logo+B" alt="Logo B" className="h-10 object-contain" />
        <img src="https://placehold.co/150x60/gray/white?text=Company+C" alt="Company C" className="h-10 object-contain" />
        <img src="https://placehold.co/150x60/gray/white?text=Tech+Corp" alt="Tech Corp" className="h-10 object-contain" />
        <img src="https://placehold.co/150x60/gray/white?text=Innovate+Ltd." alt="Innovate Ltd." className="h-10 object-contain" />
      </div>
    </section>
  );
}
