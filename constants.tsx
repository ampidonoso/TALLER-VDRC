
import { SessionInfo, NavItem, Section } from './types';

export const NAV_ITEMS: NavItem[] = [
  { id: Section.Intro, label: 'Inicio' },
  { id: Section.Mission, label: 'Misión' },
  { id: Section.Covey, label: 'Hábito 7' },
  { id: Section.Roadmap, label: 'Programa' },
  { id: Section.Session1, label: 'S1: Higiene Digital' },
  { id: Section.Bonus, label: 'Instrucciones IA' },
];

export const SESSIONS: SessionInfo[] = [
  {
    id: 1,
    title: 'Organización y Eficiencia Digital',
    subtitle: 'Inbox Zero, Perfiles de Navegador y Contraseñas',
    topics: ['Navegadores', 'Contraseñas', 'Inbox Zero', 'ChatGPT básico'],
    tools: ['Edge/Chrome', 'Bitwarden', 'Gmail', 'ChatGPT']
  },
  {
    id: 2,
    title: 'IA para la Productividad',
    subtitle: 'Maximizando el potencial de los LLMs',
    topics: ['IA Generativa', 'Notebook LLM', 'Búsqueda Inteligente'],
    tools: ['Gemini', 'Perplexity', 'ChatGPT Plus']
  },
  {
    id: 3,
    title: 'Presentaciones Inteligentes',
    subtitle: 'Del concepto a la visualización',
    topics: ['Diseño asistido por IA', 'Canvas dinámicos', 'Generación visual'],
    tools: ['Gamma', 'Napkin', 'Krea']
  },
  {
    id: 4,
    title: 'Automatización y Vibe Coding',
    subtitle: 'Delegando lo repetitivo',
    topics: ['Workflows automáticos', 'Programación natural', 'Agentes'],
    tools: ['Zapier', 'Lovable', 'Make']
  }
];

export const COVEY_DIMENSIONS = [
  { title: 'Física', content: 'Ejercicio, nutrición, descanso', color: 'bg-emerald-800' },
  { title: 'Mental', content: 'Lectura, reflexión, planificación', color: 'bg-red-600' },
  { title: 'Espiritual', content: 'Meditación, conexión, naturaleza', color: 'bg-emerald-700' },
  { title: 'Social/Emocional', content: 'Relaciones, servicio, empatía', color: 'bg-emerald-600' },
];
