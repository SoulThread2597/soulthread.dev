import * as React from 'react'
import type { Metadata } from "next"
import { Badge } from "@/components/ui/badge";
import { FlickeringGrid } from "@/src/components/backgrounds/flickering-grid";
import { Button } from "@/components/ui/button";
import Link from "next/link";;
import { Card } from '@/src/components/ui/card';

export const metadata: Metadata = {
  title: 'Maintenance',
}

declare const global: SoulThreadDevGlobal;

export default function Maintenance() {
  return (
    <div className="flex h-full w-full flex-col overflow-x-hidden">
      <section className="relative flex w-full h-full items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-purple-500/10 via-transparent to-purple-950/20 z-0" />
        <div className="absolute inset-0 bg-linear-to-tl from-purple-600/10 via-transparent to-purple-900/20 z-0" />
        <FlickeringGrid
          className="absolute inset-0 z-0 p-1.5"
          squareSize={5}
          gridGap={6}
          flickerChance={0.3}
          color="rgb(168, 85, 247)"
          maxOpacity={0.3}
        />
        <div className="relative z-10 flex flex-col items-center justify-center gap-8 md:gap-10 px-4 text-center md:px-6">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            <span>
              We&apos;re Building Something
            </span>
            <span className="block bg-linear-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent pb-2">
              Amazing
            </span>
          </h1>

          <Badge variant="outline" className="px-4 py-2 text-sm font-medium border-purple-500/50 text-purple-400 bg-background">
            Under Maintenance
          </Badge>

          <Card className="bg-background border-purple-500/50 rounded-2xl shadow-lg px-6 py-8 md:px-10 md:py-12 flex flex-col items-center justify-center gap-6 md:gap-8 max-w-lg mx-auto">
            <div className="space-y-4 max-w-2xl mx-auto">
              <p className="text-base sm:text-lg md:text-xl">
                🚧 SoulThread.dev is currently undergoing maintenance and improvements. 🚧
              </p>
              <p className="text-sm sm:text-base text-muted-foreground px-4">
                {global.config.maintenance.message || "We're working hard to bring you an even better experience. Check back soon!"}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center pt-4">
              <Button asChild size="lg">
                <Link href="mailto:contact@soulthread.dev">
                  Contact Me
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-purple-500/50 hover:bg-purple-500/10">
                <Link href="https://github.com/soulthread2597" target="_blank" rel="noopener noreferrer">
                  Visit GitHub
                </Link>
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}
