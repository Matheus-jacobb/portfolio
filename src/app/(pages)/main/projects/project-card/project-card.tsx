import { Chips } from '@/app/components/chips/chips'
import { projects } from '@/app/infos/principal-projects'
import Image from 'next/image'
import './styles.scss'

export function ProjectCard({
  project,
  idx,
}: {
  project: (typeof projects)[0]
  idx: number
}) {
  return (
    <div
      key={idx}
      className="bg-secondary rounded-lg shadow-lg h-full group flex flex-col"
    >
      <Image
        src={project.imgSrc}
        alt={project.title}
        width={362}
        height={192}
        className={ 'w-full h-48 object-cover rounded-t-lg bg-white sm:grayscale group-hover:grayscale-0 transition duration-300 ' + project.style }
      />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-accent text-xl font-semibold mb-2">
          {project.title}
        </h3>
        <p className="mb-4 whitespace-pre-wrap flex-grow max-h-[12.7rem] overflow-y-auto sm:max-h-none ">
          {project.description}
        </p>
        <div className="flex gap-4 mt-auto flex-wrap">
          {project.frameworks &&
            project.frameworks.map((framework, idx) => (
              <Chips key={idx} title={framework} className="text-sm" />
            ))}
        </div>
      </div>
    </div>
  )
}
