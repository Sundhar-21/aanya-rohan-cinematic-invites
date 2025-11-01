import { Heart, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 px-4 bg-gradient-romantic border-t border-rose-gold/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Heart className="w-6 h-6 text-rose-gold animate-pulse" />
            <h3 className="font-display text-3xl font-bold text-foreground">
              <span className="text-rose-gold">Aanya</span>
              <span className="mx-2">&</span>
              <span className="text-rose-gold">Rohan</span>
            </h3>
            <Heart className="w-6 h-6 text-rose-gold animate-pulse" />
          </div>
          
          <p className="font-body text-lg text-muted-foreground mb-2">
            May 15, 2025
          </p>
          
          <p className="font-body text-champagne font-medium">
            #AanyaWedsRohan
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <Button
            onClick={scrollToTop}
            variant="outline"
            className="border-rose-gold/30 hover:border-rose-gold hover:bg-rose-gold/10 group"
          >
            <ArrowUp className="w-4 h-4 mr-2 group-hover:-translate-y-1 transition-transform" />
            Back to Top
          </Button>
        </div>

        <div className="text-center">
          <p className="font-body text-sm text-muted-foreground">
            Made with love and joy
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
