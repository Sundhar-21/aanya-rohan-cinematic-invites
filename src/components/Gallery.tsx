import { useState, useEffect, useRef } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { X, Sparkles, ZoomIn } from 'lucide-react';
import couplePhoto from '@/assets/couple-photo.jpg';
import bridePhoto from '@/assets/bride-photo.jpg';
import groomPhoto from '@/assets/groom-photo.jpg';
import proposalPhoto from '@/assets/proposal-photo.jpg';
import firstMeetPhoto from '@/assets/first-meet-photo.jpg';
import engagementPhoto from '@/assets/engagement-photo.jpg';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setIsVisible(true);
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const photos = [
    { src: couplePhoto, span: 'md:col-span-2 md:row-span-2' },
    { src: bridePhoto, span: '' },
    { src: groomPhoto, span: '' },
    { src: proposalPhoto, span: 'md:col-span-2' },
    { src: firstMeetPhoto, span: '' },
    { src: engagementPhoto, span: '' },
  ];

  return (
    <section ref={sectionRef} className="py-32 px-4 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <Sparkles className="absolute top-40 left-20 w-8 h-8 text-rose-gold/20 animate-float" />
        <Sparkles className="absolute bottom-40 right-20 w-6 h-6 text-champagne/20 animate-float" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-4 mb-6">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-rose-gold" />
            <Sparkles className="w-10 h-10 text-rose-gold animate-pulse" />
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-rose-gold" />
          </div>
          
          <h2 className="font-display text-5xl md:text-7xl font-bold text-foreground mb-6 text-glow-luxury">
            Moments to Treasure
          </h2>
          
          <div className="h-1 w-64 mx-auto bg-gradient-to-r from-transparent via-champagne to-transparent mb-6" />
          
          <p className="font-body text-xl md:text-2xl text-muted-foreground">
            A glimpse into our beautiful journey together
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[250px] gap-4">
          {photos.map((photo, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer perspective-card ${photo.span} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ 
                transitionDelay: `${index * 0.1}s`,
                transition: 'all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
              }}
              onClick={() => setSelectedImage(photo.src)}
            >
              {/* Image */}
              <img
                src={photo.src}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
              
              {/* Border effect */}
              <div className="absolute inset-0 border-2 border-rose-gold/0 group-hover:border-rose-gold/60 transition-all duration-500 rounded-2xl" />
              
              {/* Zoom icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="p-4 glass-effect border border-rose-gold/40 rounded-full backdrop-blur-xl">
                  <ZoomIn className="w-8 h-8 text-rose-gold" />
                </div>
              </div>

              {/* Corner decorations */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-rose-gold/0 group-hover:border-rose-gold/80 transition-all duration-500" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-rose-gold/0 group-hover:border-rose-gold/80 transition-all duration-500" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-rose-gold/0 group-hover:border-rose-gold/80 transition-all duration-500" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-rose-gold/0 group-hover:border-rose-gold/80 transition-all duration-500" />

              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-shine opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox dialog */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-6xl p-0 bg-transparent border-none">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute -top-12 right-0 z-50 p-3 rounded-full glass-effect border border-rose-gold/30 hover:border-rose-gold transition-all duration-300 hover:scale-110"
          >
            <X className="w-6 h-6 text-rose-gold" />
          </button>
          {selectedImage && (
            <div className="relative rounded-2xl overflow-hidden glass-effect border-2 border-rose-gold/40">
              <img
                src={selectedImage}
                alt="Gallery"
                className="w-full h-auto"
              />
              {/* Decorative corners */}
              <div className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-rose-gold/80" />
              <div className="absolute top-0 right-0 w-12 h-12 border-t-4 border-r-4 border-rose-gold/80" />
              <div className="absolute bottom-0 left-0 w-12 h-12 border-b-4 border-l-4 border-rose-gold/80" />
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-rose-gold/80" />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Gallery;
