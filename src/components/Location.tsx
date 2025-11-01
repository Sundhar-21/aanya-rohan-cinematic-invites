import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { MapPin, Navigation, Sparkles } from 'lucide-react';

const Location = () => {
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

  const handleDirections = () => {
    window.open('https://maps.google.com/?q=The+Grand+Palace+Gardens+Mumbai', '_blank');
  };

  return (
    <section ref={sectionRef} className="py-32 px-4 bg-background relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-10 w-96 h-96 bg-rose-gold/5 rounded-full blur-3xl" />
        <Sparkles className="absolute top-40 left-20 w-8 h-8 text-champagne/20 animate-float" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-4 mb-6">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-rose-gold" />
            <MapPin className="w-10 h-10 text-rose-gold animate-pulse" />
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-rose-gold" />
          </div>
          
          <h2 className="font-display text-5xl md:text-7xl font-bold text-foreground mb-6 text-glow-luxury">
            Find Us Here
          </h2>
          
          <div className="h-1 w-64 mx-auto bg-gradient-to-r from-transparent via-champagne to-transparent mb-6" />
          
          <p className="font-body text-xl md:text-2xl text-muted-foreground">
            We can't wait to celebrate with you at this beautiful venue
          </p>
        </div>

        <Card className={`overflow-hidden glass-effect border-rose-gold/30 hover:border-rose-gold/60 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* Map container */}
          <div className="relative aspect-video w-full overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609823277!2d72.74109995!3d19.08219865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Wedding Location"
              className="transition-all duration-700"
            />
            
            {/* Corner decorations on map */}
            <div className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-rose-gold/60 pointer-events-none" />
            <div className="absolute top-0 right-0 w-12 h-12 border-t-4 border-r-4 border-rose-gold/60 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-12 h-12 border-b-4 border-l-4 border-rose-gold/60 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-rose-gold/60 pointer-events-none" />
          </div>

          {/* Content section */}
          <div className="p-12 text-center bg-gradient-to-b from-background/50 to-background relative">
            {/* Decorative top line */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-rose-gold to-transparent" />
            
            <div className="mb-6">
              <div className="inline-flex items-center justify-center gap-3 mb-4">
                <MapPin className="w-7 h-7 text-rose-gold" />
                <h3 className="font-display text-3xl md:text-4xl font-semibold text-foreground text-glow-soft">
                  The Grand Palace Gardens
                </h3>
              </div>
              
              <div className="h-px w-48 mx-auto bg-gradient-to-r from-transparent via-champagne to-transparent mb-4" />
              
              <p className="font-body text-lg text-muted-foreground mb-2">
                123 Royal Avenue
              </p>
              <p className="font-body text-lg text-muted-foreground">
                Mumbai, Maharashtra 400001
              </p>
            </div>

            <Button
              onClick={handleDirections}
              className="group relative px-10 py-6 text-lg font-display bg-gradient-to-r from-rose-gold to-champagne hover:from-champagne hover:to-rose-gold text-background border-0 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-3">
                <Navigation className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                Get Directions
              </span>
              <div className="absolute inset-0 bg-gradient-shine opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Button>

            {/* Bottom decoration */}
            <div className="mt-8 flex items-center justify-center gap-4">
              <Sparkles className="w-4 h-4 text-champagne opacity-60" />
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-rose-gold to-transparent" />
              <Sparkles className="w-4 h-4 text-champagne opacity-60" />
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Location;
