import React from "react";
import { projects } from "./projects";

const Projects = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center text-indigo-600">My Projects</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
            <h2 className="text-xl font-semibold mb-2 text-gray-800">{project.title}</h2>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span key={i} className="text-sm px-2 py-1 bg-indigo-100 text-indigo-800 rounded-full">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white bg-gray-800 px-4 py-2 rounded hover:bg-gray-700"
                >
                  GitHub
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white bg-indigo-600 px-4 py-2 rounded hover:bg-indigo-500"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
