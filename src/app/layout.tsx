import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../common/styles/globals.css'
import Navbar from '@/common/component/navbar/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Headphone',
  description: 'Headphone Landing Page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex justify-center items-center bg`}>
        <Navbar />
        {children}
        </body>
    </html>
  )
}
