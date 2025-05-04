import React from 'react';

export default function HowItWorksSection() {
  return (
    <section className="space-y-12">
      <div className="text-center">
        <h2 className="text-4xl font-black tracking-tighter uppercase border-b-4 border-black pb-2 inline-block mb-4">
          HOW IT WORKS
        </h2>
        <p className="text-2xl font-mono text-gray-700">Turn Traffic Into Conversation</p>
      </div>
      
      <div className="space-y-12">
        {/* Step 1 */}
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-2/5 bg-blue-100 border-8 border-black p-8 shadow-brutal flex items-center justify-center">
            <div className="w-24 h-24 bg-yellow-400 border-4 border-black rounded-full flex items-center justify-center shadow-brutal">
              <span className="text-3xl font-black">1</span>
            </div>
          </div>
          <div className="w-full md:w-3/5">
            <h3 className="text-2xl font-black mb-2 text-purple-800">Step 1 of what to do</h3>
            <p className="text-lg font-mono mb-4">Customer visits your website and browses through your products or services. This is their first touchpoint with your business online.</p>
            <p className="text-md font-mono text-gray-600 mb-4">*Help people imagine the benefits they&apos;ll get at this stage.</p>
            <button className="bg-blue-900 text-white border-4 border-black px-4 py-2 font-bold shadow-brutal hover:translate-y-1 hover:shadow-none transition-all">
              LEARN MORE
            </button>
          </div>
        </div>
        
        {/* Step 2 */}
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-2/5 bg-blue-100 border-8 border-black p-8 shadow-brutal flex items-center justify-center">
            <div className="w-24 h-24 bg-blue-600 border-4 border-black rounded-full flex items-center justify-center shadow-brutal">
              <span className="text-3xl font-black text-white">2</span>
            </div>
          </div>
          <div className="w-full md:w-3/5">
            <h3 className="text-2xl font-black mb-2 text-purple-800">Step 2 of what to do</h3>
            <p className="text-lg font-mono mb-4">Customer clicks the call button on your website, initiating an instant connection without needing to dial a number or leave the page.</p>
            <p className="text-md font-mono text-gray-600 mb-4">*Help people imagine the benefits they&apos;ll get at this stage.</p>
            <button className="bg-blue-900 text-white border-4 border-black px-4 py-2 font-bold shadow-brutal hover:translate-y-1 hover:shadow-none transition-all">
              LEARN MORE
            </button>
          </div>
        </div>
        
        {/* Step 3 */}
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-2/5 bg-blue-100 border-8 border-black p-8 shadow-brutal flex items-center justify-center">
            <div className="w-24 h-24 bg-lime-400 border-4 border-black rounded-full flex items-center justify-center shadow-brutal">
              <span className="text-3xl font-black">3</span>
            </div>
          </div>
          <div className="w-full md:w-3/5">
            <h3 className="text-2xl font-black mb-2 text-purple-800">Step 3 of what to do</h3>
            <p className="text-lg font-mono mb-4">Your team receives the call notification and connects with the customer immediately, ready to provide assistance or answer questions.</p>
            <p className="text-md font-mono text-gray-600 mb-4">*Help people imagine the benefits they&apos;ll get at this stage.</p>
            <button className="bg-blue-900 text-white border-4 border-black px-4 py-2 font-bold shadow-brutal hover:translate-y-1 hover:shadow-none transition-all">
              LEARN MORE
            </button>
          </div>
        </div>
        
        {/* Step 4 */}
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-2/5 bg-blue-100 border-8 border-black p-8 shadow-brutal flex items-center justify-center">
            <div className="w-24 h-24 bg-red-600 border-4 border-black rounded-full flex items-center justify-center shadow-brutal">
              <span className="text-3xl font-black text-white">4</span>
            </div>
          </div>
          <div className="w-full md:w-3/5">
            <h3 className="text-2xl font-black mb-2 text-purple-800">Step 4 of what to do</h3>
            <p className="text-lg font-mono mb-4">Customer is delighted with the fast response and personalized service, increasing satisfaction and likelihood of conversion.</p>
            <p className="text-md font-mono text-gray-600 mb-4">*Help people imagine the benefits they&apos;ll get at this stage.</p>
            <button className="bg-blue-900 text-white border-4 border-black px-4 py-2 font-bold shadow-brutal hover:translate-y-1 hover:shadow-none transition-all">
              LEARN MORE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
