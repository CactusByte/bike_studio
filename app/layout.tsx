import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from './components/navbar'
import { Footer } from './components/footer'
import { Toaster } from '@/components/ui/toaster'
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'The Bike Studio',
  description: 'Your one-stop shop for all things bikes',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            {children}
            <Analytics />
          </main>
          <Toaster />
          <Footer />
        </div>
      </body>
    </html>
  )
}

