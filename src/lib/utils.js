import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function mergeTw(...inputs) {
  return twMerge(clsx(inputs))
}