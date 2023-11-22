import NextLink from "next/link";
import { ButtonVariantProps, buttonVariants } from "./button";
import clsx from "clsx";

export type LinkProps = React.ComponentProps<typeof NextLink>;
export function Link({
  className = "",
  buttonVariant,
  ...props
}: LinkProps & {
  buttonVariant?: ButtonVariantProps;
}): JSX.Element {
  return (
    <NextLink
      className={clsx(
        buttonVariant
          ? buttonVariants(buttonVariant)
          : "underline underline-offset-2 decoration-from-font hover:decoration-gray-400",

        className,
      )}
      {...props}
    />
  );
}
