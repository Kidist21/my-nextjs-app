import Layout from '@/app/components/Layout';
import React from 'react';
import blogPosts from '../../data/blogPosts'; // (Fixed path!)
import Link from 'next/link';

interface PageProps {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}

// Generate static paths
export async function generateStaticParams() {
  return blogPosts.map(post => ({ slug: post.slug }));
}

const BlogPost = ({ params }: PageProps) => {
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
};

export default BlogPost;
