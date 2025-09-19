import { EmailDialog } from "@/app/email-dialog";
import { Text } from "@/app/text";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <div>
      <div className="flex flex-row items-center gap-2 bg-[var(--sand)] p-4">
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
      <div className="flex flex-col gap-4 p-4">
        <div className="flex flex-col gap-4">
          <Text className="text-3xl font-bold leading-tight text-[var(--soft_petrol_blue)]">
            Marre de l&apos;anglais qui sonne scolaire ? <br />
            Parle enfin comme dans tes séries préférées.
          </Text>

          <Text className="text-xl text-[var(--soft_petrol_blue)]">
            Inscris-toi maintenant et reçois le PDF gratuit :
            <span className="font-bold">
              {" "}
              10 expressions US pour impressionner tes amis{" "}
            </span>
            !
          </Text>
          <Text className=" text-base text-[var(--brown)]">
            Une app fun qui t&apos;apprend chaque jour{" "}
            <span className="font-bold">
              2 expressions US utiles et authentiques…
            </span>{" "}
            et que tu pratiques direct. 10 minutes par jour pour passer au
            niveau supérieur.
          </Text>
          <div className="flex flex-col gap-2 text-center">
            <Text className="text-lg font-bold text-[var(--soft_petrol_blue)]">
              Rejoins le mouvement et télécharge ton guide gratuit
            </Text>

            <EmailDialog>
              Je veux mon guide gratuit et l&apos;accès prioritaire
            </EmailDialog>
            <div>
              <Text className="text-xs italic text-[var(--gray)]">
                Inscription gratuite. Aucun spam.
              </Text>
              <Text className="text-xs italic text-[var(--gray)]">
                Tu seras parmi les premiers informés du lancement de
                l&apos;application.
              </Text>
            </div>
          </div>
          <Image
            src="/illustration-mobile.svg"
            alt="native vibe illustration mobile"
            className="rounded-lg"
            width={1000}
            height={1000}
          />
        </div>
      </div>
    </div>
  );
};
