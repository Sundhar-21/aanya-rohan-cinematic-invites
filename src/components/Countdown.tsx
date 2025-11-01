import { useEffect, useState, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Sparkles } from 'lucide-react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const weddingDate = new Date('2025-05-15T00:00:00').getTime();

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = weddingDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setIsVisible(true);
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      clearInterval(timer);
      observer.disconnect();
    };
  }, []);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <section ref={sectionRef} className="relative py-32 px-4 bg-gradient-luxury overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-20 w-64 h-64 bg-rose-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-champagne/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Sparkles className="w-12 h-12 mx-auto mb-6 text-champagne animate-pulse" />
          
          <h2 className="font-display text-5xl md:text-7xl font-bold text-foreground mb-4 text-glow-luxury">
            Counting Down to Forever
          </h2>
          <div className="h-1 w-48 mx-auto bg-gradient-to-r from-transparent via-rose-gold to-transparent mb-8" />
          <p className="font-body text-xl md:text-2xl text-muted-foreground mb-16 max-w-2xl mx-auto">
            Every heartbeat brings us closer to the most beautiful day of our lives
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {timeUnits.map((unit, index) => (
            <Card
              key={unit.label}
              className={`group relative p-8 md:p-12 glass-effect border-rose-gold/20 hover:border-rose-gold/60 hover-lift perspective-card transition-all duration-700 ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ 
                animationDelay: `${index * 0.2}s`,
                transitionDelay: `${index * 0.1}s` 
              }}
            >
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-shine opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
                   style={{ animation: 'luxuryShine 3s ease-in-out infinite' }} />
              
              {/* Corner decorations */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-rose-gold/40" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-rose-gold/40" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-rose-gold/40" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-rose-gold/40" />
              
              <div className="relative z-10">
                <div className="font-display text-6xl md:text-8xl font-bold text-rose-gold mb-4 text-glow-luxury group-hover:scale-110 transition-transform duration-500">
                  {unit.value.toString().padStart(2, '0')}
                </div>
                <div className="h-px w-16 mx-auto bg-gradient-to-r from-transparent via-champagne to-transparent mb-3" />
                <div className="font-body text-sm md:text-base text-muted-foreground uppercase tracking-[0.3em] font-light">
                  {unit.label}
                </div>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-rose-gold/0 group-hover:bg-rose-gold/5 transition-all duration-500 rounded-3xl" />
            </Card>
          ))}
        </div>

        {/* Bottom decoration */}
        <div className="mt-16 flex items-center justify-center gap-4">
          <div className="w-2 h-2 rounded-full bg-rose-gold animate-pulse" />
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-champagne to-transparent" />
          <Sparkles className="w-4 h-4 text-champagne" />
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-champagne to-transparent" />
          <div className="w-2 h-2 rounded-full bg-rose-gold animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Countdown;
