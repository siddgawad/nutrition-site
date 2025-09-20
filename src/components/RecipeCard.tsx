import Image from "next/image";
import Link from "next/link";

export interface RecipeCardProps {
  slug: string;
  title: string;
  imageUrl?: string;
  date: string;
  author: string;
  categories?: string[];
}

/**
 * Card component used in the recipes index page. It displays a small
 * preview of the recipe along with metadata. It links to the full recipe
 * page using the slug. Categories and author are optional metadata.
 */
export default function RecipeCard({
  slug,
  title,
  imageUrl,
  date,
  author,
  categories,
}: RecipeCardProps) {
  return (
    <article className="group rounded-2xl border border-slate-200 bg-white overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition">
      {imageUrl && (
        <Link href={`/recipes/${slug}`}>
         
          <Image
            src={imageUrl}
            alt={title}
            className="text-lg font-semibold text-green-800 group-hover:underline"
          />
        </Link>
      )}
      <div className="p-4">
        <Link href={`/recipes/${slug}`} className="text-lg font-semibold text-green-800 hover:underline">
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
      </div>
    </article>
  );
}