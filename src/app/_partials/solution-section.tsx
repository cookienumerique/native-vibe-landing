import { Section } from "@/app/section";
import { TitleSection } from "@/app/title-section";
import { Button } from "@/components/ui/button";

export const SolutionSection = () => {
  return (
    <Section className="bg-[var(--sand)]">
      <TitleSection>La solution : NativeVibe 🚀</TitleSection>

      <p className="text-lg text-brown text-center mb-8">
        Marre des cours trop sérieux ? Avec NativeVibe, tu reçois chaque jour{" "}
        <b>2 expressions US</b> 🎧 — rapides, fun, et prêtes à être utilisées en
        vrai.
      </p>

      <ul className="space-y-4 text-brown text-left max-w-xl mx-auto">
        <li>
          🎬 <b>Netflix sans sous-titres</b> → tu captes enfin les répliques qui
          te faisaient buguer.
        </li>
        <li>
          💬 <b>Un anglais qui coule</b> → 2–3 phrases qui claquent, pas du
          blabla scolaire.
        </li>
        <li>
          😎 <b>Le petit “wow” en soirée</b> → tu impressionnes ton entourage
          avec des vibes 100% US.
        </li>
      </ul>

      <div className="mt-10 text-center">
        <Button>🚀 Rejoins la liste d&apos;attente</Button>
        <p className="mt-3 text-sm text-gray-600">
          Gratuit & sans spam — juste ton accès dès le lancement.
        </p>
      </div>
    </Section>
  );
};
