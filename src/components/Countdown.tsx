import { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

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

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-romantic">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
          Counting Down to Forever
        </h2>
        <p className="font-body text-lg text-muted-foreground mb-12">
          Every moment brings us closer to our special day
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {timeUnits.map((unit) => (
            <Card
              key={unit.label}
              className="p-6 md:p-8 bg-card/80 backdrop-blur-sm border-rose-gold/20 hover:border-rose-gold/40 transition-all duration-300 hover:scale-105"
            >
              <div className="font-display text-5xl md:text-6xl font-bold text-rose-gold mb-2 text-glow">
                {unit.value.toString().padStart(2, '0')}
              </div>
              <div className="font-body text-sm md:text-base text-muted-foreground uppercase tracking-wider">
                {unit.label}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Countdown;
