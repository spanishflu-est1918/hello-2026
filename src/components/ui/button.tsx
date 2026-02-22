import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "@/lib/utils"

interface ButtonProps extends React.ComponentProps<"button"> {
  asChild?: boolean
  variant?: "default" | "secondary" | "outline" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
}

function Button({ className, variant = "default", size = "default", asChild = false, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : "button"
  
  const variants: Record<string, string> = {
    default: "bg-black text-white hover:bg-gray-800",
    secondary: "bg-white text-black hover:bg-gray-50",
    outline: "bg-white text-black",
    ghost: "border-0 shadow-none hover:bg-gray-100",
    link: "border-0 shadow-none underline-offset-4 hover:underline",
  }

  const sizes: Record<string, string> = {
    default: "h-10 px-5 py-2 text-sm",
    sm: "h-8 px-3 text-xs",
    lg: "h-12 px-8 text-base",
    icon: "h-10 w-10",
  }

  return (
    <Comp
      className={cn(
        "inline-flex items-center justify-center font-bold border-[2px] border-black shadow-[3px_3px_0_#000] transition-all active:translate-x-[3px] active:translate-y-[3px] active:shadow-none hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0_#000] cursor-pointer disabled:opacity-50",
        variants[variant],
        sizes[size],
        variant === "ghost" || variant === "link" ? "" : "",
        className
      )}
      {...props}
    />
  )
}

export { Button }
