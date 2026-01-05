
import React, { useState, useEffect } from 'react';
import { Section, NavItem } from './types';
import { NAV_ITEMS, SESSIONS, COVEY_DIMENSIONS } from './constants';
import Sidebar from './components/Sidebar';
import ProductivityCoach from './components/ProductivityCoach';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<Section>(Section.Intro);

  const handleScroll = () => {
    const sections = Object.values(Section);
    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= 300) {
          setActiveSection(section);
          break;
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateTo = (section: Section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(section);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex">
      <Sidebar items={NAV_ITEMS} activeSection={activeSection} onNavigate={navigateTo} />
      
      <main className="flex-1 lg:ml-64 relative">
        {/* Intro Section */}
        <section id={Section.Intro} className="min-h-screen flex flex-col items-center justify-center p-8 text-center bg-white relative overflow-hidden">
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-emerald-50 rounded-full blur-3xl opacity-50" />
          <div className="max-w-4xl relative z-10 space-y-8">
            <div className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-sm font-bold uppercase tracking-wider mb-4 animate-bounce">
              Taller Intensivo 2025
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-tight">
              Taller de <span className="text-emerald-600 italic">Productividad</span> Digital
            </h1>
            <p className="text-xl md:text-2xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
              "En un mundo donde el conocimiento cambia más rápido de lo que logramos dominarlo, tu habilidad más valiosa no es lo que sabes, sino <span className="text-slate-900 font-bold">cómo aprendes</span>."
            </p>
            <div className="pt-10 flex flex-wrap gap-4 justify-center">
              <button 
                onClick={() => navigateTo(Section.Roadmap)}
                className="bg-emerald-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-200"
              >
                Ver Programa
              </button>
              <button 
                onClick={() => navigateTo(Section.Mission)}
                className="bg-white text-emerald-700 border-2 border-emerald-100 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-emerald-50 transition-all"
              >
                Conocer la Misión
              </button>
            </div>
          </div>
          
          <div className="mt-20 w-full max-w-5xl px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
             <div className="p-6 bg-slate-50 rounded-3xl">
                <div className="text-3xl font-bold text-emerald-600 mb-1">4</div>
                <div className="text-slate-500 text-sm">Sesiones Intensivas</div>
             </div>
             <div className="p-6 bg-slate-50 rounded-3xl">
                <div className="text-3xl font-bold text-emerald-600 mb-1">10+</div>
                <div className="text-slate-500 text-sm">Herramientas IA</div>
             </div>
             <div className="p-6 bg-slate-50 rounded-3xl">
                <div className="text-3xl font-bold text-emerald-600 mb-1">100%</div>
                <div className="text-slate-500 text-sm">Práctico y Aplicable</div>
             </div>
             <div className="p-6 bg-slate-50 rounded-3xl">
                <div className="text-3xl font-bold text-emerald-600 mb-1">24/7</div>
                <div className="text-slate-500 text-sm">Mentoría Digital</div>
             </div>
          </div>
        </section>

        {/* Mission Section */}
        <section id={Section.Mission} className="py-24 px-8 bg-slate-900 text-white">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold">Nuestra <span className="text-emerald-400 italic">Misión</span></h2>
              <p className="text-lg text-slate-400 leading-relaxed">
                Transformar la manera en que las personas y organizaciones operan, mediante el pensamiento sistémico y la automatización inteligente.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: 'Cuestionen', desc: 'Los paradigmas operativos tradicionales.', icon: '?' },
                  { title: 'Valoren', desc: 'Su tiempo como el recurso más escaso.', icon: '⏱️' },
                  { title: 'Deleguen', desc: 'A la tecnología las tareas mecánicas.', icon: '🤖' },
                  { title: 'Concentren', desc: 'Su energía en desafíos de alto impacto.', icon: '🎯' },
                ].map((item, idx) => (
                  <div key={idx} className="bg-slate-800 p-6 rounded-2xl hover:bg-slate-700 transition-colors border border-slate-700">
                    <div className="text-2xl mb-3">{item.icon}</div>
                    <h3 className="font-bold text-emerald-400 mb-2 uppercase text-sm tracking-widest">{item.title}</h3>
                    <p className="text-sm text-slate-300">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-emerald-500 rounded-[40px] rotate-3 opacity-20 group-hover:rotate-6 transition-transform" />
              <img 
                src="https://picsum.photos/seed/productivity/800/800" 
                alt="Productivity" 
                className="relative rounded-[40px] shadow-2xl object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </section>

        {/* Covey Habit Section */}
        <section id={Section.Covey} className="py-24 px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-4xl font-bold text-slate-900">Afilar la Sierra</h2>
              <p className="text-slate-500 max-w-2xl mx-auto">
                La inversión más estratégica eres tú. No puedes talar un árbol con una sierra sin filo; no puedes producir con una mente agotada.
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-6">
              {COVEY_DIMENSIONS.map((dim, idx) => (
                <div key={idx} className={`p-8 rounded-[32px] text-white ${dim.color} hover:-translate-y-2 transition-transform duration-300`}>
                  <h3 className="text-2xl font-bold mb-4">{dim.title}</h3>
                  <p className="text-emerald-50/80 text-sm leading-relaxed">{dim.content}</p>
                </div>
              ))}
            </div>

            <div className="mt-16 bg-emerald-50 rounded-[40px] p-12 border border-emerald-100 relative overflow-hidden">
               <div className="absolute top-0 right-0 p-8 text-emerald-200">
                 <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 13.1216 16 12.017 16C10.9124 16 10.017 16.8954 10.017 18L10.017 21H14.017ZM14.017 21H19C20.1046 21 21 20.1046 21 19V10L12 3L3 10V19C3 20.1046 3.89543 21 5 21H9.98235C9.99209 20.9757 10 20.95 10 20.9231V18.1538C10 17.062 10.8954 16.1731 12 16.1731C13.1046 16.1731 14 17.062 14 18.1538V20.9231C14 20.95 14.0079 20.9757 14.0176 21H14.017Z"/></svg>
               </div>
               <p className="text-xl italic text-emerald-900 leading-relaxed max-w-2xl relative z-10">
                 "Trabajar sin renovar nuestras capacidades conduce al agotamiento y a la ineficiencia. Afilar la sierra representa invertir tiempo en ti mismo para mejorar tu efectividad."
               </p>
               <p className="mt-4 font-bold text-emerald-700 text-sm uppercase tracking-widest">Stephen Covey, "7 Hábitos"</p>
            </div>
          </div>
        </section>

        {/* Roadmap Section */}
        <section id={Section.Roadmap} className="py-24 px-8 bg-slate-50">
          <div className="max-w-6xl mx-auto">
             <div className="mb-16">
               <h2 className="text-4xl font-bold mb-4">Estructura del Programa</h2>
               <p className="text-slate-500">Un viaje de 4 pasos para revolucionar tu flujo de trabajo.</p>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
               {SESSIONS.map((session) => (
                 <div key={session.id} className="group glass-morphism p-8 rounded-[32px] border border-slate-200 hover:border-emerald-500/50 hover:shadow-2xl hover:shadow-emerald-100 transition-all">
                    <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center font-bold text-xl mb-6 group-hover:bg-emerald-600 transition-colors">
                      {session.id}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{session.title}</h3>
                    <p className="text-sm text-slate-500 mb-6">{session.subtitle}</p>
                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {session.tools.map((tool, i) => (
                          <span key={i} className="px-2 py-1 bg-emerald-100 text-emerald-700 text-[10px] font-bold rounded-lg uppercase tracking-tight">{tool}</span>
                        ))}
                      </div>
                    </div>
                 </div>
               ))}
             </div>
          </div>
        </section>

        {/* Deep Dive Session 1 */}
        <section id={Section.Session1} className="py-24 px-8 bg-white border-t border-slate-100">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12 items-start">
              <div className="flex-1 space-y-12">
                <div>
                  <h2 className="text-4xl font-bold text-slate-900 mb-6">Sesión 1: <span className="text-emerald-600">Higiene Digital</span></h2>
                  <p className="text-slate-500 leading-relaxed text-lg">
                    No partamos con la carreta antes que los bueyes. Para automatizar, primero debemos organizar.
                  </p>
                </div>

                <div className="grid gap-8">
                  <div className="flex gap-6 items-start">
                    <div className="w-14 h-14 shrink-0 bg-red-100 text-red-600 rounded-2xl flex items-center justify-center">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Inbox Zero</h3>
                      <p className="text-slate-500 text-sm leading-relaxed">Libera tu mente y optimiza tu bandeja. La bandeja de entrada no es una lista de tareas. Procesa: Borrar, Reenviar, Responder, Aplazar, Archivar.</p>
                    </div>
                  </div>

                  <div className="flex gap-6 items-start">
                    <div className="w-14 h-14 shrink-0 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-4.44-4.44l1.103-1.103m9.49-9.49l1.103-1.103m-3.33 3.33l-1.103 1.103m0 0a9 9 0 00-12.828 12.828l1.103-1.103m4.44 4.44a9 9 0 0012.828-12.828l-1.103 1.103z"/></svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Perfiles de Navegador</h3>
                      <p className="text-slate-500 text-sm leading-relaxed">Separa lo personal de lo laboral. Chrome para lo personal, Edge para lo laboral. Historiales limpios, marcadores enfocados.</p>
                    </div>
                  </div>

                  <div className="flex gap-6 items-start">
                    <div className="w-14 h-14 shrink-0 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Seguridad y Gestión</h3>
                      <p className="text-slate-500 text-sm leading-relaxed">Bitwarden o 1Password. Nunca repitas contraseñas. Activa siempre el Segundo Factor de Autenticación (2FA).</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-[400px] shrink-0 bg-slate-900 rounded-[40px] p-8 text-white">
                 <h4 className="text-emerald-400 font-bold uppercase tracking-tighter text-xs mb-8">Tarea de la Sesión</h4>
                 <ul className="space-y-6">
                   <li className="flex gap-4">
                     <div className="w-6 h-6 rounded-full border border-emerald-500 shrink-0 mt-0.5 flex items-center justify-center">1</div>
                     <span className="text-sm text-slate-300">Mantener Inbox Cero por 3 días consecutivos.</span>
                   </li>
                   <li className="flex gap-4">
                     <div className="w-6 h-6 rounded-full border border-emerald-500 shrink-0 mt-0.5 flex items-center justify-center">2</div>
                     <span className="text-sm text-slate-300">Crear perfil "Trabajo" y "Personal" en navegadores distintos.</span>
                   </li>
                   <li className="flex gap-4">
                     <div className="w-6 h-6 rounded-full border border-emerald-500 shrink-0 mt-0.5 flex items-center justify-center">3</div>
                     <span className="text-sm text-slate-300">Instalar un gestor de contraseñas (Bitwarden recomendado).</span>
                   </li>
                 </ul>
                 <div className="mt-12 p-6 bg-slate-800 rounded-2xl border border-slate-700">
                   <p className="text-xs text-slate-400 italic">"El objetivo no es la perfección inmediata, sino comenzar a desarrollar hábitos consistentes."</p>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bonus IA Section */}
        <section id={Section.Bonus} className="py-24 px-8 bg-slate-50">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-[40px] p-8 md:p-16 shadow-xl border border-slate-200">
               <div className="max-w-3xl">
                 <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-8">
                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                 </div>
                 <h2 className="text-4xl font-bold mb-6">Instrucciones Personalizadas <br/><span className="text-emerald-600">para tu IA</span></h2>
                 <p className="text-slate-500 mb-10 text-lg">Optimiza tu experiencia definiendo quién eres y cómo quieres que la IA te responda. Una configuración única para una aplicación universal.</p>
                 
                 <div className="grid md:grid-cols-2 gap-8">
                   <div className="space-y-4">
                     <h4 className="font-bold text-slate-900">1. ¿Qué debería saber?</h4>
                     <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 text-sm text-slate-600">
                       Define tu rol, entorno y preferencias básicas. <br/>
                       <span className="block mt-2 italic">"Soy arquitecto, me interesa la eficiencia y el diseño minimalista..."</span>
                     </div>
                   </div>
                   <div className="space-y-4">
                     <h4 className="font-bold text-slate-900">2. ¿Cómo debe responder?</h4>
                     <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 text-sm text-slate-600">
                       Define tono, idioma y estructura. <br/>
                       <span className="block mt-2 italic">"Usa un tono profesional pero cercano, responde en bullets y avisa riesgos..."</span>
                     </div>
                   </div>
                 </div>
               </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-20 px-8 bg-slate-900 text-white text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl font-bold italic">¡Gracias por ser parte de este cambio!</h2>
            <div className="flex flex-col items-center gap-2">
              <span className="text-emerald-400 font-bold">Vicente Donoso</span>
              <span className="text-slate-500">Asesor en Productividad, Estrategia y Transformación Digital</span>
            </div>
            <div className="flex justify-center gap-6 text-sm text-slate-400">
              <a href="mailto:vicente@vdrc.cl" className="hover:text-emerald-400 transition-colors">vicente@vdrc.cl</a>
              <span>•</span>
              <a href="https://linkedin.com/in/vicentedonosor" target="_blank" className="hover:text-emerald-400 transition-colors">LinkedIn</a>
            </div>
          </div>
        </footer>

        <ProductivityCoach />
      </main>
    </div>
  );
};

export default App;
