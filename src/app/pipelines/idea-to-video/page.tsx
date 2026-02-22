import { EmptyState } from "@/components/empty-state"
import { Badge } from "@/components/ui/badge"

const stages = [
  { name: "Ideation", color: "bg-yellow-200" },
  { name: "Script", color: "bg-blue-200" },
  { name: "Record", color: "bg-purple-200" },
  { name: "Edit", color: "bg-orange-200" },
  { name: "Publish", color: "bg-emerald-200" },
]

export default function IdeaToVideo() {
  return (
    <div className="max-w-5xl">
      <div className="mb-8">
        <h1 className="text-4xl font-black tracking-tight mb-1">Idea → Video</h1>
        <p className="text-muted-foreground font-medium">Transform raw ideas into polished video content</p>
      </div>

      <div className="flex gap-0 mb-10 overflow-x-auto">
        {stages.map((stage, i) => (
          <div key={stage.name} className="flex items-center">
            <div className={`${stage.color} border-[2px] border-black shadow-[3px_3px_0_#000] px-5 py-3 font-bold text-sm whitespace-nowrap`}>
              <span className="text-xs font-black text-black/50 block">{i + 1}</span>
              {stage.name}
            </div>
            {i < stages.length - 1 && (
              <div className="w-6 h-[2px] bg-black flex-shrink-0" />
            )}
          </div>
        ))}
      </div>

      <EmptyState
        title="No items yet"
        description="Add your first idea to start the pipeline. Ideas will flow through each stage from ideation to publish."
      />
    </div>
  )
}
