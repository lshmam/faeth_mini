"use client"

import { useTheme } from "next-themes"
import { useEffect } from "react"

export function useFavicon() {
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    // Get the existing favicon element or create a new one
    let link = document.querySelector("link[rel*='icon']") as HTMLLinkElement

    if (!link) {
      link = document.createElement("link")
      link.rel = "icon"
      document.head.appendChild(link)
    }

    // Set the appropriate favicon based on the theme
    if (resolvedTheme === "dark") {
      link.href = "/faethlogo-w.svg" // White logo for dark mode
    } else {
      link.href = "/faethlogo-d.svg" // Dark logo for light mode
    }
  }, [resolvedTheme])
}

