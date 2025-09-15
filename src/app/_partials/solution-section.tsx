import { Section } from "@/app/section";
import { TitleSection } from "@/app/title-section";
import { Button } from "@/components/ui/button";

export const SolutionSection = () => {
  return (
    <Section className="bg-[var(--sand)]">
      <TitleSection>La solution : NativeVibe 🚀</TitleSection>

      <p className="text-lg text-brown text-center mb-8">
        J&apos;avais accès à Babbel à vie. J&apos;ai même atteint un niveau C1…
        Mais devant mes séries ou en parlant avec des Anglais, c&apos;était trop
        dur. J&apos;ai fini par décrocher.
        <br />
        Alors j&apos;ai testé des cours perso avec ChatGPT. Et là, révélation ✨
        : apprendre <b>2 expressions US par jour</b> dans un contexte fun, ça
        change tout.
      </p>

      <ul className="space-y-4 text-brown text-left max-w-xl mx-auto">
        <li>
          🎬 <b>Netflix devient clair</b> → tu comprends enfin les répliques
          sans sous-titres.
        </li>
        <li>
          🎶 <b>Les chansons US prennent vie</b> → tu saisis les vraies vibes
          derrière les paroles.
        </li>
        <li>
          😎 <b>Confiance & style</b> → en groupe, tu sors des phrases qui
          sonnent vraiment américaines.
        </li>
      </ul>

      <Button className="">🚀 Je rejoins la liste d&apos;attente</Button>
    </Section>
  );
};
