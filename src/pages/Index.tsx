import Hero from '@/components/Hero';
import Countdown from '@/components/Countdown';
import Story from '@/components/Story';
import AboutCouple from '@/components/AboutCouple';
import Gallery from '@/components/Gallery';
import WeddingDetails from '@/components/WeddingDetails';
import Location from '@/components/Location';
import RSVP from '@/components/RSVP';
import ThemeSelector from '@/components/ThemeSelector';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Countdown />
      <Story />
      <AboutCouple />
      <Gallery />
      <WeddingDetails />
      <Location />
      <RSVP />
      <ThemeSelector />
      <Footer />
    </div>
  );
};

export default Index;
