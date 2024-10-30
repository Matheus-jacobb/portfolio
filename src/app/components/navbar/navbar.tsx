import Link from 'next/link'

export function Navbar() {
  return (
    <nav
      className="fixed bg-secondary shadow-lg py-4 px-8 z-50 bottom-4 left-[36%] h-16 rounded-lg"
      style={{
        backdropFilter: 'blur(3px)',
        backgroundColor: 'rgba(14, 15, 46, 0.45)',
        border: '1px solid rgba(185, 90, 208, 0.11)',
      }}
    >
      <ul className="flex justify-end gap-8">
        <li>
          <Link href="#home" className="text-text hover:text-highlight transition duration-300">
            Home
          </Link>
        </li>
        <li>
          <Link href="#about" className="text-text hover:text-highlight transition duration-300">
            Sobre
          </Link>
        </li>
        <li>
          <Link href="#experience" className="text-text hover:text-highlight transition duration-300">
            Experiência
          </Link>
        </li>
        <li>
          <Link href="#skills" className="text-text hover:text-highlight transition duration-300">
            Habilidades
          </Link>
        </li>
        <li>
          <Link href="#projects" className="text-text hover:text-highlight transition duration-300">
            Projetos
          </Link>
        </li>
      </ul>
    </nav>
  )
}
