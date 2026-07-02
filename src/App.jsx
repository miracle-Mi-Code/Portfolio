import { useState } from 'react';

const projects = [
  {
    id: 1,
    title: 'Smart Student Reminder',
    description: 'A blazing-fast storefront experience with modern cart flows and polished UI patterns.',
    tags: ['React', 'Tailwind', 'Node.js'],
    githubLink: 'https://github.com/Alexdoned/SSR-Logic',
    liveLink: 'https://ssr-logic.vercel.app/',
  },
  {
    id: 2,
    title: 'Student-Asst',
    description: 'An internal dashboard focused on performance metrics, forecasting, and clean data storytelling.',
    tags: ['Node.js', 'Express', 'Charts'],
    githubLink: 'https://github.com/miracle-Mi-Code/proposal/',
    liveLink: 'https://studasst.vercel.app/',
  },
  {
    id: 3,
    title: 'Grade Calculator',
    description: 'A design-forward content hub with smooth animations and modular CMS-driven pages.',
    tags: ['Next.js', 'Framer Motion', 'Sanity'],
    githubLink: 'https://github.com/miracle-Mi-Code/new-grade/',
    liveLink: 'https://grade-calculator-iota-six.vercel.app/',
  },
];

const skillGroups = [
  {
    title: 'Frontend',
    skills: ['React', 'Vite', 'Tailwind CSS', 'JavaScript ES6+', 'Responsive Design'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express', 'REST APIs', 'Authentication', 'Databases'],
  },
  {
    title: 'Tools',
    skills: ['Git', 'Figma', 'Vercel', 'Postman', 'CI/CD'],
  },
];

const socialLinks = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/miracle.miracles.16/',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M13.5 22v-8.5h2.9l.4-3.4h-3.3V3.8c0-1 .3-1.7 1.7-1.7h1.8V.1C16.6.1 15.3 0 13.7 0c-2.6 0-4.4 1.6-4.4 4.5v2.5H6.4v3.4h3V22z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ibrahim-miracle-744a28389/',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M6.94 8.5A1.56 1.56 0 1 0 6.94 5.38a1.56 1.56 0 0 0 0 3.12ZM5.5 9.75h2.88V18H5.5zM10.4 9.75h2.76v1.12h.04c.38-.73 1.32-1.5 2.72-1.5 2.9 0 3.44 1.91 3.44 4.39V18H16.4v-7.5c0-1.79-.03-4.09-2.49-4.09-2.5 0-2.88 1.95-2.88 3.96V18H10.4z" />
      </svg>
    ),
  },
  {
    label: 'Twitter',
    href: 'https://x.com/ibrahim_mi67383/',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M18.9 2H22l-6.6 7.5L23.3 22h-5.8l-4.5-5.9L7.8 22H4.7l7.1-8.1L.7 2h5.9l4.1 5.4L18.9 2Zm-1 18h1.1L6.1 4H4.9l13 16Z" />
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/2347012117736',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M19.1 4.9A9.6 9.6 0 0 0 4.8 19l-.7 2.3 2.3-.7a9.6 9.6 0 0 0 13.7-8.7 9.6 9.6 0 0 0-1-4.9ZM12 20.2A7.9 7.9 0 0 1 6.7 6.7a7.9 7.9 0 0 1 10.5 10.5A7.9 7.9 0 0 1 12 20.2Zm4.3-6.1c-.2-.1-1.2-.6-1.4-.7-.2-.1-.3-.1-.4.1-.1.2-.5.7-.7.8-.1.2-.3.2-.5.1a6.2 6.2 0 0 1-1.8-1.1 6.8 6.8 0 0 1-1.3-1.6c-.1-.2 0-.3.1-.4l.4-.4c.1-.1.2-.2.3-.3a.3.3 0 0 0 0-.3l-.2-.4c-.1-.2-.4-.5-.6-.8-.2-.2-.4-.1-.5-.1h-.4c-.1 0-.3.1-.5.2-.2.2-.6.6-.6 1.5 0 .9.6 1.7.7 1.8.1.2 1.3 2 3.2 2.8.2.1.4.1.5.1.2 0 .4-.1.6-.2.2-.1.7-.6.8-.9.1-.2.1-.4 0-.5Z" />
      </svg>
    ),
  },
  {
    label: 'Telegram',
    href: 'https://t.me/miracle_mi_code',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M9.6 15.5 9.1 19.8c.4 0 .6-.2.8-.4l1.9-1.8 4 2.9c.7.4 1.2.2 1.4-.6L21.8 4.8c.2-.9-.3-1.2-1-.9L2.3 10.8c-.9.3-.9.8-.2 1l4.7 1.5 10.9-6.9c.5-.3.9-.2.6.2l-8.8 7.9Z" />
      </svg>
    ),
  },
  {
    label: 'Email',
    href: 'mailto:miracleibrahim1234@gmail.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z" />
      </svg>
    ),
  },
];

