import { Section } from "@/app/components/section";
import { Text } from "@/app/components/text";
import { TitleSection } from "@/app/components/title-section";
import { cn } from "@/lib/utils";
import {
  MessageCircleMore,
  MessagesSquare,
  Music,
  Quote,
  Tv,
} from "lucide-react";
import Image from "next/image";

type ProblemItemProps = {
  children: string;
  icon: React.ReactNode;
  className?: string;
};

const ProblemItem = ({ children, icon, className }: ProblemItemProps) => {
  return (
    <div
      className={cn(
        "flex flex-col gap-8 p-8 bg-white rounded-xl items-center",
        className
      )}
    >
      {icon}
      <Text className="font-bold">{children}</Text>
    </div>
  );
};

export const ProblemSection = () => {
  const iconProps = {
    size: 40,
    color: "var(--warm_terracotta)",
  };
  return (
    <Section className="bg-[var(--sand)]">
      <div className="flex flex-col gap-8">
        <TitleSection>Tu te reconnais là-dedans ?</TitleSection>
        <ProblemItem icon={<Tv {...iconProps} />}>
          Tu te débrouilles en anglais… mais dès que tu regardes une série
          sous-titrée, tu perds le fil de l&apos;histoire.
        </ProblemItem>
        <ProblemItem
          className="bg-[var(--sand)] border-6 border-white"
          icon={<Music {...iconProps} />}
        >
          Tu fredonnes tes chansons préférées, mais les paroles restent floues.
        </ProblemItem>
        <ProblemItem icon={<MessagesSquare {...iconProps} />}>
          Tu arrives à placer 2-3 phrases… mais quand on te répond, tu
          décroches.
        </ProblemItem>
        <ProblemItem
          className="bg-[var(--sand)] border-6 border-white"
          icon={<MessageCircleMore {...iconProps} />}
        >
          Tu rêves de pouvoir sortir une phrase qui ne sonne pas comme un livre
          de cours.
        </ProblemItem>

        <div className="flex flex-col gap-8 items-center">
          <div className="flex flex-row gap-2">
            <div>
              <Quote height={45} width={45} color="var(--warm_terracotta)" />
            </div>

            <Text className="italic text-[var(--soft_petrol_blue)]">
              Même avec mon niveau B2, quand je croisais des Anglais devant
              l&apos;école de mon fils, je stressais déjà avant d&apos;ouvrir la
              bouche. Je savais que j&apos;allais réussir à dire deux phrases…
              mais pas comprendre quand ils me répondaient. <br />
              Résultat : je me sentais largué.
            </Text>
            <div className="flex items-end">
              <Quote height={45} width={45} color="var(--warm_terracotta)" />
            </div>
          </div>
          <Image
            src="/founder_picture.png"
            alt="founder picture"
            className="rounded-full"
            width={150}
            height={150}
          />
          <Text className="text-sm text-right">
            Mickael, fondateur de NativeVibe
          </Text>
        </div>
      </div>
    </Section>
  );
};
