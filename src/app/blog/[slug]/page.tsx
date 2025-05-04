import DesignSystemLayout from "../../design-system-layout";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

// Placeholder function to get post data by slug
// In a real app, this would fetch data from a CMS or database
const getPostData = (slug: string) => {
  // Find the post based on the slug (using the same placeholder data for simplicity)
  const posts = [
    {
      slug: "first-post",
      title: "Exploring the Brutalist Web Design Trend",
      content: `
        <p class="text-lg font-mono mb-4">Brutalism in web design is characterized by its raw, unpolished aesthetic. It often features:</p>
        <ul class="list-disc list-inside text-lg font-mono space-y-2 mb-6 pl-4">
          <li>Strong, unstyled typography</li>
          <li>Monochromatic color schemes or high-contrast palettes</li>
          <li>Visible grids and layout structures</li>
          <li>Lack of traditional ornamentation</li>
        </ul>
        <p class="text-lg font-mono mb-4">This trend challenges the polished, user-friendly interfaces we've grown accustomed to, prioritizing honesty and function over decoration. It's a reaction against the perceived homogeneity of modern web design.</p>
        <h4 class="text-2xl font-black tracking-tighter uppercase border-b-4 border-black pb-1 inline-block mb-4 mt-6">Why Now?</h4>
        <p class="text-lg font-mono mb-4">The resurgence might be linked to a desire for authenticity and a rejection of overly complex designs. It allows for faster loading times and focuses purely on content delivery.</p>
        <div class="bg-gray-200 border-4 border-black p-4 my-6 shadow-brutal">
          <p class="text-md font-mono italic">"Brutalism is not concerned with being comfortable. It is concerned with being honest." - Unknown</p>
        </div>
        <p class="text-lg font-mono">While not suitable for every project, brutalist elements can add a unique character and make a bold statement.</p>
      `,
      date: "May 3, 2025",
    },
    {
      slug: "second-post",
      title: "Building with Next.js and Tailwind CSS",
      content: "<p class='text-lg font-mono'>Content for the second post goes here...</p>",
      date: "April 28, 2025",
    },
    {
      slug: "third-post",
      title: "The Importance of Accessible UI Components",
      content: "<p class='text-lg font-mono'>Content for the third post goes here...</p>",
      date: "April 15, 2025",
    },
  ];
  return posts.find((post) => post.slug === slug);
};

// Define props type for the page component
interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostData(params.slug);

  if (!post) {
    // Handle case where post is not found (optional: return a 404 page)
    return (
      <DesignSystemLayout>
        <div className="text-center py-20">
          <h1 className="text-4xl font-black">Post Not Found</h1>
          <Link 
            href="/blog" 
            className="mt-6 inline-block bg-blue-600 text-white border-4 border-black px-6 py-3 font-bold text-lg shadow-brutal hover:translate-y-1 hover:shadow-none transition-all"
          >
            Back to Blog
          </Link>
        </div>
      </DesignSystemLayout>
    );
  }

  return (
    <DesignSystemLayout>
      <div className="space-y-12">
        {/* Back Link */}
        <section>
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 text-lg font-bold text-blue-600 hover:underline"
          >
            <ArrowLeft className="h-5 w-5" />
            BACK TO BLOG
          </Link>
        </section>

        {/* Post Header */}
        <section className="border-b-8 border-black pb-6">
          <p className="text-md font-mono text-gray-600 mb-2">{post.date}</p>
          <h1 className="text-5xl font-black tracking-tighter uppercase">
            {post.title}
          </h1>
        </section>

        {/* Post Content */}
        <section className="bg-white border-8 border-black p-8 shadow-brutal">
          {/* Use dangerouslySetInnerHTML for placeholder HTML content */}
          {/* In a real app, use a proper Markdown/HTML renderer */}
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </section>

         {/* Related Posts Placeholder (Optional) */}
         <section className="space-y-6 pt-8 border-t-8 border-black">
          <h2 className="text-3xl font-black tracking-tighter uppercase border-b-4 border-black pb-2 inline-block">
            RELATED POSTS
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {/* Placeholder related posts */}
            <div className="bg-white border-4 border-black p-4 shadow-brutal">
              <h3 className="text-xl font-black mb-2 uppercase">Another Interesting Post</h3>
              <p className="text-md font-mono mb-3">A short excerpt about this related topic...</p>
              <Link href="#" className="font-bold text-blue-600 hover:underline">Read More</Link>
            </div>
            <div className="bg-white border-4 border-black p-4 shadow-brutal">
              <h3 className="text-xl font-black mb-2 uppercase">Yet Another Article</h3>
              <p className="text-md font-mono mb-3">More insights related to the current post...</p>
              <Link href="#" className="font-bold text-blue-600 hover:underline">Read More</Link>
            </div>
          </div>
        </section>
      </div>
    </DesignSystemLayout>
  );
}

// Optional: Generate static paths if using SSG
// export async function generateStaticParams() {
//   const posts = [ { slug: "first-post" }, { slug: "second-post" }, { slug: "third-post" } ];
//   return posts.map((post) => ({
//     slug: post.slug,
//   }));
// }
