import { Section } from "@/app/section";
import { TitleSection } from "@/app/title-section";
import { Button } from "@/components/ui/button";

export const HowItWorkSection = () => {
  return (
    <Section className="bg-[var(--white)]">
      <TitleSection>Comment ça marche ?</TitleSection>
      <ul>
        <li>
          1. Tu t&apos;inscris en 10 secondes ✍️ → Tu laisses juste ton email.
        </li>
        <li>
          2. Tu rejoins la liste d&apos;attente 🚀 → On t&apos;avertit dès que
          l&apos;app est prête.
        </li>
        <li>
          3. Tu seras parmi les premiers à parler comme un vrai Américain 🇺🇸 →
          Expressions fun, faciles, directement dans ton quotidien.
        </li>
      </ul>
      <Button>Je rejoins la liste d&apos;attente</Button>
    </Section>
  );
};
