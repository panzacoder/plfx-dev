import { Link } from "@/components/ui/link";
import { OutlinkIcon } from "@/components/ui/outlink-icon";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Typography from "@/components/ui/typography";
import { Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";

export default function HomePage() {
  return (
    <>
      <h1>
        <Tooltip>
          <TooltipTrigger>
            <Typography variant="lead" className="text-accent">plfx dev</Typography>
          </TooltipTrigger>
          <TooltipContent>
            <Typography variant="body">
              <Link href="/thoughts/about-a-name">What's in a name?</Link>
            </Typography>
          </TooltipContent>
        </Tooltip>
      </h1>
      adventures in web development
      <hr className="my-4" />
      <div className="grid grid-cols-1 grid-flow-row grid-reverse md:grid-cols-[300px_1fr] place-items-center">
        <div className="text-lg order-2 md:order-1">
          <Typography variant="h2" className="text-center md:text-start">
            👋 I'm Jake.
          </Typography>
          <div className="max-w-sm">
            <Typography variant="body">
              I build for the web.
              <br />
              This site is a collection of the{" "}
              <Link href="/things">things</Link> I've built and my{" "}
              <Link href="/thoughts">thoughts</Link> about the web and the
              world.
            </Typography>
            <div className="flex w-full">
              <OutlinkIcon
                href="https://linkedin.com/in/jacobshebert"
                tooltip="Connect with me on LinkedIn"
              >
                <Linkedin />
              </OutlinkIcon>

              <OutlinkIcon
                href="https://github.com/panzacoder"
                tooltip="Follow me on GitHub"
              >
                <Github />
              </OutlinkIcon>
              <OutlinkIcon href="mailto:jake@plfx.studio" tooltip="Email me!">
                <Mail />
              </OutlinkIcon>
            </div>
          </div>
        </div>
        <Image
          src="/img/jh-headshot.jpeg"
          alt="Jake Hebert Headshot"
          width={200}
          height={200}
          className="rounded-full order-1 md:order-2"
        />
      </div>
    </>
  );
}
