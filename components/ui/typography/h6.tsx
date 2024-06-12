import clsx from 'clsx'

export function H6({
  children,
  className
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <h6
      className={clsx(
        'text-md scroll-m-20 font-semibold tracking-tight',
        className
      )}
    >
      {children}
    </h6>
  )
}
