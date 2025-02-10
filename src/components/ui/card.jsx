import { forwardRef } from "react"
import {mergeTw} from "../../lib/utils"


const Card = forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={mergeTw("rounded-lg border bg-card text-card-foreground shadow-sm", className)}
    {...props}
  />
))
Card.displayName = "Card"

const CardContent = forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={mergeTw("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

export { Card, CardContent }