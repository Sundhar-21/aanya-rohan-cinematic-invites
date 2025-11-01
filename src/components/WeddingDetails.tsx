import { Card } from '@/components/ui/card';
import { Calendar, Clock, MapPin, Sparkles } from 'lucide-react';

const WeddingDetails = () => {
  const events = [
    {
      title: 'Wedding Ceremony',
      date: 'May 15, 2025',
      time: '4:00 PM',
      venue: 'The Grand Palace Gardens',
      address: '123 Royal Avenue, Mumbai',
      icon: Sparkles,
      gradient: 'from-rose-gold/10 to-champagne/10',
    },
    {
      title: 'Reception',
      date: 'May 15, 2025',
      time: '7:00 PM',
      venue: 'The Grand Palace Ballroom',
      address: '123 Royal Avenue, Mumbai',
      icon: Sparkles,
      gradient: 'from-champagne/10 to-rose-gold/10',
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-romantic">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Wedding Details
          </h2>
          <p className="font-body text-lg text-muted-foreground">
            Join us in celebrating our special day
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {events.map((event, index) => {
            const Icon = event.icon;
            return (
              <Card
                key={index}
                className={`p-8 bg-gradient-to-br ${event.gradient} backdrop-blur-sm border-rose-gold/20 hover:border-rose-gold/40 transition-all duration-500 hover:scale-105 hover:shadow-xl`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-rose-gold/20 rounded-full">
                    <Icon className="w-6 h-6 text-rose-gold" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-foreground">
                    {event.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-champagne mt-1" />
                    <div>
                      <p className="font-body text-sm text-muted-foreground uppercase">Date</p>
                      <p className="font-body text-foreground">{event.date}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-champagne mt-1" />
                    <div>
                      <p className="font-body text-sm text-muted-foreground uppercase">Time</p>
                      <p className="font-body text-foreground">{event.time}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-champagne mt-1" />
                    <div>
                      <p className="font-body text-sm text-muted-foreground uppercase">Venue</p>
                      <p className="font-body text-foreground font-medium">{event.venue}</p>
                      <p className="font-body text-sm text-muted-foreground">{event.address}</p>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WeddingDetails;
