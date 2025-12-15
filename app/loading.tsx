"use client"
import { useEffect, useState } from "react"

export default function Loader({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black text-white">
        <h1 className="text-2xl tracking-widest animate-pulse">
          Majestic Balinese Resort
        </h1>
      </div>
    )
  }

  return <>{children}</>
}