"use client";

import { motion, LayoutGroup } from "framer-motion";
import { usePathname } from "next/navigation";
import { Suspense } from "react";
import clsx from "clsx";
import { Link } from "@/components/ui/link";

const navItems = {
  "/": {
    name: "home",
  },
  "/things": {
    name: "things",
  },
  "/thoughts": {
    name: "thoughts",
  },
};

export function Navbar(): JSX.Element {
  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <LayoutGroup>
          <nav
            className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
            id="nav"
          >
            <div className="flex flex-row space-x-0 pr-10">
              <Suspense fallback={null}>
                {Object.entries(navItems).map(([path, { name }]) => {
                  return <NavItem key={path} path={path} name={name} />;
                })}
              </Suspense>
            </div>
          </nav>
        </LayoutGroup>
      </div>
    </aside>
  );
}

function NavItem({ path, name }: { path: string; name: string }) {
  let pathname = usePathname() || "/";
  let isActive =
    path === pathname || (path !== "/" && pathname.startsWith(path));
  console.log(pathname, path, isActive);

  return (
    <Link
      key={path}
      href={path}
      className={clsx(
        "no-underline transition-all hover:text-neutral-200 dark:hover:text-neutral-200 flex align-middle",
        {
          "text-neutral-500": !isActive,
        },
      )}
    >
      <span className="relative py-1 px-2">
        {name}
        {isActive ? (
          <motion.div
            className="absolute h-[1px] top-7 mx-2 inset-0 bg-neutral-200 dark:bg-neutral-800 z-[-1] dark:bg-gradient-to-r from-transparent to-neutral-900"
            layoutId="sidebar"
            transition={{
              type: "spring",
              stiffness: 350,
              damping: 30,
            }}
          />
        ) : null}
      </span>
    </Link>
  );
}
