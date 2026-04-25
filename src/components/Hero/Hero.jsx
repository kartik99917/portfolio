import { motion } from 'framer-motion'
import { personalInfo } from '../../utils/data'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: 'easeOut' },
})

export default function Hero() {
  const scrollTo = (id) =>
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #090909 0%, #0f0f0f 50%, #111318 100%)',
      }}
    >
      {/* Subtle grid bg */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(74,111,165,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(74,111,165,0.04) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* Anime character — right side, low opacity */}
      <div className="absolute right-0 top-0 bottom-0 w-[52%] hidden lg:flex items-end justify-end pointer-events-none select-none">
        <img
          src="/anime-character.png"
          alt=""
          aria-hidden="true"
          className="h-full w-auto object-contain object-bottom"
          style={{
            opacity: 0.18,
            filter: 'grayscale(30%) contrast(0.9)',
            maskImage: 'linear-gradient(to left, transparent 0%, rgba(0,0,0,0.6) 30%, rgba(0,0,0,1) 60%)',
            WebkitMaskImage: 'linear-gradient(to left, transparent 0%, rgba(0,0,0,0.6) 30%, rgba(0,0,0,1) 60%)',
          }}
        />
      </div>

      {/* Content */}
      <div className="section-wrapper relative z-10 w-full">
        <div className="max-w-xl">
          <motion.span
            {...fadeUp(0.1)}
            className="inline-block font-display text-xs tracking-[0.16em] uppercase text-accent border border-accent/30 px-3 py-1.5 rounded mb-8"
          >
            Available for opportunities
          </motion.span>

          <motion.h1
            {...fadeUp(0.25)}
            className="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold text-text-primary leading-[1.05] mb-4 tracking-tight"
          >
            {personalInfo.name.split(' ')[0]}
            <br />
            <span className="text-accent">{personalInfo.name.split(' ')[1]}</span>
          </motion.h1>

          <motion.p
            {...fadeUp(0.4)}
            className="font-display text-text-secondary text-lg md:text-xl font-light tracking-wide mb-4"
          >
            {personalInfo.role} &nbsp;·&nbsp; Creative Problem Solver
          </motion.p>

          <motion.p
            {...fadeUp(0.52)}
            className="text-text-secondary text-base leading-relaxed mb-10 max-w-md"
          >
            {personalInfo.tagline}
          </motion.p>

          <motion.div {...fadeUp(0.65)} className="flex flex-wrap gap-4">
            <button onClick={() => scrollTo('#projects')} className="btn-primary">
              View Projects
            </button>
            <button onClick={() => scrollTo('#contact')} className="btn-outline">
              Contact Me
            </button>
          </motion.div>

          {/* Stats row */}
          <motion.div
            {...fadeUp(0.78)}
            className="mt-14 flex gap-8 border-t border-border pt-8"
          >
            {[
              { num: '500+', label: 'LeetCode' },
              { num: '8+', label: 'GitHub Repos' },
              { num: '3+', label: 'Projects Shipped' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-2xl font-bold text-text-primary">{stat.num}</p>
                <p className="text-text-muted text-xs tracking-wide mt-0.5">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-text-muted text-[10px] tracking-[0.18em] uppercase font-display">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-accent to-transparent" />
      </motion.div>
    </section>
  )
}
