// components/BottomNav.tsx
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  { href:"/", label:"Home", icon:"🏠" },
  { href:"/recipes", label:"Recipes", icon:"🍳" },
  { href:"/articles", label:"Learn", icon:"📚" },
  { href:"#contact", label:"Join", icon:"✨" },
];

export default function BottomNav(){
  const path = usePathname();
  return (
    <nav className="fixed inset-x-0 bottom-3 z-40 mx-auto max-w-lg rounded-2xl bg-white/90 backdrop-blur shadow-lg border border-slate-200 px-3 py-2 grid grid-cols-4">
      {items.map(it=>{
        const active = path===it.href;
        return (
          <Link key={it.href} href={it.href} className={`flex flex-col items-center gap-0.5 py-1 ${active? "text-green-700" : "text-slate-600"} hover:scale-[1.02] transition`}>
            <span className="text-xl">{it.icon}</span>
            <span className="text-[11px]">{it.label}</span>
          </Link>
        )
      })}
    </nav>
  );
}
