
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
  { name: 'Alice Wonderland', role: 'Student Researcher', department: 'Computer Science', email: 'alice@example.com', imageUrl: 'https://placehold.co/200x200.png', dataAiHint: 'woman student' },
  { name: 'Bob The Builder', role: 'Student Researcher', department: 'Veterinary Medicine', email: 'bob@example.com', imageUrl: 'https://placehold.co/200x200.png', dataAiHint: 'man student' },
  { name: 'Dhanushka Thilina Ruwan', role: 'Student Researcher', department: 'Software Engineering', email: 'dhanushka@example.com', imageUrl: 'https://placehold.co/200x200.png', dataAiHint: 'man student' },
  { name: 'Nadun Abayakon', role: 'Student Researcher', department: 'Data Science', email: 'nadun@example.com', imageUrl: 'https://placehold.co/200x200.png', dataAiHint: 'man student' },
  { name: 'Dr. Eva Rostova', role: 'Supervisor', department: 'AI & Machine Learning', email: 'eva.r@example.com', imageUrl: 'https://placehold.co/200x200.png', dataAiHint: 'woman professor' },
  { name: 'Prof. Charles Xavier', role: 'Supervisor', department: 'Canine Health Studies', email: 'charles.x@example.com', imageUrl: 'https://placehold.co/200x200.png', dataAiHint: 'man professor' },
];

export type SocialLink = {
  name: string;
  href: string;
  icon: React.ElementType;
}
