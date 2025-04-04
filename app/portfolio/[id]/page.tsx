import Link from "next/link"
import { Clock } from "@/components/clock"
import { notFound } from "next/navigation"

// Sample project data with more details
const projects = [
  {
    id: 1,
    title: "digital experience",
    description:
      "A comprehensive digital experience platform designed for modern businesses. This project focused on creating an intuitive interface with a robust design system.",
    tags: ["design system", "research", "concept"],
    year: "2023",
    client: "tech innovators",
  },
  {
    id: 2,
    title: "brand identity",
    description:
      "Complete brand identity redesign for a growing startup. The project included logo design, typography, color palette, and brand guidelines.",
    tags: ["design system", "research", "startup"],
    year: "2023",
    client: "startup ventures",
  },
  {
    id: 3,
    title: "web platform",
    description:
      "A scalable web platform built with modern technologies. The focus was on performance, accessibility, and user experience.",
    tags: ["research", "tokens", "concept"],
    year: "2022",
    client: "digital solutions",
  },
  {
    id: 4,
    title: "mobile app",
    description:
      "Intuitive mobile application designed for both iOS and Android platforms. The project emphasized user-centered design principles.",
    tags: ["research", "tokens", "concept"],
    year: "2022",
    client: "app innovators",
  },
  {
    id: 5,
    title: "icon system",
    description:
      "Comprehensive icon system with over 200 unique icons. The system was designed to be scalable, consistent, and adaptable to various contexts.",
    tags: ["iconography", "graphic design", "guidelines"],
    year: "2021",
    client: "design collective",
  },
  {
    id: 6,
    title: "dashboard",
    description:
      "Data visualization dashboard for a SaaS platform. The project focused on presenting complex data in an accessible and actionable format.",
    tags: ["design system", "analytics", "saas"],
    year: "2021",
    client: "data analytics",
  },
  {
    id: 7,
    title: "e-commerce",
    description:
      "Full e-commerce platform with a focus on conversion optimization and user experience. The design prioritized simplicity and ease of navigation.",
    tags: ["design system", "research", "concept"],
    year: "2020",
    client: "retail solutions",
  },
  {
    id: 8,
    title: "landing page",
    description:
      "High-converting landing page designed for a product launch. The project included A/B testing and iterative design improvements.",
    tags: ["design system", "marketing", "concept"],
    year: "2020",
    client: "product launch",
  },
]

export default function ProjectDetail({ params }: { params: { id: string } }) {
  const projectId = Number.parseInt(params.id)
  const project = projects.find((p) => p.id === projectId)

  if (!project) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background text-foreground p-6">
      <header className="flex justify-between items-center mb-8">
        <div className="text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground transition">
            main
          </Link>
          <span className="mx-2">/</span>
          <Link href="/portfolio" className="hover:text-foreground transition">
            portfolio
          </Link>
          <span className="mx-2">/</span>
          <span>{project.title}</span>
        </div>
        <Clock />
      </header>

      <div className="max-w-3xl mx-auto">
        <div className="border border-border rounded-lg p-8">
          <h1 className="text-2xl mb-6">{project.title}</h1>

          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag, index) => (
              <span key={index} className="text-xs px-3 py-1 bg-secondary rounded-md text-muted-foreground">
                {tag}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h2 className="text-sm text-muted-foreground mb-2">description</h2>
              <p className="text-foreground">{project.description}</p>
            </div>

            <div>
              <div className="mb-4">
                <h2 className="text-sm text-muted-foreground mb-2">year</h2>
                <p className="text-foreground">{project.year}</p>
              </div>

              <div>
                <h2 className="text-sm text-muted-foreground mb-2">client</h2>
                <p className="text-foreground">{project.client}</p>
              </div>
            </div>
          </div>

          <div className="h-64 bg-secondary rounded-lg mb-8 flex items-center justify-center">
            <p className="text-muted-foreground">project image placeholder</p>
          </div>

          <div className="flex justify-between">
            {projectId > 1 && (
              <Link href={`/portfolio/${projectId - 1}`}>
                <button className="px-4 py-2 bg-secondary hover:bg-accent rounded-md transition-colors duration-200">
                  previous project
                </button>
              </Link>
            )}

            {projectId < projects.length && (
              <Link href={`/portfolio/${projectId + 1}`} className="ml-auto">
                <button className="px-4 py-2 bg-secondary hover:bg-accent rounded-md transition-colors duration-200">
                  next project
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}

