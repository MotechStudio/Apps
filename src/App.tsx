import { motion } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Twitter, 
  Smartphone, 
  Code2, 
  Terminal, 
  ExternalLink,
  Play
} from 'lucide-react';
import { portfolioData } from './data/portfolioData';

export default function App() {
  const { site, hero, about, projects, contact } = portfolioData;

  return (
    <div className="min-h-screen font-sans selection:bg-emerald-500/30 selection:text-emerald-200">
      
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="font-display font-bold text-xl tracking-tight text-white flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center">
              <Smartphone className="w-5 h-5 text-slate-950" />
            </div>
            {site.logoText}
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
            <a href="#about" className="hover:text-emerald-400 transition-colors">About</a>
            <a href="#projects" className="hover:text-emerald-400 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-emerald-400 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-6">
          {/* Background decorative elements */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/10 rounded-full blur-[120px] opacity-50 pointer-events-none" />
          
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-emerald-500/10 text-emerald-400 text-sm font-medium mb-6 border border-emerald-500/20">
                {hero.greeting}
              </span>
            </motion.div>
            
            <motion.h1 
              className="font-display text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {hero.name}
            </motion.h1>
            
            <motion.h2 
              className="text-2xl md:text-4xl font-display text-slate-400 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {hero.role}
            </motion.h2>
            
            <motion.p 
              className="text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {hero.description}
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <a 
                href="#projects" 
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-emerald-500 text-slate-950 font-semibold hover:bg-emerald-400 transition-colors flex items-center justify-center gap-2"
              >
                <Code2 className="w-5 h-5" />
                {hero.primaryCta}
              </a>
              <a 
                href="#contact" 
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/5 text-white font-semibold hover:bg-white/10 transition-colors border border-white/10 flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                {hero.secondaryCta}
              </a>
            </motion.div>
          </div>
        </section>

        {/* About & Skills Section */}
        <section id="about" className="py-24 px-6 bg-slate-900/50 border-y border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
                  {about.title}
                </h3>
                <p className="text-slate-400 text-lg leading-relaxed mb-8">
                  {about.description}
                </p>
                <div className="flex items-center gap-4 text-slate-300">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-5 h-5 text-emerald-400" />
                    <span>Clean Code</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Smartphone className="w-5 h-5 text-emerald-400" />
                    <span>Native Android</span>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-slate-950 p-8 rounded-3xl border border-white/5"
              >
                <h4 className="font-display text-xl font-bold text-white mb-6">Technical Arsenal</h4>
                <div className="flex flex-wrap gap-3">
                  {about.skills.map((skill, index) => (
                    <span 
                      key={index}
                      className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 text-sm font-medium hover:border-emerald-500/50 hover:text-emerald-400 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h3 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">Featured Projects</h3>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">A selection of my recent Android development work.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group bg-slate-900/50 rounded-3xl overflow-hidden border border-white/5 hover:border-emerald-500/30 transition-colors flex flex-col"
                >
                  <div className="relative h-60 overflow-hidden bg-slate-800">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent opacity-80" />
                  </div>
                  
                  <div className="p-8 flex-1 flex flex-col">
                    <h4 className="font-display text-2xl font-bold text-white mb-3">{project.title}</h4>
                    <p className="text-slate-400 mb-6 flex-1">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex}
                          className="text-xs font-medium px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                      {project.playStoreUrl !== "#" && (
                        <a 
                          href={project.playStoreUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm font-medium text-white hover:text-emerald-400 transition-colors"
                        >
                          <Play className="w-4 h-4" />
                          Play Store
                        </a>
                      )}
                      {project.githubUrl !== "#" && (
                        <a 
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-white transition-colors ml-auto"
                        >
                          <Github className="w-4 h-4" />
                          Source
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32 px-6 bg-emerald-950/20 border-t border-emerald-500/10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
                {contact.title}
              </h3>
              <p className="text-slate-400 text-lg mb-12">
                {contact.description}
              </p>
              
              <a 
                href={`mailto:${contact.email}`}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-emerald-500 text-slate-950 font-bold text-lg hover:bg-emerald-400 transition-colors mb-16"
              >
                <Mail className="w-6 h-6" />
                Say Hello
              </a>
              
              <div className="flex items-center justify-center gap-6">
                <a href={contact.socials.github} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition-all">
                  <Github className="w-6 h-6" />
                </a>
                <a href={contact.socials.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition-all">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href={contact.socials.twitter} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition-all">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href={contact.socials.playStore} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 text-slate-400 hover:text-emerald-400 hover:bg-emerald-500/10 transition-all">
                  <Play className="w-6 h-6" />
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 text-center border-t border-white/5 text-slate-500 text-sm">
        <p>© {new Date().getFullYear()} {site.logoText}. All rights reserved.</p>
      </footer>
    </div>
  );
}
