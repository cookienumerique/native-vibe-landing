import { CommunautySection } from "@/app/_partials/communauty-section";
import { FinalCtaAction } from "@/app/_partials/final-cta-action";
import { Footer } from "@/app/_partials/footer";
import { HeroSection } from "@/app/_partials/hero-section";
import { HowItWorkSection } from "@/app/_partials/how-it-work-section";
import { ProblemSection } from "@/app/_partials/problem-section";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />

      <ProblemSection />

      <HowItWorkSection />

      <CommunautySection />

      <FinalCtaAction />

      <Footer />
    </div>
  );
}
