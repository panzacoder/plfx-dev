import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "@/components/ui/link";
import Typography from "@/components/ui/typography";
import { List } from "@/components/ui/typography/list";

export default function ThoughtsPage() {
  return (
    <div className="flex flex-col align-center min-h-screen py-2 h-full">
      <Typography variant="h1" className="text-muted-foreground">
        Random Thoughts
      </Typography>
      <Link href="/thoughts/about-a-name" className="no-underline">
        <Card className="m-8 p-4   hover:shadow-gray-100 transition-shadow ease-in-out delay-50">
          <CardTitle className="mb-4">what's in a name?</CardTitle>
          <CardDescription className="flex flex-col">
            Every story starts with a title.
          </CardDescription>
          <CardContent className="p-0 mt-2 text- text-muted-foreground">
            November 21, 2023
          </CardContent>
        </Card>
      </Link>
    </div>
  );
}
