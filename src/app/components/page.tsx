"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import DesignSystemLayout from "../design-system-layout";

export default function ComponentsPage() {
  return (
    <DesignSystemLayout>
    <div className="space-y-12">
      <section className="space-y-8">
        <h2 className="text-4xl font-black tracking-tighter uppercase border-b-4 border-black pb-2 inline-block">
          COMPONENTS
        </h2>
        <p className="text-xl">Our components blend Bauhaus functionality with brutalist expression.</p>

        <div className="space-y-16">
          {/* Buttons */}
          <div className="space-y-8">
            <h3 className="text-2xl font-black uppercase border-b-4 border-black pb-2 inline-block">BUTTONS</h3>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="bg-white border-8 border-black p-8 shadow-brutal">
                <h4 className="text-xl font-bold mb-6 uppercase border-b-4 border-black pb-2">PRIMARY BUTTONS</h4>
                <div className="grid gap-6">
                  <div className="flex flex-wrap gap-4">
                    <button className="bg-red-600 text-white border-4 border-black px-6 py-3 font-bold text-lg shadow-brutal hover:translate-y-1 hover:shadow-none transition-all">
                      RED BUTTON
                    </button>
                    <button className="bg-blue-600 text-white border-4 border-black px-6 py-3 font-bold text-lg shadow-brutal hover:translate-y-1 hover:shadow-none transition-all">
                      BLUE BUTTON
                    </button>
                    <button className="bg-yellow-500 border-4 border-black px-6 py-3 font-bold text-lg shadow-brutal hover:translate-y-1 hover:shadow-none transition-all">
                      YELLOW BUTTON
                    </button>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <button className="bg-white border-4 border-black px-6 py-3 font-bold text-lg shadow-brutal hover:translate-y-1 hover:shadow-none transition-all">
                      WHITE BUTTON
                    </button>
                    <button className="bg-black text-white border-4 border-black px-6 py-3 font-bold text-lg shadow-brutal hover:translate-y-1 hover:shadow-none transition-all">
                      BLACK BUTTON
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-black text-white border-8 border-black p-8 shadow-brutal-inverse">
                <h4 className="text-xl font-bold mb-6 uppercase border-b-4 border-white pb-2">BRUTALIST BUTTONS</h4>
                <div className="grid gap-6">
                  <div className="flex flex-wrap gap-4">
                    <button className="bg-cyan-400 text-black border-4 border-white px-6 py-3 font-bold text-lg shadow-brutal-white hover:translate-y-1 hover:shadow-none transition-all">
                      CYAN BUTTON
                    </button>
                    <button className="bg-fuchsia-500 text-white border-4 border-white px-6 py-3 font-bold text-lg shadow-brutal-white hover:translate-y-1 hover:shadow-none transition-all">
                      FUCHSIA BUTTON
                    </button>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <button className="bg-lime-400 text-black border-4 border-white px-6 py-3 font-bold text-lg shadow-brutal-white hover:translate-y-1 hover:shadow-none transition-all">
                      LIME BUTTON
                    </button>
                    <button className="bg-orange-500 text-white border-4 border-white px-6 py-3 font-bold text-lg shadow-brutal-white hover:translate-y-1 hover:shadow-none transition-all">
                      ORANGE BUTTON
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Elements */}
          <div className="space-y-8">
            <h3 className="text-2xl font-black uppercase border-b-4 border-black pb-2 inline-block">FORM ELEMENTS</h3>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="bg-white border-8 border-black p-8 shadow-brutal">
                <h4 className="text-xl font-bold mb-6 uppercase border-b-4 border-black pb-2">TEXT INPUTS</h4>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-lg font-bold">
                      EMAIL
                    </Label>
                    <Input
                      id="email"
                      placeholder="Enter your email"
                      className="border-4 border-black h-14 text-lg font-mono shadow-brutal focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-blue-600"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-lg font-bold">
                      PASSWORD
                    </Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="Enter your password"
                      className="border-4 border-black h-14 text-lg font-mono shadow-brutal focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-blue-600"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-black text-white border-8 border-black p-8 shadow-brutal-inverse">
                <h4 className="text-xl font-bold mb-6 uppercase border-b-4 border-white pb-2">SELECTION CONTROLS</h4>
                <div className="space-y-8">
                  <div className="space-y-4">
                    <Label className="text-lg font-bold">CHECKBOXES</Label>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <Checkbox
                          id="terms"
                          className="h-6 w-6 border-4 border-white data-[state=checked]:bg-cyan-400 data-[state=checked]:text-black"
                        />
                        <label htmlFor="terms" className="text-lg font-mono">
                          Accept terms and conditions
                        </label>
                      </div>
                      <div className="flex items-center gap-4">
                        <Checkbox
                          id="newsletter"
                          className="h-6 w-6 border-4 border-white data-[state=checked]:bg-fuchsia-500 data-[state=checked]:text-white"
                        />
                        <label htmlFor="newsletter" className="text-lg font-mono">
                          Subscribe to newsletter
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <Label className="text-lg font-bold">RADIO GROUP</Label>
                    <RadioGroup defaultValue="option-one" className="space-y-4">
                      <div className="flex items-center gap-4">
                        <RadioGroupItem
                          value="option-one"
                          id="option-one"
                          className="h-6 w-6 border-4 border-white data-[state=checked]:bg-lime-400 data-[state=checked]:text-black"
                        />
                        <Label htmlFor="option-one" className="text-lg font-mono">
                          Option One
                        </Label>
                      </div>
                      <div className="flex items-center gap-4">
                        <RadioGroupItem
                          value="option-two"
                          id="option-two"
                          className="h-6 w-6 border-4 border-white data-[state=checked]:bg-lime-400 data-[state=checked]:text-black"
                        />
                        <Label htmlFor="option-two" className="text-lg font-mono">
                          Option Two
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Cards & Containers */}
          <div className="space-y-8">
            <h3 className="text-2xl font-black uppercase border-b-4 border-black pb-2 inline-block">
              CARDS & CONTAINERS
            </h3>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="bg-white border-8 border-black p-8 shadow-brutal">
                <h4 className="text-xl font-bold mb-4 uppercase border-b-4 border-black pb-2">BAUHAUS CARD</h4>
                <p className="text-lg mb-6">Clean geometric design with strong borders and functional layout.</p>
                <button className="bg-red-600 text-white border-4 border-black px-4 py-2 font-bold shadow-brutal hover:translate-y-1 hover:shadow-none transition-all">
                  ACTION
                </button>
              </div>

              <div className="bg-blue-600 text-white border-8 border-black p-8 shadow-brutal">
                <h4 className="text-xl font-bold mb-4 uppercase border-b-4 border-white pb-2">PRIMARY CARD</h4>
                <p className="text-lg mb-6">Bold blue background with high contrast white text for emphasis.</p>
                <button className="bg-white text-blue-600 border-4 border-black px-4 py-2 font-bold shadow-brutal hover:translate-y-1 hover:shadow-none transition-all">
                  ACTION
                </button>
              </div>

              <div className="bg-black text-white border-8 border-black p-8 shadow-brutal-inverse">
                <h4 className="text-xl font-bold mb-4 uppercase border-b-4 border-white pb-2">BRUTALIST CARD</h4>
                <p className="text-lg mb-6">Raw black background with contrasting white text for visual impact.</p>
                <button className="bg-yellow-500 text-black border-4 border-white px-4 py-2 font-bold shadow-brutal-white hover:translate-y-1 hover:shadow-none transition-all">
                  ACTION
                </button>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="bg-gradient-to-br from-cyan-400 to-fuchsia-500 border-8 border-black p-8 shadow-brutal">
                <h4 className="text-xl font-bold mb-4 uppercase border-b-4 border-black pb-2">GRADIENT CONTAINER</h4>
                <p className="text-lg mb-6 text-white">
                  Vibrant gradient background with brutalist color combinations.
                </p>
                <div className="bg-white border-4 border-black p-4">
                  <p className="font-mono">Content inside a nested container</p>
                </div>
              </div>

              <div className="bg-white border-8 border-dashed border-black p-8 shadow-brutal">
                <h4 className="text-xl font-bold mb-4 uppercase border-b-4 border-black pb-2">DASHED CONTAINER</h4>
                <p className="text-lg mb-6">Exposed structure with dashed border treatment.</p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-lime-400 border-4 border-black p-4">
                    <p className="font-mono">Grid Item 1</p>
                  </div>
                  <div className="bg-orange-500 text-white border-4 border-black p-4">
                    <p className="font-mono">Grid Item 2</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Modal */}
          <div className="space-y-8">
            <h3 className="text-2xl font-black uppercase border-b-4 border-black pb-2 inline-block">MODAL DIALOG</h3>
            <div className="bg-white border-8 border-black p-0 shadow-brutal max-w-md mx-auto">
              <div className="bg-black text-white p-4 border-b-4 border-black">
                <h4 className="text-xl font-bold uppercase">MODAL TITLE</h4>
              </div>
              <div className="p-8">
                <p className="text-lg mb-6 font-mono">
                  This is a modal dialog with a consistent header style and strong borders.
                </p>
                <div className="flex justify-end gap-4">
                  <button className="bg-white border-4 border-black px-4 py-2 font-bold shadow-brutal hover:translate-y-1 hover:shadow-none transition-all">
                    CANCEL
                  </button>
                  <button className="bg-blue-600 text-white border-4 border-black px-4 py-2 font-bold shadow-brutal hover:translate-y-1 hover:shadow-none transition-all">
                    CONFIRM
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </DesignSystemLayout>
  );
}
