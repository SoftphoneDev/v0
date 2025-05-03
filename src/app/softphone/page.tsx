import DesignSystemLayout from "../design-system-layout";
import { Phone, MessageSquare, Users, Settings } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function SoftphonePage() {
  return (
    <DesignSystemLayout>
      <div className="space-y-16">
        {/* Hero Section */}
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

        {/* Features Section */}
        <section className="space-y-8">
          <h2 className="text-4xl font-black tracking-tighter uppercase border-b-4 border-black pb-2 inline-block">
            FEATURES
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="bg-white border-8 border-black p-6 shadow-brutal">
              <Phone className="h-12 w-12 text-red-600 mb-4" />
              <h3 className="text-2xl font-black mb-3 uppercase border-b-4 border-black pb-1">Crystal Clear Calls</h3>
              <p className="text-lg font-mono">High-definition audio quality for professional conversations.</p>
            </div>
            <div className="bg-white border-8 border-black p-6 shadow-brutal">
              <MessageSquare className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-black mb-3 uppercase border-b-4 border-black pb-1">Integrated Messaging</h3>
              <p className="text-lg font-mono">Chat with colleagues and contacts directly within the app.</p>
            </div>
            <div className="bg-white border-8 border-black p-6 shadow-brutal">
              <Users className="h-12 w-12 text-yellow-500 mb-4" />
              <h3 className="text-2xl font-black mb-3 uppercase border-b-4 border-black pb-1">Team Collaboration</h3>
              <p className="text-lg font-mono">Manage contacts, presence status, and call transfers easily.</p>
            </div>
            <div className="bg-white border-8 border-black p-6 shadow-brutal">
              <Settings className="h-12 w-12 text-black mb-4" />
              <h3 className="text-2xl font-black mb-3 uppercase border-b-4 border-black pb-1">Customizable</h3>
              <p className="text-lg font-mono">Configure settings to fit your workflow and preferences.</p>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
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

        {/* FAQ Section */}
        <section className="space-y-8">
          <h2 className="text-4xl font-black tracking-tighter uppercase border-b-4 border-black pb-2 inline-block">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <div className="bg-white border-8 border-black p-8 shadow-brutal">
            <Accordion type="single" collapsible className="w-full space-y-6">
              <AccordionItem value="item-1" className="border-b-4 border-black">
                <AccordionTrigger className="text-xl font-bold uppercase hover:no-underline py-4">
                  What is a softphone?
                </AccordionTrigger>
                <AccordionContent className="text-lg font-mono pt-4">
                  A softphone is a software application that allows you to make phone calls over the internet using your computer, tablet, or smartphone, instead of traditional hardware phones.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border-b-4 border-black">
                <AccordionTrigger className="text-xl font-bold uppercase hover:no-underline py-4">
                  Do I need special hardware?
                </AccordionTrigger>
                <AccordionContent className="text-lg font-mono pt-4">
                  No, you typically only need a computer or mobile device with an internet connection, and a headset with a microphone for the best audio quality.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border-b-4 border-black">
                <AccordionTrigger className="text-xl font-bold uppercase hover:no-underline py-4">
                  Can I keep my existing phone number?
                </AccordionTrigger>
                <AccordionContent className="text-lg font-mono pt-4">
                  In most cases, yes. We support number porting, allowing you to transfer your existing business phone number to our service. Contact support for details.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="border-b-0"> {/* Remove border for last item */}
                <AccordionTrigger className="text-xl font-bold uppercase hover:no-underline py-4">
                  Is it secure?
                </AccordionTrigger>
                <AccordionContent className="text-lg font-mono pt-4">
                  Yes, our softphone solution uses industry-standard encryption protocols (like TLS and SRTP) to ensure your calls and data are secure.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
      </div>
    </DesignSystemLayout>
  );
}
