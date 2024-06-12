import { Link } from './ui/link'

export function BookMeetingButton() {
  return (
    <Link
      buttonProps={{ variant: 'default' }}
      href="https://cal.com/plfx.dev"
      className="fixed bottom-8 right-3 w-min"
    >
      Book a meeting with me!
    </Link>
  )
}
