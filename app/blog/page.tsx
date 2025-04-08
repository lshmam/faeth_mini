"use client";

import Link from "next/link";
import { useState } from "react";
import { Clock } from "@/components/clock";
import { BlogPostCard } from "@/components/blog-post-card";

// Sample blog post data
const blogPosts = [
  {
    id: 1,
    title: "design principles for minimal interfaces",
    excerpt:
      "Exploring the core principles that make minimal interfaces effective and engaging for users.",
    date: "2023-12-15",
    tags: ["design", "minimalism", "ux"],
  },
  {
    id: 2,
    title: "typography in digital spaces",
    excerpt:
      "How typography choices impact user experience and brand perception in digital products.",
    date: "2023-11-28",
    tags: ["typography", "design", "branding"],
  },
  {
    id: 3,
    title: "the future of creative agencies",
    excerpt:
      "Examining trends and predictions for how creative agencies will evolve in the next decade.",
    date: "2023-10-17",
    tags: ["industry", "future", "trends"],
  },
  {
    id: 4,
    title: "case study: reimagining brand identity",
    excerpt:
      "A detailed look at our process for transforming a client's brand identity from concept to execution.",
    date: "2023-09-22",
    tags: ["case study", "branding", "process"],
  },
  {
    id: 5,
    title: "designing for accessibility",
    excerpt:
      "Why accessibility should be a core consideration in every design project and how to implement it effectively.",
    date: "2023-08-14",
    tags: ["accessibility", "inclusive design", "ux"],
  },
];

const POSTS_PER_PAGE = 3;

export default function Blog() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(blogPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const currentPosts = blogPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  return (
    <main className="min-h-screen bg-background text-foreground p-6">
      <header className="flex justify-between items-center mb-8">
        <div className="text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground transition">
            main
          </Link>
          <span className="mx-2">/</span>
          <span>blog</span>
        </div>
        <Clock />
      </header>

      <div className="max-w-3xl mx-auto">
        <h1 className="text-sm mb-8">latest posts</h1>

        <div className="space-y-6">
          {currentPosts.map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex justify-center mt-8 gap-2">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-secondary rounded-md disabled:opacity-50 transition-all duration-200 hover:bg-accent hover:shadow-md hover:translate-y-[-2px] text-sm"
            >
              prev
            </button>

            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`w-8 h-8 rounded-md flex items-center justify-center transition-all duration-200 hover:shadow-md hover:translate-y-[-2px] ${
                    currentPage === i + 1
                      ? "bg-foreground text-background"
                      : "bg-secondary text-foreground hover:bg-accent"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>

            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-secondary rounded-md disabled:opacity-50 transition-all duration-200 hover:bg-accent hover:shadow-md hover:translate-y-[-2px] text-sm"
            >
              next
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
