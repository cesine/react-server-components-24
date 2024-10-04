import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { MainMenu } from '@/components/main-menu/main-menu'
import { PageFooter } from '@/components/page-footer'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TMDB Movies',
  description: 'Top movies from the TMDB API',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container relative mx-auto flex min-h-screen flex-col">
          <MainMenu />
          <main className="flex-1">{children}</main>
          <PageFooter />
          <Toaster />
        </div>
      </body>
    </html>
  )
}
