import './globals.css'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
const inter = Inter({ subsets: ['latin'] })

const nexaLight = localFont({ 
  src: '../public/fonts/Nexa-ExtraLight.ttf',
  variable:'--font-nexa-light'
})
const nexaHeavy = localFont({ 
  src: '../public/fonts/Nexa-Heavy.ttf',
  variable:'--font-nexa-heavy'
})
export const metadata = {
  title: 'Arbitrary Home',
  description: 'Best event organizer in nepal',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${nexaLight.variable} ${nexaHeavy.variable}`}>{children}</body>
    </html>
  )
}
