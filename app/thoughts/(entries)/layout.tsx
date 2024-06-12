import { Dot } from 'lucide-react'

export default function BlogLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col">
      {children}
      <div className="mb-8 grid w-full place-items-center">
        <Dot />
      </div>
    </div>
  )
}
