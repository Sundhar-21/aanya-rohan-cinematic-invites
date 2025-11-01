import { useEffect, useState, useRef } from 'react';
import heroBackground from '@/assets/hero-background.jpg';
import { Heart, Sparkles, Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [petals, setPetals] = useState<{ id: number; left: number; delay: number; duration: number; type: 'petal' | 'sparkle' }[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const petalArray = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 10,
      duration: 10 + Math.random() * 8,
      type: i % 3 === 0 ? 'sparkle' : 'petal' as 'petal' | 'sparkle',
    }));
    setPetals(petalArray);

    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with parallax */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-300"
        style={{ 
          backgroundImage: `url(${heroBackground})`,
          transform: `scale(1.1) translateY(${scrollY * 0.5}px)`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background" />
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {petals.map((petal) => (
          <div
            key={petal.id}
            className={`absolute ${petal.type === 'sparkle' ? 'animate-spiral' : 'animate-float'}`}
            style={{
              left: `${petal.left}%`,
              top: petal.type === 'sparkle' ? '100%' : '-5%',
              animationDelay: `${petal.delay}s`,
              animationDuration: `${petal.duration}s`,
            }}
          >
            {petal.type === 'sparkle' ? (
              <Sparkles className="w-4 h-4 text-champagne opacity-60" />
            ) : (
              <div className="w-4 h-4 rounded-full bg-rose-gold/40 blur-sm" />
            )}
          </div>
        ))}
      </div>

      {/* Luxury geometric shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-10 w-32 h-32 border border-rose-gold/10 rotate-45 animate-rotate-3d" />
        <div className="absolute bottom-1/3 right-20 w-48 h-48 border-2 border-champagne/10 rounded-full blur-sm animate-pulse" />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 border border-rose-gold/20" 
             style={{ transform: 'rotate(30deg)', animation: 'rotate3d 25s linear infinite reverse' }} />
      </div>

      {/* Content with luxury styling */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto"
           style={{ transform: `translateY(${scrollY * -0.2}px)` }}>
        <div className="animate-fade-in-up">
          {/* Ornamental top */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-rose-gold to-transparent" />
            <Heart className="w-8 h-8 text-rose-gold animate-heartbeat" />
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-rose-gold to-transparent" />
          </div>
          
          {/* Main names with luxury effect */}
          <div className="relative mb-8">
            <h1 className="font-display text-7xl md:text-9xl lg:text-[12rem] font-bold mb-6 text-glow-luxury leading-none">
              <span className="inline-block animate-luxury-shine text-rose-gold hover:scale-110 transition-transform duration-500">
                Aanya
              </span>
              <span className="text-foreground mx-6 text-6xl md:text-8xl opacity-60">&</span>
              <span className="inline-block animate-luxury-shine text-rose-gold hover:scale-110 transition-transform duration-500" 
                    style={{ animationDelay: '0.5s' }}>
                Rohan
              </span>
            </h1>
            
            {/* Decorative lines */}
            <div className="absolute -left-16 top-1/2 w-12 h-px bg-gradient-to-r from-rose-gold to-transparent hidden md:block" />
            <div className="absolute -right-16 top-1/2 w-12 h-px bg-gradient-to-l from-rose-gold to-transparent hidden md:block" />
          </div>
          
          {/* Elegant divider */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-2 h-2 rounded-full bg-rose-gold animate-pulse" />
            <div className="h-px w-40 bg-gradient-to-r from-transparent via-champagne to-transparent animate-shimmer" />
            <Sparkles className="w-5 h-5 text-champagne animate-pulse" />
            <div className="h-px w-40 bg-gradient-to-r from-transparent via-champagne to-transparent animate-shimmer" />
            <div className="w-2 h-2 rounded-full bg-rose-gold animate-pulse" />
          </div>
          
          <p className="font-display text-3xl md:text-4xl lg:text-5xl text-muted-foreground mb-6 italic tracking-wide">
            Save the Date
          </p>
          
          {/* Date with dramatic styling */}
          <div className="relative inline-block mb-8">
            <p className="font-display text-6xl md:text-7xl lg:text-8xl font-bold text-champagne text-glow-soft mb-4 tracking-wider">
              May 15, 2025
            </p>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-champagne to-transparent" />
          </div>
          
          <p className="font-body text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-12 opacity-90">
            Together with their families, they joyfully invite you to witness and celebrate
            the union of their hearts and souls
          </p>

          {/* Elegant button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              onClick={() => document.getElementById('rsvp')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative px-12 py-6 text-lg font-display bg-gradient-to-r from-rose-gold to-champagne hover:from-champagne hover:to-rose-gold text-background border-0 overflow-hidden"
            >
              <span className="relative z-10">Reserve Your Spot</span>
              <div className="absolute inset-0 bg-gradient-shine opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Button>
          </div>
        </div>
      </div>

      {/* Music toggle button */}
      <Button
        onClick={toggleMusic}
        variant="outline"
        size="icon"
        className="absolute top-8 right-8 z-20 glass-effect border-rose-gold/30 hover:border-rose-gold w-12 h-12 rounded-full"
      >
        {isPlaying ? <Volume2 className="w-5 h-5 text-rose-gold" /> : <VolumeX className="w-5 h-5 text-muted-foreground" />}
      </Button>

      {/* Hidden audio element */}
      <audio ref={audioRef} loop>
        <source src="https://cdn.pixabay.com/audio/2022/05/27/audio_1808fbf07a.mp3" type="audio/mpeg" />
      </audio>

      {/* Elegant scroll indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <div className="w-8 h-14 border-2 border-rose-gold/60 rounded-full flex items-start justify-center p-2 glass-effect">
            <div className="w-2 h-3 bg-rose-gold rounded-full animate-pulse" />
          </div>
          <p className="text-xs text-muted-foreground uppercase tracking-widest">Scroll</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
