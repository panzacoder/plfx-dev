import { Link } from './ui/link'

export function Footer() {
  return (
    <footer className="flex w-full flex-col items-center justify-center pt-8 text-gray-500">
      <span>
        <span className="hidden md:inline">
          {'plfx.dev and '}
          <Link href="https://plfx.studio" target="_blank">
            plfx.studio
          </Link>
          {' are '}
        </span>
        <span>made with care in Pensacola, FL.</span>
      </span>
    </footer>
  )
}
