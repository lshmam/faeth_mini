import Link from "next/link";
import { Clock } from "@/components/clock";
import { notFound } from "next/navigation";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "ollo: a mindfulness wearable",
    description:
      "A wearable device designed to enhance focus and self-awareness through mindfulness techniques. It blends hardware innovation with behavioral design.",
    tags: ["research", "concept", "development"],
    year: "2023",
    client: "ollo labs",
    url: "https://example.com/ollo",
  },
  {
    id: 2,
    title: "chakra.engineering",
    description:
      "A digital experience studio reimagining engineering workflows through immersive product design and branding.",
    tags: ["digital-experience", "product design", "startup"],
    year: "2023",
    client: "chakra.engineering",
    url: "https://example.com/chakra",
  },
  {
    id: 3,
    title: "daemonwear",
    description:
      "A headless eCommerce fashion brand blending digital storytelling with performance marketing and sleek design.",
    tags: ["headless-ecommerce", "marketing", "design"],
    year: "2024",
    client: "daemonwear",
    url: "https://example.com/daemonwear",
  },
  {
    id: 4,
    title: "silo health",
    description:
      "Blockchain-based medical record sharing platform aimed at giving users control and privacy over their health data.",
    tags: ["blockchain", "branding", "concept"],
    year: "2023",
    client: "silo health",
    url: "https://example.com/silo",
  },
  {
    id: 5,
    title: "corechallenges",
    description:
      "A platform for public discourse on the world's most pressing issues. Users can share perspectives and explore structured debates.",
    tags: ["fullstack", "concept", "platform"],
    year: "2024",
    client: "corechallenges",
    url: "https://example.com/corechallenges",
  },
  {
    id: 6,
    title: "bubbletask",
    description:
      "A minimalistic and visual todo dashboard integrating task prioritization, time tracking, and productivity analytics.",
    tags: ["design system", "analytics", "saas"],
    year: "2023",
    client: "bubbletask",
    url: "https://example.com/bubbletask",
  },
  {
    id: 7,
    title: "driving school landing page",
    description:
      "A sleek, conversion-focused landing page for a local driving school, optimized for SEO and lead generation.",
    tags: ["design", "lead generation"],
    year: "2024",
    client: "eastvan driving school",
    url: "https://example.com/driving",
  },
];

export default function ProjectDetail({ params }: { params: { id: string } }) {
  const projectId = Number.parseInt(params.id);
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    notFound();
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
              <span
                key={index}
                className="text-xs px-3 py-1 bg-secondary rounded-md text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h2 className="text-sm text-muted-foreground mb-2">
                description
              </h2>
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

          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block h-64 bg-secondary hover:bg-accent rounded-lg mb-8 flex items-center justify-center transition-all duration-200 hover:shadow-md hover:translate-y-[-2px] relative"
          >
            <p className="text-muted-foreground">project image placeholder</p>
            <div className="absolute top-3 right-3 flex items-center gap-2 text-sm bg-background/20 backdrop-blur-sm px-3 py-1 rounded-md">
              <span>view</span>
              <ExternalLink size={16} />
            </div>
          </a>

          <div className="flex justify-between">
            {projectId > 1 && (
              <Link href={`/portfolio/${projectId - 1}`}>
                <button className="px-4 py-2 bg-secondary hover:bg-accent rounded-md transition-all duration-200 hover:shadow-md hover:translate-y-[-2px] text-sm">
                  previous project
                </button>
              </Link>
            )}

            {projectId < projects.length && (
              <Link href={`/portfolio/${projectId + 1}`} className="ml-auto">
                <button className="px-4 py-2 bg-secondary hover:bg-accent rounded-md transition-all duration-200 hover:shadow-md hover:translate-y-[-2px] text-sm">
                  next project
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
