import Typography from "@/components/ui/typography";

import { BlogCard } from "./blog-card";
import { FeatureCard } from "./feature-card";

export default function ThoughtsPage() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      <div className="flex flex-col align-center col-span-2 gap-4">
        <Typography variant="h1" className="text-muted-foreground mb-1">
          my thoughts
        </Typography>
        <BlogCard
          title="what's in a name?"
          description="Every story starts with a title."
          date="November 21, 2023"
          href="/thoughts/about-a-name"
        />
      </div>
      <div className="col-span-1 flex flex-col gap-4 border-l-muted-foreground">
        <Typography
          variant="h2"
          className="text-muted-foreground/90 pt-2"
        >
          featured in
        </Typography>

        <FeatureCard
          title="Design Systems Field Guide #6"
          href="https://www.youtube.com/live/sSI-jvotOGU?si=uyIfhvYVo1G_Wu46"
          date="November 15, 2023"
        />
        <FeatureCard
          title="Headway Livestream: Using a Headless CMS with Gatsby"
          href="https://www.youtube.com/watch?v=2XL2LQpKp6g&t=958s"
          date="March 30, 2021"
        />
        <FeatureCard
          title="Even Keeled Episode 3: Static Sites with Gatsby"
          href="https://www.headway.io/even-keeled/static-sites-with-gatsby-ft-jacob-hebert-and-matt-mcgee"
          date="January 2021"
        />
      </div>
    </div>
  );
}
