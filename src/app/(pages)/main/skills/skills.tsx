import { skills } from '@/app/infos/skills'

export function Skills({ className }: { className?: string }) {
  return (
    <section id="skills" className={'py-32 text-text ' + className}>
      <h2 className="text-center text-3xl font-semibold mb-12">Habilidades</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {skills.map((skill, idx) => (
          <div
            key={idx}
            className="bg-opacity-10 bg-accent p-6 rounded-lg shadow-md"
          >
            <h3 className="text-accent text-xl font-semibold mb-4">
              {skill.category}
            </h3>
            <ul className="space-y-2">
              {skill.items.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
