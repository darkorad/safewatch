import * as React from "react"
import LinkNext from 'next/link';

import { cn } from "@/lib/utils"

const Link = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentProps<typeof LinkNext>
>(({ className, ...props }, ref) => {
  return (
    <LinkNext
      className={cn(
        "text-primary underline-offset-4 hover:underline",
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Link.displayName = "Link"

export { Link }
