import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { FlickeringGrid } from "@/src/components/backgrounds/flickering-grid";
import { Seperator } from "@/components/ui/seperator";
import { Github } from "lucide-react";
import Image from "next/image";

export default async function Home() {
  const allRepositories = [
    ...(await fetch("https://api.github.com/users/soulthread2597/repos", { headers: { Accept: "application/vnd.github+json" }, next: { revalidate: 3600 } }).then(res => res.json()))
  ]

  const sortedRepositories = allRepositories.sort((a: any, b: any) => new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime())
  const topRepositories = sortedRepositories.slice(0, 5)

  return (
    <div className="flex min-h-screen w-full flex-col overflow-x-hidden">
      <section className="relative flex w-full items-center justify-center py-4 sm:py-8 md:py-12 lg:py-16 xl:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-purple-500/10 via-transparent to-purple-950/20 z-0" />
        <div className="absolute inset-0 bg-linear-to-tl from-purple-600/10 via-transparent to-purple-900/20 z-0" />
        <FlickeringGrid
          className="absolute inset-0 z-0 p-1.5"
          squareSize={5}
          gridGap={6}
          flickerChance={0.3}
          color="rgb(168, 85, 247)"
          maxOpacity={0.3}
        />
        <div className="relative z-10 flex flex-col items-center gap-6 md:gap-8 px-4 text-center md:px-6">
          <div className="rounded-full p-1 bg-linear-to-br from-purple-400 via-purple-500 to-purple-600">
            <Image
              src="/logo.png"
              alt="SoulThread"
              width={150}
              height={150}
              className="rounded-full w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-[150px] lg:h-[150px]"
            />
          </div>
          <div className="space-y-3 md:space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl bg-linear-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              Hi, I&apos;m SoulThread
            </h1>
            <Seperator variant="gradient-fade" />
            <p className="mx-auto max-w-[700px] text-base sm:text-lg text-muted-foreground md:text-xl px-4">
              A passionate developer and software engineering student building meaningful digital experiences.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      <Seperator variant="dots" />
      {/* <Seperator /> */}

      <section id="projects" className="w-full py-12 md:py-16">
        <div className="px-6 sm:px-12 md:px-16 lg:px-24 flex flex-col gap-8 md:gap-12 items-centers">
          <div className="text-center px-4">
            <h2 className="mb-4 text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl">
              Projects
            </h2>
            <p className="mx-auto max-w-[600px] text-sm sm:text-base text-muted-foreground md:text-lg">
              A showcase of my latest work and open-source contributions.
            </p>
          </div>

          <div className="flex gap-4 md:gap-6 flex-wrap justify-center">
            {topRepositories.map((repo: any) => (
              <Link key={repo.id} href={repo.html_url} target="_blank" className="min-h-[300px] w-full sm:w-[500px]">
                <Card className="h-full flex flex-col rounded-2xl hover:scale-[1.02] transition-all duration-200 shadow-md hover:shadow-lg bg-muted/50">
                  <div className="flex gap-2 text-muted-foreground p-3 pb-0 border-b truncate justify-center text-sm">
                    <Github className="mb-2 h-5 w-5" />
                    {repo.html_url.replace("https://", "")}
                  </div>
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row justify-between items-center w-full border-b-2 pb-3 gap-2">
                      <CardTitle className="truncate">{repo.name}</CardTitle>
                      <Badge variant="secondary" className="text-xs overflow-hidden whitespace-nowrap w-fit">
                        Last Updated: {new Date(repo.pushed_at).toLocaleDateString()}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <CardDescription>{repo.description}</CardDescription>
                  </CardContent>
                  <CardFooter className="border-t p-3">
                    <div className="flex flex-wrap gap-2">
                      {repo.language ? <Badge variant="outline" className="px-2 py-1 text-xs font-medium">
                        {repo.language}
                      </Badge> : null}

                      {repo.topics && repo.topics.length > 0 ? repo.topics.slice(0, 5).map((topic: string) => (
                        <Badge key={topic} variant="outline" className="px-2 py-1 text-xs font-medium">
                          {topic}
                        </Badge>
                      )) : null}

                      {repo.license && repo.license.name ? <Badge variant="outline" className="px-2 py-1 text-xs font-medium">
                        {repo.license.name}
                      </Badge> : null}
                    </div>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Seperator />

      <section id="contact" className="w-full py-12 md:py-16 lg:py-24 bg-muted/10">
        <div className="px-4 md:px-6">
          <div className="relative flex flex-col items-center gap-6 md:gap-8 overflow-hidden rounded-2xl border bg-linear-to-br from-card to-muted/40 hover:to-muted/80 transition-colors duration-200 p-8 sm:p-12 text-center shadow-lg md:p-16">
            <div className="space-y-3 md:space-y-4">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl">
                {`Ready to Build Something Amazing?`}
              </h2>
              <p className="mx-auto max-w-[600px] text-sm sm:text-base text-muted-foreground md:text-xl px-4">
                {`I'm always excited to discuss new projects, creative ideas, and opportunities to collaborate on innovative solutions.`}
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:gap-4 sm:flex-row w-full sm:w-auto px-4">
              <Button asChild size="lg">
                <Link href="/contact">Get In Touch</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/about">Learn More About Me</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}