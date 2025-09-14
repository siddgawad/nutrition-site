import Link from "next/link";
import Instagram from "./Icons/Instagram";
import FaceBook from "./Icons/FaceBook";

/**
 * Footer component with navigation links and social icons. The styling uses
 * dark background and light text to contrast with the rest of the page. It
 * automatically updates the copyright year.
 */
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-green-800 text-green-50 mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <div className="text-lg font-semibold">NutriWell</div>
            <div className="text-sm text-green-100/80">
              Evidence‑based nutrition for real life.
            </div>
          </div>
          <nav className="flex gap-6 text-sm">
            <Link
              href="/programs"
              className="hover:underline underline-offset-4 decoration-2"
            >
              Programs
            </Link>
            <Link
              href="/pricing"
              className="hover:underline underline-offset-4 decoration-2"
            >
              Plans
            </Link>
            <Link
              href="/recipes"
              className="hover:underline underline-offset-4 decoration-2"
            >
              Recipes
            </Link>
            <Link
              href="/articles"
              className="hover:underline underline-offset-4 decoration-2"
            >
              Articles
            </Link>
            <Link
              href="/about"
              className="hover:underline underline-offset-4 decoration-2"
            >
              About
            </Link>
          </nav>
          <div className="flex items-center gap-3">
            <Instagram />
            <FaceBook />
          </div>
        </div>
        <div className="mt-8 text-xs text-green-100/70">
          © {year} NutriWell. All rights reserved.
        </div>
      </div>
    </footer>
  );
}