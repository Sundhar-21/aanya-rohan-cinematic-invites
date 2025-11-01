import { Card } from '@/components/ui/card';
import bridePhoto from '@/assets/bride-photo.jpg';
import groomPhoto from '@/assets/groom-photo.jpg';
import { Heart } from 'lucide-react';

const AboutCouple = () => {
  const couple = [
    {
      name: 'Aanya',
      role: 'The Bride',
      bio: 'A passionate artist and dreamer with a heart full of love. She believes in fairy tales and making every moment magical.',
      photo: bridePhoto,
    },
    {
      name: 'Rohan',
      role: 'The Groom',
      bio: 'A thoughtful soul with an adventurous spirit. He finds joy in simple moments and believes in forever love.',
      photo: groomPhoto,
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-romantic">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Meet the Couple
          </h2>
          <Heart className="w-8 h-8 mx-auto text-rose-gold" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {couple.map((person, index) => (
            <Card
              key={index}
              className="group overflow-hidden bg-card/80 backdrop-blur-sm border-rose-gold/20 hover:border-rose-gold/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={person.photo}
                  alt={person.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
              </div>
              <div className="p-8 text-center">
                <h3 className="font-display text-3xl font-bold text-rose-gold mb-2">
                  {person.name}
                </h3>
                <p className="font-body text-sm text-champagne uppercase tracking-wider mb-4">
                  {person.role}
                </p>
                <p className="font-body text-muted-foreground leading-relaxed">
                  {person.bio}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutCouple;
