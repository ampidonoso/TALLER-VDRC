
export interface SessionInfo {
  id: number;
  title: string;
  subtitle: string;
  topics: string[];
  tools: string[];
}

export enum Section {
  Intro = 'intro',
  Mission = 'mission',
  Covey = 'covey',
  Methodology = 'methodology',
  Roadmap = 'roadmap',
  Session1 = 'session1',
  Bonus = 'bonus',
  Final = 'final'
}

export interface NavItem {
  id: Section;
  label: string;
}
