import skills from '../data/skills'

function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-20">
      <h2 className="text-center text-2xl font-bold text-slate-100">
        Skills
      </h2>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-slate-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  )
}

export default Skills
