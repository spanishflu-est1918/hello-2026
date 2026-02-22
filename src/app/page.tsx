import Link from "next/link"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Video, Mic, Scissors, ArrowRight } from "lucide-react"

const pipelines = [
  {
    name: "Idea → Video",
    description: "Transform raw ideas into polished video content through a structured pipeline.",
    href: "/pipelines/idea-to-video",
    icon: Video,
    accent: "bg-blue-200",
    badge: "Active",
    badgeVariant: "blue" as const,
    items: 0,
  },
  {
    name: "Stefano Rants",
    description: "Capture Stefano's spontaneous rants and turn them into structured content pieces.",
    href: "/pipelines/rants",
    icon: Mic,
    accent: "bg-orange-200",
    badge: "Setup",
    badgeVariant: "orange" as const,
    items: 0,
  },
  {
    name: "Rants → Shorts",
    description: "Slice the best moments from rants into punchy short-form videos.",
    href: "/pipelines/rants-to-shorts",
    icon: Scissors,
    accent: "bg-emerald-200",
    badge: "Planned",
    badgeVariant: "green" as const,
    items: 0,
  },
]

const statusRows = [
  { label: "Content Ideas", value: "—", status: "Collecting" },
  { label: "Videos in Production", value: "0", status: "Not started" },
  { label: "Rants Recorded", value: "0", status: "Not started" },
  { label: "Shorts Published", value: "0", status: "Not started" },
]

export default function Dashboard() {
  return (
    <div className="max-w-5xl">
      <div className="mb-10">
        <h1 className="text-5xl font-black tracking-tight mb-2">HELLO 2026</h1>
        <p className="text-lg font-medium text-muted-foreground">
          Content production system for Power Couple Coaching
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {pipelines.map((p) => (
          <Link key={p.href} href={p.href} className="group">
            <Card className="h-full transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#000]">
              <CardHeader>
                <div className={`w-10 h-10 ${p.accent} border-[2px] border-black shadow-[2px_2px_0_#000] flex items-center justify-center mb-2`}>
                  <p.icon className="w-5 h-5" strokeWidth={2.5} />
                </div>
                <div className="flex items-center justify-between">
                  <CardTitle>{p.name}</CardTitle>
                  <Badge variant={p.badgeVariant}>{p.badge}</Badge>
                </div>
                <CardDescription>{p.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold">{p.items} items</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <div>
        <h2 className="text-2xl font-black tracking-tight mb-4">Project Status</h2>
        <div className="border-[3px] border-black shadow-[4px_4px_0_#000] overflow-hidden">
          <div className="grid grid-cols-3 bg-black text-white font-bold text-sm">
            <div className="px-5 py-3">Area</div>
            <div className="px-5 py-3">Count</div>
            <div className="px-5 py-3">Status</div>
          </div>
          {statusRows.map((row, i) => (
            <div key={row.label} className={`grid grid-cols-3 text-sm font-medium ${i % 2 === 0 ? "bg-white" : "bg-gray-50"} ${i < statusRows.length - 1 ? "border-b-[2px] border-black" : ""}`}>
              <div className="px-5 py-3 font-bold">{row.label}</div>
              <div className="px-5 py-3">{row.value}</div>
              <div className="px-5 py-3">{row.status}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
