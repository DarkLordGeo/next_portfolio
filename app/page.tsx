// import Image from "next/image";cls
import { ArrowUpRight } from 'lucide-react'

export default function Home() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-24 md:py-40">
      <header className="flex flex-col items-center text-center mb-32">
        <div className="w-20 h-20 rounded-full border border-black/10 flex items-center justify-center overflow-hidden mb-8 grayscale hover:grayscale-0 transition-all duration-500">
          <img alt="Lasha Ergeshidze" className="w-full h-full object-cover" src="https://media.licdn.com/dms/image/v2/D4D03AQEYKFC3UnyRuQ/profile-displayphoto-scale_200_200/B4DZns85VfGkAY-/0/1760617011160?e=1775692800&v=beta&t=TlmVRiieaJi1iqb0pel0CZiSDYcb3W1IGpCd_KiBCks" />
        </div>
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter uppercase italic">Lasha Ergeshiidze</h1>
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-stark-gray">Front end devloper • Systems Architect</p>
          <div className="inline-flex items-center gap-2 border border-black/10 px-3 py-1.5">
            <span className="blinking-dot"></span>
            <span className="text-[10px] font-black uppercase tracking-widest">Available for hire</span>
          </div>
        </div>
      </header>
      <section className="mb-32">
        <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-stark-gray mb-8">Statement</h2>
        <p className="text-xl md:text-2xl font-light leading-tight tracking-tight">
          Engineering high-performance distributed systems. Focused on <span className="bg-accent px-1 font-semibold">scalability</span>, <span className="bg-accent px-1 font-semibold">latency</span>, and minimalist technical excellence.
        </p>
      </section>
      <section className="mb-32">
        <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-stark-gray mb-10">Capabilities</h2>
        <div className="grid grid-cols-2 gap-x-12 gap-y-8">
          <div>
            <h3 className="text-xs font-bold uppercase mb-4 border-l-2 border-accent pl-3">Front</h3>
            <ul className="text-sm space-y-2 font-medium">
              <li>React / Next.js</li>
              <li>TypeScript</li>
              <li>Low-latency UI</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase mb-4 border-l-2 border-accent pl-3">Back</h3>
            <ul className="text-sm space-y-2 font-medium">
              <li>Distributed Node.js</li>
              <li>PostgreSQL / Redis</li>
              <li>Go Systems</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="mb-32">
        <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-stark-gray mb-6">Selected Works</h2>
        <div className="flex flex-col">
          <div className="minimal-card group hover:ml-1 transition-all cursor-pointer">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-3">
                <span className="blinking-dot"></span>
                <h3 className="text-lg font-extrabold uppercase tracking-tighter group-hover:underline decoration-accent decoration-2 cursorpoin">Nexus ERP</h3>
              </div>
              <span className="material-symbols-outlined text-sm font-light group-hover:mr-1 transition-all"><ArrowUpRight width={14} height={20} /></span>
            </div>
            <p className="text-sm text-stark-gray font-medium max-w-md">Real-time enterprise orchestration. Automated financial intelligence.</p><div className="flex flex-wrap gap-2 mt-4">
              <span className="text-[10px] font-black uppercase tracking-widest bg-black/5 px-2 py-1 border border-black/5">React</span>
              <span className="text-[10px] font-black uppercase tracking-widest bg-black/5 px-2 py-1 border border-black/5">Node.js</span>
              <span className="text-[10px] font-black uppercase tracking-widest bg-black/5 px-2 py-1 border border-black/5">PostgreSQL</span>
            </div>
          </div>

        </div>

      </section>
      <footer className="pt-24 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest">
          <a className="hover:text-accent transition-colors" href="#">GitHub</a>
          <a className="hover:text-accent transition-colors" href="#">LinkedIn</a>
        </div>
        <p className="text-[10px] font-bold text-stark-gray uppercase tracking-widest">© 2024 RIVERASM — CORE v2.4</p>
      </footer>
    </div>
  );
}
