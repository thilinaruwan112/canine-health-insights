
export type NavLink = {
  href: string;
  label: string;
};

export const HEADER_NAV_LINKS: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/methodology', label: 'Methodology' },
  { href: '/results', label: 'Results' },
  { href: '/demo', label: 'Demo' },
  { href: '/contact', label: 'Contact' },
];

export const FOOTER_PAGE_LINKS: NavLink[] = [
  { href: '/system-architecture', label: 'System Architecture' },
  { href: '/literature-review', label: 'Literature Review' },
  { href: '/team', label: 'Team' },
  { href: '/future-work', label: 'Future Work' },
];


export type TeamMember = {
  name: string;
  role: string; // e.g. Student, Supervisor
  department: string;
  email: string;
  imageUrl?: string;
  dataAiHint?: string;
};

export const TEAM_MEMBERS: TeamMember[] = [
  // Project Team
  {
    name: 'Thilina Ruwan',
    role: 'Software Engineer',
    department: 'Faculty of Technology, University of Sri Jayewardenepura',
    email: 'thilina.ruwan.ict20838@fot.sjp.ac.lk', // Unique email
    imageUrl: 'https://placehold.co/200x200.png',
    dataAiHint: 'man professional'
  },
  {
    name: 'Nadun Abeykon',
    role: 'Software Engineer',
    department: 'Faculty of Technology, University of Sri Jayewardenepura',
    email: 'nadun.abeykon.ict20838@fot.sjp.ac.lk', // Unique email
    imageUrl: 'https://placehold.co/200x200.png',
    dataAiHint: 'man professional'
  },
  {
    name: 'Dhanshka',
    role: 'Software Engineer',
    department: 'Faculty of Technology, University of Sri Jayewardenepura',
    email: 'dhanshka.name.ict20838@fot.sjp.ac.lk', // Unique email
    imageUrl: 'https://placehold.co/200x200.png',
    dataAiHint: 'man professional'
  },
  // Supervision Team
  {
    name: 'Mr Chamila Karunathilaka',
    role: 'Senior Lecturer', // This role will be picked up by the supervisor filter
    department: 'Faculty of Technology, University of Sri Jayewardenepura',
    email: 'chamila.k@sjp.ac.lk',
    imageUrl: 'https://placehold.co/200x200.png',
    dataAiHint: 'man professor'
  },
];

export type SocialLink = {
  name: string;
  href: string;
  icon: React.ElementType;
}
