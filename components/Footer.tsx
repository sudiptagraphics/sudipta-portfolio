export default function Footer() {
  return (
    <footer className="py-8 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-muted text-sm">
          © 2024 Sudipta Mondal. Designed &amp; Built with care.
        </p>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-accent transition-colors"
            aria-label="GitHub"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <a
            href="https://dribbble.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-accent transition-colors"
            aria-label="Dribbble"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.375 0 0 5.375 0 12s5.375 12 12 12 12-5.375 12-12S18.625 0 12 0zm7.938 5.5a10.18 10.18 0 012.062 6.188c-.312-.063-3.375-.688-6.5-.312-.063-.125-.125-.313-.188-.438-.187-.438-.375-.875-.625-1.313 3.5-1.437 5.063-3.437 5.25-3.625v-.5zM12 2c2.625 0 5.063 1 6.875 2.625-.125.188-1.5 2.063-4.875 3.313-1.5-2.75-3.188-5-3.438-5.375.438-.063.938-.063 1.438-.063v.5zM8.063 2.75c.25.313 1.875 2.625 3.438 5.313-4.313 1.125-8.125 1.125-8.563 1.125.625-2.875 2.563-5.25 5.125-6.438v-.5zM2 12.063v-.313c.438.063 4.938.063 9.563-1.25.25.5.5 1.063.75 1.563-.125.063-.313.063-.438.125-4.875 1.563-7.438 5.875-7.625 6.188A9.937 9.937 0 012 12.063zm10 10c-2.375 0-4.563-.813-6.313-2.188.188-.313 2.063-4.063 7.438-5.938.063 0 .063 0 .125-.063 1.313 3.438 1.875 6.313 2 7.188-.438.063-.875.063-1.25.063v-.063zm3.188-.75c-.125-.625-.625-3.375-1.813-6.75 2.938-.438 5.5.313 5.813.438-.438 2.688-1.938 5-4 6.313z" />
            </svg>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-accent transition-colors"
            aria-label="Twitter / X"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  )
}
