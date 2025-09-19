import { EmailDialog } from "@/app/email-dialog";
import { Section } from "@/app/section";
import { Text } from "@/app/text";
import { TitleSection } from "@/app/title-section";
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
    <Section className="bg-[var(--white)]">
      <div className="flex flex-col gap-4">
        <TitleSection>Comment ça marche ?</TitleSection>
        <HowItWorkItem
          title="Tu t'inscris en 10 secondes"
          description="Juste ton email, rien de plus."
          icon={<Mail size={35} color="var(--soft_petrol_blue)" />}
        />

        <HowItWorkItem
          title="Tu recois ton guide gratuit"
          description="10 expressions utiles à utiliser dès aujourd'hui"
          icon={<Book size={35} color="var(--soft_petrol_blue)" />}
        />

        <HowItWorkItem
          title="Tu rejoins une communauté motivée"
          description="Avance avec une communauté motivée, qui partage la même vibe que toi."
          icon={<Users size={35} color="var(--soft_petrol_blue)" />}
        />

        <div className="flex flex-col gap-8">
          <EmailDialog>
            Je veux mon guide gratuit et l&apos;accès prioritaire
          </EmailDialog>
          <Text className="text-xs italic text-[var(--gray)]">
            Et plus on est nombreux à rejoindre, plus vite l&apos;app arrive 🚀.
          </Text>
        </div>
      </div>
    </Section>
  );
};
