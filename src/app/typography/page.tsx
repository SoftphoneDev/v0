import DesignSystemLayout from "../design-system-layout";

export default function TypographyPage() {
  return (
    <DesignSystemLayout>
    <div className="space-y-12">
      <section className="space-y-8">
        <h2 className="text-4xl font-black tracking-tighter uppercase border-b-4 border-black pb-2 inline-block">
          TYPOGRAPHY
        </h2>
        <p className="text-xl">Our typography system combines Bauhaus clarity with brutalist boldness.</p>

        <div className="space-y-12">
          <div className="bg-white border-8 border-black p-8 shadow-brutal">
            <h3 className="text-3xl font-black mb-6 uppercase border-b-4 border-black pb-2">TYPE SPECIMENS</h3>
            <div className="space-y-2 mb-8">
              <div className="text-sm uppercase font-bold text-gray-500">Heading 1</div>
              <h1 className="text-7xl font-black tracking-tighter uppercase">Geometric Bold</h1>
            </div>

            <div className="space-y-2 mb-8">
              <div className="text-sm uppercase font-bold text-gray-500">Heading 2</div>
              <h2 className="text-5xl font-black tracking-tighter uppercase">Functional Clear</h2>
            </div>

            <div className="space-y-2 mb-8">
              <div className="text-sm uppercase font-bold text-gray-500">Heading 3</div>
              <h3 className="text-3xl font-black uppercase">Brutalist Expression</h3>
            </div>

            <div className="space-y-2 mb-8">
              <div className="text-sm uppercase font-bold text-gray-500">Heading 4</div>
              <h4 className="text-2xl font-bold uppercase">Structured Content</h4>
            </div>

            <div className="space-y-2 mb-8">
              <div className="text-sm uppercase font-bold text-gray-500">Body Text</div>
              <p className="text-lg font-mono">
                Body text uses a clean, monospaced font for that raw brutalist feel while maintaining Bauhaus
                legibility. The quick brown fox jumps over the lazy dog.
              </p>
            </div>

            <div className="space-y-2">
              <div className="text-sm uppercase font-bold text-gray-500">Small Text / Caption</div>
              <p className="text-sm font-mono">
                Small text for captions and supporting information. The quick brown fox jumps over the lazy dog.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-600 text-white border-8 border-black p-8 shadow-brutal">
              <h3 className="text-2xl font-black mb-6 uppercase border-b-4 border-white pb-2">BAUHAUS TYPOGRAPHY</h3>
              <ul className="space-y-4">
                <li className="flex flex-col">
                  <span className="text-sm uppercase font-bold text-blue-200">Sans-serif</span>
                  <span className="text-xl font-bold">Clean and geometric</span>
                </li>
                <li className="flex flex-col">
                  <span className="text-sm uppercase font-bold text-blue-200">Functional</span>
                  <span className="text-xl font-bold">Highly legible</span>
                </li>
                <li className="flex flex-col">
                  <span className="text-sm uppercase font-bold text-blue-200">Structured</span>
                  <span className="text-xl font-bold">Clear hierarchy</span>
                </li>
              </ul>
            </div>

            <div className="bg-black text-white border-8 border-black p-8 shadow-brutal-inverse">
              <h3 className="text-2xl font-black mb-6 uppercase border-b-4 border-white pb-2">
                BRUTALIST TYPOGRAPHY
              </h3>
              <ul className="space-y-4">
                <li className="flex flex-col">
                  <span className="text-sm uppercase font-bold text-gray-400">Monospaced</span>
                  <span className="text-xl font-mono">Raw and mechanical</span>
                </li>
                <li className="flex flex-col">
                  <span className="text-sm uppercase font-bold text-gray-400">Expressive</span>
                  <span className="text-xl font-mono">Bold contrasts</span>
                </li>
                <li className="flex flex-col">
                  <span className="text-sm uppercase font-bold text-gray-400">Disruptive</span>
                  <span className="text-xl font-mono">Breaking conventions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
    </DesignSystemLayout>
  );
}
