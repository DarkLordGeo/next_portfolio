// import Image from "next/image";cls
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link';
import Image from 'next/image'
import ProfilePicture from '../public/profile.jpg'
export default function Home() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-24 md:py-40">

      {/* header */}
      <header className="flex flex-col items-center text-center mb-32">
        <div className="w-20 h-20 rounded-full border border-black/10 flex items-center justify-center overflow-hidden mb-8 grayscale hover:grayscale-0 transition-all duration-500">
          <Image
            src={'https://res.cloudinary.com/di4lzdrlk/image/upload/c_crop,g_north_west,h_4047,w_3079,x_754/copy_of_new.jpg'}
            alt='Lasha ergeshidze'
            width={100}
            height={100}
          />
        </div>
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter uppercase italic">Lasha Ergeshidze</h1>
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-stark-gray">Front end developer</p>
          {/* <div className="inline-flex items-center gap-2 border border-black/10 px-3 py-1.5">
            <span className="blinking-dot"></span>
            <span className="text-[10px] font-black uppercase tracking-widest">Available for hire</span>
          </div> */}
        </div>
      </header>

      {/* about */}
      <section className="mb-32">
        <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-stark-gray mb-8">About</h2>
        <p className="text-xl md:text-2xl font-light leading-tight tracking-tight">
          Front-End Developer working with{" "}
          <span className="bg-accent px-1 font-semibold">React</span> and{" "}
          <span className="bg-accent px-1 font-semibold">Next.js</span>.
          Exploring backend development and building scalable web applications.
          Highly motivated, eager to learn, and focused on full-stack fundamentals.
        </p>
      </section>
      {/* skils */}

      <section className="mb-32">
        <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-stark-gray mb-10">Capabilities</h2>
        <div className="grid grid-cols-2 gap-x-12 gap-y-8">
          <div>
            <h3 className="text-xs font-bold uppercase mb-4 border-l-2 border-accent pl-3">Frontend</h3>
            <ul className="text-sm space-y-2 font-medium">
              <li>React / Next.js</li>
              <li>TypeScript</li>
              <li>Redux Toolkit</li>
              <li>RHF</li>
              <li>Zod</li>
              <li>Tanstack query</li>
              <li>Tailwind CSS</li>
              <li>SCSS</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase mb-4 border-l-2 border-accent pl-3">Backend</h3>
            <ul className="text-sm space-y-2 font-medium">
              <li>Python</li>
              <li>SQLite</li>
              <li>Neon</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase mb-4 border-l-2 border-accent pl-3">Hosting</h3>
            <ul className="text-sm space-y-2 font-medium">
              <li>AWS</li>
              <li>Netlify</li>
              <li>Vercel</li>
              <li>Render</li>
            </ul>
          </div>
        </div>
      </section>

      {/* projects */}

      <section className="mb-32">
        <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-stark-gray mb-6">Selected Works</h2>
        <div className="flex flex-col">

          <a href="https://itjobsgeorgia.netlify.app/">
            <div className="minimal-card group hover:ml-1 transition-all cursor-pointer">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <span className="blinking-dot"></span>
                  <h3 className="text-lg font-extrabold uppercase tracking-tighter group-hover:underline decoration-accent decoration-2 cursorpoin">ITJobsGeorgia</h3>
                </div>
                <span className="material-symbols-outlined text-sm font-light group-hover:mr-1 transition-all">
                  <ArrowUpRight width={14} height={20} />
                </span>
              </div>
              <p className="text-sm text-stark-gray font-medium max-w-md">
                A website that scrapes and displays updated job listings, integrating React frontend with Flask backend and automated Python scraping.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="text-[10px] font-black uppercase tracking-widest bg-black/5 px-2 py-1 border border-black/5">React</span>
                <span className="text-[10px] font-black uppercase tracking-widest bg-black/5 px-2 py-1 border border-black/5">Typescript</span>
                <span className="text-[10px] font-black uppercase tracking-widest bg-black/5 px-2 py-1 border border-black/5">React Router</span>
                <span className="text-[10px] font-black uppercase tracking-widest bg-black/5 px-2 py-1 border border-black/5">Tailwind CSS</span>
                <span className="text-[10px] font-black uppercase tracking-widest bg-black/5 px-2 py-1 border border-black/5">React bits</span>
                <span className="text-[10px] font-black uppercase tracking-widest bg-black/5 px-2 py-1 border border-black/5">Python</span>
                <span className="text-[10px] font-black uppercase tracking-widest bg-black/5 px-2 py-1 border border-black/5">Flask</span>
                <span className="text-[10px] font-black uppercase tracking-widest bg-black/5 px-2 py-1 border border-black/5">Scrapy</span>
                <span className="text-[10px] font-black uppercase tracking-widest bg-black/5 px-2 py-1 border border-black/5">bs4</span>
                <span className="text-[10px] font-black uppercase tracking-widest bg-black/5 px-2 py-1 border border-black/5">Github Actions</span>
              </div>
            </div>
          </a>

          <a href="https://iptrackernetlify.netlify.app/">
            <div className="minimal-card group hover:ml-1 transition-all cursor-pointer">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <span className="blinking-dot"></span>
                  <h3 className="text-lg font-extrabold uppercase tracking-tighter group-hover:underline decoration-accent decoration-2 cursorpoin">
                    IP Tracker
                  </h3>
                </div>
                <span className="material-symbols-outlined text-sm font-light group-hover:mr-1 transition-all">
                  <ArrowUpRight width={14} height={20} />
                </span>
              </div>
              <p className="text-sm text-stark-gray font-medium max-w-md">
                Built with TypeScript, React, Vite, Tailwind CSS, Axios, Lucide React, and GitHub, IP Tracker is a responsive frontend application that displays IP address details, location data, and ISP information through a clean and modern user interface.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="text-[10px] font-black uppercase tracking-widest bg-black/5 px-2 py-1 border border-black/5">
                  TypeScript
                </span>
                <span className="text-[10px] font-black uppercase tracking-widest bg-black/5 px-2 py-1 border border-black/5">
                  React
                </span>
                <span className="text-[10px] font-black uppercase tracking-widest bg-black/5 px-2 py-1 border border-black/5">
                  Vite
                </span>
                <span className="text-[10px] font-black uppercase tracking-widest bg-black/5 px-2 py-1 border border-black/5">
                  Tailwind CSS
                </span>
                <span className="text-[10px] font-black uppercase tracking-widest bg-black/5 px-2 py-1 border border-black/5">
                  Axios
                </span>
                <span className="text-[10px] font-black uppercase tracking-widest bg-black/5 px-2 py-1 border border-black/5">
                  Lucide React
                </span>
                <span className="text-[10px] font-black uppercase tracking-widest bg-black/5 px-2 py-1 border border-black/5">
                  GitHub
                </span>
              </div>
            </div>
          </a>

          <a href="https://heliotravel.ge/">
            <div className="minimal-card group hover:ml-1 transition-all cursor-pointer">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <span className="blinking-dot"></span>
                  <h3 className="text-lg font-extrabold uppercase tracking-tighter group-hover:underline decoration-accent decoration-2 cursorpoin">Helio Travel</h3>
                </div>
                <span className="material-symbols-outlined text-sm font-light group-hover:mr-1 transition-all"><ArrowUpRight width={14} height={20} /></span>
              </div>
              <p className="text-sm text-stark-gray font-medium max-w-md">

                Helio Travel is a fast, modern tourist agency website built with JavaScript and SCSS, powered by Decap CMS
                and
                hosted on Netlify for easy content management and deployment.

              </p><div className="flex flex-wrap gap-2 mt-4">
                <span className="text-[10px] font-black uppercase tracking-widest bg-black/5 px-2 py-1 border border-black/5">JavaScript</span>
                <span className="text-[10px] font-black uppercase tracking-widest bg-black/5 px-2 py-1 border border-black/5">Decap CMS</span>
                <span className="text-[10px] font-black uppercase tracking-widest bg-black/5 px-2 py-1 border border-black/5">SCSS</span>
                <span className="text-[10px] font-black uppercase tracking-widest bg-black/5 px-2 py-1 border border-black/5">Netlify</span>

              </div>
            </div>
          </a>

          <a href="https://smarthomeclone.netlify.app/">
            <div className="minimal-card group hover:ml-1 transition-all cursor-pointer">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <span className="blinking-dot"></span>
                  <h3 className="text-lg font-extrabold uppercase tracking-tighter group-hover:underline decoration-accent decoration-2 cursorpoin">
                    Smart home
                  </h3>
                </div>
                <span className="material-symbols-outlined text-sm font-light group-hover:mr-1 transition-all"><ArrowUpRight width={14} height={20} /></span>
              </div>
              <p className="text-sm text-stark-gray font-medium max-w-md">
                Developed a fully responsive Smart Home website using JavaScript and SCSS, featuring modern design and dynamic content across devices.
              </p><div className="flex flex-wrap gap-2 mt-4">
                <span className="text-[10px] font-black uppercase tracking-widest bg-black/5 px-2 py-1 border border-black/5">JavaScript</span>
                <span className="text-[10px] font-black uppercase tracking-widest bg-black/5 px-2 py-1 border border-black/5">SCSS</span>
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* hackathons */}

      <section className="mb-32">
        <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-stark-gray mb-6">Hackathons</h2>
        <div className="flex flex-col">

          <a href="https://www.linkedin.com/posts/lasha-ergeshidze-6822ba2a5_nakadi-hub-thanks-for-this-opportunity-ugcPost-7473395825214164992-gNQU/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEmMqkIBmCIVfUXBXue2osYVA-4Lk-o-Rkc">
            <div className="minimal-card group cursor-pointer">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <h3 className="text-lg font-extrabold uppercase tracking-tighter group-hover:underline decoration-accent decoration-2 cursorpoin">NakadiHub hackathon</h3>
                </div>
              </div>
              <p className="text-sm text-stark-gray font-medium max-w">
                Handled the front end for HackHub, a Georgian-language hackathon platform connecting student innovators across universities. Built responsive interfaces for seamless event discovery, administrative tracking, and an interactive matching engine that helps developers form cross-functional, skill-complementary teams under tight deadlines.
              </p>
            </div>
            <Image
              className="rounded-md mt-8 hover:scale-101 transition-all"
              src={'https://media.licdn.com/dms/image/v2/D5622AQFMnwZxspr00g/feedshare-shrink_800/B56Z7aVi8xGgAg-/0/1781779542093?e=1783555200&v=beta&t=GRLjz-2eewsQmEYglsLKy7XWLfYG7171SIradZ02PSE'}
              alt='Nakadi Hub hackathon image'
              width={1000}
              height={100}

            />
          </a>
          <a href="https://cozy-nest-setup.lovable.app/">
            <div className="minimal-card group hover:ml-1 transition-all cursor-pointer">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <span className="blinking-dot"></span>
                  <h3 className="text-lg font-extrabold uppercase tracking-tighter group-hover:underline decoration-accent decoration-2 cursorpoin">HackHub</h3>
                </div>
                <span className="material-symbols-outlined text-sm font-light group-hover:mr-1 transition-all">
                  <ArrowUpRight width={14} height={20} />
                </span>
              </div>
              <p className="text-sm text-stark-gray font-medium max-w-md">
                HackHub is a Georgian-language platform for hackathons and student innovation. It lets students discover hackathons across universities, form teams based on complementary skills, and helps organizers publish events and manage applications. Think of it as a one-stop hub connecting student hackers with hackathons and teammates.
              </p>
            </div>
          </a>




        </div>
      </section>

      {/* contact */}

      <section className="mb-32"><h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-stark-gray mb-8">Contact</h2>
        <div className="space-y-4">
          {/* <p className="text-[10px] font-black uppercase tracking-widest text-stark-gray">Get in touch</p> */}
          <a className="block text-xl md:text-2xl font-light tracking-tight hover:text-accent transition-colors duration-300" href="mailto:mr.ergeshidze@gmail.com">mr.ergeshidze@gmail.com</a>
        </div>
      </section>

      <footer className="pt-24 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest">
          <a className="hover:text-accent transition-colors" href="https://github.com/DarkLordGeo">GitHub</a>
          <a className="hover:text-accent transition-colors" href="https://www.linkedin.com/in/lasha-ergeshidze-6822ba2a5/">LinkedIn</a>
        </div>
        <p className="text-[10px] font-bold text-stark-gray uppercase tracking-widest">© 2026 - All rights reserved</p>
      </footer>

    </div>
  );
}

