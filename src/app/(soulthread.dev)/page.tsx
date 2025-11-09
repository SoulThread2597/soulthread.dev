import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center">
      <main className="flex w-full max-w-3xl flex-col items-center justify-center gap-8 px-8">
        <div className="flex flex-col items-center gap-6 text-center">
          <Badge variant="outline" className="px-4 py-1 text-sm font-medium">
            Under Maintenance
          </Badge>
          
          <h1 className="max-w-2xl text-5xl font-bold leading-tight tracking-tight">
            Welcome to SoulThread.dev
          </h1>
          
          <div className="mt-4 flex flex-col gap-3 text-base text-muted-foreground">
            <p>
              {"🚧 We're currently working on something amazing"}
            </p>
            <p className="text-sm">
              {"Check back soon to see what we're building!"}
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
