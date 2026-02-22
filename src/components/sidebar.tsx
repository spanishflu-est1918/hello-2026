"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, Video, Mic, Scissors, BarChart3, Zap } from "lucide-react"

const navItems = [
  { href: "/", label: "Dashboard", icon: LayoutDashboard },
  { href: "/pipelines/idea-to-video", label: "Idea → Video", icon: Video },
  { href: "/pipelines/rants", label: "Rants", icon: Mic },
  { href: "/pipelines/rants-to-shorts", label: "Rants → Shorts", icon: Scissors },
  { href: "/analytics", label: "Analytics", icon: BarChart3 },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-64 min-h-screen bg-white border-r-[3px] border-black flex flex-col">
      <div className="p-5 border-b-[3px] border-black">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-yellow-300 border-[2px] border-black shadow-[2px_2px_0_#000] flex items-center justify-center">
            <Zap className="w-5 h-5" strokeWidth={3} />
          </div>
          <span className="font-black text-xl tracking-tight">H-2026</span>
        </Link>
      </div>
      <nav className="flex-1 p-3 flex flex-col gap-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 font-bold text-sm transition-all border-[2px] ${
                isActive
                  ? "bg-yellow-300 border-black shadow-[3px_3px_0_#000]"
                  : "border-transparent hover:border-black hover:bg-gray-50 hover:shadow-[2px_2px_0_#000] hover:translate-x-[1px]"
              }`}
            >
              <item.icon className="w-4 h-4" strokeWidth={2.5} />
              {item.label}
            </Link>
          )
        })}
      </nav>
      <div className="p-4 border-t-[3px] border-black">
        <p className="text-xs font-bold text-muted-foreground">POWER COUPLE</p>
        <p className="text-xs text-muted-foreground">Coaching · 2026</p>
      </div>
    </aside>
  )
}
