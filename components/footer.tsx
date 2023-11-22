import { Link } from "./ui/link";

export function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center w-full text-gray-500">
      <span>
        plfx.dev and{" "}
        <Link href="https://plfx.studio" target="_blank">
          plfx.studio
        </Link>{" "}
        are made with care in Pensacola, FL.
      </span>
    </footer>
  );
}
