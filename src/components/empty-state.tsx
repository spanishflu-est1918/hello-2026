import { Inbox } from "lucide-react"

export function EmptyState({ title, description }: { title: string; description: string }) {
  return (
    <div className="border-[3px] border-black border-dashed p-12 flex flex-col items-center justify-center text-center">
      <div className="w-14 h-14 bg-gray-100 border-[2px] border-black shadow-[3px_3px_0_#000] flex items-center justify-center mb-4">
        <Inbox className="w-7 h-7" strokeWidth={2} />
      </div>
      <h3 className="font-black text-lg mb-1">{title}</h3>
      <p className="text-sm text-muted-foreground font-medium max-w-sm">{description}</p>
    </div>
  )
}
