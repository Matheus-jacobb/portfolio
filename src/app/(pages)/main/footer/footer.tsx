import NextJsImage from '@/app/assets/next-js.png'
import ReactImage from '@/app/assets/react.png'
import TailwindImage from '@/app/assets/tailwind.webp'
import Image from 'next/image'
import Link from 'next/link'
import './styles.scss'

export function Footer({ className }: { className?: string }) {
  return (
    <footer
      id="footer"
      className={
        'text-text min-h-[10rem] py-3 bg-[#0D111E] px-8 flex flex-col justify-center ' +
        className
      }
    >
      <div className="flex justify-center items-center gap-4">
        <Link href="https://react.dev/">
          <Image
            src={ReactImage}
            alt={'ReactImage'}
            width={100}
            height={20}
            className={'hover:filter hover:[drop-shadow(2px_4px_6px_red)]'}
          />
        </Link>
        <Link href="https://tailwindcss.com/">
          <Image
            src={TailwindImage}
            alt={'ReactImage'}
            width={300}
            height={40}
            className={'hover-drop-shadow'}
          />
        </Link>
        <Link href="https://nextjs.org/">
          <Image
            src={NextJsImage}
            alt={'ReactImage'}
            width={120}
            height={20}
            className={
              'hover:filter hover:[drop-shadow(2px_4px_6px_red)] invert'
            }
          />
        </Link>
      </div>
      <p className="text-center text-gray-500">
        © 2024 Matheus Jacob Bendel. Todos os direitos reservados.
      </p>
    </footer>
  )
}
