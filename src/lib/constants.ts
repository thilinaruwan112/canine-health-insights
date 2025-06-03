
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
  // Software Engineers / Students
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
  // Supervisors
  { 
    name: 'Mr Chamila Karunathilaka', 
    role: 'Senior Lecturer', 
    department: 'Faculty of Technology, University of Sri Jayewardenepura', 
    email: 'chamila.k@sjp.ac.lk', // Placeholder, adjust if needed
    imageUrl: 'https://placehold.co/200x200.png', 
    dataAiHint: 'man professor' 
  },
  { 
    name: 'Dr. Eva Rostova', 
    role: 'Supervisor', 
    department: 'AI & Machine Learning', 
    email: 'eva.r@example.com', 
    imageUrl: 'https://placehold.co/200x200.png', 
    dataAiHint: 'woman professor' 
  },
  { 
    name: 'Prof. Charles Xavier', 
    role: 'Supervisor', 
    department: 'Canine Health Studies', 
    email: 'charles.x@example.com', 
    imageUrl: 'https://placehold.co/200x200.png', 
    dataAiHint: 'man professor' 
  },
  { 
    name: 'Dr. Olivia Chen', 
    role: 'Supervisor', 
    department: 'Veterinary Imaging', 
    email: 'olivia.c@example.com', 
    imageUrl: 'https://placehold.co/200x200.png', 
    dataAiHint: 'woman professor' 
  },
  { 
    name: 'Prof. Samuel Green', 
    role: 'Supervisor', 
    department: 'Ethics in AI Research', 
    email: 'samuel.g@example.com', 
    imageUrl: 'https://placehold.co/200x200.png', 
    dataAiHint: 'man professor' 
  },
  { 
    name: 'Dr. Aisha Khan', 
    role: 'Supervisor', 
    department: 'Public Health & Zoonotics', 
    email: 'aisha.k@example.com', 
    imageUrl: 'https://placehold.co/200x200.png', 
    dataAiHint: 'woman professor' 
  },
];

export type SocialLink = {
  name: string;
  href: string;
  icon: React.ElementType;
}
