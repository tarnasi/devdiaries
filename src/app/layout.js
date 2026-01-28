import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Blog App',
  description: 'The best blog app!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`max-w-screen overflow-x-hidden ${inter.className}`}>
        <div className='min-h-screen bg-app-soft text-app-soft'>
          <div className='container mx-auto px-6 max-w-md:p-10 bg-fuchsia-800'>
            {children}
          </div>
        </div>
        </body>
    </html>
  )
}
