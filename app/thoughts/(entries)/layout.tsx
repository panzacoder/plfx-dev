import { Dot } from "lucide-react";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col">
      {children}
      <div className="grid place-items-center w-full mb-8">
        <Dot />
      </div>
    </div>
  );
}
