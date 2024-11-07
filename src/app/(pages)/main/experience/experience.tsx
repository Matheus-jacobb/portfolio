import { Chips } from '@/app/components/chips/chips'
import { experiences } from '@/app/infos/experience'

export function Experience({ className }: { className?: string }) {
  return (
    <section id="experience" className={'py-16 text-text w-full ' + className}>
      <h2 className="text-3xl text-center mb-8">Experiência</h2>
      <div className="relative max-w-3xl mx-auto">
        <div className="timeline relative">
          <div
            className="absolute sm:left-1/2 left-5 w-1 bg-accent h-full transform -translate-x-1/2"
            style={{
              boxShadow: 'rgb(201, 97, 222) 0px 0px 9px 0px',
            }}
          ></div>

          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`timeline-item flex justify-center sm:!mb-10
              ${index % 2 === 0 ? 'sm:justify-start' : 'sm:justify-end'}
              ${exp?.specialLayout ? 'sm:!mb-[-6.7rem]' : undefined}
              `}
            >
              <div
                className={`sm:w-1/2 w-[80vw] my-2 sm:my-0 pr-0 ${index % 2 === 0 ? 'sm:pr-4' : 'sm:pl-4'}`}
              >
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
