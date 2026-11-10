# Ready-made surf waves: Unity vs Unreal (November 2026)

**Goal:** A *prebuilt, visibly breaking, rideable surf wave*—ideally a hollow barrel—not another generic ocean shader.

## Best candidates

| Priority | Asset | Why try it | Main risk |
|---|---|---|---|
| **1 · Unreal** | [Oceanology NextGen / Pro](https://www.fab.com/listings/87c9af41-62b7-4e70-98e3-fc72eff016ab) | Vendor specifically describes waves that **rise, barrel and collapse**, with gameplay/physics queries. [Docs](https://galidar.com/oceanology-nextgen) | High-end PC/GPU requirements; surf behavior may be experimental |
| **2 · Unreal** | [KeraFlow](https://www.fab.com/listings/aee87e18-a961-4440-960a-59f83318bedf) | Terrain-aware shoaling, curling lips, plunging breakers and Blueprint wave queries | Windows/GPU-compute focus; platform support needs checking |
| **3 · Unity** | [Storm Breakers](https://github.com/Stormrider31/Storm-Breakers) | Free source project with breaking-water effects and an “Epic Surfing” demo | Abandoned; may require porting |
| **4 · Unity** | [Water System — Physics, Wakes, & Waves](https://assetstore.unity.com/packages/tools/game-toolkits/water-system-physics-wakes-waves-424292) | Advertises breaking surf and board-sport physics | Very new; no proven surf-game integration |
| **5 · Unity** | [Crest Water 5](https://assetstore.unity.com/packages/tools/particles-effects/crest-water-5-oceans-rivers-lakes-268614) | Mature water rendering and displacement sampling | **Not a turnkey barrel**; additional surfing-wave geometry needed |

**Choice:** Prototype **Oceanology on Unreal first**, with **KeraFlow** as the immediate fallback. If staying on Unity, inspect **Storm Breakers' surf demo** before buying another generic water system.

## What to demand before buying or committing

1. A **geometric curling lip/barrel**, not foam painted onto regular swells.
2. One **controllable peeling wave**, not just random ocean waves.
3. A board/controller that tracks the **visible moving face** via surface queries or collision.
4. A reproducible **30–60-second ride**, with bottom turn, lip interaction, and wipeout.

**Key warning:** These capabilities come from listings/docs/demos, **not an independent hands-on surfboard test**. Height-only sampling can fail for overhanging barrels; verify actual board/lip interactions.

## Copy/paste brief for the agent

> Stop building custom waves. Import the vendor's wave asset into a clean project and run its example scene. Make ONE repeatable peeling breaker with a visible curling lip, foam and collapse. Expose wave surface position/normal/velocity at nose, middle and tail; visualize samples. Demonstrate a board riding the actual rendered face for 30–60 seconds, including a bottom turn and lip encounter. Record video, settings and FPS. If the asset cannot form a real barrel or support gameplay collision/queries, report failure instead of substituting a generic ocean shader.

*Prepared from the November 9, 2026 research; verify live version, price and license on the linked storefronts.*