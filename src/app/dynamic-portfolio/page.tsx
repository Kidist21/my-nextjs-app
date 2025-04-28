import React from 'react'
import Layout from '../components/Layout'

async function getProjects() {
    const res = await fetch('http://localhost:3000/api/projects', {
      cache: 'no-store', // 👈 Important: This makes it SERVER-SIDE (fresh on every request, like getServerSideProps)
    })
    const data = await res.json()
    return data
  }
const DynamicPortfolio = async () => {
    const projects = await getProjects();
  
  return (
    <Layout>
    <h1 className="text-3xl font-bold text-center mb-8">Dynamic Projects</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {projects.map((project: any) => (
        <div key={project.id} className="p-6 bg-white shadow-md rounded-lg">
          <h2 className="text-2xl font-semibold">{project.title}</h2>
          <p className="mt-2 text-gray-600">{project.description}</p>
        </div>
      ))}
    </div>
  </Layout>
  )
}

export default DynamicPortfolio