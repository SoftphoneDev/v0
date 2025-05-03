import { Plus, Minus, Circle, Square, Triangle } from "lucide-react";
import DesignSystemLayout from "../design-system-layout";

export default function OverviewPage() {
  return (
    <DesignSystemLayout>
    <div className="space-y-16">
      <section className="space-y-8">
        <div className="space-y-4">
          <h1 className="text-6xl font-black tracking-tighter uppercase">Bauhaus-Brutalism Design System</h1>
          <div className="flex gap-4 items-center">
            <div className="h-8 w-8 bg-red-600"></div>
            <div className="h-8 w-8 bg-blue-600"></div>
            <div className="h-8 w-8 bg-yellow-500"></div>
            <p className="text-2xl">A design system that blends Bauhaus principles with colorful brutalism.</p>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="bg-white border-8 border-black p-8 shadow-brutal">
            <h2 className="text-3xl font-black mb-6 uppercase border-b-4 border-black pb-2">BAUHAUS PRINCIPLES</h2>
            <ul className="space-y-4 text-lg">
              <li className="flex items-center gap-3">
                <Square className="h-6 w-6 text-blue-600" />
                <span>Geometric shapes and clean lines</span>
              </li>
              <li className="flex items-center gap-3">
                <Circle className="h-6 w-6 text-red-600" />
                <span>Primary colors with black and white</span>
              </li>
              <li className="flex items-center gap-3">
                <Triangle className="h-6 w-6 text-yellow-500" />
                <span>Functional and minimal design</span>
              </li>
              <li className="flex items-center gap-3">
                <Plus className="h-6 w-6" />
                <span>Grid-based layouts</span>
              </li>
              <li className="flex items-center gap-3">
                <Minus className="h-6 w-6" />
                <span>Sans-serif typography</span>
              </li>
            </ul>
          </div>

          <div className="bg-black text-white border-8 border-black p-8 shadow-brutal-inverse">
            <h2 className="text-3xl font-black mb-6 uppercase border-b-4 border-white pb-2">BRUTALIST ELEMENTS</h2>
            <ul className="space-y-4 text-lg">
              <li className="flex items-center gap-3">
                <Square className="h-6 w-6 text-cyan-400" />
                <span>Bold, vibrant color accents</span>
              </li>
              <li className="flex items-center gap-3">
                <Circle className="h-6 w-6 text-fuchsia-400" />
                <span>Raw, unpolished textures</span>
              </li>
              <li className="flex items-center gap-3">
                <Triangle className="h-6 w-6 text-lime-400" />
                <span>Asymmetrical compositions</span>
              </li>
              <li className="flex items-center gap-3">
                <Plus className="h-6 w-6 text-orange-400" />
                <span>Exposed structural elements</span>
              </li>
              <li className="flex items-center gap-3">
                <Minus className="h-6 w-6 text-yellow-400" />
                <span>Intentional design breaks</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <h2 className="text-4xl font-black tracking-tighter uppercase border-b-4 border-black pb-2 inline-block">
          DESIGN PRINCIPLES
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="bg-yellow-500 border-8 border-black p-6 shadow-brutal">
            <h3 className="text-2xl font-black mb-4 uppercase border-b-4 border-black pb-2">FUNCTIONAL CLARITY</h3>
            <p className="text-lg">Every element serves a clear purpose with no unnecessary decoration.</p>
          </div>

          <div className="bg-blue-600 text-white border-8 border-black p-6 shadow-brutal">
            <h3 className="text-2xl font-black mb-4 uppercase border-b-4 border-white pb-2">BOLD SIMPLICITY</h3>
            <p className="text-lg">Simple forms expressed boldly with intentional contrast and tension.</p>
          </div>

          <div className="bg-red-600 text-white border-8 border-black p-6 shadow-brutal">
            <h3 className="text-2xl font-black mb-4 uppercase border-b-4 border-white pb-2">GEOMETRIC EXPRESSION</h3>
            <p className="text-lg">Geometric shapes as the foundation with brutalist expressions.</p>
          </div>
        </div>
      </section>
    </div>
    </DesignSystemLayout>
  );
}
