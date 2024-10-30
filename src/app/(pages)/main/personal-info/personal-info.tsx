import Me from '@/app/assets/Me.png'
import Image from 'next/image'

export function PersonalInfo({ className }: { className?: string }) {
  return (
    <section
      id="home"
      className={
        'flex items-center justify-center h-screen bg-primary px-4 ' + className
      }
    >
      <div className="flex flex-col md:flex-row items-center justify-center max-w-6xl mx-auto space-y-8 md:space-y-0 md:space-x-12">
        <div className="flex flex-col items-center md:items-start animate-fadeInUp md:w-1/2">
          <h1 className="text-5xl font-bold text-text md:text-6xl text-center md:text-left">
            Matheus Jacob Bendel
          </h1>
          <p className="mt-4 text-lg text-accent md:text-xl text-center md:text-left">
            Desenvolvedor Full Stack
          </p>
          <div className="mt-16 text-lg text-accent md:text-xl text-center md:text-left bg-white bg-opacity-10 rounded-lg p-5 text-center text-white">
            <p>
              &#34;Inteligência é a capacidade de se adaptar à mudança.&#34;
            </p>
            <p className="mt-4  text-end text-sm">- Stephen Hawking</p>
          </div>
        </div>
        <div className="md:w-1/2">
          <Image
            src={Me}
            alt="Imagem de Matheus Jacob Bendel"
            className="float rounded-full w-{34rem} h-{34rem} object-cover shadow-2xl transition-transform duration-300 transform hover:scale-105 bg-accent bg-opacity-5"
          />
        </div>
      </div>
    </section>
  )
}
