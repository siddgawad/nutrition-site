import Hero from "../components/Hero";
import Programs from "../components/Programs";
import Pricing from "../components/Pricing";
import CTASection from "../components/CTASection";
import RecipeCard from "../components/RecipeCard";
import ArticleCard from "../components/ArticleCard";
import { getAllRecipes, getAllArticles } from "../components/lib/api";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/**
 * Home page. It assembles the hero, programs, pricing and CTA sections. It
 * additionally fetches the latest recipes and articles from the backend so
 * visitors can see fresh content immediately. Data fetching happens on the
 * server because this file is a React Server Component.
 */
export default async function Page() {
  const recipes = await getAllRecipes();
  const articles = await getAllArticles();
  // Take the three latest recipes and articles
  const latestRecipes = recipes.slice(0, 3);
  const latestArticles = articles.slice(0, 3);
  return (
    <div className="min-h-dvh bg-sunset">
    
      <Navbar />
      <div className="pt-2 lg:mx-8 xl:mx-10">
      <Hero />
      <Programs />
      {/* Latest Recipes */}
      <section className="glass mx-6 md:mx-8 2xl:mx-30 my-36 px-6 md:px-10 py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
            Latest Recipes
          </h2>
          <p className="mt-3 text-slate-600">
            Tasty and healthy dishes from our community.
          </p>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
            {latestRecipes.map((r) => (
              <RecipeCard key={r.slug} {...r} />
            ))}
          </div>
        </div>
      </section>
      {/* Latest Articles */}
      <section className="glass mx-6 md:mx-8 2xl:mx-30 my-36 px-6 md:px-10 py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
            Latest Articles
          </h2>
          <p className="mt-3 text-slate-600">
            Read insights, tips and science‑backed nutrition education.
          </p>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
            {latestArticles.map((a) => (
              <ArticleCard key={a.slug} {...a} />
            ))}
          </div>
        </div>
      </section>
      <Pricing />
      <CTASection />  
        </div>
        <Footer />
    </div>
  );
}