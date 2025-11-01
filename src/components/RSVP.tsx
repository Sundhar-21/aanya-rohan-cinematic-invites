import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Heart, Send } from 'lucide-react';

const RSVP = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    guests: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.guests) {
      toast({
        title: 'Missing Information',
        description: 'Please fill in your name and number of guests.',
        variant: 'destructive',
      });
      return;
    }

    toast({
      title: 'RSVP Received! ✨',
      description: `Thank you ${formData.name}! We're thrilled you'll be joining us on our special day.`,
    });

    setFormData({ name: '', guests: '', message: '' });
  };

  return (
    <section className="py-20 px-4 bg-gradient-romantic">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <Heart className="w-12 h-12 mx-auto mb-4 text-rose-gold" />
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            RSVP
          </h2>
          <p className="font-body text-lg text-muted-foreground">
            Your presence would make our day even more special
          </p>
        </div>

        <Card className="p-8 md:p-10 bg-card/90 backdrop-blur-sm border-rose-gold/20">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="font-body text-foreground">
                Your Name *
              </Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Enter your full name"
                className="border-rose-gold/30 focus:border-rose-gold"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="guests" className="font-body text-foreground">
                Number of Guests *
              </Label>
              <Input
                id="guests"
                type="number"
                min="1"
                value={formData.guests}
                onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                placeholder="How many guests will attend?"
                className="border-rose-gold/30 focus:border-rose-gold"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="font-body text-foreground">
                Message (Optional)
              </Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Share your wishes for the couple..."
                className="border-rose-gold/30 focus:border-rose-gold min-h-32 resize-none"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-rose-gold hover:bg-rose-gold/90 text-primary-foreground font-body py-6 text-lg group"
            >
              <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
              Send RSVP
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
};

export default RSVP;
