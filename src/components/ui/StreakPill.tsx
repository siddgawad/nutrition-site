
export default function StreakPill({ days=5 }: { days?: number }) {
    return (
      <div className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur px-3 py-1 text-sm text-green-800 border border-white">
        <span className="text-xl">🔥</span> <span className="font-semibold">{days}-day streak</span>
      </div>
    );
  }
  