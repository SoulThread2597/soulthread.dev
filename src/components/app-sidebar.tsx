"use client"

import { Settings, FileUser } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem
} from "@/components/ui/sidebar"
import { DynamicIcon } from "@/components/dynamic-icon"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Seperator } from "@/components/ui/seperator";
import Image from "next/image"

export function AppSidebar() {
  const pathname = usePathname()

  return (
    <Sidebar variant="sidebar" className="border-r border-sidebar-border bg-sidebar">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <div className="flex items-center gap-2 px-2 pt-3 pb-5 justify-center">
              {/* <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Image
                  src="/logo.png"
                  alt="Logo"
                  width={32}
                  height={32}
                />
              </div> */}
              <div>
                <span className="truncate font-semibold w-min">SoulThread.dev</span>
              </div>
            </div>
            <Seperator variant="diamond" />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="pl-4">
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname === "/"}>
                  <Link href="/">
                    <DynamicIcon iconName="Home" className="h-4 w-4" />
                    <span>Home</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname === "/contact"}>
                  <Link href="/contact">
                    <DynamicIcon iconName="Contact" className="h-4 w-4" />
                    <span>Contact</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname === "/about"}>
                  <Link href="/about">
                    <DynamicIcon iconName="FileUser" className="h-4 w-4" />
                    <span>About</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={pathname === "/settings"}>
              <Link href="/settings">
                <Settings className="h-4 w-4" />
                <span>Settings</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter> */}

    </Sidebar>
  )
}
