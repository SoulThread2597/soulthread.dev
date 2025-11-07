export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold text-white mb-4 animate-fade-in">
          Welcome to SoulThread
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          This website is currently under development
        </p>
        <div className="inline-block">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
            <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-100"></div>
            <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-200"></div>
          </div>
        </div>
      </div>
    </main>
  );
}
