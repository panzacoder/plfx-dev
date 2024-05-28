import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "@/components/ui/link";
import { ExternalLink } from "lucide-react";

export type ProjectCardProps = {
  title: string;
  link?: string;
  tags: string[];
  active?: boolean;
  children: React.ReactNode;
};
export function ProjectCard({ title, link, tags, active, children }: ProjectCardProps) {
  return (
    <Card className="my-2">
      <CardHeader className="flex flex-col gap-2">
        {active && <Badge variant='accent' className='flex justify-center'>Active Project</Badge>}
        <CardTitle className="flex flex-row gap-2">
          {title}
          {link && (
            <Link href={link}>
              <ExternalLink />
            </Link>
          )}
        </CardTitle>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag: string) => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>
      </CardHeader>

      <CardContent>{children}</CardContent>
    </Card>
  );
}
