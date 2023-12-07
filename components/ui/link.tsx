import NextLink from "next/link";
import { ButtonVariantProps, buttonVariants } from "./button";
import clsx from "clsx";

export type LinkProps = React.ComponentProps<typeof NextLink>;
export function Link({
  className = "",
  buttonProps,
  ...props
}: LinkProps & {
  buttonProps?: ButtonVariantProps;
}): JSX.Element {
  return (
    <NextLink
      className={clsx(
        buttonProps
          ? buttonVariants(buttonProps)
          : "underline underline-offset-2 decoration-from-font hover:decoration-gray-400",

        className,
      )}
      {...props}
    />
  );
}
