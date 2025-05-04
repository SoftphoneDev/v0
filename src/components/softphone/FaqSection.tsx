import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FaqSection() {
  return (
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
  );
}
