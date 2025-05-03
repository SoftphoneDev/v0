import DesignSystemLayout from "../design-system-layout";

export default function ColorsPage() {
  return (
    <DesignSystemLayout>
    <div className="space-y-12">
      <section className="space-y-8">
        <h2 className="text-4xl font-black tracking-tighter uppercase border-b-4 border-black pb-2 inline-block">
          COLOR PALETTE
        </h2>
        <p className="text-xl">Our color system combines Bauhaus primary colors with brutalist vibrant accents.</p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Bauhaus Primary Colors */}
          <div className="col-span-full">
            <h3 className="text-2xl font-black mb-6 uppercase border-b-4 border-black pb-2 inline-block">
              BAUHAUS PRIMARY COLORS
            </h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-red-600 text-white border-8 border-black p-6 shadow-brutal aspect-square flex flex-col justify-between">
                <div className="text-3xl font-black">RED</div>
                <div className="text-sm font-mono">#DC2626</div>
              </div>
              <div className="bg-blue-600 text-white border-8 border-black p-6 shadow-brutal aspect-square flex flex-col justify-between">
                <div className="text-3xl font-black">BLUE</div>
                <div className="text-sm font-mono">#2563EB</div>
              </div>
              <div className="bg-yellow-500 border-8 border-black p-6 shadow-brutal aspect-square flex flex-col justify-between">
                <div className="text-3xl font-black">YELLOW</div>
                <div className="text-sm font-mono">#EAB308</div>
              </div>
            </div>
          </div>

          {/* Brutalist Accent Colors */}
          <div className="col-span-full">
            <h3 className="text-2xl font-black mb-6 uppercase border-b-4 border-black pb-2 inline-block">
              BRUTALIST ACCENT COLORS
            </h3>
            <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
              <div className="bg-cyan-400 border-8 border-black p-6 shadow-brutal aspect-square flex flex-col justify-between">
                <div className="text-xl font-black">CYAN</div>
                <div className="text-sm font-mono">#22D3EE</div>
              </div>
              <div className="bg-fuchsia-500 text-white border-8 border-black p-6 shadow-brutal aspect-square flex flex-col justify-between">
                <div className="text-xl font-black">FUCHSIA</div>
                <div className="text-sm font-mono">#D946EF</div>
              </div>
              <div className="bg-lime-400 border-8 border-black p-6 shadow-brutal aspect-square flex flex-col justify-between">
                <div className="text-xl font-black">LIME</div>
                <div className="text-sm font-mono">#A3E635</div>
              </div>
              <div className="bg-orange-500 text-white border-8 border-black p-6 shadow-brutal aspect-square flex flex-col justify-between">
                <div className="text-xl font-black">ORANGE</div>
                <div className="text-sm font-mono">#F97316</div>
              </div>
              <div className="bg-emerald-500 text-white border-8 border-black p-6 shadow-brutal aspect-square flex flex-col justify-between">
                <div className="text-xl font-black">EMERALD</div>
                <div className="text-sm font-mono">#10B981</div>
              </div>
            </div>
          </div>

          {/* Neutral Colors */}
          <div className="col-span-full">
            <h3 className="text-2xl font-black mb-6 uppercase border-b-4 border-black pb-2 inline-block">
              NEUTRAL COLORS
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white border-8 border-black p-6 shadow-brutal aspect-square flex flex-col justify-between">
                <div className="text-3xl font-black">WHITE</div>
                <div className="text-sm font-mono">#FFFFFF</div>
              </div>
              <div className="bg-black text-white border-8 border-black p-6 shadow-brutal-inverse aspect-square flex flex-col justify-between">
                <div className="text-3xl font-black">BLACK</div>
                <div className="text-sm font-mono">#000000</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </DesignSystemLayout>
  );
}
