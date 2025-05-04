import DesignSystemLayout from "../design-system-layout";
import HeroSection from "@/components/softphone/HeroSection";
import FeaturesSection from "@/components/softphone/FeaturesSection";
import TrustedBySection from "@/components/softphone/TrustedBySection";
import HowItWorksSection from "@/components/softphone/HowItWorksSection";
import CallToActionSection from "@/components/softphone/CallToActionSection";
import RequestDemoFormSection from "@/components/softphone/RequestDemoFormSection";
import FaqSection from "@/components/softphone/FaqSection";

export default function SoftphonePage() {
  return (
    <DesignSystemLayout>
      <div className="space-y-16">
        <HeroSection />
        <FeaturesSection />
        <TrustedBySection />
        <HowItWorksSection />
        <CallToActionSection />
        <RequestDemoFormSection />
        <FaqSection />
      </div>
    </DesignSystemLayout>
  );
}
