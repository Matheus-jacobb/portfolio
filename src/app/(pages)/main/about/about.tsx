export function About({ className }: { className?: string }) {
  return (
    <section id="about" className={'pb-32 px-6 text-text ' + className}>
      <h2 className="text-3xl text-center mb-8">Sobre mim</h2>
      <div className="max-w-5xl bg-accent bg-opacity-10 p-8 rounded-lg mx-auto text-center space-y-6">
        <p className="text-lg leading-relaxed">
          Minha jornada na programação começou no <strong>SENAI</strong>, onde
          desenvolvi interesse por tecnologia ao trabalhar com
          microcontroladores, levando-me a cursar{' '}
          <strong>Engenharia da Computação</strong>.
        </p>
        <p className="text-lg leading-relaxed">
          Sou desenvolvedor full stack pleno e líder de equipe, com experiência
          em <strong>React</strong> e especialização em <strong>Angular</strong>
          . Também atuei como <strong>Tech Lead</strong>, focando em soluções
          ágeis e interfaces de alta performance.
        </p>
        <p className="text-lg leading-relaxed">
          Participei do desenvolvimento de mais de <strong>10 softwares</strong>{' '}
          , sempre buscando entregar produtos que superem expectativas. Acredito
          que minhas habilidades técnicas e experiência em liderança agregam
          valor a qualquer equipe.
        </p>
      </div>
    </section>
  )
}
