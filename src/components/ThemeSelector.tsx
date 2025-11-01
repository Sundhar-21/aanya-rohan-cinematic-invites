import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Palette } from 'lucide-react';

const ThemeSelector = () => {
  const [isOpen, setIsOpen] = useState(false);

  const themes = [
    { name: 'Ivory & Rose Gold', class: 'ivory-rose' },
    { name: 'Lavender Dreams', class: 'lavender' },
    { name: 'Champagne Elegance', class: 'champagne' },
  ];

  const applyTheme = (themeClass: string) => {
    const root = document.documentElement;
    
    // Reset to default
    root.style.removeProperty('--rose-gold');
    root.style.removeProperty('--champagne');
    root.style.removeProperty('--background');
    
    switch(themeClass) {
      case 'lavender':
        root.style.setProperty('--rose-gold', '270 65% 75%');
        root.style.setProperty('--champagne', '280 90% 70%');
        root.style.setProperty('--background', '280 45% 98%');
        break;
      case 'champagne':
        root.style.setProperty('--rose-gold', '45 75% 68%');
        root.style.setProperty('--champagne', '50 95% 65%');
        root.style.setProperty('--background', '45 40% 97%');
        break;
      default:
        // Default ivory-rose theme (already set in CSS)
        break;
    }
    
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <div className={`mb-4 transition-all duration-300 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
        <div className="bg-card/95 backdrop-blur-sm border border-rose-gold/20 rounded-lg p-4 shadow-xl">
          <p className="font-body text-sm text-muted-foreground mb-3">Choose Theme</p>
          <div className="space-y-2">
            {themes.map((theme) => (
              <Button
                key={theme.class}
                onClick={() => applyTheme(theme.class)}
                variant="outline"
                className="w-full justify-start border-rose-gold/30 hover:border-rose-gold hover:bg-rose-gold/10 font-body"
              >
                {theme.name}
              </Button>
            ))}
          </div>
        </div>
      </div>
      
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-rose-gold hover:bg-rose-gold/90 text-primary-foreground w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all"
      >
        <Palette className="w-6 h-6" />
      </Button>
    </div>
  );
};

export default ThemeSelector;
