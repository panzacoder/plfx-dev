import { Tooltip, TooltipContent, TooltipTrigger } from "./tooltip";
import { Link, LinkProps } from "./link";
import Typography from "./typography";
import { ReactNode } from "react";

export function OutlinkIcon({
  children,
  href,
  tooltip,
}: LinkProps & { tooltip: string }) {
  return (
    <Tooltip>
      <TooltipTrigger>
        <Link
          href={href}
          target="_blank"
          buttonVariant={{ variant: "ghost", size: "icon" }}
        >
          {children}
        </Link>
      </TooltipTrigger>
      <TooltipContent>
        <Typography variant="body">{tooltip}</Typography>
      </TooltipContent>
    </Tooltip>
  );
}
