import { EmailDialog } from "@/app/email-dialog";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <div className="flex flex-col gap-4 p-4 bg-[var(--sand)]">
      <div className="flex flex-row items-center gap-2">
        <Image
          src="native-vibe-logo.svg"
          alt="NativeVibe"
          width={30}
          height={30}
        />
        <h1 className="text-2xl font-semibold text-[var(--brown)] text-center w-full">
          Native Vibe
        </h1>
      </div>
      <p className="text-lg font-bold text-[var(--brown)] text-center">
        Stop l&apos;anglais scolaire. 🚫
        <br />
        Parle comme un vrai Américain. 🇺🇸
      </p>
      <p className="text-sm text-center text-[var(--soft_teal)]">
        Une app fun qui t&apos;apprend chaque jour 2 expressions US utiles et
        authentiques… et que tu pratiques direct. 10 minutes par jour pour
        passer au niveau supérieur.
      </p>
      <div className="flex flex-col gap-2 text-center">
        <EmailDialog>Rejoins les testeurs NativeVibe</EmailDialog>
        <p className="text-xs italic font-semibold">
          Inscription gratuite — aucun spam.
        </p>
      </div>
      <Image
        src="/illustration-mobile.svg"
        alt="native vibe illustration mobile"
        className="rounded-lg"
        width={1000}
        height={1000}
      />
    </div>
  );
};
