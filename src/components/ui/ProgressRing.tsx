
"use client";
import { useMemo } from "react";

export default function ProgressRing({ xp=70, goal=100, size=84 }: { xp?: number; goal?: number; size?: number }) {
  const pct = Math.min(100, Math.round((xp/goal)*100));
  const r = size/2 - 6;
  const C = 2*Math.PI*r;
  const dash = useMemo(()=> (pct/100)*C, [pct, C]);
  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="drop-shadow-[0_1px_6px_rgba(16,185,129,.35)]">
        <circle cx={size/2} cy={size/2} r={r} stroke="#e2e8f0" strokeWidth="6" fill="none" />
        <circle cx={size/2} cy={size/2} r={r} stroke="url(#g)" strokeWidth="6" fill="none"
          strokeDasharray={`${dash} ${C-dash}`} strokeLinecap="round" transform={`rotate(-90 ${size/2} ${size/2})`} />
        <defs>
          <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#10b981"/><stop offset="100%" stopColor="#22c55e"/>
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-0 grid place-items-center text-sm font-bold text-slate-800">{pct}%</div>
    </div>
  );
}
