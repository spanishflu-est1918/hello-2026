import { Video, Mic, Scissors, Bot, ArrowDown, Youtube, Instagram, Music2, MessageCircle, BarChart3, Link2, Wrench, Upload, Search } from "lucide-react"

export default function PlanPage() {
  return (
    <div className="max-w-4xl">
      {/* Header */}
      <div className="mb-10">
        <p className="text-xs font-black tracking-[0.3em] text-muted-foreground mb-2">THE PLAN</p>
        <h1 className="text-4xl font-black tracking-tight mb-3">Implementation Spec</h1>
        <p className="text-lg text-muted-foreground font-medium">
          Everything that needs to be built, set up, and connected.
        </p>
      </div>

      {/* 1. Channels */}
      <section className="mb-10">
        <h2 className="text-sm font-black tracking-[0.2em] uppercase mb-4 pb-2 border-b-[3px] border-black">
          1. CHANNELS
        </h2>
        <p className="text-sm text-muted-foreground font-medium mb-4">
          Accounts to create with consistent branding. Profile pic, bio, link to coaching site on all.
        </p>
        <div className="space-y-0">
          {[
            { name: "YouTube", desc: "Main channel — long-form videos + Shorts", status: "TO SET UP", color: "bg-red-100", statusColor: "bg-red-500" },
            { name: "Instagram", desc: "Reels + stories + link in bio", status: "TO SET UP", color: "bg-pink-100", statusColor: "bg-pink-500" },
            { name: "TikTok", desc: "Shorts reposted + TikTok-native content", status: "TO SET UP", color: "bg-gray-100", statusColor: "bg-black" },
            { name: "Telegram Group", desc: "You + Stefano + Bot — the command center", status: "TO SET UP", color: "bg-blue-100", statusColor: "bg-blue-500" },
          ].map((ch) => (
            <div key={ch.name} className={`${ch.color} border-[2px] border-black p-4 flex items-center justify-between -mt-[2px] first:mt-0`}>
              <div>
                <span className="font-black text-sm">{ch.name}</span>
                <span className="text-xs text-muted-foreground font-medium ml-3">{ch.desc}</span>
              </div>
              <span className={`text-xs font-bold text-white ${ch.statusColor} border-[2px] border-black px-2 py-0.5`}>
                {ch.status}
              </span>
            </div>
          ))}
        </div>
        <div className="border-[2px] border-black border-t-0 p-4 bg-yellow-100">
          <p className="text-xs font-bold">BRANDING NEEDED: Channel name, profile picture, banner, bio copy, link structure. Stefano decides.</p>
        </div>
      </section>

      {/* 2. Telegram Bot */}
      <section className="mb-10">
        <h2 className="text-sm font-black tracking-[0.2em] uppercase mb-4 pb-2 border-b-[3px] border-black">
          2. TELEGRAM BOT
        </h2>
        <div className="border-[3px] border-black shadow-[4px_4px_0_#000] p-5 mb-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-blue-500 border-[2px] border-black shadow-[2px_2px_0_#000] flex items-center justify-center">
              <Bot className="w-5 h-5 text-white" strokeWidth={3} />
            </div>
            <div>
              <h3 className="font-black text-lg">The Input Layer</h3>
              <p className="text-xs font-bold text-muted-foreground">Stefano messages the bot like he&apos;d message a friend</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border-[2px] border-black p-4">
              <h4 className="font-black text-xs tracking-[0.15em] uppercase mb-2">RECEIVES</h4>
              <ul className="text-sm font-medium space-y-1">
                <li>🎤 Voice notes → auto-transcribe → store as rant</li>
                <li>🎬 Video → queue for processing</li>
                <li>💬 Text → capture as idea/topic</li>
                <li>📎 Links → save as reference</li>
              </ul>
            </div>
            <div className="border-[2px] border-black p-4">
              <h4 className="font-black text-xs tracking-[0.15em] uppercase mb-2">SENDS BACK</h4>
              <ul className="text-sm font-medium space-y-1">
                <li>📊 Pipeline status on demand</li>
                <li>✂️ &quot;3 shorts ready for review&quot;</li>
                <li>📝 &quot;Script draft for Topic X&quot;</li>
                <li>📈 Weekly growth report</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-[2px] border-black p-3 bg-gray-50">
          <p className="text-xs font-bold text-muted-foreground">TECH: Standalone Telegram bot (not OpenClaw). Python or Node. Deepgram for transcription. Stores data to this dashboard.</p>
        </div>
      </section>

      {/* 3. Pipelines */}
      <section className="mb-10">
        <h2 className="text-sm font-black tracking-[0.2em] uppercase mb-4 pb-2 border-b-[3px] border-black">
          3. CONTENT PIPELINES
        </h2>

        <div className="space-y-4">
          {/* Pipeline 1 */}
          <div className="border-[3px] border-black bg-purple-100 shadow-[4px_4px_0_#000] p-5">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 bg-purple-500 border-[2px] border-black shadow-[2px_2px_0_#000] flex items-center justify-center">
                <Video className="w-4 h-4 text-white" strokeWidth={3} />
              </div>
              <h3 className="font-black">Idea → Video</h3>
              <span className="text-xs font-bold text-muted-foreground ml-auto">1-2/week</span>
            </div>
            <div className="flex flex-wrap gap-1 mb-3">
              {["Topic", "→", "Deep Research", "→", "Script Draft", "→", "Stefano Review", "→", "Record", "→", "Edit", "→", "Publish"].map((step, i) => (
                <span key={i} className={step === "→" ? "text-sm font-bold" : "text-xs font-bold bg-white border-[2px] border-black px-2 py-1"}>
                  {step}
                </span>
              ))}
            </div>
            <p className="text-xs font-bold text-muted-foreground">
              TOOLS: librarium (research) → Claude (script) → Stefano records → ffmpeg (edit) → YouTube upload
            </p>
          </div>

          {/* Pipeline 2 */}
          <div className="border-[3px] border-black bg-orange-100 shadow-[4px_4px_0_#000] p-5">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 bg-orange-500 border-[2px] border-black shadow-[2px_2px_0_#000] flex items-center justify-center">
                <Mic className="w-4 h-4 text-white" strokeWidth={3} />
              </div>
              <h3 className="font-black">Rants</h3>
              <span className="text-xs font-bold text-muted-foreground ml-auto">2-3/week</span>
            </div>
            <div className="flex flex-wrap gap-1 mb-3">
              {["Stefano Records", "→", "Transcribe", "→", "Upload to YT", "→", "Extract Topics", "→", "Feed Shorts Pipeline"].map((step, i) => (
                <span key={i} className={step === "→" ? "text-sm font-bold" : "text-xs font-bold bg-white border-[2px] border-black px-2 py-1"}>
                  {step}
                </span>
              ))}
            </div>
            <p className="text-xs font-bold text-muted-foreground">
              TOOLS: Deepgram/Whisper (transcribe) → Claude (topic extraction) → YouTube upload
            </p>
          </div>

          {/* Pipeline 3 */}
          <div className="border-[3px] border-black bg-green-100 shadow-[4px_4px_0_#000] p-5">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 bg-green-500 border-[2px] border-black shadow-[2px_2px_0_#000] flex items-center justify-center">
                <Scissors className="w-4 h-4 text-white" strokeWidth={3} />
              </div>
              <h3 className="font-black">Rants → Shorts</h3>
              <span className="text-xs font-bold text-muted-foreground ml-auto">1-2/day</span>
            </div>
            <div className="flex flex-wrap gap-1 mb-3">
              {["Transcript", "→", "AI Find Clips", "→", "Crop 9:16", "→", "Burn Captions", "→", "Titles + Tags", "→", "Post Everywhere"].map((step, i) => (
                <span key={i} className={step === "→" ? "text-sm font-bold" : "text-xs font-bold bg-white border-[2px] border-black px-2 py-1"}>
                  {step}
                </span>
              ))}
            </div>
            <p className="text-xs font-bold text-muted-foreground">
              TOOLS: PreenCut or custom (clip finder) → ffmpeg (crop + captions) → platform APIs or manual upload
            </p>
          </div>
        </div>
      </section>

      {/* 4. Production Tools */}
      <section className="mb-10">
        <h2 className="text-sm font-black tracking-[0.2em] uppercase mb-4 pb-2 border-b-[3px] border-black">
          4. PRODUCTION TOOLS
        </h2>
        <div className="space-y-0">
          {[
            { tool: "Deepgram nova-2", purpose: "Transcription", cost: "$0.0043/min", status: "READY" },
            { tool: "librarium", purpose: "Multi-provider deep research", cost: "~$0.10/query", status: "READY" },
            { tool: "Claude", purpose: "Script writing, topic extraction, clip finding", cost: "~$20/mo", status: "READY" },
            { tool: "PreenCut", purpose: "AI clip extraction from rants", cost: "Free (open source)", status: "TO INSTALL" },
            { tool: "ffmpeg", purpose: "Video cutting, cropping, captions", cost: "Free", status: "READY" },
            { tool: "Fish Audio", purpose: "Voice cloning (optional, later)", cost: "Free self-hosted", status: "LATER" },
          ].map((t) => (
            <div key={t.tool} className="border-[2px] border-black p-3 flex items-center gap-4 -mt-[2px] first:mt-0">
              <span className="font-black text-sm w-40 shrink-0">{t.tool}</span>
              <span className="text-sm font-medium flex-1">{t.purpose}</span>
              <span className="text-xs font-bold text-muted-foreground w-28 text-right shrink-0">{t.cost}</span>
              <span className={`text-xs font-bold px-2 py-0.5 border-[2px] border-black shrink-0 ${
                t.status === "READY" ? "bg-green-200" : t.status === "LATER" ? "bg-gray-200" : "bg-yellow-200"
              }`}>
                {t.status}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Analytics */}
      <section className="mb-10">
        <h2 className="text-sm font-black tracking-[0.2em] uppercase mb-4 pb-2 border-b-[3px] border-black">
          5. ANALYTICS
        </h2>
        <p className="text-sm text-muted-foreground font-medium mb-4">
          All metrics feed into the Analytics page on this dashboard. Weekly report auto-sent via Telegram bot.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="border-[3px] border-black shadow-[4px_4px_0_#000] p-4">
            <h4 className="font-black text-xs tracking-[0.15em] uppercase mb-3">PLATFORM METRICS</h4>
            <ul className="text-sm font-medium space-y-1">
              <li><strong>YouTube</strong> — subs, views, watch time, CTR</li>
              <li><strong>Instagram</strong> — followers, reach, reel engagement</li>
              <li><strong>TikTok</strong> — followers, views, shares</li>
            </ul>
            <p className="text-xs font-bold text-muted-foreground mt-3">SOURCE: YouTube Data API, Instagram Graph API, TikTok API</p>
          </div>
          <div className="border-[3px] border-black shadow-[4px_4px_0_#000] p-4">
            <h4 className="font-black text-xs tracking-[0.15em] uppercase mb-3">FUNNEL METRICS</h4>
            <ul className="text-sm font-medium space-y-1">
              <li><strong>Views</strong> → how many people see the content</li>
              <li><strong>Link clicks</strong> → who clicks through (UTM tracked)</li>
              <li><strong>Consultations booked</strong> → from landing page</li>
              <li><strong>Paid clients</strong> → attributed to content</li>
            </ul>
            <p className="text-xs font-bold text-muted-foreground mt-3">SOURCE: UTM params + landing page analytics</p>
          </div>
        </div>

        <div className="border-[2px] border-black p-3 bg-yellow-100">
          <p className="text-xs font-bold">KEY METRIC: Not followers — conversion. Views → clicks → bookings → revenue. That&apos;s the number that matters.</p>
        </div>
      </section>

      {/* 6. Deployment */}
      <section className="mb-10">
        <h2 className="text-sm font-black tracking-[0.2em] uppercase mb-4 pb-2 border-b-[3px] border-black">
          6. DEPLOYMENT WORKFLOW
        </h2>
        <div className="border-[3px] border-black shadow-[4px_4px_0_#000] p-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-black text-xs tracking-[0.15em] uppercase mb-2">LONG-FORM (YOUTUBE)</h4>
              <ul className="text-sm font-medium space-y-1">
                <li>→ Manual upload (Stefano reviews first)</li>
                <li>→ Custom thumbnail per video</li>
                <li>→ SEO: title, description, tags</li>
                <li>→ End screen + cards linking to coaching</li>
              </ul>
            </div>
            <div>
              <h4 className="font-black text-xs tracking-[0.15em] uppercase mb-2">SHORTS (ALL PLATFORMS)</h4>
              <ul className="text-sm font-medium space-y-1">
                <li>→ Batch upload or scheduling tool</li>
                <li>→ Same short → YT Shorts + Reels + TikTok</li>
                <li>→ Platform-specific captions/hashtags</li>
                <li>→ UTM links in bio per platform</li>
              </ul>
            </div>
          </div>
          <div className="mt-4 pt-3 border-t-[2px] border-black">
            <p className="text-xs font-bold text-muted-foreground">
              SCHEDULING: Manual for Month 1. Evaluate Buffer/Later/direct API uploads once volume justifies it.
            </p>
          </div>
        </div>
      </section>

      {/* 7. Who Does What */}
      <section className="mb-10">
        <h2 className="text-sm font-black tracking-[0.2em] uppercase mb-4 pb-2 border-b-[3px] border-black">
          7. WHO DOES WHAT
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border-[3px] border-black shadow-[4px_4px_0_#000] p-5">
            <h4 className="font-black text-sm mb-3">STEFANO</h4>
            <ul className="text-sm font-medium space-y-1">
              <li>✅ Record rants (phone, whenever)</li>
              <li>✅ Send ideas via Telegram</li>
              <li>✅ Review &amp; approve scripts</li>
              <li>✅ Record scripted videos</li>
              <li>✅ Decide on branding/channel name</li>
            </ul>
          </div>
          <div className="border-[3px] border-black bg-yellow-100 shadow-[4px_4px_0_#000] p-5">
            <h4 className="font-black text-sm mb-3">US</h4>
            <ul className="text-sm font-medium space-y-1">
              <li>⚙️ Build &amp; maintain all pipelines</li>
              <li>⚙️ Telegram bot</li>
              <li>⚙️ Transcription &amp; research</li>
              <li>⚙️ Script writing</li>
              <li>⚙️ Shorts extraction &amp; editing</li>
              <li>⚙️ Platform deployment</li>
              <li>⚙️ Analytics dashboard</li>
              <li>⚙️ Weekly reporting</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
