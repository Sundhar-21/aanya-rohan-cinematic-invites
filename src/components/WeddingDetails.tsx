import { useEffect, useState, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Calendar, Clock, MapPin, Sparkles, Heart } from 'lucide-react';

const WeddingDetails = () => {
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

  const events = [
    {
      title: 'Wedding Ceremony',
      subtitle: 'The Sacred Union',
      date: 'May 15, 2025',
      time: '4:00 PM',
      venue: 'The Grand Palace Gardens',
      address: '123 Royal Avenue, Mumbai',
      icon: Sparkles,
      gradient: 'from-rose-gold/10 via-champagne/5 to-rose-gold/10',
    },
    {
      title: 'Reception',
      subtitle: 'An Evening of Celebration',
      date: 'May 15, 2025',
      time: '7:00 PM',
      venue: 'The Grand Palace Ballroom',
      address: '123 Royal Avenue, Mumbai',
      icon: Heart,
      gradient: 'from-champagne/10 via-rose-gold/5 to-champagne/10',
    },
  ];

  return (
    <section ref={sectionRef} className="relative py-32 px-4 bg-gradient-luxury overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-rose-gold/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-champagne/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-4 mb-6">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-rose-gold" />
            <Sparkles className="w-10 h-10 text-champagne animate-pulse" />
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-rose-gold" />
          </div>
          
          <h2 className="font-display text-5xl md:text-7xl font-bold text-foreground mb-6 text-glow-luxury">
            When & Where
          </h2>
          
          <div className="h-1 w-64 mx-auto bg-gradient-to-r from-transparent via-champagne to-transparent mb-6" />
          
          <p className="font-body text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Mark your calendars for the most special day of our lives
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 relative">
          {/* Center decoration */}
          <div className="hidden lg:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="relative">
              <div className="w-16 h-16 glass-effect border-2 border-champagne/40 rounded-full flex items-center justify-center">
                <Heart className="w-8 h-8 text-champagne animate-heartbeat" />
              </div>
              <div className="absolute inset-0 rounded-full border-2 border-champagne/20 animate-ping" />
            </div>
          </div>

          {events.map((event, index) => {
            const Icon = event.icon;
            return (
              <Card
                key={index}
                className={`group relative p-10 md:p-12 bg-gradient-to-br ${event.gradient} glass-effect border-rose-gold/30 hover:border-rose-gold/60 hover-lift transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{ transitionDelay: `${index * 0.2}s` }}
              >
                {/* Corner decorations */}
                <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-rose-gold/40 group-hover:border-rose-gold/80 transition-all duration-500" />
                <div className="absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 border-rose-gold/40 group-hover:border-rose-gold/80 transition-all duration-500" />
                <div className="absolute bottom-0 left-0 w-10 h-10 border-b-2 border-l-2 border-rose-gold/40 group-hover:border-rose-gold/80 transition-all duration-500" />
                <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-rose-gold/40 group-hover:border-rose-gold/80 transition-all duration-500" />

                {/* Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-4 bg-rose-gold/20 rounded-full group-hover:scale-110 transition-transform duration-500">
                    <Icon className="w-8 h-8 text-rose-gold" />
                  </div>
                  <div>
                    <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground text-glow-soft">
                      {event.title}
                    </h3>
                    <p className="font-body text-sm text-champagne uppercase tracking-widest mt-1">
                      {event.subtitle}
                    </p>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px w-full bg-gradient-to-r from-rose-gold/30 via-champagne/50 to-rose-gold/30 mb-8" />

                {/* Details */}
                <div className="space-y-6">
                  <div className="flex items-start gap-4 group/item">
                    <div className="p-2 glass-effect border border-champagne/30 rounded-lg group-hover/item:border-champagne/60 transition-all duration-300">
                      <Calendar className="w-6 h-6 text-champagne" />
                    </div>
                    <div>
                      <p className="font-body text-xs text-muted-foreground uppercase tracking-wider mb-1">Date</p>
                      <p className="font-body text-lg text-foreground font-medium">{event.date}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group/item">
                    <div className="p-2 glass-effect border border-champagne/30 rounded-lg group-hover/item:border-champagne/60 transition-all duration-300">
                      <Clock className="w-6 h-6 text-champagne" />
                    </div>
                    <div>
                      <p className="font-body text-xs text-muted-foreground uppercase tracking-wider mb-1">Time</p>
                      <p className="font-body text-lg text-foreground font-medium">{event.time}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group/item">
                    <div className="p-2 glass-effect border border-champagne/30 rounded-lg group-hover/item:border-champagne/60 transition-all duration-300">
                      <MapPin className="w-6 h-6 text-champagne" />
                    </div>
                    <div>
                      <p className="font-body text-xs text-muted-foreground uppercase tracking-wider mb-1">Venue</p>
                      <p className="font-body text-lg text-foreground font-semibold">{event.venue}</p>
                      <p className="font-body text-sm text-muted-foreground mt-1">{event.address}</p>
                    </div>
                  </div>
                </div>

                {/* Bottom decoration */}
                <div className="mt-8 pt-6 border-t border-rose-gold/20 flex items-center justify-center gap-3">
                  <Sparkles className="w-4 h-4 text-champagne opacity-60" />
                  <div className="h-px w-20 bg-gradient-to-r from-rose-gold/30 to-transparent" />
                  <div className="w-2 h-2 rounded-full bg-rose-gold animate-pulse" />
                  <div className="h-px w-20 bg-gradient-to-l from-rose-gold/30 to-transparent" />
                  <Sparkles className="w-4 h-4 text-champagne opacity-60" />
                </div>

                {/* Hover shine effect */}
                <div className="absolute inset-0 bg-gradient-shine opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WeddingDetails;
