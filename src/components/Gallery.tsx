import { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { X } from 'lucide-react';
import couplePhoto from '@/assets/couple-photo.jpg';
import bridePhoto from '@/assets/bride-photo.jpg';
import groomPhoto from '@/assets/groom-photo.jpg';
import proposalPhoto from '@/assets/proposal-photo.jpg';
import firstMeetPhoto from '@/assets/first-meet-photo.jpg';
import engagementPhoto from '@/assets/engagement-photo.jpg';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const photos = [
    couplePhoto,
    bridePhoto,
    groomPhoto,
    proposalPhoto,
    firstMeetPhoto,
    engagementPhoto,
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Moments to Cherish
          </h2>
          <p className="font-body text-lg text-muted-foreground">
            A glimpse into our beautiful journey together
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg cursor-pointer aspect-square"
              onClick={() => setSelectedImage(photo)}
            >
              <img
                src={photo}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-rose-gold/0 group-hover:bg-rose-gold/20 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 z-50 p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Gallery"
              className="w-full h-auto rounded-lg"
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Gallery;
