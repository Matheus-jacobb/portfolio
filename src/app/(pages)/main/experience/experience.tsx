import { Chips } from '@/app/components/chips/chips'
import { experiences } from '@/app/infos/experience'

export function Experience({ className }: { className?: string }) {
  return (
    <section id="experience" className={'py-16 text-text w-full ' + className}>
      <h2 className="text-3xl text-center mb-8">Experiência</h2>
      <div className="relative max-w-3xl mx-auto">
        <div className="timeline relative">
          <div className="absolute left-1/2 w-1 bg-accent h-full transform -translate-x-1/2"></div>

          {/* Mapear os itens de experiência */}
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`timeline-item flex justify-${index % 2 === 0 ? 'start' : 'end'} mb-10`}
              style={
                exp.specialLayout ? { marginBottom: '-6.7rem' } : undefined
              }
            >
              <div className={`w-1/2 ${index % 2 === 0 ? 'pr-4' : 'pl-4'}`}>
                <div className="timeline-content bg-accent bg-opacity-30 p-4 rounded-lg shadow-md">
                  <div className="timeline-date text-accent font-semibold mb-1">
                    {exp.date}
                  </div>
                  <h3 className="text-lg font-semibold">{exp.title}</h3>
                  <p className="text-text-secondary text-sm mb-3">
                    [{exp.company ? exp.company : ''}]
                  </p>
                  {exp.frameworks &&
                    exp.frameworks.map((framework, index) => (
                      <Chips
                        key={index}
                        title={framework}
                        className={'mr-2 text-sm'}
                      />
                    ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
