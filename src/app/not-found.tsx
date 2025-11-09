"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { usePathname } from 'next/navigation'

export default function NotFound() {
  const pathname = usePathname()

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 bg-background">
      <div className="space-y-2 pt-10 text-center">
        <h1 className="text-4xl tracking-tight text-foreground">
          <span className="font-extrabold">{"404: "}</span>
          {"Not Found"}
        </h1>
        <p className="text-muted-foreground">
          {"The page "}
          <code className="px-1 py-1 inline-block bg-accent rounded-lg">{pathname}</code>
          {" does not exist."}
        </p>
        <br />
        <Button variant="outline" className="w-32 border-input hover:bg-accent">
          <Link href="/">
            {"Return Home"}
          </Link>
        </Button>
      </div>
    </div>
  )
}