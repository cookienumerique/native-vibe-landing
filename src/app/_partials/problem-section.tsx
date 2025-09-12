import { Section } from "@/app/section";
import { TitleSection } from "@/app/title-section";

export const ProblemSection = () => {
  return (
    <Section className="bg-[var(--white)]">
      <div className="flex flex-col gap-2">
        <TitleSection>Tu manques de temps ?</TitleSection>
        <p>10 minutes max : leçon express</p>
        <p>zéro surcharge : écoute = répéte = c&apos;est fait !</p>
        <p>
          anglais réel de la culture US : tiré de tes séries, lyrics et voyages.
        </p>

        <TitleSection>
          Ton anglais ne suffit pas pour comprendre tes séries et chansons
          préférés ?
        </TitleSection>
        <p>2 expressions US/jour → claires & utiles</p>
        <p>Audio natif → tu captes le vrai accent</p>
        <p>Séries, chansons, voyages → enfin compréhensibles</p>
      </div>
    </Section>
  );
};
