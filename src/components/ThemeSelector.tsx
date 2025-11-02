import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Palette, Sparkles } from 'lucide-react';

const ThemeSelector = () => {
  const [isOpen, setIsOpen] = useState(false);

  const themes = [
    { name: 'Dark Luxury', class: 'dark-luxury', preview: 'bg-gradient-to-r from-rose-gold via-champagne to-rose-gold', font: 'Playfair Display, Poppins' },
    { name: 'Royal Purple', class: 'royal-purple', preview: 'bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500', font: 'Cormorant Garamond, Montserrat' },
    { name: 'Emerald Dream', class: 'emerald', preview: 'bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-500', font: 'Cinzel, Raleway' },
    { name: 'Ocean Breeze', class: 'ocean', preview: 'bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400', font: 'Libre Baskerville, Open Sans' },
    { name: 'Sunset Romance', class: 'sunset', preview: 'bg-gradient-to-r from-orange-400 via-rose-400 to-orange-400', font: 'Crimson Text, Nunito' },
    { name: 'Midnight Galaxy', class: 'galaxy', preview: 'bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600', font: 'Space Grotesk, Inter' },
    { name: 'Cherry Blossom', class: 'cherry', preview: 'bg-gradient-to-r from-pink-300 via-rose-300 to-pink-300', font: 'Dancing Script, Quicksand' },
  ];

  const applyTheme = (themeClass: string) => {
    const root = document.documentElement;
    
    switch(themeClass) {
      case 'royal-purple':
        root.style.setProperty('--rose-gold', '280 70% 65%');
        root.style.setProperty('--champagne', '320 90% 70%');
        root.style.setProperty('--background', '280 25% 10%');
        root.style.setProperty('--primary', '280 70% 65%');
        root.style.setProperty('--accent', '320 90% 70%');
        document.body.style.fontFamily = "'Cormorant Garamond', serif";
        document.querySelectorAll('h1, h2, h3, h4, h5, h6').forEach(el => {
          (el as HTMLElement).style.fontFamily = "'Cormorant Garamond', serif";
        });
        break;
      case 'emerald':
        root.style.setProperty('--rose-gold', '160 70% 50%');
        root.style.setProperty('--champagne', '180 80% 60%');
        root.style.setProperty('--background', '160 25% 10%');
        root.style.setProperty('--primary', '160 70% 50%');
        root.style.setProperty('--accent', '180 80% 60%');
        document.body.style.fontFamily = "'Raleway', sans-serif";
        document.querySelectorAll('h1, h2, h3, h4, h5, h6').forEach(el => {
          (el as HTMLElement).style.fontFamily = "'Cinzel', serif";
        });
        break;
      case 'ocean':
        root.style.setProperty('--rose-gold', '200 80% 60%');
        root.style.setProperty('--champagne', '190 85% 65%');
        root.style.setProperty('--background', '200 30% 12%');
        root.style.setProperty('--primary', '200 80% 60%');
        root.style.setProperty('--accent', '190 85% 65%');
        document.body.style.fontFamily = "'Open Sans', sans-serif";
        document.querySelectorAll('h1, h2, h3, h4, h5, h6').forEach(el => {
          (el as HTMLElement).style.fontFamily = "'Libre Baskerville', serif";
        });
        break;
      case 'sunset':
        root.style.setProperty('--rose-gold', '20 90% 65%');
        root.style.setProperty('--champagne', '340 85% 70%');
        root.style.setProperty('--background', '15 30% 12%');
        root.style.setProperty('--primary', '20 90% 65%');
        root.style.setProperty('--accent', '340 85% 70%');
        document.body.style.fontFamily = "'Nunito', sans-serif";
        document.querySelectorAll('h1, h2, h3, h4, h5, h6').forEach(el => {
          (el as HTMLElement).style.fontFamily = "'Crimson Text', serif";
        });
        break;
      case 'galaxy':
        root.style.setProperty('--rose-gold', '250 80% 65%');
        root.style.setProperty('--champagne', '280 75% 70%');
        root.style.setProperty('--background', '250 35% 10%');
        root.style.setProperty('--primary', '250 80% 65%');
        root.style.setProperty('--accent', '280 75% 70%');
        document.body.style.fontFamily = "'Inter', sans-serif";
        document.querySelectorAll('h1, h2, h3, h4, h5, h6').forEach(el => {
          (el as HTMLElement).style.fontFamily = "'Space Grotesk', sans-serif";
        });
        break;
      case 'cherry':
        root.style.setProperty('--rose-gold', '340 75% 65%');
        root.style.setProperty('--champagne', '350 80% 70%');
        root.style.setProperty('--background', '340 20% 15%');
        root.style.setProperty('--primary', '340 75% 65%');
        root.style.setProperty('--accent', '350 80% 70%');
        document.body.style.fontFamily = "'Quicksand', sans-serif";
        document.querySelectorAll('h1, h2, h3, h4, h5, h6').forEach(el => {
          (el as HTMLElement).style.fontFamily = "'Dancing Script', cursive";
        });
        break;
      default:
        // Default dark luxury theme (reset)
        root.style.setProperty('--rose-gold', '25 80% 65%');
        root.style.setProperty('--champagne', '45 100% 65%');
        root.style.setProperty('--background', '20 25% 8%');
        root.style.setProperty('--primary', '25 80% 65%');
        root.style.setProperty('--accent', '45 100% 65%');
        document.body.style.fontFamily = "'Poppins', sans-serif";
        document.querySelectorAll('h1, h2, h3, h4, h5, h6').forEach(el => {
          (el as HTMLElement).style.fontFamily = "'Playfair Display', serif";
        });
        break;
    }
    
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {/* Theme options panel */}
      <div className={`mb-4 transition-all duration-500 ${
        isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'
      }`}>
        <div className="glass-effect border border-rose-gold/30 rounded-2xl p-6 shadow-2xl min-w-[320px] max-h-[500px] overflow-y-auto">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-champagne" />
            <p className="font-display text-lg font-semibold text-foreground">Choose Your Theme</p>
          </div>
          
          <div className="h-px w-full bg-gradient-to-r from-transparent via-rose-gold to-transparent mb-4" />
          
          <div className="space-y-3">
            {themes.map((theme) => (
              <Button
                key={theme.class}
                onClick={() => applyTheme(theme.class)}
                className="group relative w-full justify-start px-4 py-6 glass-effect border border-rose-gold/30 hover:border-rose-gold text-foreground bg-transparent hover:bg-rose-gold/10 font-body overflow-hidden"
              >
                <div className="relative z-10 flex flex-col items-start gap-2 w-full">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-lg ${theme.preview} shadow-lg`} />
                    <span className="font-semibold text-base">{theme.name}</span>
                  </div>
                  <span className="text-xs text-muted-foreground italic ml-[52px]">{theme.font}</span>
                </div>
                <div className="absolute inset-0 bg-gradient-shine opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Button>
            ))}
          </div>
        </div>
      </div>
      
      {/* Toggle button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative w-16 h-16 rounded-full bg-gradient-to-r from-rose-gold to-champagne hover:from-champagne hover:to-rose-gold text-background shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden"
      >
        <Palette className={`w-7 h-7 relative z-10 transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`} />
        <div className="absolute inset-0 bg-gradient-shine opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </Button>
    </div>
  );
};

export default ThemeSelector;
