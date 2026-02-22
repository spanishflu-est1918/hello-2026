import { EmptyState } from "@/components/empty-state"

export default function RantsToShorts() {
  return (
    <div className="max-w-5xl">
      <div className="mb-8">
        <h1 className="text-4xl font-black tracking-tight mb-1">Rants → Shorts</h1>
        <p className="text-muted-foreground font-medium">Slice the best moments into punchy short-form videos</p>
      </div>

      <EmptyState
        title="No shorts yet"
        description="Once rants are recorded, the best clips will appear here for editing into shorts."
      />
    </div>
  )
}
