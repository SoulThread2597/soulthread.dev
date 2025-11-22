import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function About() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center py-12">
      <main className="flex w-full max-w-4xl flex-col gap-12 px-8">
        <div className="flex flex-col items-center gap-6 text-center">
          <h1 className="max-w-2xl text-5xl font-bold leading-tight tracking-tight">
            {"Hi, I'm SoulThread"}
          </h1>
          
          <p className="max-w-2xl text-lg text-muted-foreground">
            A passionate developer building meaningful digital experiences
          </p>
        </div>

        {/* Bio Section */}
        <div className="flex flex-col gap-6">
          <h2 className="text-3xl font-bold">My Story</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              {`I'm a full-stack developer with a passion for creating elegant solutions to complex problems. 
              My journey in tech started with curiosity and has evolved into a dedication to crafting 
              exceptional user experiences.`}
            </p>
            <p>
              {`I believe in writing clean, maintainable code and staying up-to-date with the latest 
              technologies and best practices. When I'm not coding, you can find me exploring new 
              frameworks, contributing to open source, or sharing knowledge with the developer community.`}
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="flex flex-col gap-6">
          <h2 className="text-3xl font-bold">What I Value</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Quality</h3>
              <p className="text-sm text-muted-foreground">
                Writing clean, maintainable code that stands the test of time
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Learning</h3>
              <p className="text-sm text-muted-foreground">
                Continuously growing and adapting to new technologies
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Community</h3>
              <p className="text-sm text-muted-foreground">
                Sharing knowledge and collaborating with fellow developers
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="flex flex-col items-center gap-4 rounded-lg border bg-muted/50 p-8 text-center">
          <h2 className="text-2xl font-bold">Let&apos;s Connect</h2>
          <p className="text-muted-foreground">
            Interested in working together or just want to say hi?
          </p>
          <div className="flex gap-4">
            <Badge variant="outline">
              <Link href="mailto:contact@soulthread.dev">Email</Link>
              </Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-accent">
              <Link href="https://github.com/soulthread2597" target="_blank" rel="noopener noreferrer">Github</Link>
            </Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-accent">
              <Link href="https://bio.site/soulthread" target="_blank" rel="noopener noreferrer">Bio.Site</Link>
            </Badge>
          </div>
        </div>
      </main>
    </div>
  );
}
