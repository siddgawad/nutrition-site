import Banner from "../../components/Banner";
import ArticleCard from "../../components/ArticleCard";
import CTASection from "../../components/CTASection";
import { getAllArticles } from "../../components/lib/api";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/**
 * Articles index page. Fetches all articles and displays them in a grid.
 * Each card links to the article details page. Add search or category
 * filtering as needed.
 */
export default async function ArticlesPage() {
  const articles = await getAllArticles();
  return (
    <div className="bg-green-200">
        <Navbar />
        <section className="pt-20 lg:mx-8 xl:mx-10">
        <Banner
        title="Articles"
        subtitle="Stay informed with our latest nutrition insights and tips."
      />
      <section className="pt-20 lg:mx-8 xl:mx-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
            {articles.map((article) => (
              <ArticleCard key={article.slug} {...article} />
            ))}
          </div>
        </div>
      </section>
      <CTASection />
        </section>
      <Footer />
    </div>
  );
}