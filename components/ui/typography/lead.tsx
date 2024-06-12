import clsx from 'clsx'

export function Lead({
  children,
  className
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <p className={clsx('text-xl text-muted-foreground', className)}>
      {children}
    </p>
  )
}
