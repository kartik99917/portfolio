import { motion } from 'framer-motion'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { projects } from '../../utils/data'

function ProjectCard({ project, index, isVisible }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      className="card group flex flex-col"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-xs font-display tracking-[0.1em] uppercase text-accent mb-1">
            {project.subtitle}
          </p>
          <h3 className="font-display text-xl font-semibold text-text-primary">
            {project.title}
          </h3>
        </div>
        <span className="font-mono text-xs text-text-muted border border-border px-2 py-0.5 rounded shrink-0 ml-4">
          {project.year}
        </span>
      </div>

      {/* Description */}
      <p className="text-text-secondary text-sm leading-relaxed mb-5 flex-1">
        {project.description}
      </p>

      {/* Highlights */}
      <div className="flex flex-wrap gap-2 mb-5">
        {project.highlights.map((h) => (
          <span
            key={h}
            className="text-xs px-2.5 py-1 rounded-md bg-accent/10 text-accent border border-accent/20 font-mono"
          >
            {h}
          </span>
        ))}
      </div>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-2 mb-5">
        {project.tech.map((t) => (
          <span key={t} className="tag text-[11px]">
            {t}
          </span>
        ))}
      </div>

      {/* Link */}
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-text-muted hover:text-accent text-xs font-display tracking-wide transition-colors duration-200 mt-auto"
      >
        <span>View on GitHub</span>
        <span className="transition-transform duration-200 group-hover:translate-x-1">↗</span>
      </a>
    </motion.div>
  )
}

export default function Projects() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="projects" className="bg-bg-secondary border-y border-border">
      <div className="section-wrapper">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="section-label">03 — Projects</p>
          <h2 className="section-title">Things I've built</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={i}
                isVisible={isVisible}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-10 text-center"
          >
            <a
              href="https://github.com/kartik99917"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline text-xs"
            >
              View all on GitHub ↗
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
