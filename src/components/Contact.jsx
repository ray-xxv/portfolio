const links = [
  { label: 'Email', href: 'mailto:you@example.com' },
  { label: 'GitHub', href: 'https://github.com/your-username' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/your-username' },
]

function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-20 text-center">
      <h2 className="text-2xl font-bold text-slate-100">Get In Touch</h2>
      <p className="mx-auto mt-3 max-w-xl text-sm text-slate-400">
        I'm open to opportunities and always happy to connect — feel free to
        reach out through any of the links below.
      </p>
      <div className="mt-6 flex justify-center gap-6 text-sm">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="font-medium text-indigo-400 hover:text-indigo-300"
          >
            {link.label}
          </a>
        ))}
      </div>
    </section>
  )
}

export default Contact
