function Hero() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-24 text-center">
      <p className="text-sm font-medium tracking-wide text-indigo-400 uppercase">
        Hi, my name is
      </p>
      <h1 className="mt-3 text-4xl font-bold text-slate-100 sm:text-5xl">
        Your Name
      </h1>
      <h2 className="mt-2 text-2xl font-semibold text-slate-400 sm:text-3xl">
        Aspiring Full Stack Developer
      </h2>
      <p className="mx-auto mt-6 max-w-2xl text-base text-slate-400">
        A short bio goes here — who you are, what you're learning, and what
        kind of projects or work you're interested in.
      </p>
      <div className="mt-8 flex justify-center gap-4">
        <a
          href="#projects"
          className="rounded-md bg-indigo-500 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-indigo-400"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="rounded-md border border-slate-700 px-5 py-2.5 text-sm font-medium text-slate-200 transition hover:border-slate-500"
        >
          Contact Me
        </a>
      </div>
    </section>
  )
}

export default Hero
