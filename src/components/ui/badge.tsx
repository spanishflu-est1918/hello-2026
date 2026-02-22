import * as React from "react"
import { cn } from "@/lib/utils"

interface BadgeProps extends React.ComponentProps<"span"> {
  variant?: "default" | "blue" | "orange" | "green" | "purple" | "red"
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  const variants: Record<string, string> = {
    default: "bg-gray-100 text-black",
    blue: "bg-blue-200 text-black",
    orange: "bg-orange-200 text-black",
    green: "bg-emerald-200 text-black",
    purple: "bg-purple-200 text-black",
    red: "bg-red-200 text-black",
  }

  return (
    <span
      className={cn(
        "inline-flex items-center border-[2px] border-black px-2.5 py-0.5 text-xs font-bold shadow-[2px_2px_0_#000]",
        variants[variant],
        className
      )}
      {...props}
    />
  )
}

export { Badge }
