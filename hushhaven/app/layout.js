import { Inter } from 'next/font/google'
import './globals.css'
import {Providers} from "./providers";

const inter = Inter({ subsets: ['latin'] })

export const siteTitle = "HushHaven"

export default function RootLayout({ children, home }) {
  return (
    <html lang="en" className='light'>
      <Providers>
        <body className={inter.className}>{children}</body>
      </Providers>
    </html>
  )
}
