import { projects } from '../data/Projects'
import { ProjectCard } from './ProjectCard'

export function Projects() {
    return (
        <section id="projetos" className="py-20 px-6 max-w-6xl mx-auto bg-surface">
            <h2 className="text-3xl md:text-4xl font-bold text-content mb-12 text-center">Meus projetos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((projects) => (
                <ProjectCard key={projects.id} project={projects} />
                ))}
            </div>
        </section>
    )
}

