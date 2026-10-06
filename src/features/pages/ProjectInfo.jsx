import React from 'react'
import { useParams, Link } from 'react-router'
import { projects } from '../constants/index.js'

const ProjectInfo = () => {
  const { projectName } = useParams()

  const project = projects.find(p => p.name === projectName)

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-white">
        <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
        <Link to="/" className="text-[#C8B3F6] underline">Go back to home</Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#1E202C] text-white p-8">
      <div className="max-w-4xl mx-auto">
        <Link
          to="/"
          className="inline-block mb-8 text-[#C8B3F6] hover:underline"
        >
          ← Back to Projects
        </Link>

        <h1 className="text-5xl font-bold mb-6 font-pop-b">{project.name}</h1>

        <div className="rounded-md overflow-hidden mb-8">
          {project.vdo ? (
            <video
              src={project.vdo}
              className={`w-full h-auto ${project.objectFill ? "object-fill" : "object-cover"}`}
              autoPlay
              loop
              muted
              playsInline
            />
          ) : (
            <img
              src={project.img}
              alt={project.name}
              className="w-full h-auto object-cover"
            />
          )}
        </div>

        <p className="text-xl mb-8 leading-relaxed">{project.desc}</p>

        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#7546E8] hover:bg-[#C8B3F6] hover:text-[#1E202C] transition-colors px-8 py-4 rounded-md font-semibold text-lg"
        >
          View Live Project →
        </a>
      </div>
    </div>
  )
}

export default ProjectInfo