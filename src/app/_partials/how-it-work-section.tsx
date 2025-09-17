import { EmailDialog } from "@/app/email-dialog";
import { Section } from "@/app/section";
import { Text } from "@/app/text";
import { TitleSection } from "@/app/title-section";
import { GraduationCap, Mail, TabletSmartphone } from "lucide-react";
type HowItWorkItemProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
};
const HowItWorkItem = ({ title, description, icon }: HowItWorkItemProps) => {
  return (
    <div className="flex flex-row gap-4 items-center">
      {icon}
      <div className="flex flex-col gap-0">
        <p className="text-md font-bold">{title}</p>
        <p className="text-sm text-[var(--gray)]">{description}</p>
      </div>
    </div>
  );
};
export const HowItWorkSection = () => {
  return (
    <Section className="bg-[var(--white)]">
      <div className="flex flex-col gap-4">
        <TitleSection>Comment ça marche ?</TitleSection>
        <HowItWorkItem
          title="Tu t'inscris en 10 secondes"
          description="Juste ton email, rien de plus."
          icon={<Mail size={30} color="var(--warm_terracotta)" />}
        />

        <HowItWorkItem
          title="Tu deviens testeur NativeVibe"
          description="Accès prioritaire dès le
          lancement."
          icon={<TabletSmartphone size={30} color="var(--warm_terracotta)" />}
        />

        <HowItWorkItem
          title="Tu découvres chaque jour 2 expressions US"
          description="Utiles, fun, prêtes
          à l'emploi."
          icon={<GraduationCap size={30} color="var(--warm_terracotta)" />}
        />
        <div className="flex flex-col gap-2">
          <EmailDialog>Deviens testeur NativeVibe</EmailDialog>
          <Text className="text-xs">
            Et plus on est nombreux à rejoindre, plus vite l&apos;app arrive 🚀.
          </Text>
        </div>
      </div>
    </Section>
  );
};
