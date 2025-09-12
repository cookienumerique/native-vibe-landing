import { Section } from "@/app/section";
import { TitleSection } from "@/app/title-section";

export const CommunautySection = () => {
  return (
    <Section className="bg-[var(--white)] text-center">
      <TitleSection>FAQ</TitleSection>
      <p>
        Et si je n&apos;ai que 5 minutes ? → La leçon express tient en 2-5
        minutes. •
      </p>
      <p>
        Est-ce scolaire ? → Non. Culture pop, vrai usage, zéro grammaireinutile.
      </p>
      • Et si j&apos;abandonne ? → Streak bienveillant + révisions OK/pas OK :
      pas de culpabilité. inutile. •
      <p>
        Et si j&apos;abandonne ? → Streak bienveillant + révisions OK/pas OK :
        pas de culpabilité.
      </p>
    </Section>
  );
};
