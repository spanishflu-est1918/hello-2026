import { MessageCircle, Video, Mic, Scissors, BarChart3, Bot, ArrowRight, ArrowDown } from "lucide-react"

export default function PlanPage() {
  return (
    <div className="max-w-4xl">
      {/* Header */}
      <div className="mb-10">
        <p className="text-xs font-black tracking-[0.3em] text-muted-foreground mb-2">THE PLAN</p>
        <h1 className="text-4xl font-black tracking-tight mb-3">Zero to 1,000 Followers</h1>
        <p className="text-lg text-muted-foreground font-medium">
          A content production system designed to scale Power Couple Coaching through YouTube and social platforms.
        </p>
      </div>

      {/* The Goal */}
      <section className="mb-10">
        <div className="border-[3px] border-black bg-yellow-300 shadow-[6px_6px_0_#000] p-6">
          <h2 className="text-sm font-black tracking-[0.2em] uppercase mb-3">THE GOAL</h2>
          <p className="text-2xl font-black mb-2">1,000 followers in 30 days</p>
          <p className="text-sm text-muted-foreground font-medium">
            Month 1 is exploration — set up all pipelines, deploy across platforms, produce content, measure what works. 
            Proven: shorts alone can hit 1,000. With the full system running, we go faster.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="mb-10">
        <h2 className="text-sm font-black tracking-[0.2em] uppercase mb-4 pb-2 border-b-[3px] border-black">
          HOW IT WORKS
        </h2>
        <p className="text-sm text-muted-foreground font-medium mb-6">
          Everything flows through Telegram. Stefano talks, sends ideas, records rants — the system handles the rest.
        </p>

        {/* System Flow */}
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
            <p className="text-sm font-medium mb-3">
              The central hub. Stefano sends everything here — voice notes, video rants, text ideas, topics. 
              The bot captures, transcribes, and routes to the right pipeline.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Voice notes", "Video rants", "Text ideas", "Topic requests", "Status updates"].map((tag) => (
                <span key={tag} className="text-xs font-bold bg-white border-[2px] border-black px-2 py-1 shadow-[2px_2px_0_#000]">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex justify-center">
            <ArrowDown className="w-6 h-6" strokeWidth={3} />
          </div>

          {/* Three Pipelines */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Pipeline 1 */}
            <div className="border-[3px] border-black bg-purple-100 shadow-[4px_4px_0_#000] p-5">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 bg-purple-500 border-[2px] border-black shadow-[2px_2px_0_#000] flex items-center justify-center">
                  <Video className="w-4 h-4 text-white" strokeWidth={3} />
                </div>
                <h3 className="font-black">Idea → Video</h3>
              </div>
              <div className="text-sm font-medium space-y-2">
                <p>1. Stefano sends a topic</p>
                <p>2. AI deep research</p>
                <p>3. Script in Stefano&apos;s voice</p>
                <p>4. Review &amp; record</p>
                <p>5. Edit &amp; publish</p>
              </div>
              <div className="mt-3 pt-3 border-t-[2px] border-black">
                <p className="text-xs font-bold text-muted-foreground">OUTPUT: 8-15 min YouTube videos</p>
                <p className="text-xs font-bold text-muted-foreground">TARGET: 1-2/week</p>
              </div>
            </div>

            {/* Pipeline 2 */}
            <div className="border-[3px] border-black bg-orange-100 shadow-[4px_4px_0_#000] p-5">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 bg-orange-500 border-[2px] border-black shadow-[2px_2px_0_#000] flex items-center justify-center">
                  <Mic className="w-4 h-4 text-white" strokeWidth={3} />
                </div>
                <h3 className="font-black">Rants</h3>
              </div>
              <div className="text-sm font-medium space-y-2">
                <p>1. Stefano records rant</p>
                <p>2. Auto-transcribe</p>
                <p>3. Upload to YouTube</p>
                <p>4. Extract topics for Pipeline 1</p>
                <p>5. Feed into Shorts pipeline</p>
              </div>
              <div className="mt-3 pt-3 border-t-[2px] border-black">
                <p className="text-xs font-bold text-muted-foreground">OUTPUT: Raw long-form content</p>
                <p className="text-xs font-bold text-muted-foreground">TARGET: 2-3/week</p>
              </div>
            </div>

            {/* Pipeline 3 */}
            <div className="border-[3px] border-black bg-green-100 shadow-[4px_4px_0_#000] p-5">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 bg-green-500 border-[2px] border-black shadow-[2px_2px_0_#000] flex items-center justify-center">
                  <Scissors className="w-4 h-4 text-white" strokeWidth={3} />
                </div>
                <h3 className="font-black">Rants → Shorts</h3>
              </div>
              <div className="text-sm font-medium space-y-2">
                <p>1. AI finds best 30-90s clips</p>
                <p>2. Crop to 9:16 vertical</p>
                <p>3. Burn in captions</p>
                <p>4. Generate titles &amp; hashtags</p>
                <p>5. Deploy across platforms</p>
              </div>
              <div className="mt-3 pt-3 border-t-[2px] border-black">
                <p className="text-xs font-bold text-muted-foreground">OUTPUT: TikTok, Reels, YT Shorts</p>
                <p className="text-xs font-bold text-muted-foreground">TARGET: 1-2/day</p>
              </div>
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

      {/* The Telegram Bot */}
      <section className="mb-10">
        <h2 className="text-sm font-black tracking-[0.2em] uppercase mb-4 pb-2 border-b-[3px] border-black">
          THE TELEGRAM BOT
        </h2>
        <div className="border-[3px] border-black p-5 shadow-[4px_4px_0_#000] mb-4">
          <p className="text-sm font-medium mb-4">
            A dedicated Telegram bot that acts as the interface for the entire system. 
            Stefano doesn&apos;t need to learn any tools — just message the bot like he&apos;d message a friend.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-black text-sm mb-2">INPUTS</h4>
              <ul className="text-sm font-medium space-y-1">
                <li>🎤 Voice notes → auto-transcribed, stored as rant</li>
                <li>🎬 Video files → queued for processing</li>
                <li>💬 Text → captured as idea/topic</li>
                <li>📎 Links → saved as reference material</li>
              </ul>
            </div>
            <div>
              <h4 className="font-black text-sm mb-2">OUTPUTS</h4>
              <ul className="text-sm font-medium space-y-1">
                <li>📊 /status → pipeline overview</li>
                <li>✂️ "Shorts ready for review" → push notifications</li>
                <li>📝 "Script draft ready" → review prompts</li>
                <li>📈 "Weekly numbers" → growth report</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* The Funnel */}
      <section className="mb-10">
        <h2 className="text-sm font-black tracking-[0.2em] uppercase mb-4 pb-2 border-b-[3px] border-black">
          THE FUNNEL
        </h2>
        <div className="space-y-0">
          {[
            { label: "YouTube + Shorts", desc: "Free content builds trust & authority", bg: "bg-white", width: "w-full" },
            { label: "Profile / Bio Link", desc: "Viewers click through to learn more", bg: "bg-gray-50", width: "w-11/12" },
            { label: "Free Consultation", desc: "Book a call, no pitch", bg: "bg-yellow-100", width: "w-10/12" },
            { label: "Coaching Package", desc: "£597 – £5,997", bg: "bg-yellow-200", width: "w-9/12" },
            { label: "Community", desc: "Recurring monthly/yearly, events, meetups", bg: "bg-yellow-300", width: "w-8/12" },
          ].map((step, i) => (
            <div key={i} className={`${step.width} ${step.bg} border-[2px] border-black p-4 flex items-center justify-between`}>
              <div>
                <span className="font-black text-sm">{step.label}</span>
                <span className="text-xs text-muted-foreground font-medium ml-3">{step.desc}</span>
              </div>
              {i < 4 && <ArrowDown className="w-4 h-4" strokeWidth={3} />}
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="mb-10">
        <h2 className="text-sm font-black tracking-[0.2em] uppercase mb-4 pb-2 border-b-[3px] border-black">
          TIMELINE
        </h2>
        <div className="space-y-4">
          {[
            {
              phase: "MONTH 1",
              title: "Exploration",
              status: "CURRENT",
              items: [
                "Set up all pipelines",
                "Build Telegram bot",
                "Produce first batch of content",
                "Deploy across all platforms",
                "Measure what works",
              ]
            },
            {
              phase: "MONTH 2-3",
              title: "Consistency",
              status: "UPCOMING",
              items: [
                "Lock in posting cadence",
                "Optimize based on Month 1 data",
                "Scale shorts production",
                "First coaching sign-ups from content",
              ]
            },
            {
              phase: "MONTH 4-6",
              title: "Growth",
              status: "UPCOMING",
              items: [
                "SEO compounding",
                "Algorithm momentum",
                "Community waitlist opens",
                "Target: consistent coaching leads from YouTube",
              ]
            },
          ].map((phase) => (
            <div key={phase.phase} className="border-[3px] border-black shadow-[4px_4px_0_#000] p-5">
              <div className="flex items-center gap-3 mb-3">
                <span className="font-black text-sm bg-black text-white px-3 py-1">{phase.phase}</span>
                <span className="font-black text-lg">{phase.title}</span>
                {phase.status === "CURRENT" && (
                  <span className="text-xs font-bold bg-yellow-300 border-[2px] border-black px-2 py-0.5 shadow-[2px_2px_0_#000]">
                    NOW
                  </span>
                )}
              </div>
              <ul className="text-sm font-medium space-y-1">
                {phase.items.map((item, i) => (
                  <li key={i}>→ {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* What Stefano Does */}
      <section className="mb-10">
        <h2 className="text-sm font-black tracking-[0.2em] uppercase mb-4 pb-2 border-b-[3px] border-black">
          WHAT STEFANO DOES
        </h2>
        <div className="border-[3px] border-black bg-green-100 shadow-[4px_4px_0_#000] p-5">
          <p className="text-sm font-bold mb-3">The system is designed so Stefano&apos;s time investment is minimal:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-black text-sm mb-2">STEFANO</h4>
              <ul className="text-sm font-medium space-y-1">
                <li>✅ Record rants (phone, whenever inspiration hits)</li>
                <li>✅ Send ideas/topics via Telegram</li>
                <li>✅ Review &amp; approve scripts</li>
                <li>✅ Record scripted videos (30-45 min/video)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-black text-sm mb-2">THE SYSTEM</h4>
              <ul className="text-sm font-medium space-y-1">
                <li>⚙️ Transcribe everything</li>
                <li>⚙️ Deep research on topics</li>
                <li>⚙️ Write scripts in Stefano&apos;s voice</li>
                <li>⚙️ Extract &amp; edit shorts</li>
                <li>⚙️ Add captions, crop, format</li>
                <li>⚙️ Deploy across all platforms</li>
                <li>⚙️ Track analytics</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
