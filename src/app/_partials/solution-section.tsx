import { EmailDialog } from "@/app/components/email-dialog";
import { Section } from "@/app/components/section";
import { Text } from "@/app/components/text";
import { TitleSection } from "@/app/components/title-section";
import { cn } from "@/lib/utils";
import { Clapperboard, Crown, MessagesSquare, Quote } from "lucide-react";

type SolutionItemProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
};

export const SolutionItem = ({
  title,
  description,
  icon,
  className,
}: SolutionItemProps) => {
  return (
    <div
      className={cn(
        "flex flex-col gap-2 p-8 bg-white rounded-xl border-6 border-[var(--sand)]",
        className
      )}
    >
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
    <Section className="bg-white">
      <div className="flex flex-col gap-6">
        <TitleSection>La solution : NativeVibe</TitleSection>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-8">
            <div className="flex flex-row gap-2">
              <div>
                <Quote height={45} width={45} color="var(--warm_terracotta)" />
              </div>
              <Text className="italic text-[var(--brown)]">
                J&apos;avais atteint un niveau C1 avec une app célèbre. Mais
                devant mes séries, impossible de suivre. En parlant avec des
                Anglais, je bloquais. Trop scolaire, trop loin du vrai terrain.
              </Text>
              <div className="flex items-end">
                <Quote height={45} width={45} color="var(--warm_terracotta)" />
              </div>
            </div>
            <Text className="text-black">
              C&apos;est de là qu&apos;est née NativeVibe : une approche simple
              et fun, avec 2 expressions US par jour, utiles, authentiques et
              faciles à pratiquer.
            </Text>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <SolutionItem
            className="bg-[var(--sand)]"
            title="Netflix devient clair"
            description="Comprends enfin tes séries préférées avec ou sans sous-titres."
            icon={<Clapperboard size={50} color="var(--warm_terracotta)" />}
          />
          <SolutionItem
            className="bg-white"
            title="Un anglais plus fluide"
            description="Finis les phrases trop scolaires."
            icon={<MessagesSquare size={50} color="var(--warm_terracotta)" />}
          />
          <SolutionItem
            className="bg-[var(--sand)]"
            title="Confiance & style"
            description="Impressionne ton entourage avec des phrases qui
          sonnent vraiment américaines."
            icon={<Crown size={50} color="var(--warm_terracotta)" />}
          />
          <EmailDialog />
        </div>
      </div>
    </Section>
  );
};
