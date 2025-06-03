
import PageWrapper from '@/components/page-wrapper';
import SectionWrapper from '@/components/section-wrapper';
import ProfileCard from '@/components/profile-card';
import { TEAM_MEMBERS } from '@/lib/constants';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Team',
  description: 'Meet the dedicated students and supervisors behind the Canine Health Insights project.',
};

export default function TeamPage() {
  const projectTeam = TEAM_MEMBERS.filter(member => 
    member.role.toLowerCase().includes('software engineer')
  );
  const supervisionTeam = TEAM_MEMBERS.filter(member => 
    member.role.toLowerCase().includes('supervisor') || 
    member.role.toLowerCase().includes('senior lecturer')
  );

  return (
    <PageWrapper title="Meet the Team">
      <SectionWrapper title="Project Team" subtitle="The core members driving the project development.">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projectTeam.map((member) => (
            <ProfileCard key={member.email} member={member} />
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper title="Supervision Team" subtitle="Providing guidance, expertise, and mentorship throughout the project.">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {supervisionTeam.map((member) => (
            <ProfileCard key={member.email} member={member} />
          ))}
        </div>
      </SectionWrapper>
    </PageWrapper>
  );
}

