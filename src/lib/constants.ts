
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
  // Software Engineers / Project Team
  {
    name: 'Thilina Ruwan',
    role: 'Software Engineer',
    department: 'Faculty of Technology, University of Sri Jayewardenepura',
    email: 'ict20838@fot.sjp.ac.lk',
    imageUrl: 'https://placehold.co/200x200.png',
    dataAiHint: 'man professional'
  },
  {
    name: 'Nadun Abeykon',
    role: 'Software Engineer',
    department: 'Faculty of Technology, University of Sri Jayewardenepura',
    email: 'ict20838@fot.sjp.ac.lk', 
    imageUrl: 'https://placehold.co/200x200.png',
    dataAiHint: 'man professional'
  },
  {
    name: 'Dhanshka',
    role: 'Software Engineer',
    department: 'Faculty of Technology, University of Sri Jayewardenepura',
    email: 'ict20838@fot.sjp.ac.lk', 
    imageUrl: 'https://placehold.co/200x200.png',
    dataAiHint: 'man professional'
  },
  // Supervisor
  {
    name: 'Mr Chamila Karunathilaka',
    role: 'Senior Lecturer',
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
