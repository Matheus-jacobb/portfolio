import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './styles/globals.scss'
import './globals.css'

export const metadata: Metadata = {
  title: 'Matheus Jacob Bendel',
  description: 'Portfolio',
}

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '700'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
