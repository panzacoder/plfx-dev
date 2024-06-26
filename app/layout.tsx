import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { TooltipProvider } from '@/components/ui/tooltip'
import { BookMeetingButton } from '@/components/book-meeting-button'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://plfx.dev'),
  title: {
    default: 'plfx.dev',
    template: '%s | plfx'
  },
  description: 'adventures in product development',
  openGraph: {
    title: 'plfx.dev',
    description: 'adventures in product development',
    url: 'https://plfx.dev',
    siteName: 'plfx.dev',
    locale: 'en_US',
    type: 'website'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  twitter: {
    title: 'plfx.dev',
    card: 'summary_large_image'
  }
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} w-bleed grid h-screen grid-rows-[1fr_min-content] pt-8 antialiased`}
      >
        <main className="mx-2 mt-6 flex w-full max-w-2xl flex-col px-2 md:px-0 lg:mx-auto">
          <TooltipProvider>
            <Navbar />
            {children}
            <Analytics />
            <SpeedInsights />
          </TooltipProvider>
        </main>
        <BookMeetingButton />

        <Footer />
      </body>
    </html>
  )
}
