export function ProjectCard({ project }) {
    return (
        <div className="bg-surface rounded-xl shadow-md flex flex-col justify-between border border-transparent hover:border-accent transition-all duration-300">
            <div className="p-6">
                <h3 className = "text-xl font-bold text-content mb-2">{project.title}</h3>
                <p className="text-muted text-sm mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                        <span key={index} className="text-xs font-semibold px-2.5 py-1 rounded-full bg-main text-accent">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
            <a href={project.githubUrl} target="_blank" rel="noreferrer" className="text-sm font-medium text-content hover:text-accent transition-colors">
            Código (GitHub)
            </a>
        </div>
    )
}