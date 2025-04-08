import Link from "next/link";

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    tags: string[];
  };
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="border border-border hover:border-foreground rounded-lg p-6 flex flex-col transition-colors duration-200">
      <h2 className="text-sm mb-4">{project.title}</h2>

      <div className="flex flex-wrap gap-2 mb-8">
        {project.tags.map((tag, index) => (
          <span
            key={index}
            className="text-sm px-3 py-1 bg-secondary rounded-md text-muted-foreground"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-auto">
        <Link href={`/portfolio/${project.id}`}>
          <button className="w-full bg-secondary hover:bg-accent text-foreground py-2 rounded-md transition-all duration-200 hover:shadow-md hover:translate-y-[-2px] text-sm">
            {" "}
            view
          </button>
        </Link>
      </div>
    </div>
  );
}
