import React from 'react'
import projects from '../data/portfolioData'
import Layout from '../components/Layout'
import { Project } from '../model/project'; 

const Portfolio = () => {

const projectsList = projects

  return (
    <Layout>
    <h1 className="text-3xl font-bold text-center mb-8">My Projects</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {projectsList.map((project: Project) => (
        <div key={project.id} className="p-6 bg-white shadow-md rounded-lg">
          <h2 className="text-2xl font-semibold">{project.title}</h2>
          <p className="mt-2 text-gray-600">{project.description}</p>
        </div>
      ))}
    </div>
  </Layout>
  )
}

export default Portfolio