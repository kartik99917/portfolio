import { motion } from 'framer-motion'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { summary, achievements, personalInfo } from '../../utils/data'

const revealVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function About() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="about" className="bg-bg-secondary border-y border-border">
      <div className="section-wrapper">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
        >
          <motion.p variants={revealVariants} transition={{ duration: 0.5 }} className="section-label">
            01 — About
          </motion.p>
          <motion.h2 variants={revealVariants} transition={{ duration: 0.5 }} className="section-title">
            Engineering with<br />intention & empathy
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Text */}
            <motion.div variants={revealVariants} transition={{ duration: 0.5 }}>
              <p className="text-text-secondary leading-relaxed mb-5">
                {summary}
              </p>
              <p className="text-text-secondary leading-relaxed mb-6">
                Currently pursuing my B.Tech in Computer Science at <span className="text-text-primary font-medium">SRM Institute of Science & Technology</span> (8.8 CGPA), while simultaneously interning as a Full Stack Developer at <span className="text-text-primary font-medium">C-DAC Mumbai</span>.
              </p>
              <div className="flex flex-col gap-2 text-sm">
                <span className="text-text-muted">
                  📍 {personalInfo.location}
                </span>
                <span className="text-accent text-xs font-display tracking-wide">
                  {personalInfo.available}
                </span>
              </div>
            </motion.div>

            {/* Stats grid */}
            <motion.div
              variants={revealVariants}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-2 gap-4"
            >
              {achievements.map((item) => (
                <div
                  key={item.label}
                  className="bg-bg-primary border border-border rounded-xl p-5 text-center hover:border-border-light transition-colors duration-300"
                >
                  <p className="font-display text-3xl font-bold text-accent mb-1">{item.label}</p>
                  <p className="text-text-muted text-xs tracking-wide">{item.sublabel}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
