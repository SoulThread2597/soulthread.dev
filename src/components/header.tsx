import { ThemeToggleButton } from "@/components/theme-toggle"
import { SidebarTrigger } from "@/components/ui/sidebar"

export function Header() {
  return (
    <header className="flex h-16 shrink-0 items-center gap-2 border-b border-border bg-background px-4">
      <SidebarTrigger className="-ml-1" />
      <div className="flex flex-1 items-center gap-2">
        <div className="ml-auto flex items-center gap-2">
          <ThemeToggleButton />
        </div>
      </div>
    </header>
  )
}
