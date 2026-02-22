import { Video, Mic, Scissors, Bot, ArrowDown } from "lucide-react"

export default function PlanPage() {
  return (
    <div className="max-w-4xl">
      {/* Header */}
      <div className="mb-10">
        <p className="text-xs font-black tracking-[0.3em] text-muted-foreground mb-2">THE PLAN</p>
        <h1 className="text-4xl font-black tracking-tight mb-3">Zero to 1,000 Followers</h1>
        <p className="text-lg text-muted-foreground font-medium">
          Content production system for Power Couple Coaching. YouTube + socials. AI-powered.
        </p>
      </div>

      {/* How It Works */}
      <section className="mb-10">
        <h2 className="text-sm font-black tracking-[0.2em] uppercase mb-4 pb-2 border-b-[3px] border-black">
          THE SYSTEM
        </h2>

        <div className="flex flex-col gap-4">
          {/* Telegram Bot */}
          <div className="border-[3px] border-black bg-blue-100 shadow-[4px_4px_0_#000] p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-blue-500 border-[2px] border-black shadow-[2px_2px_0_#000] flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" strokeWidth={3} />
              </div>
              <div>
                <h3 className="font-black text-lg">Telegram Bot</h3>
                <p className="text-xs font-bold text-muted-foreground tracking-wider uppercase">Input Layer</p>
              </div>
            </div>
            <p className="text-sm font-medium">
              Stefano sends voice notes, video rants, text ideas — the bot captures, transcribes, and routes to the right pipeline.
            </p>
          </div>

          <div className="flex justify-center">
            <ArrowDown className="w-6 h-6" strokeWidth={3} />
          </div>

          {/* Three Pipelines */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border-[3px] border-black bg-purple-100 shadow-[4px_4px_0_#000] p-5">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 bg-purple-500 border-[2px] border-black shadow-[2px_2px_0_#000] flex items-center justify-center">
                  <Video className="w-4 h-4 text-white" strokeWidth={3} />
                </div>
                <h3 className="font-black">Idea → Video</h3>
              </div>
              <p className="text-sm font-medium mb-2">Topic → research → script → record → publish</p>
              <p className="text-xs font-bold text-muted-foreground">8-15 min YouTube videos · 1-2/week</p>
            </div>

            <div className="border-[3px] border-black bg-orange-100 shadow-[4px_4px_0_#000] p-5">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 bg-orange-500 border-[2px] border-black shadow-[2px_2px_0_#000] flex items-center justify-center">
                  <Mic className="w-4 h-4 text-white" strokeWidth={3} />
                </div>
                <h3 className="font-black">Rants</h3>
              </div>
              <p className="text-sm font-medium mb-2">Stefano records → transcribe → upload → extract topics</p>
              <p className="text-xs font-bold text-muted-foreground">Raw long-form content · 2-3/week</p>
            </div>

            <div className="border-[3px] border-black bg-green-100 shadow-[4px_4px_0_#000] p-5">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 bg-green-500 border-[2px] border-black shadow-[2px_2px_0_#000] flex items-center justify-center">
                  <Scissors className="w-4 h-4 text-white" strokeWidth={3} />
                </div>
                <h3 className="font-black">Rants → Shorts</h3>
              </div>
              <p className="text-sm font-medium mb-2">AI clips best moments → crop → captions → deploy</p>
              <p className="text-xs font-bold text-muted-foreground">TikTok, Reels, YT Shorts · 1-2/day</p>
            </div>
          </div>

          <div className="flex justify-center">
            <ArrowDown className="w-6 h-6" strokeWidth={3} />
          </div>

          {/* Platforms */}
          <div className="border-[3px] border-black bg-gray-50 shadow-[4px_4px_0_#000] p-5">
            <h3 className="font-black text-sm tracking-[0.2em] uppercase mb-3">DEPLOYED TO</h3>
            <div className="flex flex-wrap gap-3">
              {[
                { name: "YouTube", color: "bg-red-500" },
                { name: "Instagram Reels", color: "bg-pink-500" },
                { name: "TikTok", color: "bg-black" },
                { name: "YouTube Shorts", color: "bg-red-400" },
              ].map((platform) => (
                <span key={platform.name} className={`text-sm font-bold text-white ${platform.color} border-[2px] border-black px-3 py-1.5 shadow-[2px_2px_0_#000]`}>
                  {platform.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What Stefano Does vs The System */}
      <section className="mb-10">
        <h2 className="text-sm font-black tracking-[0.2em] uppercase mb-4 pb-2 border-b-[3px] border-black">
          WHO DOES WHAT
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border-[3px] border-black shadow-[4px_4px_0_#000] p-5">
            <h4 className="font-black text-sm mb-3">STEFANO</h4>
            <ul className="text-sm font-medium space-y-1">
              <li>✅ Record rants</li>
              <li>✅ Send ideas via Telegram</li>
              <li>✅ Review &amp; approve scripts</li>
              <li>✅ Record scripted videos</li>
            </ul>
          </div>
          <div className="border-[3px] border-black bg-yellow-100 shadow-[4px_4px_0_#000] p-5">
            <h4 className="font-black text-sm mb-3">THE SYSTEM</h4>
            <ul className="text-sm font-medium space-y-1">
              <li>⚙️ Transcribe everything</li>
              <li>⚙️ Research &amp; write scripts</li>
              <li>⚙️ Extract &amp; edit shorts</li>
              <li>⚙️ Captions, crop, format</li>
              <li>⚙️ Deploy across platforms</li>
              <li>⚙️ Track analytics</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
