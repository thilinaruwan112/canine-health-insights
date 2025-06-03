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
  const students = TEAM_MEMBERS.filter(member => member.role.toLowerCase().includes('student'));
  const supervisors = TEAM_MEMBERS.filter(member => member.role.toLowerCase().includes('supervisor'));

  return (
    <PageWrapper title="Meet the Team">
      <SectionWrapper title="Student Researchers" subtitle="The driving force behind the day-to-day research and development.">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {students.map((member) => (
            <ProfileCard key={member.email} member={member} />
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper title="Supervisors" subtitle="Providing guidance, expertise, and mentorship throughout the project.">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {supervisors.map((member) => (
            <ProfileCard key={member.email} member={member} />
          ))}
        </div>
      </SectionWrapper>
    </PageWrapper>
  );
}
