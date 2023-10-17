import './globals.css'
import type { Metadata } from 'next'
import Navbar from './components/Navbar'
import MyProfilePic from './components/MyProfilePic'

export const metadata: Metadata = {
  title: "Ivan's Blog",
  description: 'Created By Ivan N. Ibrahim',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-slate-800">
        <Navbar />
        <MyProfilePic />
        {children}
      </body>
    </html>
  )
}
