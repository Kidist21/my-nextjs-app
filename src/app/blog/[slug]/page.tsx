import Layout from '@/app/components/Layout'
import React from 'react'
import blogPosts from '../../data/blogPosts'
import Link from 'next/link';

interface BlogPageProps {
    params: {
      slug: string;
      title: string;
      content: string;
    };
  }

  export async function generateStaticParams() {
    return blogPosts.map(blogPost => ({
      slug: blogPost.slug,
    }));
  }

const BlogPost = ({ params }: BlogPageProps) => {
    const { slug } = params;
    const post = blogPosts.find(p => p.slug === slug);

  return (
    <Layout>
    {!post? (
       <div>Blog post not found</div>
    ):(
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

export default BlogPost