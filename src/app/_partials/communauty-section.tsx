import { Section } from "@/app/section";
import { TitleSection } from "@/app/title-section";
import { Button } from "@/components/ui/button";

export const CommunautySection = () => {
  return (
    <Section className="bg-white">
      <TitleSection>
        Une communauté qui vit l&apos;anglais comme toi 🤝
      </TitleSection>

      <p>
        Moi aussi, j&apos;ai commencé avec Babbel. J&apos;ai progressé
        jusqu&apos;au niveau C1, mais les cours devenaient trop scolaires, trop
        sérieux… Et surtout, ça ne m&apos;a pas aidé à comprendre mes séries ou
        à parler plus naturellement.
        <br />
        <br />
        C&apos;est pour ça que j&apos;ai créé <b>NativeVibe</b> : une approche
        simple et fun, avec
        <b> 2 expressions US par jour</b>, expliquées pour que tu puisses les
        comprendre et les utiliser tout de suite.
      </p>

      <ul className="space-y-4 text-brown text-left max-w-xl mx-auto">
        <li>
          🎬 Tu reconnais des expressions dans tes séries, et tu souris en les
          comprenant enfin.
        </li>
        <li>
          💬 Tu peux les utiliser dans une vraie discussion et sentir que ça
          sonne juste.
        </li>
        <li>
          🤝 Tu n&apos;es plus seul : tu rejoins une communauté qui apprend et
          progresse ensemble.
        </li>
      </ul>

      <Button>🎉 Rejoins la vibe dès maintenant</Button>
    </Section>
  );
};
