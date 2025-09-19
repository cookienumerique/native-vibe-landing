import { Section } from "@/app/components/section";
import { Text } from "@/app/components/text";
import { TitleSection } from "@/app/components/title-section";
const CommunitItem = ({
  children,
  icon,
}: {
  children: React.ReactNode;
  icon: React.ReactNode;
}) => {
  return (
    <li className="flex flex-row gap-4 items-center">
      <div className="text-3xl">{icon}</div>
      <Text className="text-md text-left">{children}</Text>
    </li>
  );
};

export const CommunautySection = () => {
  return (
    <Section className="bg-white">
      <div className="flex flex-col gap-8">
        <TitleSection>Rejoins le mouvement NativeVibe</TitleSection>
        <Text className="text-center">
          J&apos;ai longtemps appris l&apos;anglais de façon scolaire.
          Jusqu&apos;à comprendre que ce qu&apos;il manquait, c&apos;était le
          fun, le concret et la pratique. Avec NativeVibe, tu ne seras pas seul
          : une nouvelle génération de Français veut arrêter l&apos;anglais
          scolaire et parler comme dans les séries et les musiques US.
        </Text>

        <ul className="space-y-4 text-brown text-left max-w-xl mx-auto">
          <CommunitItem icon={<div>🎬</div>}>
            Tu souris en reconnaissant une expression dans ta série préférée.
          </CommunitItem>
          <CommunitItem icon={<div>💬</div>}>
            Tu places des phrases naturelles dans une discussion, sans blocage.
          </CommunitItem>
          <CommunitItem icon={<div>🤝</div>}>
            Tu avances avec une communauté motivée, qui partage la même vibe que
            toi.
          </CommunitItem>
        </ul>
      </div>
    </Section>
  );
};
