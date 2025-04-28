// src/app/blog/[slug]/page.tsx

import Layout from '@/app/components/Layout';
import blogPosts from '@/app/data/blogPosts'; // make sure the path is correct
import Link from 'next/link';

// Generate static paths
export async function generateStaticParams() {
  return blogPosts.map(post => ({
    slug: post.slug,
  }));
}

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const post = blogPosts.find(p => p.slug === slug);

  return (
    <Layout>
      {!post ? (
        <div>Blog post not found</div>
      ) : (
        <>
          <Link href="/blog" className="text-blue-500 hover:underline mt-4 block">
            ← Back to Blog
          </Link>
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <p className="text-gray-700">{post.content}</p>
        </>
      )}
    </Layout>
  );
}
