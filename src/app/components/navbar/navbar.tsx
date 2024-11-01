import Link from 'next/link'

export function Navbar() {
  return (
    <>
      <nav
        className="hidden sm:block fixed bg-secondary py-4 px-8 z-50 top-5 mx-auto left-0 right-0 w-min h-16 rounded-lg animate-slideIn"
        style={{
          backdropFilter: 'blur(3px)',
          boxShadow: '0 0 41px -27px #c961de',
          backgroundColor: 'rgba(14, 15, 46, 0.45)',
          border: '1px solid rgba(185, 90, 208, 0.11)',
        }}
      >
        <ul className="flex justify-end gap-8">
          <li>
            <Link
              href="#home"
              className="text-text hover:text-highlight transition duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="#about"
              className="text-text hover:text-highlight transition duration-300"
            >
              Sobre
            </Link>
          </li>
          <li>
            <Link
              href="#experience"
              className="text-text hover:text-highlight transition duration-300"
            >
              Experiência
            </Link>
          </li>
          <li>
            <Link
              href="#skills"
              className="text-text hover:text-highlight transition duration-300"
            >
              Habilidades
            </Link>
          </li>
          <li>
            <Link
              href="#projects"
              className="text-text hover:text-highlight transition duration-300"
            >
              Projetos
            </Link>
          </li>
          <li className={'block min-[900px]:hidden'}>
            <Link
              href="#projects"
              className="text-text hover:text-highlight transition duration-300"
            >
              Contato
            </Link>
          </li>
        </ul>
      </nav>

      <button
        className="fixed top-8 min-[1080px]:right-[6rem] right-1 bg-highlight bg-opacity-40 py-2 px-8 rounded-full z-20 backdrop-blur-[3px]
        hover:bg-opacity-100 transition duration-300 group max-[900px]:hidden
        "
        style={{
          boxShadow: '0 0 24px -11px #c961de',
        }}
      >
        <Link
          href="#contact"
          className="group-hover:text-black transition duration-300"
        >
          Entrar em contato
        </Link>
      </button>
    </>
  )
}
