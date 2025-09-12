import { Section } from "@/app/section";
import { TitleSection } from "@/app/title-section";
import { Button } from "@/components/ui/button";

export const HowItWorkSection = () => {
  return (
    <Section className="bg-[var(--sand)]">
      <TitleSection>Comment ça marche ?</TitleSection>
      <p>1.Découvre l&apos;expression</p>
      <p>2.Écoute l&apos;audio</p>
      <p>3.Lis des phrases d&apos;exemples</p>
      <p>4. Répond au quizz</p>
      <p>5. Révise la</p>
      <Button>Recevoir 2 expressions US par jour.</Button>
    </Section>
  );
};
