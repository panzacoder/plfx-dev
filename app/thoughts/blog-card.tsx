import {
  Card,
  CardContent,
  CardDescription,
  CardTitle
} from '@/components/ui/card'
import { Link } from '@/components/ui/link'

type BlogCardProps = {
  title: string
  description: string
  date: string
  href: string
}
export function BlogCard({ title, description, date, href }: BlogCardProps) {
  return (
    <Link href={href} className="no-underline hover:underline">
      <Card className="w-max p-4">
        <CardTitle className="mb-4">{title}</CardTitle>
        <CardDescription className="text-md flex flex-col">
          {description}
        </CardDescription>
        <CardContent className="mt-2 p-0 text-sm text-muted-foreground">
          {date}
        </CardContent>
      </Card>
    </Link>
  )
}
