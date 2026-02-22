import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { TrendingUp, Eye, Clock, Target, Info } from "lucide-react"

const stats = [
  { label: "Total Views", value: "—", icon: Eye, accent: "bg-blue-200" },
  { label: "Content Pieces", value: "0", icon: TrendingUp, accent: "bg-orange-200" },
  { label: "Avg Watch Time", value: "—", icon: Clock, accent: "bg-purple-200" },
  { label: "Engagement Rate", value: "—", icon: Target, accent: "bg-emerald-200" },
]

export default function Analytics() {
  return (
    <div className="max-w-5xl">
      <div className="mb-8">
        <h1 className="text-4xl font-black tracking-tight mb-1">Analytics</h1>
        <p className="text-muted-foreground font-medium">Track content performance across all pipelines</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        {stats.map((s) => (
          <Card key={s.label}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-muted-foreground">{s.label}</span>
                <div className={`w-8 h-8 ${s.accent} border-[2px] border-black shadow-[2px_2px_0_#000] flex items-center justify-center`}>
                  <s.icon className="w-4 h-4" strokeWidth={2.5} />
                </div>
              </div>
              <CardTitle className="text-3xl">{s.value}</CardTitle>
            </CardHeader>
          </Card>
        ))}
      </div>

      <div className="border-[3px] border-black shadow-[4px_4px_0_#000] bg-yellow-100 p-5 flex gap-3">
        <Info className="w-5 h-5 mt-0.5 flex-shrink-0" strokeWidth={2.5} />
        <div>
          <p className="font-black text-sm mb-1">We&apos;re in exploration phase</p>
          <p className="text-sm font-medium text-muted-foreground">
            Analytics will populate as content moves through the pipelines. For now, focus on building the content machine and establishing workflows.
          </p>
        </div>
      </div>
    </div>
  )
}
