import { personalInfo } from '../../utils/data'

export default function Footer() {
  return (
    <footer className="bg-bg-primary border-t border-border">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-display text-text-muted text-sm">
          © {new Date().getFullYear()} <span className="text-text-secondary">{personalInfo.name}</span>
        </p>
        <p className="text-text-muted text-xs tracking-wide">
          Built with React · Vite · Tailwind
        </p>
        <div className="flex items-center gap-6">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-accent text-xs font-display tracking-wide transition-colors duration-200"
          >
            GitHub ↗
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-accent text-xs font-display tracking-wide transition-colors duration-200"
          >
            LinkedIn ↗
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="text-text-muted hover:text-accent text-xs font-display tracking-wide transition-colors duration-200"
          >
            Email ↗
          </a>
        </div>
      </div>
    </footer>
  )
}
