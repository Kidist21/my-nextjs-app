import Layout from '@/app/components/Layout';
import blogPosts from '../../data/blogPosts';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return blogPosts.map(blogPost => ({
    slug: blogPost.slug,
  }));
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    notFound(); // throw 404 if no post
  }

  return (
    <Layout>
      <Link href="/blog" className="text-blue-500 hover:underline mt-4 block">
        ← Back to Blog
      </Link>
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-700">{post.content}</p>
    </Layout>
  );
}
