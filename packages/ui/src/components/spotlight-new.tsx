import * as React from "react"

import { cn } from "@workspace/ui/lib/utils"

type SpotlightProps = React.ComponentProps<"div"> & {
  gradientFirst?: string
  gradientSecond?: string
  gradientThird?: string
  translateY?: number
  width?: number
  height?: number
  smallWidth?: number
  duration?: number
  xOffset?: number
}

export function Spotlight({
  className,
  gradientFirst = "radial-gradient(68.54% 68.72% at 55.02% 31.46%, color-mix(in oklch, var(--primary), transparent 62%) 0, color-mix(in oklch, var(--primary), transparent 88%) 52%, transparent 82%)",
  gradientSecond = "radial-gradient(50% 50% at 50% 50%, color-mix(in oklch, var(--primary), transparent 78%) 0, color-mix(in oklch, var(--primary), transparent 92%) 80%, transparent 100%)",
  gradientThird = "radial-gradient(50% 50% at 50% 50%, color-mix(in oklch, white, transparent 88%) 0, color-mix(in oklch, var(--primary), transparent 94%) 80%, transparent 100%)",
  translateY = -340,
  width = 560,
  height = 1220,
  smallWidth = 240,
  duration = 8,
  xOffset = 72,
  ...props
}: SpotlightProps) {
  const baseStyles = {
    "--spotlight-width": `${width}px`,
    "--spotlight-height": `${height}px`,
    "--spotlight-small-width": `${smallWidth}px`,
    "--spotlight-y": `${translateY}px`,
    "--spotlight-x": `${xOffset}px`,
    "--spotlight-duration": `${duration}s`,
    "--spotlight-first": gradientFirst,
    "--spotlight-second": gradientSecond,
    "--spotlight-third": gradientThird,
  } as React.CSSProperties

  return (
    <div
      aria-hidden="true"
      className={cn("spotlight-new pointer-events-none absolute inset-0 overflow-hidden", className)}
      style={baseStyles}
      {...props}
    >
      <div className="spotlight-new__beam spotlight-new__beam--left">
        <span className="spotlight-new__main" />
        <span className="spotlight-new__small spotlight-new__small--one" />
        <span className="spotlight-new__small spotlight-new__small--two" />
      </div>
      <div className="spotlight-new__beam spotlight-new__beam--right">
        <span className="spotlight-new__main" />
        <span className="spotlight-new__small spotlight-new__small--one" />
        <span className="spotlight-new__small spotlight-new__small--two" />
      </div>
    </div>
  )
}
