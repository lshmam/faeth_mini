import Link from "next/link";

interface BlogPostCardProps {
  post: {
    id: number;
    title: string;
    excerpt: string;
    date: string;
    tags: string[];
  };
}

export function BlogPostCard({ post }: BlogPostCardProps) {
  // Format the date to be more readable
  const formattedDate = new Date(post.date)
    .toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
    .toLowerCase();

  return (
    <div className="border border-border hover:border-foreground rounded-lg p-6 transition-colors duration-200">
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
        <h2 className="text-sm">{post.title}</h2>
        <span className="text-xs text-muted-foreground whitespace-nowrap">
          {formattedDate}
        </span>
      </div>
      <p className="text-muted-foreground text-sm mb-6">{post.excerpt}</p>
      <div className="flex flex-wrap gap-2 mb-6">
        {post.tags.map((tag, index) => (
          <span
            key={index}
            className="text-xs px-3 py-1 bg-secondary rounded-md text-muted-foreground"
          >
            {tag}
          </span>
        ))}
      </div>
      <Link href={`/blog/${post.id}`}>
        <button className="w-full bg-secondary hover:bg-accent text-foreground py-2 rounded-md transition-all duration-200 hover:shadow-md hover:translate-y-[-2px] text-sm">
          read
        </button>
      </Link>
    </div>
  );
}
