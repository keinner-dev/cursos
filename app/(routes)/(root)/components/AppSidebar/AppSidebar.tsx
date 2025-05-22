"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"
import { House } from "lucide-react";
import Link from "next/link";

export function AppSidebar() {
    const {state} = useSidebar()

  return (
    <Sidebar collapsible="icon">
        <SidebarContent className="bg-white">
          <SidebarHeader>
            <Link href="/" className="flex flex-row items-center">
                Keinner
            </Link>
          </SidebarHeader>
          <SidebarGroup>
            <SidebarGroupLabel>Plataforma</SidebarGroupLabel>
            <SidebarMenu className="space-y-2">
                <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                        <a href="/Home">
                        <div className="p-1 rounded-lg text-white bg-violet-400">
                            <House className="w-4 h-4"/>
                        </div>
                        <span>Home</span>
                        </a>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>
    </Sidebar>
  )
}
