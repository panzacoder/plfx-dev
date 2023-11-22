import { H1 } from "./h1";
import { H2 } from "./h2";
import { H3 } from "./h3";
import { H4 } from "./h4";
import { H5 } from "./h5";
import { H6 } from "./h6";
import { Body } from "./body";
import { List } from "./list";
import { Blockquote } from "./blockquote";
import { InlineCode } from "./inline-code";
import { Lead } from "./lead";

const TypographyComponents = {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  body: Body,
  list: List,
  blockquote: Blockquote,
  inlineCode: InlineCode,
  lead: Lead,
} as const;

type TypographyVariants = keyof typeof TypographyComponents;

export type TypographyProps = React.ComponentProps<
  (typeof TypographyComponents)[TypographyVariants]
> & {
  variant: TypographyVariants;
};

export default function Typography({
  variant = "body",
  className = "",
  ...props
}: TypographyProps & { className?: string }): JSX.Element {
  const Component = TypographyComponents[variant];

  return <Component className={className} {...props} />;
}
