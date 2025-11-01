import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Palette, Sparkles } from 'lucide-react';

const ThemeSelector = () => {
  const [isOpen, setIsOpen] = useState(false);

  const themes = [
    { name: 'Dark Luxury', class: 'dark-luxury', preview: 'bg-gradient-to-r from-rose-gold via-champagne to-rose-gold' },
    { name: 'Royal Purple', class: 'royal-purple', preview: 'bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500' },
    { name: 'Emerald Dream', class: 'emerald', preview: 'bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-500' },
  ];

  const applyTheme = (themeClass: string) => {
    const root = document.documentElement;
    
    switch(themeClass) {
      case 'royal-purple':
        root.style.setProperty('--rose-gold', '280 70% 65%');
        root.style.setProperty('--champagne', '320 90% 70%');
        root.style.setProperty('--background', '280 25% 10%');
        break;
      case 'emerald':
        root.style.setProperty('--rose-gold', '160 70% 50%');
        root.style.setProperty('--champagne', '180 80% 60%');
        root.style.setProperty('--background', '160 25% 10%');
        break;
      default:
        // Default dark luxury theme (reset)
        root.style.setProperty('--rose-gold', '25 80% 65%');
        root.style.setProperty('--champagne', '45 100% 65%');
        root.style.setProperty('--background', '20 25% 8%');
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
        <div className="glass-effect border border-rose-gold/30 rounded-2xl p-6 shadow-2xl min-w-[280px]">
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
                <div className="relative z-10 flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-lg ${theme.preview} shadow-lg`} />
                  <span className="font-medium">{theme.name}</span>
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
