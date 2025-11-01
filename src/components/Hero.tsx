import { useEffect, useState } from 'react';
import heroBackground from '@/assets/hero-background.jpg';
import { Heart } from 'lucide-react';

const Hero = () => {
  const [petals, setPetals] = useState<{ id: number; left: number; delay: number; duration: number }[]>([]);

  useEffect(() => {
    const petalArray = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 8 + Math.random() * 4,
    }));
    setPetals(petalArray);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-70" />
      </div>

      {/* Floating Petals */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {petals.map((petal) => (
          <div
            key={petal.id}
            className="absolute w-3 h-3 rounded-full bg-rose-gold/30 animate-float"
            style={{
              left: `${petal.left}%`,
              top: '-5%',
              animationDelay: `${petal.delay}s`,
              animationDuration: `${petal.duration}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="animate-fade-in-up">
          <Heart className="w-12 h-12 mx-auto mb-6 text-rose-gold opacity-80" />
          
          <h1 className="font-display text-6xl md:text-8xl font-bold mb-4 text-glow">
            <span className="text-rose-gold">Aanya</span>
            <span className="text-foreground mx-4">&</span>
            <span className="text-rose-gold">Rohan</span>
          </h1>
          
          <div className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-rose-gold to-transparent mb-6" />
          
          <p className="font-display text-2xl md:text-3xl text-muted-foreground mb-8 italic">
            Save the Date
          </p>
          
          <p className="font-body text-4xl md:text-5xl font-light text-champagne text-glow-champagne mb-6">
            May 15, 2025
          </p>
          
          <p className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Together with their families, they request the pleasure of your company
            as they unite in marriage
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-rose-gold/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-rose-gold rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
