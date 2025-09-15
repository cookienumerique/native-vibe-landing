import { Section } from "@/app/section";
import { TitleSection } from "@/app/title-section";
import { Button } from "@/components/ui/button";

export const FinalCtaAction = () => {
  return (
    <Section className="bg-[var(--sand)] py-16 text-center">
      <TitleSection>Prêt à passer au niveau supérieur ? 🚀</TitleSection>

      <p className="text-lg text-brown max-w-2xl mx-auto mb-6">
        En 10 minutes par jour, découvre{" "}
        <b>2 expressions américaines authentiques</b>. Comprends enfin tes
        séries & tes musiques, et impressionne ton entourage avec un anglais qui
        sonne vrai.
      </p>

      <form className="flex flex-col md:flex-row gap-4 justify-center max-w-lg mx-auto">
        <input
          type="email"
          placeholder="Ton email"
          className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink"
        />
        <Button>🚀 Rejoins la liste d&apos;attente</Button>
      </form>
    </Section>
  );
};
