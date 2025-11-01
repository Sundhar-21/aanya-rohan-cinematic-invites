import { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Heart, Coffee, Sparkles } from 'lucide-react';
import firstMeetPhoto from '@/assets/first-meet-photo.jpg';
import proposalPhoto from '@/assets/proposal-photo.jpg';
import engagementPhoto from '@/assets/engagement-photo.jpg';

const Story = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleCards((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.2 }
    );

    const cards = sectionRef.current?.querySelectorAll('.story-card');
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const timeline = [
    {
      icon: Coffee,
      title: 'First Meet',
      date: 'January 2021',
      description: 'A chance encounter at a cozy café turned into hours of conversation and laughter. We knew something special had begun.',
      image: firstMeetPhoto,
    },
    {
      icon: Heart,
      title: 'The Proposal',
      date: 'December 2023',
      description: 'Under a sky full of stars, Rohan got down on one knee and asked the most important question. She said yes!',
      image: proposalPhoto,
    },
    {
      icon: Sparkles,
      title: 'Engagement',
      date: 'March 2024',
      description: 'Surrounded by loved ones, we celebrated our engagement and the beautiful journey ahead together.',
      image: engagementPhoto,
    },
  ];

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Love Story
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Every love story is beautiful, but ours is our favorite
          </p>
        </div>

        <div className="space-y-12">
          {timeline.map((item, index) => {
            const Icon = item.icon;
            const isVisible = visibleCards.includes(index);
            const isEven = index % 2 === 0;

            return (
              <Card
                key={index}
                data-index={index}
                className={`story-card flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-6 p-6 md:p-8 bg-card/80 backdrop-blur-sm border-rose-gold/20 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <div className="md:w-1/2">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
                  />
                </div>
                <div className="md:w-1/2 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-rose-gold/10 rounded-full">
                      <Icon className="w-6 h-6 text-rose-gold" />
                    </div>
                    <div>
                      <h3 className="font-display text-2xl font-semibold text-foreground">
                        {item.title}
                      </h3>
                      <p className="font-body text-sm text-champagne">{item.date}</p>
                    </div>
                  </div>
                  <p className="font-body text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Story;
