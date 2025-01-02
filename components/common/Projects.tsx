import React from 'react';
import ProjectCard from '../shared/ProjectCard';
import projects from '@/datas/projects.json';

const Projects: React.FC = () => {
  return (
    <section className="mx-5 py-3 px-2 space-y-3 bg-zinc-900 rounded-sm flex flex-col sm:flex-row sm:flex-wrap sm:items-baseline sm:justify-evenly ">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          name={project.name}
          technologies={project.technologies}
          description={project.description}
        />
      ))}
    </section>
  );
};

export default Projects;
