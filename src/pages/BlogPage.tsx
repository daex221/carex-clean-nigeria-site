
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Sample blog posts (will be replaced with Supabase data later)
const blogPosts = [
  {
    id: 1,
    title: "The Ultimate Guide to Car Care: Keep Your Vehicle Sparkling Clean",
    excerpt: "Learn professional tips and techniques for maintaining your car's appearance using Carex Car Wash Liquid Soap.",
    date: "2024-01-15",
    author: "Carex Team",
    imageUrl: "/placeholder.svg",
    category: "Car Care"
  },
  {
    id: 2,
    title: "Laundry Tips: How to Remove Tough Stains Effectively",
    excerpt: "Discover the best practices for tackling difficult stains and keeping your clothes fresh with Carex Laundry Wash.",
    date: "2024-01-10",
    author: "Carex Team",
    imageUrl: "/placeholder.svg",
    category: "Laundry"
  },
  {
    id: 3,
    title: "Kitchen Hygiene: Maintaining a Clean and Safe Cooking Environment",
    excerpt: "Essential tips for kitchen cleanliness and safe food-handling practices in home and commercial kitchens.",
    date: "2024-01-05",
    author: "Carex Team",
    imageUrl: "/placeholder.svg",
    category: "Kitchen"
  },
  {
    id: 4,
    title: "Bathroom Cleaning: Creating a Germ-Free Sanctuary",
    excerpt: "Complete guide to bathroom hygiene and the importance of using quality cleaning products like Carex Toilet Wash.",
    date: "2023-12-28",
    author: "Carex Team",
    imageUrl: "/placeholder.svg",
    category: "Bathroom"
  },
  {
    id: 5,
    title: "Starting Your Cleaning Products Business: A Comprehensive Guide",
    excerpt: "Everything you need to know about entering the cleaning products industry and how our training program can help.",
    date: "2023-12-20",
    author: "Carex Team",
    imageUrl: "/placeholder.svg",
    category: "Business"
  }
];

const BlogPage = () => {
  return (
    <>
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Carex <span className="text-carex-blue">Blog</span>
          </h1>
          <p className="text-gray-600 text-center max-w-3xl mx-auto">
            Stay updated with the latest cleaning tips, product insights, and industry news from Carex Consumer Products Limited
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gray-100 flex items-center justify-center">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="bg-carex-blue/10 text-carex-blue px-2 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                  <span className="text-sm text-gray-500">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                </div>
                <h2 className="text-xl font-bold mb-2 line-clamp-2">{post.title}</h2>
                <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">By {post.author}</span>
                  <Button asChild size="sm" className="bg-carex-blue hover:bg-carex-light-blue">
                    <Link to={`/blog/${post.id}`}>Read More</Link>
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg mb-4">
            Want to stay updated with our latest posts and cleaning tips?
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-carex-blue hover:bg-carex-light-blue">
              <Link to="/contact">Subscribe to Newsletter</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-carex-green text-carex-green hover:bg-carex-green hover:text-white">
              <a href="tel:08033272366">Contact Us</a>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;
