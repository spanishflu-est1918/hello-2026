import { EmptyState } from "@/components/empty-state"

export default function Rants() {
  return (
    <div className="max-w-5xl">
      <div className="mb-8">
        <h1 className="text-4xl font-black tracking-tight mb-1">Stefano Rants</h1>
        <p className="text-muted-foreground font-medium">Capture and structure spontaneous rants into content</p>
      </div>

      <EmptyState
        title="No rants yet"
        description="When Stefano goes off, capture it here. Each rant becomes raw material for the content machine."
      />
    </div>
  )
}
