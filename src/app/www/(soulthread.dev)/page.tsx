import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { BackgroundBeams } from "@/components/ui/background-beams";

export default function Home() {
  // return (
  //   <div className="flex min-h-screen w-full flex-col">
  //     {/* Hero Section */}
  //     <section className="flex w-full items-center justify-center py-24 md:py-32 lg:py-40">
  //       <div className="container flex flex-col items-center gap-8 px-4 text-center md:px-6">
  //         <div className="space-y-4">
  //           <Badge variant="secondary" className="mb-4">
  //             Welcome to SoulThread
  //           </Badge>
  //           <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
  //             Building Digital Experiences
  //             <br />
  //             <span className="text-primary">That Matter</span>
  //           </h1>
  //           <p className="mx-auto max-w-[700px] text-lg text-muted-foreground md:text-xl">
  //             Crafting elegant solutions with modern web technologies. 
  //             Full-stack development with a focus on quality and innovation.
  //           </p>
  //         </div>
  //         <div className="flex flex-col gap-4 sm:flex-row">
  //           <Button asChild size="lg">
  //             <Link href="/about">Learn More</Link>
  //           </Button>
  //           <Button asChild variant="outline" size="lg">
  //             <Link href="https://github.com/soulthread2597" target="_blank" rel="noopener noreferrer">
  //               View Projects
  //             </Link>
  //           </Button>
  //         </div>
  //       </div>
  //     </section>

  //     {/* Features Section */}
  //     <section className="w-full bg-muted/50 py-16 md:py-24">
  //       <div className="container px-4 md:px-6">
  //         <div className="mb-12 text-center">
  //           <h2 className="mb-4 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
  //             What I Do
  //           </h2>
  //           <p className="mx-auto max-w-[600px] text-muted-foreground md:text-lg">
  //             Specialized in building modern, scalable web applications
  //           </p>
  //         </div>
          
  //         <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
  //           <Card>
  //             <CardHeader>
  //               <CardTitle>Frontend Development</CardTitle>
  //               <CardDescription>
  //                 Building responsive, accessible interfaces with React, Next.js, and modern CSS
  //               </CardDescription>
  //             </CardHeader>
  //             <CardContent>
  //               <div className="flex flex-wrap gap-2">
  //                 <Badge variant="secondary">React</Badge>
  //                 <Badge variant="secondary">Next.js</Badge>
  //                 <Badge variant="secondary">TypeScript</Badge>
  //                 <Badge variant="secondary">Tailwind</Badge>
  //               </div>
  //             </CardContent>
  //           </Card>

  //           <Card>
  //             <CardHeader>
  //               <CardTitle>Backend Development</CardTitle>
  //               <CardDescription>
  //                 Creating robust APIs and server-side applications with modern frameworks
  //               </CardDescription>
  //             </CardHeader>
  //             <CardContent>
  //               <div className="flex flex-wrap gap-2">
  //                 <Badge variant="secondary">Node.js</Badge>
  //                 <Badge variant="secondary">Express</Badge>
  //                 <Badge variant="secondary">REST APIs</Badge>
  //                 <Badge variant="secondary">GraphQL</Badge>
  //               </div>
  //             </CardContent>
  //           </Card>

  //           <Card>
  //             <CardHeader>
  //               <CardTitle>Full-Stack Solutions</CardTitle>
  //               <CardDescription>
  //                 End-to-end application development with modern tooling and best practices
  //               </CardDescription>
  //             </CardHeader>
  //             <CardContent>
  //               <div className="flex flex-wrap gap-2">
  //                 <Badge variant="secondary">Git</Badge>
  //                 <Badge variant="secondary">CI/CD</Badge>
  //                 <Badge variant="secondary">Testing</Badge>
  //                 <Badge variant="secondary">DevOps</Badge>
  //               </div>
  //             </CardContent>
  //           </Card>
  //         </div>
  //       </div>
  //     </section>

  //     {/* CTA Section */}
  //     <section className="w-full py-16 md:py-24">
  //       <div className="container px-4 md:px-6">
  //         <div className="flex flex-col items-center gap-6 rounded-lg border bg-card p-8 text-center md:p-12">
  //           <div className="space-y-4">
  //             <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
  //               Let&apos;s Work Together
  //             </h2>
  //             <p className="mx-auto max-w-[600px] text-muted-foreground md:text-lg">
  //               Have a project in mind? I&apos;m always open to discussing new opportunities 
  //               and creative ideas.
  //             </p>
  //           </div>
  //           <div className="flex flex-col gap-4 sm:flex-row">
  //             <Button asChild size="lg">
  //               <Link href="mailto:contact@soulthread.dev">Get In Touch</Link>
  //             </Button>
  //             <Button asChild variant="outline" size="lg">
  //               <Link href="/about">About Me</Link>
  //             </Button>
  //           </div>
  //         </div>
  //       </div>
  //     </section>
  //   </div>
  // )

  return (
    <div className="h-full w-full">
      <BackgroundBeams className="absolute inset-0 pointer-events-none" />
    </div>
  )
}
