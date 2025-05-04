import DesignSystemLayout from "../design-system-layout";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// Placeholder data for blog posts
const blogPosts = [
  {
    slug: "first-post",
    title: "Exploring the Brutalist Web Design Trend",
    excerpt: "Dive deep into the raw, functional aesthetic that's making a comeback...",
    date: "May 3, 2025",
  },
  {
    slug: "second-post",
    title: "Building with Next.js and Tailwind CSS",
    excerpt: "A practical guide to setting up your project for maximum efficiency...",
    date: "April 28, 2025",
  },
  {
    slug: "third-post",
    title: "The Importance of Accessible UI Components",
    excerpt: "Ensuring your web applications are usable by everyone...",
    date: "April 15, 2025",
  },
];

export default function BlogPage() {
  return (
    <DesignSystemLayout>
      <div className="space-y-12">
        {/* Page Header */}
        <section className="bg-yellow-400 text-black border-8 border-black p-12 shadow-brutal text-center">
          <h1 className="text-6xl font-black tracking-tighter uppercase">
            Bauhaus Blog
          </h1>
          <p className="text-xl mt-4 font-mono">
            Insights, tutorials, and thoughts on design & development.
          </p>
        </section>

        {/* Blog Post List */}
        <section className="space-y-8">
          <h2 className="text-4xl font-black tracking-tighter uppercase border-b-4 border-black pb-2 inline-block">
            LATEST POSTS
          </h2>
          <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-1">
            {blogPosts.map((post) => (
              <div
                key={post.slug}
                className="bg-white border-8 border-black p-6 shadow-brutal flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
              >
                <div className="flex-grow">
                  <p className="text-sm font-mono text-gray-600 mb-1">{post.date}</p>
                  <h3 className="text-3xl font-black mb-2 uppercase border-b-4 border-black pb-1 inline-block">
                    {post.title}
                  </h3>
                  <p className="text-lg font-mono mt-2">{post.excerpt}</p>
                </div>
                <Link 
                  href={`/blog/${post.slug}`} 
                  className="bg-blue-600 text-white border-4 border-black px-6 py-3 font-bold text-lg shadow-brutal hover:translate-y-1 hover:shadow-none transition-all flex items-center gap-2 shrink-0 mt-4 md:mt-0"
                >
                  READ MORE <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            ))}
          </div>
        </section>

         {/* Simple Pagination Placeholder */}
         <section className="flex justify-center gap-4">
            <button className="bg-white text-black border-4 border-black px-4 py-2 font-bold text-md shadow-brutal hover:translate-y-1 hover:shadow-none transition-all opacity-50 cursor-not-allowed">
              PREVIOUS
            </button>
            <button className="bg-white text-black border-4 border-black px-4 py-2 font-bold text-md shadow-brutal hover:translate-y-1 hover:shadow-none transition-all">
              NEXT
            </button>
         </section>
      </div>
    </DesignSystemLayout>
  );
}
