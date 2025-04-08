import Link from "next/link"
import { Clock } from "@/components/clock"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground p-6">
      <header className="grid grid-cols-3 items-center mb-16">
        <div className="text-sm text-muted-foreground justify-self-start">main</div>
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

      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-4 gap-4 max-w-5xl mx-auto">
        {/* faeth.studio - position 1 */}
        <div className="border border-border hover:border-foreground rounded-lg p-6 col-span-1 md:col-start-2 md:row-start-1 md:col-span-1 md:row-span-2 transition-colors duration-200 flex flex-col justify-between h-full min-h-[300px]">
          <h2 className="text-sm">faeth.studio</h2>
          <p className="text-sm text-muted-foreground">create, share, repeat</p>
        </div>

        {/* about us - position 2 */}
        <div className="border border-border hover:border-foreground rounded-lg p-6 col-span-1 md:col-start-3 md:row-start-1 md:col-span-1 md:row-span-2 transition-colors duration-200 flex flex-col justify-between h-full min-h-[300px]">
          <h2 className="text-sm">about us</h2>
          <div className="flex-1"></div>
          <p className="text-sm text-muted-foreground my-4">
            functional aesthetic studio focused on branding, products and video.
          </p>
          <div className="flex-1"></div>
          <p className="text-sm text-muted-foreground">vancouver based</p>
        </div>

        {/* portfolio - position 3 */}
        <div className="border border-border hover:border-foreground rounded-lg p-6 col-span-1 md:col-start-1 md:row-start-3 md:col-span-2 md:row-span-1 transition-colors duration-200">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-sm">portfolio</h2>
            <span className="text-sm text-muted-foreground">new</span>
          </div>
          <Link href="/portfolio">
            <button className="w-full bg-foreground text-background hover:bg-foreground/90 py-2 rounded-md transition-all duration-200 hover:shadow-md hover:translate-y-[-2px] text-sm">
              view
            </button>
          </Link>
        </div>

        {/* contact us - position 6 */}
        <div className="border border-border hover:border-foreground rounded-lg p-6 col-span-1 md:col-start-3 md:row-start-3 md:col-span-2 md:row-span-1 transition-colors duration-200">
          <h2 className="text-sm mb-8">contact us</h2>
          <div className="grid grid-cols-3 gap-2 mt-4">
           <a href="mailto:create@faeth.studio"
              className="bg-secondary hover:bg-accent text-center py-2 rounded-md transition-all duration-200 hover:shadow-md hover:translate-y-[-2px] text-sm">
              email
            </a>

            <a
              href="https://www.youtube.com/@faeth.studio"
               target="_blank"
  rel="noopener noreferrer"
              className="bg-secondary hover:bg-accent text-center py-2 rounded-md transition-all duration-200 hover:shadow-md hover:translate-y-[-2px] text-sm"
            >
              youtube
            </a>
           <a
  href="https://www.instagram.com/faeth.studio"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-secondary hover:bg-accent text-center py-2 rounded-md transition-all duration-200 hover:shadow-md hover:translate-y-[-2px] text-sm"
>
  inst
</a>
          </div>
        </div>

        {/* blog - position 7 */}
        <div className="border border-border hover:border-foreground rounded-lg p-6 col-span-1 md:col-start-2 md:row-start-4 md:col-span-1 md:row-span-1 transition-colors duration-200">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-sm">blog</h2>
            <span className="text-sm text-muted-foreground">new</span>
          </div>
          <Link href="/blog">
            <button className="w-full bg-secondary hover:bg-accent text-foreground py-2 rounded-md transition-all duration-200 hover:shadow-md hover:translate-y-[-2px] text-sm">
              read
            </button>
          </Link>
        </div>

        {/* theme toggle - position 8 */}
        <div className="border border-border hover:border-foreground rounded-lg p-6 col-span-1 md:col-start-3 md:row-start-4 md:col-span-2 md:row-span-1 transition-colors duration-200">
          <h2 className="text-sm mb-8">theme</h2>
          <ThemeToggle />
        </div>
      </div>
    </main>
  )
}

