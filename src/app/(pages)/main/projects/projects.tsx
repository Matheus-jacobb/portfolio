import { Chips } from '@/app/components/chips/chips';
import { projects } from '@/app/infos/principal-projects';

export function Projects({ className }: { className?: string }) {
  return (
    <section id="projects" className={ 'py-32 text-text h-screen ' + className }>
      <h2 className="text-center text-3xl font-semibold mb-12">
        Projetos Principais
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        { projects.map((project, idx) => (
          <div
            key={ idx }
            className="bg-secondary rounded-lg shadow-lg hover:transform hover:-translate-y-1 transition duration-300"
          >
            <img
              src={ project.imgSrc }
              alt={ project.title }
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-6">
              <h3 className="text-accent text-xl font-semibold mb-2">
                { project.title }
              </h3>
              <p className="mb-4 whitespace-pre-wrap">{ project.description }</p>
              <div className="flex gap-4">
                { project.frameworks && (
                  project.frameworks.map((framework, idx) => (
                    <Chips key={ idx } title={ framework } className='text-sm'/>
                  ))
                ) }
              </div>
            </div>
          </div>
        )) }
      </div>
    </section>
  );
}
