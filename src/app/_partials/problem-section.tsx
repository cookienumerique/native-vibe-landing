import { Section } from "@/app/section";
import { TitleSection } from "@/app/title-section";

export const ProblemSection = () => {
  return (
    <Section className="bg-[var(--white)]">
      <TitleSection>👉 Tu te reconnais là-dedans ?</TitleSection>
      <div className="flex flex-col gap-2">
        <ul className="flex flex-col gap-2">
          <li>
            • 📺 Tu te débrouilles en anglais… mais dès que tu regardes une
            série sous-titrée, tu perds le fil de l&apos;histoire.
          </li>
          <li>
            • 🎶 Tu fredonnes tes chansons préférées, mais les paroles restent
            floues.
          </li>
          <li>
            💬 Tu arrives à placer 2-3 phrases… mais quand on te répond, tu
            décroches.
          </li>
          <li>
            😅 À la première occasion, tu rêverais de sortir une phrase qui
            sonne vraiment native.
          </li>
        </ul>

        <div className="flex flex-col gap-2">
          <p className="italic">
            “Même avec mon niveau B2, quand je croisais des Anglais devant
            l&apos;école de mon fils, je stressais déjà avant d&apos;ouvrir la
            bouche. Je savais que j&apos;allais réussir à dire deux phrases…
            mais pas comprendre quand ils me répondaient. Résultat : je me
            sentais largué.”
          </p>
          <p className="font-normal text-right w-full">
            Mickael, fondateur de NativeVibe
          </p>
        </div>
      </div>
    </Section>
  );
};
