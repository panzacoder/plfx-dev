import type { MDXComponents } from "mdx/types";
import Typography from "@/components/ui/typography";
import Link from "next/link";
import Image from "next/image";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h1: ({ children }) => <Typography variant="h1">{children}</Typography>,
    h2: ({ children }) => (
      <Typography variant="h2" className="text-muted-foreground">
        {children}
      </Typography>
    ),
    h3: ({ children }) => <Typography variant="h3">{children}</Typography>,
    h4: ({ children }) => <Typography variant="h4">{children}</Typography>,
    h5: ({ children }) => <Typography variant="h5">{children}</Typography>,
    h6: ({ children }) => <Typography variant="h6">{children}</Typography>,
    p: ({ children }) => <Typography variant="body">{children}</Typography>,
    ul: ({ children }) => <Typography variant="list">{children}</Typography>,
    ol: ({ children }) => <Typography variant="list">{children}</Typography>,
    blockquote: ({ children }) => (
      <Typography variant="blockquote">{children}</Typography>
    ),
    inlineCode: ({ children }) => (
      <Typography variant="inlineCode">{children}</Typography>
    ),
    a: ({ children, href = "" }) => <Link href={href}>{children}</Link>,
    img: ({ src = "", alt = "" }) => (
      <div>
        <Image
          src={src}
          alt={alt}
          layout="responsive"
          width={16}
          height={9}
          className="mx-8"
        />
      </div>
    ),
  };
}
