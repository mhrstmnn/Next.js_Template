import 'normalize.css'
import './stylesheets/global.sass'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from './providers'
import Header from './components/Header'
import Footer from './components/Footer'

export const metadata: Metadata = {
  title: 'Next.js Template',
  description: 'Template for new Next.js projects',
}

const inter = Inter({ subsets: ['latin'], display: 'swap' })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" suppressHydrationWarning>
      <head />
      <body
        className={`${inter.className} flex justify-center items-center min-h-screen`}
      >
        <Providers>
          <div className="prose dark:prose-invert max-w-none text-center m-10">
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}
