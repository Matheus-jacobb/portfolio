import { Chips } from '@/app/components/chips/chips'
import { projects } from '@/app/infos/principal-projects'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faHandPointer } from '@fortawesome/free-solid-svg-icons'
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
      className="bg-secondary rounded-lg shadow-lg h-[32rem] group flex flex-col relative overflow-hidden"
    >
      <Image
        src={project.imgSrc}
        alt={project.title}
        width={800}
        height={800}
        quality={100}
        className={
          'w-full h-full object-cover object-top rounded-t-lg bg-white sm:grayscale group-hover:grayscale-0 transition duration-300 ' +
          project.style
        }
      />
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-4 left-1/1 -translate-x-1/2 sm:left-1/2 sm:-translate-x-1/2 right-4 sm:right-auto text-white/70 group-hover:opacity-0 transition-opacity duration-300 z-20">
        <FontAwesomeIcon 
          icon={faChevronDown} 
          className="h-6 w-6 animate-bounce hidden sm:block text-white/70" 
        />
        <FontAwesomeIcon 
          icon={faHandPointer} 
          className="h-6 w-6 animate-bounce sm:hidden text-accent" 
        />
      </div>
      <div className="p-6 flex flex-col flex-grow absolute bottom-0 left-0 right-0 bg-secondary transform translate-y-[calc(100%-12rem)] sm:translate-y-[calc(100%-8rem)] group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-10">
        <div className="flex flex-col">
          <h3 className="text-accent text-xl font-semibold mb-2">
            {project.title}
          </h3>
          <div className="flex gap-4 mb-4 flex-wrap">
            {project.frameworks &&
              project.frameworks.map((framework, idx) => (
                <Chips key={idx} title={framework} className="text-sm" />
              ))}
          </div>
        </div>
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="whitespace-pre-wrap flex-grow max-h-[12.7rem] overflow-y-auto sm:max-h-none">
            {project.description}
          </p>
        </div>
      </div>
    </div>
  )
}
