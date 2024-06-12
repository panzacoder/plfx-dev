import { Card, CardContent, CardTitle } from '@/components/ui/card'
import { Link } from '@/components/ui/link'
import { cn } from '@/lib/utils'

type BlogCardProps = {
  title: string
  date: string
  href: string
  className?: string
}
export function FeatureCard({ title, date, href, className }: BlogCardProps) {
  return (
    <Link href={href} className="no-underline hover:underline">
      <Card className={cn('w-full p-4', className)}>
        <CardTitle className="text-md mb-4">{title}</CardTitle>
        <CardContent className="mt-2 p-0 text-sm text-muted-foreground">
          {date}
        </CardContent>
      </Card>
    </Link>
  )
}
