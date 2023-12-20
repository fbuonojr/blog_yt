import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Open_Sans } from "next/font/google"

const openSans = Open_Sans({
  subsets: ["latin"],
})

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Blog AI App',
  description: 'Blog built in Next JS that uses AI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={openSans.className}lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
