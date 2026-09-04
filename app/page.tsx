import React from "react";
import Image from "next/image";

export default function Page() {
  return (
    <div className="antialiased selection:bg-[#3C83F6] selection:text-white font-sans text-base overflow-x-hidden bg-[#000000] text-[#FAFAFA]">
      <main>
        {/* Hero Section */}
        <section className="relative h-screen overflow-hidden">
          <div className="relative z-10 h-full flex items-center pb-[6vh]">
            <div className="container mx-auto px-6 md:px-12 max-w-4xl flex flex-col space-y-7">
              <div className="space-y-2">
                <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-[#FAFAFA]">
                  Lasha Ergeshidze
                </h1>
                <p className="text-xl md:text-2xl text-[#999999] max-w-xl leading-relaxed">
                  Frontend Engineer &amp; Full-Stack Developer
                </p>
              </div>
              <p className="text-base text-[#999999] max-w-170 leading-relaxed font-semibold">
                I build full-stack applications from the ground up, working across the frontend, backend, and databases. I enjoy understanding how everything connects and solving problems through code. I genuinely like what I do, especially when I can take an idea, turn it into a working product, and keep improving it through real challenges.
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
                <a
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium bg-[#3C83F6] text-white px-6 h-11 rounded-md text-base hover:bg-[#3C83F6]/90 transition-colors"
                  href="#projects"
                >
                  View Projects
                </a>
                <a
                  className="text-base font-medium text-white/80 hover:text-white transition-colors"
                  href="mailto:mr.ergeshidze@gmail.com"
                >
                  Contact Me →
                </a>
              </div>
              <div className="flex flex-wrap items-center gap-x-5 gap-y-3 pt-1  mt-4 w-full">
                <a className="text-sm font-medium text-white/60 hover:text-white transition-colors">Newsletter</a>
                <a className="text-sm font-medium text-white/60 hover:text-white transition-colors">Resume</a>

                <span aria-hidden="true" className="hidden sm:block w-px h-4 bg-[#1f1f1f]"></span>
                <div className="flex items-center gap-4" data-testid="row-social-links">
                  <div className="flex items-center gap-4" data-testid="row-social-links">
                    {/* GitHub */}
                    <a
                      href="https://github.com/YOUR_USERNAME"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                      data-testid="link-github"
                      className="text-white/40 hover:text-white/80 transition-colors duration-200"
                    >
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 24 24"
                        className="w-4 h-4"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.73.084-.73 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.776.418-1.305.762-1.605-2.665-.303-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23a11.5 11.5 0 0 1 3.006-.404c1.02.005 2.045.138 3.006.404 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.435.375.81 1.096.81 2.22v3.285c0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                    </a>


                    {/* LinkedIn */}
                    <a
                      href="https://www.linkedin.com/in/will-phillips-3b9a25191/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      data-testid="link-linkedin"
                      className="text-white/40 hover:text-white/80 transition-colors duration-200"
                    >
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 24 24"
                        className="w-4 h-4"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>


                    {/* X */}
                    <a
                      href="https://x.com/willsclips_"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="X"
                      data-testid="link-x"
                      className="text-white/40 hover:text-white/80 transition-colors duration-200"
                    >
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 512 512"
                        className="w-4 h-4"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                      </svg>
                    </a>

                    {/* Bluesky */}
                    <a
                      href="https://bsky.app/profile/YOUR_USERNAME.bsky.social"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Bluesky"
                      data-testid="link-bluesky"
                      className="text-white/40 hover:text-white/80 transition-colors duration-200"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className="w-4 h-4"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M5.323 3.173C7.34 4.69 9.51 7.763 12 11.194c2.49-3.431 4.66-6.504 6.677-8.021C20.614 1.718 23.65.54 23.65 3.68c0 .627-.36 5.266-.57 6.02-.733 2.64-3.403 3.315-5.67 2.907 4.076.734 5.11 3.166 2.873 5.598-4.257 4.633-7.716-1.163-8.283-2.684-.104-.279-.153-.41-.153-.299 0-.111-.05.02-.153.299-.567 1.521-4.026 7.317-8.283 2.684-2.237-2.432-1.203-4.864 2.873-5.598-2.267.408-4.937-.267-5.67-2.907-.21-.754-.57-5.393-.57-6.02C.05.54 3.086 1.718 5.323 3.173Z" />
                      </svg>
                    </a>

                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}

        <section id="jobs" className="border-t border-border scroll-mt-4 border-b">
          <div className="mx-auto px-4 max-w-4xl py-20 space-y-8">
            <div className="space-y-3 max-w-2xl">
              <h2 className="text-2xl md:text-3xl font-semibold">
                Experience
              </h2>

              <p className="text-base text-[#999999] leading-relaxed">
                Building full-stack applications independently, from responsive interfaces
                to backend APIs, databases, and cloud deployments.
              </p>
            </div>

            {/* Work experience */}
            <div className="border-t border-b border-border flex items-center justify-between gap-4 py-4 px-2 -mx-2">
              <span className="min-w-0">
                <span className="text-sm font-medium">
                  Full-Stack Developer
                </span>

                <span className="block text-xs text-[#999999]">
                  Independent / Self-Directed
                </span>
              </span>

              <span className="text-xs text-[#999999] shrink-0">
                2023 — 2026
              </span>
            </div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <div className="space-y-3 max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Projects
          </h2>

          <p className="text-base text-[#999999] leading-relaxed">
            The projects I have built while working across frontend, backend,
            databases, and full-stack development.
          </p>
        </div>

        {/* Projects */}
        <div className="border-t border-b border-border divide-y divide-border">
          <div className="flex items-center justify-between gap-4 py-4 px-2 -mx-2">
            <span className="min-w-0">
              <span className="text-sm font-medium">Site Inspector</span>
              <span className="block text-xs text-[#999999]">
                React · TypeScript · Flask · BeautifulSoup
              </span>
            </span>

            <span className="text-xs text-[#999999] shrink-0">
              2026
            </span>
          </div>

          <div className="flex items-center justify-between gap-4 py-4 px-2 -mx-2">
            <span className="min-w-0">
              <span className="text-sm font-medium">SportsGeorgia</span>
              <span className="block text-xs text-[#999999]">
                React · TypeScript · Django · REST API
              </span>
            </span>

            <span className="text-xs text-[#999999] shrink-0">
              2026
            </span>
          </div>

          <div className="flex items-center justify-between gap-4 py-4 px-2 -mx-2">
            <span className="min-w-0">
              <span className="text-sm font-medium">Admin Board</span>
              <span className="block text-xs text-[#999999]">
                React · TypeScript · Redux · Zod
              </span>
            </span>

            <span className="text-xs text-[#999999] shrink-0">
              2025
            </span>
          </div>
        </div>

        {/* Hackathons Section */}
        <section
          className="py-[128px] px-5 md:px-16 max-w-4xl mx-auto border-t border-[#1f1f1f] fade-in-up visible"
          id="hackathons"
        >
          <div className="flex flex-col gap-12">
            <div className="w-full">
              <h2 className="font-semibold text-4xl md:text-5xl text-[#FAFAFA]">
                Hackathons
              </h2>
            </div>

            <div className="space-y-16">
              {/* Featured Hackathon */}
              <div className="space-y-6">
                <a
                  href="https://www.linkedin.com/posts/lasha-ergeshidze-6822ba2a5_nakadi-hub-thanks-for-this-opportunity-ugcPost-7473395825214164992-gNQU/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Image
                    className="rounded-md mt-8 group-hover:scale-[1.01] transition-all"
                    src="https://res.cloudinary.com/di4lzdrlk/image/upload/v1785907661/1781779542093_kumrv3.jpg"
                    alt="NakadiHub hackathon"
                    width={1000}
                    height={560}
                  />
                </a>

                <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-2">
                  <a
                    href="https://www.linkedin.com/posts/lasha-ergeshidze-6822ba2a5_nakadi-hub-thanks-for-this-opportunity-ugcPost-7473395825214164992-gNQU/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-2xl text-[#FAFAFA] hover:underline"
                  >
                    NakadiHub Hackathon
                  </a>

                  <span className="text-xs text-[#999999] tracking-widest uppercase">
                    2026
                  </span>
                </div>

                <div className="space-y-4">
                  <a
                    href="https://cozy-nest-setup.lovable.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-base text-[#999999] leading-relaxed hover:text-[#FAFAFA] transition-colors"
                  >
                    Developed the frontend for HackHub, a Georgian-language platform
                    connecting student innovators with hackathons across universities.
                    Built responsive interfaces for event discovery, administration,
                    and skill-based team formation.
                  </a>

                  <p className="text-sm text-[#999999] opacity-80">
                    React, TypeScript, Tailwind CSS
                  </p>
                </div>

                <div className="border-b border-[#1f1f1f] pt-8"></div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <div className="border-b border-[#1f1f1f]"></div>

      {/* Footer */}
      <footer className="bg-[#000000] border-t border-[#1f1f1f] w-full px-5 md:px-16 py-8 flex flex-col md:flex-row justify-between items-start max-w-4xl mx-auto font-medium">
        <div className="mb-4 md:mb-0 md:text-left">
          <p className="text-sm text-[#999999]">Lasha Ergeshidze @ 2026</p>
        </div>
        <div className="flex space-x-8">
          <a
            className="text-sm text-[#3C83F6] hover:text-[#3C83F6]/80 transition-colors hover:underline opacity-80 hover:opacity-100 uppercase tracking-widest"
            href="#"
          >
            LinkedIn
          </a>
          <a
            className="text-sm text-[#3C83F6] hover:text-[#3C83F6]/80 transition-colors hover:underline opacity-80 hover:opacity-100 uppercase tracking-widest"
            href="#"
          >
            GitHub
          </a>
          <a
            className="text-sm text-[#3C83F6] hover:text-[#3C83F6]/80 transition-colors hover:underline opacity-80 hover:opacity-100 uppercase tracking-widest"
            href="#"
          >
            ReadCV
          </a>
        </div>
      </footer>
    </div>
  );
}