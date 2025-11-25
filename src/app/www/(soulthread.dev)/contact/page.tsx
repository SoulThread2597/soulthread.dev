import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import type { Metadata } from "next"
import { Seperator } from "@/components/ui/seperator";
import { Mail, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: 'Contact',
}

export default function Contact() {
  return (
    <div className="flex min-h-screen w-full flex-col overflow-x-hidden">
      <section className="relative w-full py-12 md:py-16 lg:py-24 overflow-hidden">
        <div className="relative z-10 px-6 sm:px-12 md:px-16 lg:px-24 flex flex-col gap-8 md:gap-12">
          <div className="flex flex-col items-center gap-4 md:gap-6 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
              Let&apos;s Build Something
              <span className="block bg-linear-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent pb-2 leading-tight">
                Amazing Together
              </span>
            </h1>

            <p className="mx-auto max-w-[700px] text-base sm:text-lg text-muted-foreground md:text-xl px-4">
              Whether you&apos;re working on an exciting project, need a collaborator, or just want to
              connect with a fellow developer—I&apos;m all ears. Drop me a message and let&apos;s start a conversation.
            </p>
          </div>
        </div>
      </section>

      <Seperator />

      <section id="contact" className="w-full bg-muted/50 py-12 md:py-16 lg:py-24">
        <div className="px-6 sm:px-12 md:px-16 flex flex-col gap-8 md:gap-12 mx-auto">
          <div className="flex flex-wrap flex-row gap-4 md:gap-8 justify-center">
            <div className="space-y-4 md:space-y-6 w-full sm:w-[450px]">
              <Card className="rounded-2xl shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">Get in Touch</CardTitle>
                  <CardDescription>
                    Prefer to reach out directly? Here are the best ways to contact me.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Link
                    href="mailto:contact@soulthread.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 hover:bg-primary/10 transition-colors rounded-2xl p-2 group"
                  >
                    <div className="rounded-lg bg-primary/10 p-3">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <p className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                        contact@soulthread.dev
                      </p>
                    </div>
                  </Link>

                  <div className="flex items-start gap-4 p-2">
                    <div className="rounded-lg bg-primary/10 p-3">
                      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-accent-foreground">
                        <title>Discord</title>
                        <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold">Discord</h3>
                      <p className="text-sm text-muted-foreground">
                        @soulthread
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="rounded-2xl shadow-lg bg-primary/5 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-xl">Quick Response Time</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    I typically respond to messages within 24-48 hours. For urgent inquiries,
                    please mention it in the subject line.
                  </p>
                </CardHeader>
              </Card>
            </div>

            <Card className="rounded-2xl shadow-lg h-fit w-full sm:w-[450px]">
              <CardHeader>
                <CardTitle className="text-2xl">Socials</CardTitle>
                <CardDescription>
                  Connect with me on these platforms.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <Link
                  href="https://github.com/soulthread2597"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 hover:bg-primary/10 transition-colors rounded-2xl p-2 group"
                >
                  <div className="rounded-lg bg-primary/10 p-3">
                    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-accent-foreground">
                      <title>GitHub</title>
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">GitHub</h3>
                    <p className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                      @soulthread2597
                    </p>
                  </div>
                </Link>

                <Link
                  href="https://bio.site/soulthread"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 hover:bg-primary/10 transition-colors rounded-2xl p-2 group"
                >
                  <div className="rounded-lg bg-primary/10 p-3">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Bio Site</h3>
                    <p className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                      bio.site/soulthread
                    </p>
                  </div>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Seperator />

      <section id="collab" className="w-full py-12 md:py-16 lg:py-24">
        <div className="px-6 sm:px-12 md:px-16 lg:px-24 flex flex-col gap-8 md:gap-12 mx-auto">
          <div className="text-center space-y-3 md:space-y-4 px-4">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl">
              Looking for Collaboration?
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground md:text-lg max-w-2xl mx-auto">
              I&apos;m always interested in hearing about new projects, creative ideas, and opportunities to collaborate
              on innovative solutions. Whether you&apos;re looking for help with development, need a contributor
              for your open-source project, or just want to connect with fellow developers, don&apos;t hesitate to reach out.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 md:gap-6 justify-center">
            <Card className="rounded-2xl shadow-md w-full sm:w-[300px]">
              <CardHeader>
                <CardTitle>Open Source</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Interested in contributing to open source projects and building together.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="rounded-2xl shadow-md w-full sm:w-[300px]">
              <CardHeader>
                <CardTitle>Freelance Work</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Available for select freelance projects that align with my interests, skills, and time.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="rounded-2xl shadow-md w-full sm:w-[300px]">
              <CardHeader>
                <CardTitle>Networking</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Always happy to connect with fellow developers and tech enthusiasts.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Seperator />

      <section id="learn-more" className="w-full py-12 md:py-16 lg:py-24 bg-muted/10">
        <div className="px-4 md:px-6">
          <div className="relative flex flex-col items-center gap-6 md:gap-8 overflow-hidden rounded-2xl border bg-linear-to-br from-card to-muted/40 hover:to-muted/80 transition-colors duration-200 p-8 sm:p-12 text-center shadow-lg md:p-16">
            <div className="space-y-3 md:space-y-4">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl">
                Want to Learn More?
              </h2>
              <p className="mx-auto max-w-[600px] text-sm sm:text-base text-muted-foreground md:text-xl px-4">
                Check out my journey and the projects I&apos;ve worked on
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:gap-4 sm:flex-row w-full sm:w-auto px-4">
              <Button asChild size="lg">
                <Link href="/about">About Me</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-purple-500/50 hover:bg-purple-500/10">
                <Link href="/#projects">View Projects</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}