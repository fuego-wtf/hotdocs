import "./globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "hotdocs | developer platform",
  description: "build powerful applications with our developer platform",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased min-h-screen bg-white dark:bg-gray-950`}>
        <div className="flex min-h-screen">
          {children}
        </div>
      </body>
    </html>
  )
}

