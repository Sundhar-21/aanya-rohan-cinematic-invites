import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { MapPin, Navigation } from 'lucide-react';

const Location = () => {
  const handleDirections = () => {
    window.open('https://maps.google.com/?q=The+Grand+Palace+Gardens+Mumbai', '_blank');
  };

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Find Us Here
          </h2>
          <p className="font-body text-lg text-muted-foreground">
            We can't wait to celebrate with you
          </p>
        </div>

        <Card className="overflow-hidden border-rose-gold/20 bg-card/80 backdrop-blur-sm">
          <div className="aspect-video w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609823277!2d72.74109995!3d19.08219865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Wedding Location"
            />
          </div>
          <div className="p-8 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <MapPin className="w-5 h-5 text-rose-gold" />
              <h3 className="font-display text-2xl font-semibold text-foreground">
                The Grand Palace Gardens
              </h3>
            </div>
            <p className="font-body text-muted-foreground mb-6">
              123 Royal Avenue, Mumbai, Maharashtra 400001
            </p>
            <Button
              onClick={handleDirections}
              className="bg-rose-gold hover:bg-rose-gold/90 text-primary-foreground font-body px-8 py-6 text-lg group"
            >
              <Navigation className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
              Get Directions
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Location;
