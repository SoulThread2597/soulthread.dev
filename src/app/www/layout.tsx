'use client'

import type React from "react"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { Header } from "@/components/header"
import { AppSidebar } from "@/components/app-sidebar"

export default function SoulThreadDevLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentYear = new Date().getFullYear()

  return (
    <div className="h-full w-full bg-background flex">
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset className="flex flex-col h-[calc(100%-16px)] w-full min-w-0">
          <Header />
          <div className="flex flex-col flex-1 bg-background min-h-0 min-w-0 p-4 h-full">
            <div className="flex-1 overflow-x-auto overflow-y-auto min-h-0 min-w-0">
              {children}
            </div>
            <footer className="text-center text-muted-foreground w-full pt-4 shrink-0 border-t border-border">
              <p className="text-sm">&copy; {currentYear} - <span className="font-bold">SoulThread</span> - All rights reserved.</p>
            </footer>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  )
}