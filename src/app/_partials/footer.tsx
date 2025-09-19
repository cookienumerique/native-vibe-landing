import { Text } from "@/app/components/text";
import Image from "next/image";
import Link from "next/link";
export const Footer = () => {
  const sizeImage = 25;
  return (
    <div className="bg-[var(--soft_petrol_blue)] p-4">
      <div className="flex flex-col items-start gap-2">
        <div className="flex flex-row items-center gap-2">
          <Image
            src="native-vibe-logo.svg"
            alt="NativeVibe"
            width={sizeImage}
            height={sizeImage}
          />
          <Text className="text-2xl font-semibold text-white text-center w-full">
            Native Vibe 2025
          </Text>
        </div>
        <Link href="/">
          <Text className="text-white font-bold">Accueil</Text>
        </Link>
        <Link href="/politique-de-confidentialite">
          <Text className="text-white font-bold">
            Politique de confidentialité
          </Text>
        </Link>
        <Link href="/cgu">
          <Text className="text-white font-bold">
            Conditions générales d&apos;utilisation
          </Text>
        </Link>
        <div className="flex flex-col items-start gap-2">
          <Text className="text-white font-bold">On est aussi sur</Text>
          <div className="flex flex-row items-center gap-4">
            <Link href="https://www.tiktok.com/@nativevibe.app">
              <Image
                className="rounded-md"
                src="/tiktok-logo.webp"
                alt="tiktok-logo"
                width={35}
                height={35}
              />
            </Link>
            <Link href="https://www.instagram.com/nativevibe.app/">
              <Image
                src="/instagram-logo.png"
                alt="instagram-logo"
                width={35}
                height={35}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
