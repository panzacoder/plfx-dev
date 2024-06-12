import Script from 'next/script'

export default function SupportLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Script src="https://js.stripe.com/v3/buy-button.js" />
      {children}
    </>
  )
}
