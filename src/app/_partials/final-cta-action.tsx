import { EmailDialog } from "@/app/email-dialog";
import { Section } from "@/app/section";
import { Text } from "@/app/text";
import { TitleSection } from "@/app/title-section";
import { Rocket } from "lucide-react";

export const FinalCtaAction = () => {
  return (
    <Section className="bg-white">
      <div>
        <TitleSection>Et si tu rejoignais les premiers testeurs ?</TitleSection>

        <Text>
          Chaque jour, 2 expressions US utiles et authentiques. En 10 minutes,
          tu progresses vraiment, sans cours barbants.
        </Text>

        <Text>
          Et plus la communauté grandit vite, plus vite l&apos;app arrive.
        </Text>
        <form className="flex flex-col md:flex-row gap-4 justify-center max-w-lg mx-auto">
          <EmailDialog>Deviens testeur NativeVibe</EmailDialog>
          <div className="flex flex-row gap-2 items-start ">
            <Rocket size={20} color="var(--warm_terracotta)" />
            <Text className="text-sm text-[var(--warm_terracotta)] font-bold">
              Inscription gratuite. Aucun spam. Tu seras parmi les premiers
              avertis.
            </Text>
          </div>
        </form>
      </div>
    </Section>
  );
};
