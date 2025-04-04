import Link from "next/link"
import { Clock } from "@/components/clock"
import { notFound } from "next/navigation"

// Sample blog post data with full content
const blogPosts = [
  {
    id: 1,
    title: "design principles for minimal interfaces",
    content: `
      Minimalism in interface design is more than just an aesthetic choice—it's a functional approach that enhances usability and user experience.

      When designing minimal interfaces, consider these core principles:

      1. Purposeful reduction: Remove elements that don't serve a clear purpose. Every component should justify its existence.

      2. Visual hierarchy: With fewer elements, the importance of hierarchy increases. Guide users through content with deliberate sizing, spacing, and contrast.

      3. Negative space: Empty space isn't truly empty—it's a design element that provides breathing room and focus.

      4. Typography as interface: In minimal designs, typography often does the heavy lifting. Choose typefaces and sizes carefully.

      5. Subtle feedback: Interaction feedback should be present but unobtrusive. Small animations and state changes maintain the minimal aesthetic while providing necessary user guidance.

      The most successful minimal interfaces achieve simplicity without sacrificing functionality. They require more thought, not less—stripping away the unnecessary to reveal what's truly important.
    `,
    date: "2023-12-15",
    tags: ["design", "minimalism", "ux"],
  },
  {
    id: 2,
    title: "typography in digital spaces",
    content: `
      Typography is the voice of your digital interface—it speaks to users before they even read the words.

      In digital spaces, typography faces unique challenges and opportunities:

      Screen rendering: Different devices render type differently. Test your typography across devices to ensure consistency.

      Readability at scale: Digital typography must work at multiple sizes, from large headlines to small interface labels.

      Variable environments: Users may view your content in different lighting conditions, on different backgrounds, and at different distances.

      Responsive considerations: Typography must adapt gracefully across viewport sizes without losing its character.

      When selecting typefaces for digital products, consider:

      Performance: Web fonts impact loading times. Balance aesthetic needs with performance requirements.

      Versatility: Choose typefaces with multiple weights and styles to create hierarchy without introducing additional font families.

      Accessibility: Ensure sufficient contrast and readability for all users, including those with visual impairments.

      The most effective digital typography feels invisible—it delivers content without calling attention to itself, except when intentionally used as a design element.
    `,
    date: "2023-11-28",
    tags: ["typography", "design", "branding"],
  },
  {
    id: 3,
    title: "the future of creative agencies",
    content: `
      The creative agency landscape is evolving rapidly, driven by technological advancement, changing client expectations, and new models of collaboration.

      Several trends are shaping the future:

      Specialized expertise: The era of the full-service generalist agency is giving way to specialized studios with deep expertise in specific domains.

      Embedded partnerships: Rather than project-based engagements, agencies are forming long-term embedded partnerships with clients, functioning as extensions of internal teams.

      Remote collaboration: Distributed teams allow agencies to access global talent and provide 24/7 service models across time zones.

      AI augmentation: Artificial intelligence is automating routine tasks, allowing creative professionals to focus on higher-value strategic and creative work.

      Outcome-based pricing: Moving beyond hourly rates and retainers, forward-thinking agencies are exploring pricing models tied directly to business outcomes.

      Agencies that thrive in this new landscape will be those that embrace adaptability, continuously evolve their capabilities, and focus on delivering measurable value rather than just creative outputs.
    `,
    date: "2023-10-17",
    tags: ["industry", "future", "trends"],
  },
  {
    id: 4,
    title: "case study: reimagining brand identity",
    content: `
      This case study examines our recent collaboration with TechFusion, a technology company seeking to reposition itself in an evolving market.

      Challenge:
      TechFusion had built a solid reputation in enterprise software, but their visual identity and messaging no longer reflected their expanded capabilities in AI and machine learning. They needed a brand refresh that would honor their heritage while signaling their future direction.

      Process:
      1. Discovery: We conducted stakeholder interviews, competitive analysis, and customer research to understand perceptions and opportunities.

      2. Strategy: Based on our findings, we developed a brand strategy that positioned TechFusion at the intersection of established enterprise reliability and cutting-edge innovation.

      3. Identity development: We created a flexible visual system that maintained recognizable elements of their existing identity while introducing new components that conveyed technological sophistication.

      4. Implementation: We developed comprehensive guidelines and templates, then worked with their team to roll out the new identity across digital platforms, marketing materials, and product interfaces.

      Results:
      The refreshed brand identity led to a 40% increase in website engagement, significantly higher application rates for technical positions, and positive feedback from existing clients. Most importantly, it gave TechFusion a cohesive visual language that accurately represented their evolved capabilities.

      Key learnings:
      - Brand evolution requires balancing continuity and change
      - Cross-functional workshops yield better results than isolated design decisions
      - Implementation support is as important as the design itself
    `,
    date: "2023-09-22",
    tags: ["case study", "branding", "process"],
  },
  {
    id: 5,
    title: "designing for accessibility",
    content: `
      Accessibility in design isn't just a legal requirement or moral imperative—it's a pathway to better products for everyone.

      Core principles of accessible design:

      Perceivable: Information must be presentable in ways all users can perceive. This means providing text alternatives for non-text content, creating content that can be presented in different ways, and making it easier for users to see and hear content.

      Operable: User interface components and navigation must be operable by all. This includes making all functionality available from a keyboard, giving users enough time to read and use content, and not designing content in ways known to cause seizures.

      Understandable: Information and operation of the user interface must be understandable. This means making text readable and predictable, and helping users avoid and correct mistakes.

      Robust: Content must be robust enough to be interpreted reliably by a wide variety of user agents, including assistive technologies.

      Common misconceptions:

      "Accessible design is only for people with disabilities." In reality, accessible design benefits everyone. Features like captions, voice control, and high contrast modes are used by people with and without disabilities.

      "Accessibility limits creativity." The constraints of accessible design often lead to more innovative solutions that work better for all users.

      "Accessibility can be added at the end." Accessibility is most effective and efficient when integrated from the beginning of the design process.

      By embracing accessible design practices, we create products that are more usable, reach larger audiences, and often discover solutions that improve the experience for all users.
    `,
    date: "2023-08-14",
    tags: ["accessibility", "inclusive design", "ux"],
  },
]

