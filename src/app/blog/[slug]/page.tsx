import Layout from '@/app/components/Layout';
import blogPosts from '../../data/blogPosts';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// 1. generateStaticParams
export async function generateStaticParams() {
  return blogPosts.map(post => ({
    slug: post.slug,
  }));
}

// 2. Page Component: MUST BE `async function`
export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    notFound();
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
