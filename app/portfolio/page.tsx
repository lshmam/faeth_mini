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
      <header className="flex justify-between items-center mb-8">
        <div className="text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground transition">
            main
          </Link>
          <span className="mx-2">/</span>
          <span>portfolio</span>
        </div>
        <Clock />
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
        {currentProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center mt-8 gap-2">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-secondary rounded-md disabled:opacity-50 transition-colors duration-200"
          >
            prev
          </button>

          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`w-8 h-8 rounded-md flex items-center justify-center transition-colors duration-200 ${
                  currentPage === i + 1 ? "bg-foreground text-background" : "bg-secondary text-foreground"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>

          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-secondary rounded-md disabled:opacity-50 transition-colors duration-200"
          >
            next
          </button>
        </div>
      )}
    </main>
  )
}

