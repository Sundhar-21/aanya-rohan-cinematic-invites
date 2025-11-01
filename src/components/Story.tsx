import { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Heart, Coffee, Sparkles } from 'lucide-react';
import firstMeetPhoto from '@/assets/first-meet-photo.jpg';
import proposalPhoto from '@/assets/proposal-photo.jpg';
import engagementPhoto from '@/assets/engagement-photo.jpg';

const Story = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setTimeout(() => {
              setVisibleCards((prev) => [...new Set([...prev, index])]);
            }, index * 200);
          }
        });
      },
      { threshold: 0.3 }
    );

    const cards = sectionRef.current?.querySelectorAll('.story-card');
    cards?.forEach((card) => observer.observe(card));

    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const progress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / rect.height));
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const timeline = [
    {
      icon: Coffee,
      title: 'First Meet',
      date: 'January 2021',
      description: 'In a cozy café filled with the aroma of fresh coffee, our eyes met for the first time. What started as a chance encounter turned into hours of endless conversation, laughter, and an inexplicable connection that felt like destiny.',
      image: firstMeetPhoto,
    },
    {
      icon: Heart,
      title: 'The Proposal',
      date: 'December 2023',
      description: 'Under a canopy of stars, with rose petals scattered around, Rohan got down on one knee and asked the most important question of his life. Time stood still as Aanya said yes, sealing their promise of forever with tears of joy and love.',
      image: proposalPhoto,
    },
    {
      icon: Sparkles,
      title: 'Engagement',
      date: 'March 2024',
      description: 'Surrounded by the warmth of family and closest friends, we celebrated our engagement in a ceremony filled with traditional blessings, heartfelt speeches, and the joy of two families becoming one.',
      image: engagementPhoto,
    },
  ];

  return (
    <section ref={sectionRef} className="relative py-32 px-4 bg-background overflow-hidden">
      {/* Animated timeline line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-rose-gold/30 to-transparent hidden lg:block"
           style={{ 
             transform: `scaleY(${scrollProgress})`,
             transformOrigin: 'top',
             transition: 'transform 0.1s ease-out'
           }} />

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-20">
          <div className="inline-block animate-fade-in-up">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-rose-gold" />
              <Heart className="w-10 h-10 text-rose-gold animate-heartbeat" />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-rose-gold" />
            </div>
            <h2 className="font-display text-5xl md:text-7xl font-bold text-foreground mb-6 text-glow-luxury">
              Our Love Story
            </h2>
            <div className="h-1 w-64 mx-auto bg-gradient-to-r from-transparent via-champagne to-transparent mb-6" />
            <p className="font-body text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Every love story is beautiful, but ours is written in the stars
            </p>
          </div>
        </div>

        <div className="space-y-24 lg:space-y-32">
          {timeline.map((item, index) => {
            const Icon = item.icon;
            const isVisible = visibleCards.includes(index);
            const isEven = index % 2 === 0;

            return (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 hidden lg:block">
                  <div className={`w-6 h-6 rounded-full bg-rose-gold transition-all duration-1000 ${
                    isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                  }`}>
                    <div className="absolute inset-0 rounded-full bg-rose-gold animate-ping" />
                  </div>
                </div>

                <Card
                  data-index={index}
                  className={`story-card group flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-0 glass-effect border-rose-gold/20 hover:border-rose-gold/60 overflow-hidden hover-lift transition-all duration-1000 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                  }`}
                >
                  {/* Image side with parallax */}
                  <div className="lg:w-1/2 relative overflow-hidden">
                    <div className="relative h-80 lg:h-[500px]">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                      
                      {/* Image overlay icon */}
                      <div className="absolute top-6 left-6 p-4 glass-effect border border-rose-gold/30 rounded-full">
                        <Icon className="w-8 h-8 text-rose-gold" />
                      </div>

                      {/* Decorative corner */}
                      <div className="absolute bottom-0 right-0 w-24 h-24 border-r-2 border-b-2 border-rose-gold/30" />
                    </div>
                  </div>

                  {/* Content side */}
                  <div className="lg:w-1/2 p-8 md:p-12 flex flex-col justify-center relative">
                    {/* Date badge */}
                    <div className="inline-flex items-center gap-2 mb-6 self-start">
                      <div className="w-2 h-2 rounded-full bg-champagne animate-pulse" />
                      <span className="font-body text-sm text-champagne uppercase tracking-[0.2em]">
                        {item.date}
                      </span>
                      <div className="h-px w-12 bg-gradient-to-r from-champagne to-transparent" />
                    </div>

                    <h3 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6 text-glow-soft">
                      {item.title}
                    </h3>

                    <div className="h-px w-24 bg-gradient-to-r from-rose-gold to-transparent mb-6" />

                    <p className="font-body text-lg text-muted-foreground leading-relaxed mb-6">
                      {item.description}
                    </p>

                    {/* Decorative elements */}
                    <div className="flex items-center gap-3">
                      <Sparkles className="w-4 h-4 text-champagne opacity-60" />
                      <div className="h-px flex-1 bg-gradient-to-r from-rose-gold/30 to-transparent" />
                    </div>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Story;
