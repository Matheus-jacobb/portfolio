import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

export function ContactCard({
  className,
  title,
  icon,
  description,
  link,
}: {
  className?: string
  icon: IconProp
  title: string
  description: string
  link: string
}) {
  return (
    <Link href={link} target="_blank" rel="noopener noreferrer">
      <div
        className={
          `bg-opacity-10 bg-accent p-6 rounded-lg shadow-md hover:transform hover:-translate-y-1 transition 
        duration-300 flex flex-col items-center gap-6 cursor-pointer group ` +
          className
        }
      >
        <h3 className="text-white font-semibold text-center group-hover:text-accent transition duration-300">
          <FontAwesomeIcon icon={icon} className="mr-2 text-5xl" />
        </h3>
        <h3 className="text-xl">{title}</h3>
        <h3 className="text-xl">{description}</h3>
      </div>
    </Link>
  )
}
