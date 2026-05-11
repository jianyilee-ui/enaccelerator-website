
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Linkedin } from 'lucide-react';

type TeamMember = {
  name: string;
  role: string;
  bio: string;
  imageUrl?: string;
  email?: string;
  linkedin?: string;
};

const teamMembers: TeamMember[] = [
  {
    name: "Frederik Bangsgaard",
    role: "Project Lead",
    bio: "Investments @ NextGen | StartUpLink Project Director | EnAccelerator Project Lead | Full stack dev | Melb Uni",
    imageUrl: "/team/frederik.jpg",
    linkedin: "https://www.linkedin.com/in/frederik-bangsgaard-11240826b/",
  },
  {
    name: "Mark Ong",
    role: "Project Lead",
    bio: "Startups | Content Creation",
    imageUrl: "/team/mark.jpg",
    linkedin: "https://www.linkedin.com/in/mark-ong-032442358/",
  },
  {
    name: "Trishton Lee",
    role: "Project Coordinator",
    bio: "Finance and Business Analytics @ UniMelb",
    imageUrl: "/team/trishton.jpg",
  },
  {
    name: "Tiger Diao",
    role: "Project Coordinator",
    bio: "BCom & Dip.Music @ UniMelb",
    imageUrl: "/team/tiger.jpg",
  }
];

const TeamSection = () => {
  return (
    <section id="team" className="bg-gray-50">
      <div className="container">
        <div className="max-w-4xl mx-auto mb-12 sm:mb-16 text-center">
          <h2 className="mb-4 sm:mb-6">Meet Our <span className="text-brand-yellow">Team</span></h2>
          <p className="text-base sm:text-lg md:text-xl text-foreground/70 leading-relaxed">
            Our experienced mentors and advisors are dedicated to helping student founders succeed.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-center gap-4 mb-4">
                  <Avatar className="h-16 w-16 border-2 border-brand-yellow/30">
                    {member.imageUrl ? (
                      <AvatarImage src={member.imageUrl} alt={member.name} />
                    ) : (
                      <AvatarFallback className="bg-brand-yellow/20 text-brand-yellow font-bold text-xl">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    )}
                  </Avatar>
                  <div>
                    <h3 className="font-bold text-lg">{member.name}</h3>
                    <p className="text-sm text-foreground/70">{member.role}</p>
                  </div>
                </div>
                <p className="text-foreground/80 mb-6 flex-grow">{member.bio}</p>
                <div className="flex gap-3 mt-auto">
                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      className="flex items-center gap-1 text-sm text-foreground/70 hover:text-brand-yellow transition-colors"
                      aria-label={`Email ${member.name}`}
                    >
                      <Mail size={16} />
                      <span>Email</span>
                    </a>
                  )}
                  {member.linkedin && (
                    <a 
                      href={member.linkedin}
                      className="flex items-center gap-1 text-sm text-foreground/70 hover:text-brand-yellow transition-colors"
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label={`${member.name}'s LinkedIn profile`}
                    >
                      <Linkedin size={16} />
                      <span>LinkedIn</span>
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
