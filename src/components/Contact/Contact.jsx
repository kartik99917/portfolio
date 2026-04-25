import { useState } from 'react'
import { motion } from 'framer-motion'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { personalInfo } from '../../utils/data'

const contactLinks = [
  {
    label: 'Email',
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    icon: '✉',
  },
  {
    label: 'Phone',
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone}`,
    icon: '☎',
  },
  {
    label: 'LinkedIn',
    value: 'kartik-gawade-48b824294',
    href: personalInfo.linkedin,
    icon: 'in',
  },
  {
    label: 'GitHub',
    value: 'kartik99917',
    href: personalInfo.github,
    icon: 'gh',
  },
]

export default function Contact() {
  const { ref, isVisible } = useScrollReveal()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    // In production connect to a form backend (Formspree, EmailJS, etc.)
    window.location.href = `mailto:${personalInfo.email}?subject=Portfolio Inquiry from ${form.name}&body=${encodeURIComponent(form.message)}`
    setSent(true)
  }

  return (
    <section id="contact" className="bg-bg-secondary border-t border-border">
      <div className="section-wrapper">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="section-label">05 — Contact</p>
          <h2 className="section-title">
            Let's build something<br />together
          </h2>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Info */}
            <div>
              <p className="text-text-secondary text-base leading-relaxed mb-8">
                I'm open to internships, full-time positions, and interesting freelance projects. If you have something in mind, I'd love to hear it — I typically reply within 24 hours.
              </p>

              <div className="flex flex-col gap-4">
                {contactLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 group"
                  >
                    <span className="w-10 h-10 border border-border-light bg-bg-primary rounded-lg flex items-center justify-center text-sm font-mono text-text-secondary group-hover:border-accent group-hover:text-accent transition-all duration-200">
                      {link.icon}
                    </span>
                    <div>
                      <p className="text-text-muted text-[10px] tracking-[0.1em] uppercase font-display">{link.label}</p>
                      <p className="text-text-secondary text-sm group-hover:text-accent transition-colors duration-200">
                        {link.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Form */}
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-bg-primary border border-accent/30 rounded-xl p-8 text-center"
              >
                <p className="text-3xl mb-3">✓</p>
                <p className="font-display text-text-primary font-semibold mb-2">Message sent!</p>
                <p className="text-text-secondary text-sm">Your email client should have opened. I'll get back to you soon.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label className="block text-[10px] font-display tracking-[0.1em] uppercase text-text-muted mb-1.5">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="w-full bg-bg-primary border border-border rounded-lg px-4 py-3 text-text-primary text-sm placeholder-text-muted outline-none focus:border-accent transition-colors duration-200 font-body"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-display tracking-[0.1em] uppercase text-text-muted mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@email.com"
                    required
                    className="w-full bg-bg-primary border border-border rounded-lg px-4 py-3 text-text-primary text-sm placeholder-text-muted outline-none focus:border-accent transition-colors duration-200 font-body"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-display tracking-[0.1em] uppercase text-text-muted mb-1.5">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell me about your project or opportunity..."
                    required
                    className="w-full bg-bg-primary border border-border rounded-lg px-4 py-3 text-text-primary text-sm placeholder-text-muted outline-none focus:border-accent transition-colors duration-200 font-body resize-none"
                  />
                </div>
                <button type="submit" className="btn-primary self-start">
                  Send Message →
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
