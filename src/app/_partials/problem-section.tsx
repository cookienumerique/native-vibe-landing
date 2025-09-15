import { Section } from "@/app/section";

export const ProblemSection = () => {
  return (
    <Section className="bg-[var(--white)]">
      <div className="flex flex-col gap-2">
        <ul className="flex flex-col gap-2">
          <li>
            📺 Tu te débrouilles en anglais… mais dès que tu regardes une série
            sous-titrée, tu peines à suivre l&apos;histoire.
          </li>
          <li>
            🎶 Tu connais la mélodie par cœur, mais les paroles restent floues.
          </li>
          <li>
            💬 Tu arrives à dire 2-3 phrases… mais dès qu&apos;on te répond, tu
            décroches
          </li>
          <li>
            😅 À la pause café ou devant l&apos;école, tu rêverais de lâcher une
            phrase en anglais qui ferait son petit effet
          </li>
        </ul>

        <div className="flex flex-col gap-2">
          <p className="italic">
            “Même avec mon B2, dès que je croisais des Anglais devant
            l&apos;école de mon fils, je paniquais. J&apos;avais peur de ne pas assurer, et
            quand ils parlaient trop vite, je perdais le fil. Résultat : je me
            sentais à la traîne.”
          </p>
          <p className="font-normal text-right w-full">
            Mickael, fondateur de NativeVibe
          </p>
        </div>
        {/* <TitleSection>Tu manques de temps ?</TitleSection>
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
        <p>Séries, chansons, voyages → enfin compréhensibles</p> */}
      </div>
    </Section>
  );
};
