import Layout from '@/app/components/Layout';
import React from 'react';
import blogPosts from '../../data/blogPosts';
import Link from 'next/link';

// Define the type for the params
interface BlogPageProps {
  params: {
    slug: string;
  };
}

// Generate static paths with only slugs
export async function generateStaticParams() {
  return await blogPosts.map(blogPost => ({
    slug: blogPost.slug,
  }));
}

// Component that fetches the blog post based on the slug
const  BlogPost = async ({ params }: BlogPageProps) => {
  const { slug } = await params;
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

export default BlogPost;
