import Image from 'next/image';
import { Mail } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import type { TeamMember } from '@/lib/constants';

interface ProfileCardProps {
  member: TeamMember;
}

export default function ProfileCard({ member }: ProfileCardProps) {
  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="items-center text-center p-6">
        {member.imageUrl && (
          <div className="relative h-32 w-32 rounded-full overflow-hidden mb-4 mx-auto border-4 border-primary/20">
            <Image
              src={member.imageUrl}
              alt={member.name}
              layout="fill"
              objectFit="cover"
              data-ai-hint={member.dataAiHint || "person"}
            />
          </div>
        )}
        <CardTitle className="font-headline text-xl">{member.name}</CardTitle>
        <CardDescription className="text-primary">{member.role}</CardDescription>
      </CardHeader>
      <CardContent className="text-center px-6 pb-6">
        <p className="text-sm text-muted-foreground mb-1">{member.department}</p>
        <a
          href={`mailto:${member.email}`}
          className="inline-flex items-center text-sm text-accent hover:underline"
        >
          <Mail className="h-4 w-4 mr-1" />
          {member.email}
        </a>
      </CardContent>
    </Card>
  );
}
