import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Seperator } from "@/components/ui/seperator";
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/src/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function About() {
  return (
    <div className="flex min-h-screen w-full flex-col overflow-x-hidden">
      <section className="relative w-full py-8 md:py-12 lg:py-16 overflow-hidden">
        <div className="relative px-6 sm:px-12 md:px-16 lg:px-24 flex flex-col gap-8 md:gap-12">
          <div className="flex flex-col items-center gap-4 md:gap-6 text-center">
            <Image
            src="/logo.png"
            alt="SoulThread"
            width={200}
            height={200}
            className="rounded-full w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-[200px] lg:h-[200px]"
          />
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
              {"Hi, I'm SoulThread"}
            </h1>
            
            <p className="mx-auto max-w-[700px] text-base sm:text-lg text-muted-foreground md:text-xl px-4">
              A passionate developer and software engineering student building meaningful digital experiences
            </p>
          </div>
        </div>
      </section>

      <Seperator />

      <section className="w-full bg-muted/50 py-12 md:py-16 lg:py-24">
        <div className="px-6 sm:px-12 md:px-16 lg:px-24 flex flex-col gap-8 md:gap-12">
          <div className="text-center px-4">
            <h2 className="mb-4 text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl">
              My Story: From &quot;Unofficial IT&quot; to Full-Stack Developer
            </h2>
          </div>
          <div className="space-y-4 md:space-y-6 text-sm sm:text-base text-muted-foreground md:text-lg max-w-4xl mx-auto px-4">
            <p>
              {`My journey into programming wasn't so much of a decision as it was an inevitability.`}
            </p>
            <p>
              {`Ever since I was young, I was "that kid" in school—the one who was genuinely fascinated by computers. It didn't take long before I graduated from 'student' to 'unofficial IT support,' helping my teachers recalibrate projectors and correct their computers. I got so good at it that even the actual IT department started getting a little nervous—turns out they weren't thrilled about a student who could solve problems faster than they could.`}
            </p>
            <p>
              {`When the school handed out laptops, my fate was sealed. I immediately started pushing those machines to their limits, building (admittedly 'crappy') websites and visual elements, trying to make those basic tools do the absolute utmost.`}
            </p>

            <div className="pt-4">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                {`The First Laptop & The Games`}
                </h3>
              <p className="mb-4">
                {`The real turning point came in middle school with my first personal laptop. Within a week, I had downloaded Unity and was ambitiously trying to build my own games.`}
              </p>
              <p className="mb-4">
                {`Let's be clear: `}<span className="font-medium text-foreground/90">they worked, but they definitely weren&apos;t polished.</span>{` They were rough around the edges, full of placeholder assets, and probably wouldn't win any awards—but they were mine, and that was enough.`}
              </p>
              <p className="mb-4">
                {`But here's the thing: that experience did something crucial—it ignited my passion for programming. I realized that jumping straight into C# and game development was ambitious, but I needed to build a stronger foundation. So I stepped back and decided to master the fundamentals.`}
              </p>
              <p>
                {`I picked Python and spent all my free time glued to YouTube, absorbing every tutorial I could find. There was something magical about watching someone code, pausing the video, replicating it myself, and then experimenting with my own variations. YouTube became my classroom, and the comments section became my study group. I'd watch channels for hours, taking notes, building small projects, and slowly but surely, the syntax started making sense. The logic clicked. I was no longer just copying code—I was understanding it, thinking like a programmer.`}
              </p>
            </div>

            <div className="pt-4">
              <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-3 md:mb-4">Ambition, Community, and a New Toolkit</h3>
              <p className="mb-4">
                {`As my skills grew, so did my ambitions. I set my sights on a huge goal: building my own AI personal assistant, which I named 'Cosmo.' This was back when AI was still a niche field, and I quickly hit a wall. The internet just couldn't answer my questions anymore.`}
              </p>
              <p className="mb-4">
                {`That's when I discovered the power of community. I found an online group of developers, started sharing my projects, and began talking to people who were just as passionate as I was. (Spoiler: many of them are now some of my closest friends.)`}
              </p>
              <p className="mb-4">
                {`I started building everything I could get my hands on—Discord bots that automated server management and created custom commands, Python libraries like GUI frameworks, logging systems, and Discord RPC integrations, and even Minecraft mods that added new gameplay mechanics. Each project taught me something new, and more importantly, taught me how to collaborate with other developers.`}
              </p>
              <p>
                {`Realizing 'Cosmo' was still too big for a solo developer, I focused on expanding my toolkit. I dove headfirst into becoming a true full-stack developer, mastering `}
                <span className="font-medium text-foreground/90">Python, HTML, CSS, JavaScript, TypeScript, Node.js, Tailwind, Java, Linux, MongoDB, Git, Docker</span>
                {`, and so much more. This self-taught journey solidified my decision to pursue software engineering formally, where I could deepen my understanding of computer science principles while continuing to build real-world applications.`}
              </p>
            </div>

            <div className="pt-4">
              <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-3 md:mb-4">The NOVA Spark</h3>
              <p className="mb-4">
                {`This new community opened the door to collaboration. A friend I made along the way, `}
                <Link 
                  href="https://github.com/inimicalpart" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-primary hover:underline decoration-2 underline-offset-4 transition-all"
                >
                  Inimi
                </Link>
                {`, and I teamed up to create 'NovaAI'—another shot at the personal assistant dream. Like many passion projects, it eventually fell by the wayside... for a while. But ideas this exciting don't stay dormant forever.`}
              </p>
              <p>
                {`More recently, that spark has been reignited. I've brought the project back to life with a new name: `}
                <span className="font-medium text-foreground/90">NOVA</span>
                {`. And trust me, it's going to be exciting.`}
              </p>
            </div>

            <div className="pt-4">
              <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-3 md:mb-4">Where I Am Today</h3>
              <p className="mb-4">
                {`That journey—from the kid fixing projectors to the middle schooler building rough games—has shaped who I am as a `}
                <span className="font-medium text-foreground/90">full-stack developer and software engineering student</span>
                {`. My passion is still the same, but it's evolved. Instead of just making things work, I'm obsessed with taking complex problems and turning them into elegant, simple, and high-quality solutions.`}
              </p>
              <p className="mb-4">
                {`Pursuing a software engineering major has given me the opportunity to combine my hands-on development experience with formal computer science education. It's the perfect blend of theory and practice, allowing me to understand not just how to build software, but why we build it the way we do.`}
              </p>
              <p className="mb-4">
                {`Beyond development, I've also expanded into content creation as a video editor and social media marketing manager for `}
                <Link href="https://bio.site/drvem" target="_blank" rel="noopener noreferrer" className="font-medium text-primary hover:underline decoration-2 underline-offset-4 transition-all">
                  DrVem
                </Link>
                {`, a Twitch streamer. This role has taught me the importance of storytelling and engaging an audience—skills that translate surprisingly well to building user experiences in software.`}
              </p>
              <p className="mb-4">
                {`My mission is to `}<span className="font-medium text-foreground/90">build the future, one innovation at a time.</span>
              </p>
              <p className="mb-4">
                {`This isn't just a job for me; it's a craft. I believe in writing clean, maintainable code and staying up-to-date with the latest technologies, because I remember the frustration of those early projects. When I'm not coding, you can find me sharing what I've learned with that same developer community that helped me get here.`}
              </p>
              <p>
                {`That kid who was excited about his first laptop is still here—he just has a much bigger playground. I can't wait for you all to see what's planned.`}
              </p>
            </div>
          </div>
        </div>
      </section>

      <Seperator />

      <section className="w-full py-12 md:py-16 lg:py-24">
        <div className="px-6 sm:px-12 md:px-16 lg:px-24 flex flex-col gap-8 md:gap-12">
          <div className="text-center px-4">
            <h2 className="mb-4 text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl">What I Value</h2>
          </div>
          <div className="gap-4 md:gap-6 flex flex-row flex-wrap justify-center">
            <Card className="flex flex-col rounded-2xl shadow-md w-full sm:w-[450px] h-auto">
              <CardHeader>
                <CardTitle>Curiosity & Learning</CardTitle>
              </CardHeader> 
              <CardContent>
                <CardDescription>Constantly expanding knowledge and never stopping to ask &quot;why&quot; or &quot;how&quot;.</CardDescription>
              </CardContent>
            </Card>
            <Card className="flex flex-col rounded-2xl shadow-md w-full sm:w-[450px] h-auto">
              <CardHeader>
                <CardTitle>Community & Collaboration</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>The best solutions come from working together, sharing knowledge, and lifting each other up.</CardDescription>
              </CardContent>
            </Card>
            <Card className="flex flex-col rounded-2xl shadow-md w-full sm:w-[450px] h-auto">
              <CardHeader>
                <CardTitle>Quality & Craft</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Moving beyond &quot;just making it work&quot; to creating elegant, maintainable solutions that solve real problems.</CardDescription>
              </CardContent>
            </Card>
            <Card className="flex flex-col rounded-2xl shadow-md w-full sm:w-[450px] h-auto">
              <CardHeader>
                <CardTitle>Problem Solving</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Taking on ambitious challenges, learning from setbacks, and persisting until finding the right solution.</CardDescription>
              </CardContent>
            </Card>
            <Card className="flex flex-col rounded-2xl shadow-md w-full sm:w-[450px] h-auto">
              <CardHeader>
                <CardTitle>Experimentation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Constantly trying new things and learning through hands-on building across different technologies and platforms.</CardDescription>
              </CardContent>
            </Card>
            <Card className="flex flex-col rounded-2xl shadow-md w-full sm:w-[450px] h-auto">
              <CardHeader>
                <CardTitle>Growth Mindset</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Embracing the journey from rough prototypes to polished work, understanding that struggles lead to growth.</CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Seperator />

      <section className="w-full py-12 md:py-16 lg:py-24 bg-muted/10">
        <div className="px-4 md:px-6">
          <div className="relative flex flex-col items-center gap-6 md:gap-8 overflow-hidden rounded-2xl border bg-linear-to-br from-card to-muted/40 hover:to-muted/80 transition-colors duration-200 p-8 sm:p-12 text-center shadow-lg md:p-16">
            <div className="space-y-3 md:space-y-4">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl">Let&apos;s Connect</h2>
              <p className="mx-auto max-w-[600px] text-sm sm:text-base text-muted-foreground md:text-xl px-4">
                Interested in working together or just want to say hi?
              </p>
            </div>
            <Button asChild size="lg">
              <Link href="/contact">Get In Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
