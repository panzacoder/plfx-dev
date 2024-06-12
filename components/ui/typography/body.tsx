import clsx from 'clsx'

export function Body({
  children,
  className
}: {
  children: React.ReactNode
  className: string
}) {
  return <p className={clsx('leading-7', className)}>{children}</p>
}
