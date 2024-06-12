import { Tooltip, TooltipContent, TooltipTrigger } from './tooltip'
import { Link, LinkProps } from './link'
import Typography from './typography'

export function OutlinkIcon({
  children,
  href,
  tooltip
}: LinkProps & { tooltip: string }) {
  return (
    <Tooltip>
      <TooltipTrigger>
        <Link
          href={href}
          target="_blank"
          buttonProps={{ variant: 'ghost', size: 'icon' }}
        >
          {children}
        </Link>
      </TooltipTrigger>
      <TooltipContent>
        <Typography variant="body">{tooltip}</Typography>
      </TooltipContent>
    </Tooltip>
  )
}
