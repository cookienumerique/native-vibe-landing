import { EmailDialog } from "@/app/email-dialog";
import { Section } from "@/app/section";
import { Text } from "@/app/text";
import { TitleSection } from "@/app/title-section";
import { Clapperboard, MessagesSquare, Quote } from "lucide-react";

type SolutionItemProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

export const SolutionItem = ({
  title,
  description,
  icon,
}: SolutionItemProps) => {
  return (
    <div className="flex flex-col gap-2 p-8 bg-white rounded-xl">
      <div className="flex flex-col gap-4">
        {icon}
        <p className="text-lg font-bold ">{title}</p>
      </div>
      <p className="text-sm text-[var(--gray)]">{description}</p>
    </div>
  );
};
export const SolutionSection = () => {
  return (
    <Section className="bg-[var(--sand)]">
      <div className="flex flex-col gap-6">
        <TitleSection>La solution : NativeVibe</TitleSection>
        <div className="flex flex-col gap-6">
          <div className="flex flex-row gap-2">
            <div>
              <Quote height={30} width={30} color="var(--warm_terracotta)" />
            </div>
            <div className="flex flex-col gap-2">
              <Text className="italic">
                J&apos;avais atteint un niveau C1 avec une app célèbre. Mais
                devant mes séries, impossible de suivre. En parlant avec des
                Anglais, je bloquais. Trop scolaire, trop loin du vrai terrain.
              </Text>
              <Text className="text-black">
                C&apos;est de là qu&apos;est née NativeVibe : une approche
                simple et fun, avec 2 expressions US par jour, utiles,
                authentiques et faciles à pratiquer.
              </Text>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <SolutionItem
            title="Netflix devient clair"
            description="Tu comprends les répliques sans sous-titres."
            icon={<Clapperboard size={50} color="var(--warm_terracotta)" />}
          />
          <SolutionItem
            title="Un anglais plus fluide"
            description="Finis les phrases trop scolaires."
            icon={<MessagesSquare size={50} color="var(--warm_terracotta)" />}
          />
          <SolutionItem
            title="Confiance & style"
            description="Impressionne ton entourage avec des phrases qui
          sonnent vraiment américaines."
            icon={<MessagesSquare size={50} color="var(--warm_terracotta)" />}
          />
          <EmailDialog>Rejoins les testeurs NativeVibe</EmailDialog>
        </div>
      </div>
    </Section>
  );
};
