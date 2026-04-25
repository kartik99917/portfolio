import { motion } from 'framer-motion'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { experience, education } from '../../utils/data'

function TimelineItem({ item, index, isVisible, type }) {
  const isExp = type === 'exp'

  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      animate={isVisible ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.14 }}
      className="relative pl-8 pb-10 last:pb-0"
    >
      {/* Line */}
      <div className="absolute left-0 top-2 bottom-0 w-px bg-border" />
      {/* Dot */}
      <div
        className="absolute left-[-4px] top-2 w-2.5 h-2.5 rounded-full border-2 border-accent bg-bg-primary"
      />

      <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
        <div>
          <p className="font-display text-xs tracking-[0.1em] uppercase text-accent mb-0.5">
            {item.period}
          </p>
          <h3 className="font-display text-base font-semibold text-text-primary">
            {isExp ? item.role : item.degree}
          </h3>
          <p className="text-text-secondary text-sm">
            {isExp ? item.company : item.institution}
            {' · '}
            <span className="text-text-muted text-xs">{item.location}</span>
          </p>
        </div>
        {item.gpa && (
          <span className="font-mono text-xs text-accent border border-accent/30 px-2 py-0.5 rounded bg-accent/5">
            {item.gpa}
          </span>
        )}
      </div>

      {isExp && item.bullets ? (
        <ul className="mt-3 flex flex-col gap-2">
          {item.bullets.map((b) => (
            <li key={b} className="flex gap-2.5 text-sm text-text-secondary leading-relaxed">
              <span className="text-accent mt-1.5 shrink-0 text-[10px]">▸</span>
              {b}
            </li>
          ))}
        </ul>
      ) : item.courses ? (
        <div className="flex flex-wrap gap-2 mt-3">
          {item.courses.map((c) => (
            <span key={c} className="tag text-[11px]">{c}</span>
          ))}
        </div>
      ) : null}
    </motion.div>
  )
}

export default function Experience() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="experience" className="bg-bg-primary">
      <div className="section-wrapper">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="section-label">04 — Experience & Education</p>
          <h2 className="section-title">My journey so far</h2>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            {/* Experience */}
            <div>
              <h3 className="font-display text-sm tracking-[0.1em] uppercase text-text-muted mb-8">
                Work Experience
              </h3>
              {experience.map((item, i) => (
                <TimelineItem
                  key={item.role}
                  item={item}
                  index={i}
                  isVisible={isVisible}
                  type="exp"
                />
              ))}
            </div>

            {/* Education */}
            <div>
              <h3 className="font-display text-sm tracking-[0.1em] uppercase text-text-muted mb-8">
                Education
              </h3>
              {education.map((item, i) => (
                <TimelineItem
                  key={item.degree}
                  item={item}
                  index={i}
                  isVisible={isVisible}
                  type="edu"
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
