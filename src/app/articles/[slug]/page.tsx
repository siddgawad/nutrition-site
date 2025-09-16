import { notFound } from "next/navigation";
import Banner from "../../../components/Banner";
import { getArticle } from "../../../components/lib/api";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface ArticlePageProps {
  params: { slug: string };
  cat: number;
}

/**
 * Individual article page. Fetches the article by slug and renders its
 * content. If the article is not found, Next.js will show a 404 page.
 */
export default async function ArticlePage({ params }: ArticlePageProps) {
  const article = await getArticle(params.slug);
  if (!article) {
    notFound();
  }
  return (
    <div className="bg-green-200">
        <Navbar />
        <section  className="pt-20 lg:mx-8 xl:mx-10">
        <Banner title={article.title} subtitle={article.excerpt} />
      <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-sm text-slate-500 mb-4">
          {new Date(article.date).toLocaleDateString('en-IN', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
          })}{' '}
          · by {article.author}
        </div>
        {article.categories && article.categories.length > 0 && (
          <div className="mb-6 flex flex-wrap gap-2 text-lg">
            {article.categories.map((cat) => (
              <span
                key={cat}
                className="bg-white/30 text-green-700 px-2 py-0.5 rounded-full"
              >
                {cat}
              </span>
            ))}
          </div>
        )}
        {article.content && (
          <section className="prose prose-slate max-w-none">
           
            <div dangerouslySetInnerHTML={{ __html: article.content }} />
          </section>
        )}
      </article>
        </section>
      <Footer />
    </div>
  );
}