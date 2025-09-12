import { cn } from "@/lib/utils";

export const Section = ({
  title,
  children,
  className,
}: {
  title?: string;
  children: React.ReactNode | React.ReactNode[];
  className?: string;
}) => {
  return (
    <div className={cn("p-4 py-8", className)}>
      {title && (
        <p className="text-lg font-bold text-[var(--brown)] text-center">
          {title}
        </p>
      )}
      {children}
    </div>
  );
};
