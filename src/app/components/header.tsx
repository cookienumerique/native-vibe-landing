import Image from "next/image";

export function Header() {
  return (
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
  );
}
