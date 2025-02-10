import React, { forwardRef } from "react"
import {mergeTw} from "../../lib/utils"

const Input = forwardRef(({ className, type, ...props }, ref,placeholder) => {

    return (
    <input
      type={type}
      className={mergeTw(
        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      placeholder={placeholder}
      {...props}
    />
  )
})
Input.displayName = "Input"

export { Input }