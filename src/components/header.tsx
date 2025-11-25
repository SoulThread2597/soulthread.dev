import { ThemeToggleButton } from "@/components/theme-toggle"
import { SidebarTrigger } from "@/components/ui/sidebar"
import Image from "next/image"

export function Header() {
  return (
    <header className="flex h-12 shrink-0 items-center gap-2 border-b border-border bg-background px-4 justify-evenly">
      <SidebarTrigger className="-ml-1" />
      <div className="flex-1 justify-center flex">
        <div className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Logo"
            width={32}
            height={32}
            className="rounded-lg"
          />
          <span className="truncate font-semibold w-min">SoulThread</span>
        </div>
      </div>
      <ThemeToggleButton />
    </header>
  )
}
