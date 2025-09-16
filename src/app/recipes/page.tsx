import Banner from "../../components/Banner";
import RecipeCard from "../../components/RecipeCard";
import CTASection from "../../components/CTASection";
import { getAllRecipes } from "../../components/lib/api";
import Navbar  from "@/components/Navbar";
import Footer from "@/components/Footer";


/**
 * Recipes index page. Fetches all recipes from the backend and displays
 * them in a grid. Visitors can click through to individual recipe pages.
 * Use a banner to introduce the recipe section and optionally include
 * filters or search.
 */
export default async function RecipesPage() {
  const recipes = await getAllRecipes();
  return (
    <div  className="bg-green-200">
        <Navbar />
        <section className="pt-20 md:mx-8  2xl:mx-30  text-center">
        <Banner
        title="Recipes"
        subtitle="Discover nutritious and delicious dishes to support your goals."
      />
      <section className=" md:py-24 bg-white/30 backdrop-blur-[2px] mx-6 md:mx-8 2xl:mx-30 my-35 rounded-2xl px-10 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
            {recipes.map((recipe) => (
              <RecipeCard key={recipe.slug} {...recipe} />
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

