'use client';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import projects from '@/datas/projects.json';
import Image from 'next/image';

export default function Page() {
  const { slug } = useParams();

  const project = projects.find(
    (project) => project.name.toLowerCase() === slug
  );

  if (!project) {
    return (
      <div className="text-center mt-10">
        <h1 className="text-xl font-bold">Projet non trouvé</h1>
        <p>Le projet demandé n&apos;existe pas ou a été supprimé.</p>
      </div>
    );
  }

  const projectLink = project.projectLink ?? '';
  const picture = `/images/${project.pictures}`;

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold">{project.name}</h2>
      <ul className="mt-4 mb-3 space-x-2">
        {project.technologies.map((technology, index) => (
          <li
            key={index}
            className="inline-block bg-sky-500 text-black px-3 py-1 rounded-md"
          >
            {technology}
          </li>
        ))}
      </ul>
      <p className="mt-2 sm:mb-3 md:mb-5 lg:mb-10 md:text-xl">
        {project.description}
      </p>
      <div className="min-h-80 relative sm:mb-3 md:mb-5 lg:mb-10">
        <Image
          src={`${picture}`}
          alt={project.name}
          fill
          className="object-contain"
        />
      </div>
      <ul className="mt-4 sm:mb-3 md:mb-5 lg:mb-10 space-y-2 md:text-xl">
        {project.tasks?.map((task, index) => (
          <li key={index} className="inline-block">
            {task}
          </li>
        ))}
      </ul>
      <p className="mt-2 md:text-xl">
        Please feel free to visit the project&apos;s page:
      </p>
      <Link
        href={projectLink}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sky-500 font-bold md:text-xl"
      >
        {projectLink}
      </Link>
    </div>
  );
}
