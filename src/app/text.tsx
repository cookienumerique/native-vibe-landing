import { cn } from "@/lib/utils";

export const Text = ({
  children,
  className,
}: {
  children: string;
  className?: string;
}) => {
  return (
    <p className={cn("text-sm text-[var(--gray)] text-center", className)}>
      {children}
    </p>
  );
};
