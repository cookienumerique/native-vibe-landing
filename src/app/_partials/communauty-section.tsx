import { EmailDialog } from "@/app/email-dialog";
import { Section } from "@/app/section";
import { TitleSection } from "@/app/title-section";

export const CommunautySection = () => {
  return (
    <Section className="bg-[var(--sand)]">
      <TitleSection>👉 Rejoins le mouvement NativeVibe 🤝</TitleSection>

      <p>
        J&apos;ai longtemps appris l&apos;anglais de façon scolaire.
        Jusqu&apos;à comprendre que ce qu&apos;il manquait, c&apos;était le fun,
        le concret et la pratique. Avec NativeVibe, tu ne seras pas seul : une
        nouvelle génération de Français veut arrêter l&apos;anglais scolaire et
        parler comme dans les séries et les musiques US.
      </p>

      <ul className="space-y-4 text-brown text-left max-w-xl mx-auto">
        <li>
          🎬 Tu souris en reconnaissant une expression dans ta série préférée.
        </li>
        <li>
          💬 Tu places des phrases naturelles dans une discussion, sans blocage.
        </li>
        <li>
          🤝 Tu avances avec une communauté motivée, qui partage la même vibe
          que toi.
        </li>
      </ul>
      <EmailDialog>Rejoins la vibe dès maintenan</EmailDialog>
    </Section>
  );
};
