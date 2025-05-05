import Layout from '@/app/components/Layout';
import React, { use } from 'react';
import blogPosts from '../../data/blogPosts';
import Link from 'next/link';

export async function generateStaticParams() {
  return blogPosts.map(blogPost => ({
    slug: blogPost.slug,
  }));
}


export default function BlogPost({params}: {params: Promise<{ slug: string }>}) {
  const { slug } = use(params);

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
};
