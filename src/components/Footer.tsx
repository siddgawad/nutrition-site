"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white/90 mt-6  backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        {/* Grid: 1 col on mobile, 3 cols on md+ */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 flex items-center md:justify-start justify-center ">
          {/* 1/3 — Logo */}
          <div className="flex justify-center">
          <Image
  src="/logo.png"
  alt="NutriWell logo"
  width={200}
  height={200}
  // This controls which file Next serves at each breakpoint
  sizes="(min-width: 768px) 8rem, (min-width: 640px) 6rem, 4rem"
  // This controls the rendered box size
  className="w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 object-contain"
  priority
/>
          </div>

          {/* 2/3 — Links */}
          <div className="flex flex-col items-center md:items-start gap-2 text-green-800">
            <Link href="/privacy" className="hover:underline underline-offset-4 decoration-2">Privacy</Link>
            <Link href="/policy" className="hover:underline underline-offset-4 decoration-2">Policy</Link>
            <Link href="/faqs" className="hover:underline underline-offset-4 decoration-2">FAQs</Link>
            <Link href="/refund-policy" className="hover:underline underline-offset-4 decoration-2">Refund Policy</Link>
            <Link href="/terms" className="hover:underline underline-offset-4 decoration-2">Terms of Service</Link>
          </div>

          {/* 3/3 — Social */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <h1 className="text-lg font-semibold text-green-900">Follow us</h1>
            <div className="flex items-center gap-4 text-green-800">
              {/* Instagram */}
              <Link href="https://instagram.com/" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity" title="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                  <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm0 2a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H7zm5 3.5a5.5 5.5 0 110 11 5.5 5.5 0 010-11zm0 2a3.5 3.5 0 100 7 3.5 3.5 0 000-7zM18 6.5a1 1 0 110 2 1 1 0 010-2z" />
                </svg>
              </Link>
              {/* YouTube */}
              <Link href="https://youtube.com/" aria-label="YouTube" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity" title="YouTube">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                  <path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.7 3.5 12 3.5 12 3.5s-7.7 0-9.4.6A3 3 0 00.5 6.2 31.1 31.1 0 000 12a31.1 31.1 0 00.5 5.8 3 3 0 002.1 2.1c1.7.6 9.4.6 9.4.6s7.7 0 9.4-.6a3 3 0 002.1-2.1A31.1 31.1 0 0024 12a31.1 31.1 0 00-.5-5.8zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
                </svg>
              </Link>
              {/* Facebook */}
              <Link href="https://facebook.com/" aria-label="Facebook" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity" title="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                  <path d="M13 22v-8h3l1-4h-4V7.5A1.5 1.5 0 0114.5 6H17V2h-3.5A4.5 4.5 0 009 6.5V10H6v4h3v8h4z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom small print */}
        <div className="mt-8 border-t border-slate-100 pt-6 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} NutriWell. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
