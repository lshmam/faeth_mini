"use client"

import type { ReactNode } from "react"
import { useFavicon } from "@/hooks/use-favicon"

interface FaviconProviderProps {
  children: ReactNode
}

export function FaviconProvider({ children }: FaviconProviderProps) {
  // Use the custom hook to handle favicon switching
  useFavicon()

  // Just render children, the hook handles the favicon logic
  return <>{children}</>
}

