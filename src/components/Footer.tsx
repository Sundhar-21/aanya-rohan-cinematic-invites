import { Heart, ArrowUp, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-16 px-4 bg-gradient-luxury border-t border-rose-gold/20 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-rose-gold/5 rounded-full blur-3xl" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-champagne/5 rounded-full blur-3xl" />
        <Sparkles className="absolute top-10 left-20 w-6 h-6 text-rose-gold/20 animate-float" />
        <Sparkles className="absolute bottom-10 right-20 w-6 h-6 text-champagne/20 animate-float" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Main content */}
        <div className="text-center mb-10">
          {/* Names with hearts */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <Heart className="w-8 h-8 text-rose-gold animate-heartbeat" fill="currentColor" />
            <h3 className="font-display text-4xl md:text-5xl font-bold">
              <span className="text-rose-gold text-glow-soft">Aanya</span>
              <span className="text-foreground mx-3 opacity-60">&</span>
              <span className="text-rose-gold text-glow-soft">Rohan</span>
            </h3>
            <Heart className="w-8 h-8 text-rose-gold animate-heartbeat" fill="currentColor" style={{ animationDelay: '0.5s' }} />
          </div>

          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-24 bg-gradient-to-r from-transparent to-rose-gold" />
            <Sparkles className="w-5 h-5 text-champagne" />
            <div className="h-px w-24 bg-gradient-to-l from-transparent to-rose-gold" />
          </div>
          
          {/* Date */}
          <p className="font-display text-2xl text-muted-foreground mb-3">
            May 15, 2025
          </p>
          
          {/* Hashtag with animation */}
          <div className="relative inline-block">
            <p className="font-body text-xl text-champagne font-medium tracking-wider">
              #AanyaWedsRohan
            </p>
            <div className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-transparent via-champagne to-transparent" />
          </div>
        </div>

        {/* Scroll to top button */}
        <div className="flex justify-center mb-10">
          <Button
            onClick={scrollToTop}
            className="group relative px-8 py-4 glass-effect border-rose-gold/40 hover:border-rose-gold text-rose-gold hover:text-background bg-transparent hover:bg-gradient-to-r hover:from-rose-gold hover:to-champagne overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300" />
              Back to Top
            </span>
            <div className="absolute inset-0 bg-gradient-shine opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </Button>
        </div>

        {/* Bottom decoration */}
        <div className="border-t border-rose-gold/20 pt-8">
          <div className="flex flex-col items-center gap-4">
            {/* Decorative elements */}
            <div className="flex items-center gap-4">
              <div className="w-2 h-2 rounded-full bg-rose-gold animate-pulse" />
              <div className="h-px w-20 bg-gradient-to-r from-transparent via-champagne to-transparent" />
              <Sparkles className="w-4 h-4 text-champagne" />
              <div className="h-px w-20 bg-gradient-to-r from-transparent via-champagne to-transparent" />
              <div className="w-2 h-2 rounded-full bg-rose-gold animate-pulse" style={{ animationDelay: '0.5s' }} />
            </div>
            
            {/* Footer text */}
            <p className="font-body text-sm text-muted-foreground text-center">
              Crafted with love, joy, and endless excitement
            </p>
            
            <p className="font-body text-xs text-muted-foreground/60 text-center">
              © 2025 Aanya & Rohan. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
