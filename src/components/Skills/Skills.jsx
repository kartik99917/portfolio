import { motion } from 'framer-motion'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { skills } from '../../utils/data'

const categoryColors = {
  Frontend: '#4a6fa5',
  Backend: '#5a8a6a',
  'Languages & Tools': '#8a6a5a',
}

export default function Skills() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="skills" className="bg-bg-primary">
      <div className="section-wrapper">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="section-label">02 — Skills</p>
          <h2 className="section-title">Technical toolkit</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, items], catIdx) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: catIdx * 0.12 }}
                className="bg-bg-secondary border border-border rounded-xl p-6"
              >
                <div className="flex items-center gap-2.5 mb-5">
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: categoryColors[category] }}
                  />
                  <h3
                    className="font-display text-xs tracking-[0.12em] uppercase font-semibold"
                    style={{ color: categoryColors[category] }}
                  >
                    {category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {items.map((skill, i) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: catIdx * 0.1 + i * 0.04 }}
                      className="tag cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