export default function BlogPost({ params }: { params: { id: string } }) {
  const postId = Number.parseInt(params.id)
  const post = blogPosts.find((p) => p.id === postId)

  if (!post) {
    notFound()
  }

  // Format the date to be more readable
  const formattedDate = new Date(post.date)
    .toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
    .toLowerCase()

  return (
    <main className="min-h-screen bg-background text-foreground p-6">
      <header className="flex justify-between items-center mb-8">
        <div className="text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground transition">
            main
          </Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-foreground transition">
            blog
          </Link>
          <span className="mx-2">/</span>
          <span>{post.title}</span>
        </div>
        <Clock />
      </header>

      <article className="max-w-2xl mx-auto">
        <div className="border border-gray-800 rounded-lg p-8">
          <div className="mb-8">
            <h1 className="text-xl mb-2">{post.title}</h1>
            <div className="text-xs text-muted-foreground">{formattedDate}</div>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag, index) => (
              <span key={index} className="text-xs px-3 py-1 bg-secondary rounded-md text-muted-foreground">
                {tag}
              </span>
            ))}
          </div>

          <div className="prose prose-invert max-w-none">
            {post.content.split("\n\n").map((paragraph, index) => (
              <p key={index} className="mb-4 text-sm text-muted-foreground">
                {paragraph.trim()}
              </p>
            ))}
          </div>

          <div className="flex justify-between mt-12">
            {postId > 1 && (
              <Link href={`/blog/${postId - 1}`}>
                <button className="px-4 py-2 bg-secondary hover:bg-accent rounded-md transition-colors duration-200">
                  previous post
                </button>
              </Link>
            )}

            {postId < blogPosts.length && (
              <Link href={`/blog/${postId + 1}`} className="ml-auto">
                <button className="px-4 py-2 bg-secondary hover:bg-accent rounded-md transition-colors duration-200">
                  next post
                </button>
              </Link>
            )}
          </div>
        </div>
      </article>
    </main>
  )
}

