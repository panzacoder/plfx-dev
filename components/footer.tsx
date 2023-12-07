import { Link } from "./ui/link";

export function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center w-full text-gray-500 pt-8">
      <span>
        <span className="hidden md:inline">
          plfx.dev and{" "}
          <Link href="https://plfx.studio" target="_blank">
            plfx.studio
          </Link>{" "}
          are
        </span>
        <span>made with care in Pensacola, FL.</span>
      </span>
    </footer>
  );
}
