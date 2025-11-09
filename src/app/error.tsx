'use client'

import { useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { RefreshCw } from "lucide-react"
import Link from "next/link"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 bg-background">
      <div className="space-y-2 pt-10 text-center">
        <h1 className="text-4xl tracking-tight text-foreground">
          <span className="font-extrabold">{"Error: "}</span>
          {error.message || "An unexpected error occurred"}
        </h1>
        <p className="text-muted-foreground">
          {"The page "}
          <code className="px-1 py-1 inline-block bg-slate-300/10 rounded-lg">{"pathname"}</code>
          {" does not exist."}
        </p>
        <br />
        <div className="flex gap-4 justify-center">
          <Button 
            variant="outline" 
            className="w-12 border-input hover:bg-accent"
            onClick={() => window.location.reload()}
          >
            <RefreshCw className="h-4 w-4" />
          </Button>
          <Button variant="outline" className="w-32 border-input hover:bg-accent">
            <Link href="/">
              {"Return Home"}
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}