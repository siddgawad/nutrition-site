import Link from "next/link";

export interface ArticleCardProps {
  slug: string;
  title: string;
  date: string;
  author: string;
  categories?: string[];
  excerpt?: string;
}

/**
 * Card component used in the articles index page. It displays the title,
 * excerpt, date, author and categories. The card links to the article page.
 */
export default function ArticleCard({
  slug,
  title,
  date,
  author,
  categories,
  excerpt,
}: ArticleCardProps) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 hover:shadow-md transition">
      <Link href={`/articles/${slug}`} className="text-lg font-semibold text-green-800 hover:underline">
        {title}
      </Link>
      <div className="mt-1 text-xs text-slate-500">
        {new Date(date).toLocaleDateString('en-IN', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        })}
      </div>
      <div className="mt-1 text-xs text-slate-500">by {author}</div>
      {excerpt && <p className="mt-3 text-sm text-slate-700 line-clamp-3">{excerpt}</p>}
      {categories && categories.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-2 text-xs">
          {categories.map((cat) => (
            <span
              key={cat}
              className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full"
            >
              {cat}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}