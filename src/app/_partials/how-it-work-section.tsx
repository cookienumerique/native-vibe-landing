import { EmailDialog } from "@/app/components/email-dialog";
import { Section } from "@/app/components/section";
import { Text } from "@/app/components/text";
import { TitleSection } from "@/app/components/title-section";
import { Book, Mail, Users } from "lucide-react";
type HowItWorkItemProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
};
const HowItWorkItem = ({ title, description, icon }: HowItWorkItemProps) => {
  return (
    <div className="flex flex-row gap-4 items-center">
      <div>{icon}</div>
      <div className="flex flex-col gap-0">
        <p className="text-md font-bold">{title}</p>
        <p className="text-sm text-[var(--gray)]">{description}</p>
      </div>
    </div>
  );
};
export const HowItWorkSection = () => {
  return (
    <Section className="bg-[var(--sand)]">
      <div className="flex flex-col gap-8">
        <TitleSection>Comment ça marche ?</TitleSection>
        <HowItWorkItem
          title="Tu t'inscris en 10 secondes"
          description="Juste ton email, rien de plus."
          icon={<Mail size={35} color="var(--warm_terracotta)" />}
        />

        <HowItWorkItem
          title="Tu recois ton guide gratuit"
          description="10 expressions utiles à utiliser dès aujourd'hui"
          icon={<Book size={35} color="var(--warm_terracotta)" />}
        />

        <HowItWorkItem
          title="Tu rejoins une communauté motivée"
          description="Avance avec une communauté motivée, qui partage la même vibe que toi."
          icon={<Users size={35} color="var(--warm_terracotta)" />}
        />

        <div className="flex flex-col gap-2">
          <EmailDialog />
          <Text className="text-xs italic text-[var(--gray)]">
            Et plus on est nombreux à rejoindre, plus vite l&apos;app arrive 🚀.
          </Text>
        </div>
      </div>
    </Section>
  );
};
