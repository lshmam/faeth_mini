"use client"

import Link from "next/link"
import { useState } from "react"
import { Clock } from "@/components/clock"
import { ProjectCard } from "@/components/project-card"

// Sample project data
const projects = [
  {
    id: 1,
    title: "digital experience",
    tags: ["design system", "research", "concept"],
  },
  {
    id: 2,
    title: "brand identity",
    tags: ["design system", "research", "startup"],
  },
  {
    id: 3,
    title: "web platform",
    tags: ["research", "tokens", "concept"],
  },
  {
    id: 4,
    title: "mobile app",
    tags: ["research", "tokens", "concept"],
  },
  {
    id: 5,
    title: "icon system",
    tags: ["iconography", "graphic design", "guidelines"],
  },
  {
    id: 6,
    title: "dashboard",
    tags: ["design system", "analytics", "saas"],
  },
  {
    id: 7,
    title: "e-commerce",
    tags: ["design system", "research", "concept"],
  },
  {
    id: 8,
    title: "landing page",
    tags: ["design system", "marketing", "concept"],
  },
]

const ITEMS_PER_PAGE = 6

export default function Portfolio() {
  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = Math.ceil(projects.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const currentProjects = projects.slice(startIndex, startIndex + ITEMS_PER_PAGE)

  return (
    <main className="min-h-screen bg-background text-foreground p-6">
      <header className="grid grid-cols-3 items-center mb-16">
        <div className="text-sm text-muted-foreground justify-self-start">
          <Link href="/" className="hover:text-foreground transition">
            main
          </Link>
          <span className="mx-2">/</span>
          <span>portfolio</span>
        </div>
        <Clock />
        <div className="text-sm text-muted-foreground justify-self-end">
          {/* Use different date formats for mobile and desktop */}
          <span className="hidden md:inline">
            {new Date()
              .toLocaleDateString("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric",
                year: "numeric",
              })
              .toLowerCase()}
          </span>
          <span className="md:hidden">
            {new Date()
              .toLocaleDateString("en-US", {
                day: "numeric",
                month: "numeric",
                year: "numeric",
              })
              .toLowerCase()}
          </span>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
        {currentProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center mt-8 gap-4 h-12 relative">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="w-8 h-8 flex items-center justify-center bg-secondary rounded-md disabled:opacity-50 transition-all duration-200 hover:bg-accent hover:shadow-sm text-sm"
            aria-label="Previous page"
          >
            ←
          </button>

          <div className="flex items-center gap-4">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`w-6 h-1 rounded-full transition-all duration-200 ${
                  currentPage === i + 1 ? "bg-foreground" : "bg-secondary"
                }`}
                aria-label={`Page ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="w-8 h-8 flex items-center justify-center bg-secondary rounded-md disabled:opacity-50 transition-all duration-200 hover:bg-accent hover:shadow-sm text-sm"
            aria-label="Next page"
          >
            →
          </button>
        </div>
      )}
    </main>
  )
}

