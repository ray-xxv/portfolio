import projects from '../data/projects'

function ProjectCard({ project }) {
  return (
    <div className="flex flex-col rounded-lg border border-slate-800 bg-slate-900 p-6">
      <h3 className="text-lg font-semibold text-slate-100">
        {project.title}
      </h3>
      <p className="mt-2 flex-1 text-sm text-slate-400">
        {project.description}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="rounded bg-slate-800 px-2 py-1 text-xs text-slate-300"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="mt-5 flex gap-4 text-sm">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noreferrer"
          className="font-medium text-indigo-400 hover:text-indigo-300"
        >
          GitHub
        </a>
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="font-medium text-indigo-400 hover:text-indigo-300"
          >
            Live Demo
          </a>
        )}
      </div>
    </div>
  )
}

function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-20">
      <h2 className="text-center text-2xl font-bold text-slate-100">
        Projects
      </h2>
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
