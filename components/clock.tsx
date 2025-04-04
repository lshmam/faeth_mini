"use client"

import { useEffect, useState } from "react"

export function Clock() {
  const [time, setTime] = useState("")
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()

      // Format time as HH:MM:SS
      const timeString = now.toLocaleTimeString("en-US", {
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      })

      setTime(timeString)
      setLoaded(true)
    }

    // Update immediately and then every second
    updateTime()
    const interval = setInterval(updateTime, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="text-center">
      <div className="text-sm text-muted-foreground">{loaded ? time : "time"}</div>
    </div>
  )
}

