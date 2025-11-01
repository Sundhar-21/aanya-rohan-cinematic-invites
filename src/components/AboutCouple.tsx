import { useState, useRef, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import bridePhoto from '@/assets/bride-photo.jpg';
import groomPhoto from '@/assets/groom-photo.jpg';
import { Heart, Sparkles } from 'lucide-react';

const AboutCouple = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setIsVisible(true);
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const couple = [
    {
      name: 'Aanya',
      role: 'The Bride',
      bio: 'A passionate artist with a heart that beats for beauty and love. She believes in fairy tales, magic moments, and the power of forever. Her creative soul finds wonder in every sunset and poetry in every heartbeat.',
      photo: bridePhoto,
      color: 'rose-gold',
    },
    {
      name: 'Rohan',
      role: 'The Groom',
      bio: 'A thoughtful dreamer with an adventurous spirit and gentle heart. He finds joy in simple moments and believes that true love is the greatest adventure. His strength lies in his kindness and his faith in forever.',
      photo: groomPhoto,
      color: 'champagne',
    },
  ];

  return (
    <section ref={sectionRef} className="relative py-32 px-4 bg-gradient-luxury overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-rose-gold/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-champagne/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-4 mb-6">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-rose-gold" />
            <Heart className="w-10 h-10 text-rose-gold animate-heartbeat" />
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-rose-gold" />
          </div>
          
          <h2 className="font-display text-5xl md:text-7xl font-bold text-foreground mb-6 text-glow-luxury">
            Meet the Couple
          </h2>
          
          <div className="h-1 w-64 mx-auto bg-gradient-to-r from-transparent via-champagne to-transparent mb-6" />
          
          <p className="font-body text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Two souls, one beautiful journey
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 relative">
          {/* Center heart connector */}
          <div className="hidden lg:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="relative">
              <div className="w-20 h-20 rounded-full glass-effect border-2 border-rose-gold/40 flex items-center justify-center">
                <Heart className="w-10 h-10 text-rose-gold animate-heartbeat" fill="currentColor" />
              </div>
              <div className="absolute inset-0 rounded-full bg-rose-gold/20 animate-ping" />
            </div>
          </div>

          {couple.map((person, index) => (
            <Card
              key={index}
              className={`group relative overflow-hidden glass-effect border-${person.color}/30 hover:border-${person.color}/60 hover-lift transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{ transitionDelay: `${index * 0.2}s` }}
            >
              {/* Image container */}
              <div className="relative h-[500px] overflow-hidden">
                <img
                  src={person.photo}
                  alt={person.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                
                {/* Decorative corner frames */}
                <div className="absolute top-6 left-6 w-12 h-12 border-t-2 border-l-2 border-rose-gold/60" />
                <div className="absolute top-6 right-6 w-12 h-12 border-t-2 border-r-2 border-rose-gold/60" />
                <div className="absolute bottom-6 left-6 w-12 h-12 border-b-2 border-l-2 border-rose-gold/60" />
                <div className="absolute bottom-6 right-6 w-12 h-12 border-b-2 border-r-2 border-rose-gold/60" />
                
                {/* Floating sparkles on hover */}
                <Sparkles className="absolute top-1/4 right-1/4 w-6 h-6 text-champagne opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-float" />
                <Sparkles className="absolute bottom-1/3 left-1/4 w-5 h-5 text-rose-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-float" style={{ animationDelay: '0.5s' }} />
              </div>

              {/* Content */}
              <div className="p-10 text-center relative">
                {/* Role badge */}
                <div className="inline-flex items-center gap-2 mb-4">
                  <div className="h-px w-8 bg-gradient-to-r from-transparent to-champagne" />
                  <span className="font-body text-sm text-champagne uppercase tracking-[0.3em]">
                    {person.role}
                  </span>
                  <div className="h-px w-8 bg-gradient-to-l from-transparent to-champagne" />
                </div>

                {/* Name */}
                <h3 className="font-display text-5xl md:text-6xl font-bold text-rose-gold mb-6 text-glow-soft group-hover:scale-110 transition-transform duration-500">
                  {person.name}
                </h3>

                {/* Decorative line */}
                <div className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-rose-gold to-transparent mb-6" />

                {/* Bio */}
                <p className="font-body text-lg text-muted-foreground leading-relaxed">
                  {person.bio}
                </p>

                {/* Bottom decoration */}
                <div className="mt-8 flex items-center justify-center gap-3">
                  <Sparkles className="w-4 h-4 text-champagne opacity-60" />
                  <div className="h-px w-16 bg-gradient-to-r from-rose-gold/30 to-transparent" />
                  <Heart className="w-3 h-3 text-rose-gold opacity-40" />
                  <div className="h-px w-16 bg-gradient-to-l from-rose-gold/30 to-transparent" />
                  <Sparkles className="w-4 h-4 text-champagne opacity-60" />
                </div>
              </div>

              {/* Hover shine effect */}
              <div className="absolute inset-0 bg-gradient-shine opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutCouple;
