import { EmailDialog } from "@/app/components/email-dialog";
import { Section } from "@/app/components/section";
import { Text } from "@/app/components/text";
import { TitleSection } from "@/app/components/title-section";

export const FinalCtaAction = () => {
  return (
    <Section className="bg-[var(--sand)]">
      <div className="flex flex-col gap-8">
        <TitleSection>Et si tu rejoignais les premiers testeurs ?</TitleSection>

        <ul className="list-disc space-y-2 list-inside px-4 text-[var(--brown)]">
          <li>
            Chaque jour : 2 expressions US{" "}
            <span className="font-bold">utiles</span> et{" "}
            <span className="font-bold">authentiques.</span>
          </li>
          <li>
            10 minutes pour <span className="font-bold">pratiquer</span> et{" "}
            <span className="font-bold">progresser</span> vraiment.
          </li>
          <li>
            Ne reste pas seul(e). Rejoins les passionnés qui, comme toi, veulent
            progresser avec une communauté motivée.
          </li>
        </ul>

        <div className="flex flex-col gap-2">
          <EmailDialog />
          <Text className="text-xs italic text-[var(--gray)]">
            Inscription gratuite. Aucun spam.
          </Text>
          <Text className="text-xs italic text-[var(--gray)]">
            Tu seras parmi les premiers informés du lancement de
            l&apos;application.
          </Text>
        </div>
      </div>
    </Section>
  );
};