function App() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: 'error', message: 'Please fill out all fields before sending.' });
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const contentType = response.headers.get('content-type') || '';
      let data = {};

      if (contentType.includes('application/json')) {
        data = await response.json();
      } else {
        const text = await response.text();
        data = { message: text || 'Unable to send your message right now.' };
      }

      if (!response.ok) {
        throw new Error(data.message || 'Unable to send your message right now.');
      }

      setStatus({ type: 'success', message: data.message || 'Thanks for reaching out! Your message is on its way.' });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus({ type: 'error', message: error.message || 'Something went wrong. Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
      <header className={`sticky top-0 z-50 border-b backdrop-blur-xl ${isDarkMode ? 'border-slate-800/80 bg-slate-950/80' : 'border-slate-200 bg-white/80'}`}>
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#home" className={`text-lg font-semibold tracking-wide ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
            M<span className="text-indigo-400">I</span>
          </a>

          <div className="hidden items-center gap-6 text-sm md:flex">
            <a href="#about" className={`transition ${isDarkMode ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-slate-900'}`}>About</a>
            <a href="#projects" className={`transition ${isDarkMode ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-slate-900'}`}>Projects</a>
            <a href="#contact" className={`transition ${isDarkMode ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-slate-900'}`}>Contact</a>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setIsDarkMode((prev) => !prev)}
              className={`rounded-full border px-3 py-2 text-sm transition ${isDarkMode ? 'border-slate-700 bg-slate-900 text-slate-200 hover:border-slate-500' : 'border-slate-300 bg-slate-100 text-slate-700 hover:border-slate-400'}`}
            >
              {isDarkMode ? '☀️' : '🌙'}
            </button>

            <a
              href="https://miracleibrahim.cv/"
              target="_blank"
              rel="noreferrer"
              className={`hidden rounded-full border px-4 py-2 text-sm font-medium transition sm:inline-flex ${isDarkMode ? 'border-indigo-500/40 bg-indigo-500/10 text-indigo-300 hover:bg-indigo-500/20' : 'border-indigo-500/30 bg-indigo-500/10 text-indigo-600 hover:bg-indigo-500/20'}`}
            >
              Resume
            </a>

            <button
              type="button"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className={`rounded-full border p-2 md:hidden ${isDarkMode ? 'border-slate-700 bg-slate-900 text-slate-200' : 'border-slate-300 bg-slate-100 text-slate-700'}`}
              aria-label="Toggle navigation"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </button>
          </div>
        </nav>

        {isMenuOpen ? (
          <div className={`border-t px-4 py-3 md:hidden ${isDarkMode ? 'border-slate-800 bg-slate-950' : 'border-slate-200 bg-white'}`}>
            <div className="flex flex-col gap-3 text-sm">
              <a href="#about" className={`transition ${isDarkMode ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-slate-900'}`} onClick={() => setIsMenuOpen(false)}>About</a>
              <a href="#projects" className={`transition ${isDarkMode ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-slate-900'}`} onClick={() => setIsMenuOpen(false)}>Projects</a>
              <a href="#contact" className={`transition ${isDarkMode ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-slate-900'}`} onClick={() => setIsMenuOpen(false)}>Contact</a>
              <a
                href="https://miracleibrahim.cv/"
                target="_blank"
                rel="noreferrer"
                className={`inline-flex rounded-full border px-3 py-2 font-medium ${isDarkMode ? 'border-indigo-500/40 bg-indigo-500/10 text-indigo-300' : 'border-indigo-500/30 bg-indigo-500/10 text-indigo-600'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Resume
              </a>
            </div>
          </div>
        ) : null}
      </header>

      <main id="home">
        <section className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-28">
          <div className="space-y-8">
            <div className="inline-flex items-center rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-sm text-emerald-300">
              Available for freelance opportunities
            </div>
            <div className="space-y-4">
              <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                Hi, I&apos;m{' '}
                <span className="bg-gradient-to-r from-indigo-400 via-sky-400 to-emerald-400 bg-clip-text text-transparent">
                  Miracle I.
                </span>
                <br />
                Full-Stack Developer
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-400">
                I craft high-performance web experiences with a strong focus on design systems, clean architecture, and accessible interfaces.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="#projects"
                className="rounded-full bg-indigo-500 px-6 py-3 text-center font-semibold text-white transition hover:-translate-y-1 hover:bg-indigo-400"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="rounded-full border border-slate-700 px-6 py-3 text-center font-semibold text-slate-200 transition hover:-translate-y-1 hover:border-slate-500"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="flex items-center justify-center rounded-3xl border border-slate-800 bg-slate-900/70 p-4 shadow-2xl shadow-indigo-950/40 backdrop-blur">
            <div className="overflow-hidden rounded-full border border-slate-700 bg-slate-950/80 p-2">
              <img
                src="https://res-console.cloudinary.com/dbi20dnwa/thumbnails/transform/v1/image/upload/Y19maWxsLGhfMjAwLHdfMjAw/v1/bWlfbTB5Z2J3/template_primary"
                alt="Miracle Ibrahim"
                className="h-[360px] w-full max-w-[320px] rounded-full object-cover"
              />
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-400">About</p>
              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Building thoughtful digital products that feel effortless.</h2>
            </div>
            <p className="text-lg leading-8 text-slate-400">
              I’m a developer who combines product thinking with modern frontend engineering. From concept sketches to deployed experiences, I enjoy creating interfaces that are both visually striking and technically robust.
            </p>
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">Projects</p>
              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Selected work</h2>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.id}
                className="group rounded-3xl border border-slate-800 bg-slate-900/60 p-6 shadow-lg shadow-slate-950/30 transition duration-300 hover:-translate-y-2 hover:border-indigo-500/40"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-emerald-400 text-lg font-bold text-white">
                  {project.id}
                </div>
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-slate-700 bg-slate-800/70 px-3 py-1 text-xs font-medium text-slate-300">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex gap-3 text-sm">
                  <a href={project.githubLink} className="font-medium text-indigo-400 transition hover:text-indigo-300">
                    GitHub
                  </a>
                  <a href={project.liveLink} className="font-medium text-emerald-400 transition hover:text-emerald-300">
                    Live Demo
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8 shadow-xl shadow-slate-950/20">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-400">Skills</p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Core capabilities</h2>
            <div className="mt-8 grid gap-6 lg:grid-cols-3">
              {skillGroups.map((group) => (
                <div key={group.title} className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5">
                  <h3 className="text-lg font-semibold text-white">{group.title}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span key={skill} className="rounded-full bg-slate-800 px-3 py-2 text-sm text-slate-300">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">Contact</p>
              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Let&apos;s build something great together.</h2>
              <p className="mt-4 max-w-xl text-lg leading-8 text-slate-400">
                Have a project idea or a role you think I’d be a fit for? Send a note and I’ll get back to you soon.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-2xl shadow-slate-950/30">
              <div className="space-y-4">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-300" htmlFor="name">Name</label>
                  <input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-slate-100 outline-none transition focus:border-indigo-500"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-300" htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-slate-100 outline-none transition focus:border-indigo-500"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-300" htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full rounded-2xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-slate-100 outline-none transition focus:border-indigo-500"
                    placeholder="Tell me about your project"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-6 w-full rounded-full bg-gradient-to-r from-indigo-500 to-emerald-400 px-6 py-3 font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {status.message ? (
                <div
                  className={`mt-4 rounded-2xl border px-4 py-3 text-sm ${
                    status.type === 'success'
                      ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-300'
                      : 'border-rose-500/30 bg-rose-500/10 text-rose-300'
                  }`}
                >
                  {status.message}
                </div>
              ) : null}
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-800/80 bg-slate-950/80">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 sm:px-6 lg:flex-row lg:px-8">
          <p className="text-sm text-slate-400">© 2026 Miracle Ibrahim. All rights reserved.</p>
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="rounded-full border border-slate-700 bg-slate-900/70 p-3 text-slate-300 transition hover:-translate-y-1 hover:border-indigo-500 hover:text-white"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
