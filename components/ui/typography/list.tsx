export function List({
  children,
  className,
  ...props
}: {
  children: React.ReactNode
  className?: string
} & React.HTMLAttributes<HTMLUListElement>) {
  return (
    <ul
      className={`mb-6 ml-6 list-disc [&>li]:mt-2 ${className ?? ''}`}
      {...props}
    >
      {children}
    </ul>
  )
}
