import clsx from "clsx";

export function H6({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h6
      className={clsx(
        "scroll-m-20 text-md font-semibold tracking-tight",
        className,
      )}
    >
      {children}
    </h6>
  );
}
