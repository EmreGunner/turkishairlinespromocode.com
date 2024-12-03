export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "How to Find the Best Turkish Airlines Deals",
    slug: "find-best-turkish-airlines-deals",
    excerpt: "Discover expert tips and strategies for finding the most valuable Turkish Airlines promo codes and discounts.",
    content: `
Finding great deals on Turkish Airlines flights doesn't have to be complicated. Here's your comprehensive guide to securing the best prices on your next journey.

## 1. Timing is Everything

The best time to book Turkish Airlines flights is typically 3-4 months before your departure date. This sweet spot often offers the most competitive prices and the widest selection of available seats.

## 2. Use Promo Codes Strategically

- Check for seasonal promotions
- Look for route-specific discounts
- Consider student and youth discounts if eligible

## 3. Be Flexible with Dates

Midweek flights often offer better deals than weekend departures. Try to be flexible with your travel dates to find the best prices.

## Tips for Success

- Sign up for the Miles&Smiles program
- Book during sales periods
- Compare prices across different routes
- Check for package deals

Remember to always verify the terms and conditions of any promo code before booking!`,
    author: "Travel Expert Team",
    date: "2024-03-20",
    readTime: "5 min read",
    category: "Travel Tips",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop",
    tags: ["Turkish Airlines", "Promo Codes", "Flight Deals", "Travel Tips"]
  },
];

export async function getBlogPost(slug: string): Promise<BlogPost | undefined> {
  return blogPosts.find(post => post.slug === slug);
} 