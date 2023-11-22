import clsx from "clsx";

export function H5({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h5
      className={clsx(
        "scroll-m-20 text-lg font-semibold tracking-tight",
        className,
      )}
    >
      {children}
    </h5>
  );
}
