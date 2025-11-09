'use client'

import type React from "react"

export default function SoulThreadDevLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <div className="h-full w-full bg-background flex">
      {children}
    </div>
  )
}