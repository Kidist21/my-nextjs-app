import React from 'react'
import Layout from '../components/Layout'
import blogPosts from '../data/blogPosts'
import Link from 'next/link'

const Blog = () => {
  return (
    <Layout>
    <h1 className="text-3xl font-bold text-center mb-8">My Blog</h1>
    <div className="grid grid-cols-1 gap-6">
      {blogPosts.map(post => (
        <div key={post.slug} className="p-6 bg-white shadow-md rounded-lg">
          <Link href={`/blog/${post.slug}`}>
            <h2 className="text-2xl font-semibold text-blue-600 hover:underline">
              {post.title}
            </h2>
          </Link>
          <p className="mt-2 text-gray-600">{post.content.substring(0, 80)}...</p>
        </div>
      ))}
    </div>
  </Layout>
  )
}

export default Blog