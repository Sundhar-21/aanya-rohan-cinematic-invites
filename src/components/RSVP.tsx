import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Heart, Send, Sparkles, User, Users, MessageSquare } from 'lucide-react';

const RSVP = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    guests: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.guests) {
      toast({
        title: 'Missing Information',
        description: 'Please fill in your name and number of guests.',
        variant: 'destructive',
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast({
      title: '✨ RSVP Confirmed!',
      description: `Thank you ${formData.name}! We are absolutely delighted that you will be joining us on our special day.`,
    });

    setFormData({ name: '', guests: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <section id="rsvp" className="relative py-32 px-4 bg-gradient-luxury overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-rose-gold/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-champagne/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <Sparkles className="absolute top-40 right-1/4 w-8 h-8 text-champagne/20 animate-float" />
        <Heart className="absolute bottom-40 left-1/4 w-10 h-10 text-rose-gold/20 animate-float" style={{ animationDelay: '0.5s' }} />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-4 mb-6">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-rose-gold" />
            <Heart className="w-12 h-12 text-rose-gold animate-heartbeat" />
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-rose-gold" />
          </div>
          
          <h2 className="font-display text-5xl md:text-7xl font-bold text-foreground mb-6 text-glow-luxury">
            Join Our Celebration
          </h2>
          
          <div className="h-1 w-64 mx-auto bg-gradient-to-r from-transparent via-champagne to-transparent mb-8" />
          
          <p className="font-body text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Your presence would be the greatest gift and would make our day truly complete
          </p>
        </div>

        <Card className="relative p-8 md:p-14 glass-effect border-rose-gold/30 hover:border-rose-gold/60 transition-all duration-500 group">
          {/* Corner decorations */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-rose-gold/60" />
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-rose-gold/60" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-rose-gold/60" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-rose-gold/60" />

          {/* Shine effect on hover */}
          <div className="absolute inset-0 bg-gradient-shine opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

          <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
            {/* Name field */}
            <div className="space-y-3 group/field">
              <Label htmlFor="name" className="font-body text-foreground text-lg flex items-center gap-2">
                <User className="w-5 h-5 text-rose-gold" />
                Your Name *
              </Label>
              <div className="relative">
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter your full name"
                  className="h-14 px-6 bg-background/50 border-rose-gold/30 focus:border-rose-gold focus:ring-2 focus:ring-rose-gold/20 text-lg rounded-xl transition-all duration-300"
                />
                <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-rose-gold to-champagne group-focus-within/field:w-full transition-all duration-500" />
              </div>
            </div>

            {/* Guests field */}
            <div className="space-y-3 group/field">
              <Label htmlFor="guests" className="font-body text-foreground text-lg flex items-center gap-2">
                <Users className="w-5 h-5 text-rose-gold" />
                Number of Guests *
              </Label>
              <div className="relative">
                <Input
                  id="guests"
                  type="number"
                  min="1"
                  max="10"
                  value={formData.guests}
                  onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                  placeholder="How many guests will attend?"
                  className="h-14 px-6 bg-background/50 border-rose-gold/30 focus:border-rose-gold focus:ring-2 focus:ring-rose-gold/20 text-lg rounded-xl transition-all duration-300"
                />
                <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-rose-gold to-champagne group-focus-within/field:w-full transition-all duration-500" />
              </div>
            </div>

            {/* Message field */}
            <div className="space-y-3 group/field">
              <Label htmlFor="message" className="font-body text-foreground text-lg flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-rose-gold" />
                Your Message (Optional)
              </Label>
              <div className="relative">
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share your wishes and blessings for the couple..."
                  className="min-h-40 px-6 py-4 bg-background/50 border-rose-gold/30 focus:border-rose-gold focus:ring-2 focus:ring-rose-gold/20 text-lg resize-none rounded-xl transition-all duration-300"
                />
                <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-rose-gold to-champagne group-focus-within/field:w-full transition-all duration-500" />
              </div>
            </div>

            {/* Submit button */}
            <div className="pt-4">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="group/btn relative w-full h-16 bg-gradient-to-r from-rose-gold via-champagne to-rose-gold text-background font-display text-xl font-semibold overflow-hidden border-0 rounded-xl"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-background/30 border-t-background rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-6 h-6 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      Confirm Attendance
                    </>
                  )}
                </span>
                {!isSubmitting && (
                  <div className="absolute inset-0 bg-gradient-shine opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" 
                       style={{ animation: 'luxuryShine 3s ease-in-out infinite' }} />
                )}
              </Button>
            </div>
          </form>

          {/* Bottom decoration */}
          <div className="mt-12 pt-8 border-t border-rose-gold/20">
            <div className="flex items-center justify-center gap-4">
              <Sparkles className="w-5 h-5 text-champagne animate-pulse" />
              <p className="font-body text-sm text-muted-foreground text-center">
                We can't wait to celebrate with you
              </p>
              <Sparkles className="w-5 h-5 text-champagne animate-pulse" style={{ animationDelay: '0.5s' }} />
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default RSVP;
