'use client'

import { motion, LayoutGroup } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { Suspense } from 'react'
import clsx from 'clsx'
import { Link } from '@/components/ui/link'

const navItems = {
  '/': {
    name: 'home'
  },
  '/things': {
    name: 'things'
  },
  '/thoughts': {
    name: 'thoughts'
  }
}

const secondaryNavItems = {
  '/support': {
    name: 'support'
  }
}

export function Navbar(): JSX.Element {
  return (
    <div className="mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <LayoutGroup>
          <nav
            className="fade relative grid w-full scroll-pr-6 grid-cols-2 items-start px-0 pb-0 md:relative md:overflow-auto"
            id="nav"
          >
            <div className="flex w-full flex-row space-x-0 pr-10">
              <Suspense fallback={null}>
                {Object.entries(navItems).map(([path, { name }]) => {
                  return <NavItem key={path} path={path} name={name} />
                })}
              </Suspense>
            </div>
            <div className="flex w-full flex-row justify-end space-x-0 pr-10">
              {Object.entries(secondaryNavItems).map(([path, { name }]) => {
                return <NavItem key={path} path={path} name={name} />
              })}
            </div>
          </nav>
        </LayoutGroup>
      </div>
    </div>
  )
}

function NavItem({ path, name }: { path: string; name: string }) {
  const pathname = usePathname() || '/'
  const isActive =
    path === pathname || (path !== '/' && pathname.startsWith(path))

  return (
    <Link
      key={path}
      href={path}
      className={clsx(
        'flex align-middle no-underline transition-all hover:text-neutral-200 dark:hover:text-neutral-200',
        {
          'text-neutral-500': !isActive
        }
      )}
    >
      <span className="relative px-2 py-1">
        {name}
        {isActive ? (
          <motion.div
            className="absolute inset-0 top-7 z-[-1] mx-2 h-[1px] bg-neutral-200 from-transparent to-neutral-900 dark:bg-neutral-800 dark:bg-gradient-to-r"
            layoutId="sidebar"
            transition={{
              type: 'spring',
              stiffness: 350,
              damping: 30
            }}
          />
        ) : null}
      </span>
    </Link>
  )
}
