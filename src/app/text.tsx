import { cn } from "@/lib/utils";

export const Text = ({
  children,
  className,
}: {
  children: string | React.ReactNode;
  className?: string;
}) => {
  return (
    <p className={cn("text-sm text-[var(--brown)] text-center", className)}>
      {children}
    </p>
  );
};
