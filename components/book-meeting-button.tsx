import { Button } from "./ui/button";
import { Link } from "./ui/link";

export function BookMeetingButton() {
  return (
    <Link
      buttonProps={{ variant: "default" }}
      href="https://cal.com/plfx.dev"
      className="w-min fixed bottom-3 right-3"
    >
      Book a meeting with me!
    </Link>
  );
}
