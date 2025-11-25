interface SeperatorProps {
  variant?: "gradient" | "gradient-fade" | "dots" | "dashed" | "diamond";
}

export const Seperator = ({ variant = "gradient" }: SeperatorProps) => {

  if (variant === "gradient") {
    return (
      <div className="relative w-full h-0 flex items-center justify-center">
        <div className="absolute w-full flex items-center justify-center overflow-hidden">
          <div className="w-full h-0.5 bg-linear-to-r from-purple-600 via-purple-400 to-purple-600" />
        </div>
      </div>
    );
  }

  if (variant === "gradient-fade") {
    return (
      <div className="relative w-full h-0 flex items-center justify-center">
        <div className="absolute w-full flex items-center justify-center overflow-hidden">
          <div className="w-full h-0.5 bg-linear-to-r from-transparent via-purple-500 to-transparent" />
        </div>
      </div>
    );
  }

  if (variant === "dots") {
    return (
      <div className="relative w-full h-0 flex items-center justify-center">
        <div className="absolute w-full flex items-center justify-center">
          <div className="w-full max-w-full h-0.5 bg-linear-to-r from-transparent via-purple-500 to-transparent" />
          <div className="absolute flex gap-3 items-center">
            <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" style={{ animationDelay: "0ms" }} />
            <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" style={{ animationDelay: "150ms" }} />
            <div className="w-4 h-4 rounded-full bg-purple-500 shadow-lg shadow-purple-500/50" />
            <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" style={{ animationDelay: "150ms" }} />
            <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" style={{ animationDelay: "0ms" }} />
          </div>
        </div>
      </div>
    );
  }

  if (variant === "dashed") {
    return (
      <div className="relative w-full h-0 flex items-center justify-center">
        <div className="absolute w-full flex items-center justify-center gap-2">
          <div className="flex-1 h-0.5 bg-purple-500/40" />
          <div className="w-8 h-0.5 bg-purple-500" />
          <div className="w-4 h-0.5 bg-purple-500" />
          <div className="w-12 h-0.5 bg-purple-500" />
          <div className="w-4 h-0.5 bg-purple-500" />
          <div className="w-8 h-0.5 bg-purple-500" />
          <div className="flex-1 h-0.5 bg-purple-500/40" />
        </div>
      </div>
    );
  }

  if (variant === "diamond") {
    return (
      <div className="relative w-full h-0 flex items-center justify-center">
        <div className="absolute w-full flex items-center justify-center">
          <div className="w-full max-w-full h-0.5 bg-linear-to-r from-transparent via-purple-500 to-transparent" />
          <div className="absolute flex gap-[3px] items-center">
            <div className="w-2 h-2 rotate-45 bg-linear-to-br from-purple-400 to-purple-600 shadow-lg shadow-purple-500/50 border border-purple-400" />
            <div className="w-4 h-4 rotate-45 bg-linear-to-br from-purple-400 to-purple-600 shadow-lg shadow-purple-500/50 border border-purple-400" />
            <div className="w-2 h-2 rotate-45 bg-linear-to-br from-purple-400 to-purple-600 shadow-lg shadow-purple-500/50 border border-purple-400" />
          </div>
        </div>
      </div>
    )
  }
};