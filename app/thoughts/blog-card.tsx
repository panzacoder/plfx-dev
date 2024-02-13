import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "@/components/ui/link";

type BlogCardProps = {
  title: string;
  description: string;
  date: string;
  href: string;
};
export function BlogCard({ title, description, date, href }: BlogCardProps) {
  return (
    <Link href={href} className="no-underline hover:underline">
      <Card className="p-4 w-max">
        <CardTitle className="mb-4">{title}</CardTitle>
        <CardDescription className="flex flex-col text-md">
          {description}
        </CardDescription>
        <CardContent className="p-0 mt-2 text-sm text-muted-foreground">
          {date}
        </CardContent>
      </Card>
    </Link>
  );
}
