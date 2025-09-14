/**
 * Centralised API client for retrieving content such as recipes, articles and
 * testimonials from a backend service or headless CMS. It uses the
 * NEXT_PUBLIC_API_BASE_URL environment variable to construct URLs. You can
 * replace these functions with specific fetch calls to your data source.
 */

// Helper to handle HTTP errors.
async function fetchJson<T>(url: string): Promise<T> {
    const res = await fetch(url, { next: { revalidate: 60 } });
    if (!res.ok) {
      throw new Error(`Failed to fetch ${url}: ${res.status}`);
    }
    return res.json() as Promise<T>;
  }
  
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || '';
  
  export interface Recipe {
    slug: string;
    title: string;
    imageUrl?: string;
    date: string;
    author: string;
    categories?: string[];
    ingredients?: string[];
    method?: string[];
    macros?: Record<string, string>;
    excerpt?: string;
    content?: string;
  }
  
  export interface Article {
    slug: string;
    title: string;
    date: string;
    author: string;
    categories?: string[];
    excerpt?: string;
    content?: string;
  }
  
  /**
   * Fetch all recipes. This function expects the API to return an array of
   * recipes with minimal metadata. It can be used in a page or route
   * segment that calls getStaticProps or directly in React Server Components.
   */
  export async function getAllRecipes(): Promise<Recipe[]> {
    if (!baseUrl) {
      // Return sample data if no API is configured. This helps during
      // development.
      return [
        {
          slug: 'sample-recipe',
          title: 'Sample Recipe',
          date: new Date().toISOString(),
          author: 'NutriWell Team',
          categories: ['Snack'],
          imageUrl: '',
          excerpt: 'A placeholder recipe used when no backend is configured.',
        },
      ];
    }
    const url = `${baseUrl}/recipes`;
    return fetchJson<Recipe[]>(url);
  }
  
  /**
   * Fetch a single recipe by slug.
   */
  export async function getRecipe(slug: string): Promise<Recipe> {
    if (!baseUrl) {
      return {
        slug,
        title: 'Sample Recipe',
        date: new Date().toISOString(),
        author: 'NutriWell Team',
        categories: ['Snack'],
        ingredients: ['1 cup of ...', '2 spoons of ...'],
        method: ['Mix ingredients', 'Cook for 10 minutes'],
        macros: { Calories: '100', Protein: '5g', Carbs: '15g', Fats: '2g' },
        content: 'This is a sample recipe description.',
      };
    }
    const url = `${baseUrl}/recipes/${slug}`;
    return fetchJson<Recipe>(url);
  }
  
  /**
   * Fetch all articles.
   */
  export async function getAllArticles(): Promise<Article[]> {
    if (!baseUrl) {
      return [
        {
          slug: 'sample-article',
          title: 'Sample Article',
          date: new Date().toISOString(),
          author: 'NutriWell Team',
          categories: ['Nutrition'],
          excerpt: 'A placeholder article used when no backend is configured.',
        },
      ];
    }
    const url = `${baseUrl}/articles`;
    return fetchJson<Article[]>(url);
  }
  
  /**
   * Fetch a single article by slug.
   */
  export async function getArticle(slug: string): Promise<Article> {
    if (!baseUrl) {
      return {
        slug,
        title: 'Sample Article',
        date: new Date().toISOString(),
        author: 'NutriWell Team',
        categories: ['Nutrition'],
        content: 'This is a sample article content.',
      };
    }
    const url = `${baseUrl}/articles/${slug}`;
    return fetchJson<Article>(url);
  }
  
  /**
   * Fetch testimonials. You can extend this file with more methods for other
   * collections like testimonials when you have a backend endpoint. The type
   * declarations are left open for future extension.
   */
  export async function getTestimonials() {
    if (!baseUrl) {
      return [];
    }
    const url = `${baseUrl}/testimonials`;
    return fetchJson(url);
  }