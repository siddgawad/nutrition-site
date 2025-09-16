import { notFound } from "next/navigation";
import Banner from "../../../components/Banner";
import { getRecipe } from "../../../components/lib/api";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface RecipePageProps {
  params: { slug: string };
}

/**
 * Individual recipe page. It fetches the recipe data by slug and renders
 * the details including ingredients, method and macros. If the recipe
 * cannot be found, Next.js will render a 404 page.
 */
export default async function RecipePage({ params }: RecipePageProps) {
  const recipe = await getRecipe(params.slug);
  if (!recipe) {
    notFound();
  }
  return (
    <div  className="bg-green-200">
        <Navbar />
        <section  className="pt-20 lg:mx-8 xl:mx-10">
        <Banner title={recipe.title} subtitle={recipe.excerpt} />
      <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
        {/* Metadata */}
        <div className="text-sm text-slate-500 mb-4">
          {new Date(recipe.date).toLocaleDateString('en-IN', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
          })}{' '}
          · by {recipe.author}
        </div>
        {/* Image */}
        {recipe.imageUrl && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={recipe.imageUrl}
            alt={recipe.title}
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
        )}
        {/* Ingredients */}
        {recipe.ingredients && recipe.ingredients.length > 0 && (
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-green-800 mb-2">
              Ingredients
            </h2>
            <ul className="list-disc list-inside space-y-1 text-slate-700">
              {recipe.ingredients.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </section>
        )}
        {/* Method */}
        {recipe.method && recipe.method.length > 0 && (
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-green-800 mb-2">Method</h2>
            <ol className="list-decimal list-inside space-y-1 text-slate-700">
              {recipe.method.map((step, idx) => (
                <li key={idx}>{step}</li>
              ))}
            </ol>
          </section>
        )}
        {/* Macros */}
        {recipe.macros && Object.keys(recipe.macros).length > 0 && (
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-green-800 mb-2">Macros</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border border-slate-500">
                <thead>
                  <tr className="bg-green-100 text-green-700">
                    <th className="px-3 py-2 border-b border-slate-500">Nutrient</th>
                    <th className="px-3 py-2 border-b border-slate-500">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(recipe.macros).map(([nutrient, amount]) => (
                    <tr key={nutrient} className="border border-slate-500 bg-white/30 last:border-b-0">
                      <td className="px-3 py-2 font-medium text-slate-800">
                        {nutrient}
                      </td>
                      <td className="px-3 py-2 text-slate-700">{amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}
        {/* Content */}
        {recipe.content && (
          <section className="prose prose-slate max-w-none">
    
            <div dangerouslySetInnerHTML={{ __html: recipe.content }} />
          </section>
        )}
      </article>
        </section>
    <Footer />
    </div>
  );
}