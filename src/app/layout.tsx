import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import "@/styles/globals.css"

const inter = Inter({ subsets: ["latin"] })

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: {
      default: "SoulThread",
      template: "%s | SoulThread",
    },
    description: "The homepage of SoulThread.dev",
    creator: "SoulThread",
    openGraph: {
      title: "SoulThread",
      description: `The official website of SoulThread.`,
      type: 'website',
      url: 'https://soulthread.dev',
    },
    twitter: {
      card: "summary",
      images: [
        {
          url: 'https://soulthread.dev/logo.png',
          width: 64,
          height: 64,
          alt: 'SoulThread\'s logo',
        }
      ],
    }
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="h-full w-full">
      <body className={`${inter.className} h-full w-full overflow-x-hidden`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <div className="h-full w-full overflow-hidden">
            {children}
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
