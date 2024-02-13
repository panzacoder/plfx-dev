import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Link } from "@/components/ui/link";
import { cn } from "@/lib/utils";

type BlogCardProps = {
  title: string;
  date: string;
  href: string;
  className?: string;
};
export function FeatureCard({ title, date, href, className }: BlogCardProps) {
  return (
    <Link href={href} className="no-underline hover:underline">
      <Card className={cn("p-4 w-full", className)}>
        <CardTitle className="mb-4 text-md">{title}</CardTitle>
        <CardContent className="p-0 mt-2 text-sm text-muted-foreground">
          {date}
        </CardContent>
      </Card>
    </Link>
  );
}
