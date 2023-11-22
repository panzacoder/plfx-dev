import clsx from "clsx";

export function Blockquote({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <blockquote className={clsx("mt-6 border-l-2 pl-6 italic", className)}>
      {children}
    </blockquote>
  );
}
