
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Handle scrolling to section after navigation
  useEffect(() => {
    if (location.pathname === '/' && location.hash) {
      const sectionId = location.hash.substring(1);
      const element = document.getElementById(sectionId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  const handleNavClick = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    
    // If we're not on the homepage, navigate to homepage with hash
    if (location.pathname !== '/') {
      navigate(`/#${sectionId}`);
      return;
    }
    
    // If we're on homepage, scroll to section
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { label: 'Program', sectionId: 'program' },
    { label: 'Benefits', sectionId: 'benefits' },
    { label: 'Timeline', sectionId: 'timeline' },
    { label: 'Testimonials', sectionId: 'testimonials' }
  ];

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      )}
    >
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src="/logos/SVG/icon-square-inverted-svg.svg" alt="EnAccelerator Logo" className="h-8 w-8 object-contain" />
          <span className="font-bold text-lg">EnAccelerator</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.sectionId}
              onClick={() => handleNavClick(item.sectionId)}
              className="text-foreground/80 hover:text-foreground transition-colors cursor-pointer"
            >
              {item.label}
            </button>
          ))}
          <Button className="bg-brand-yellow text-black hover:bg-brand-yellow/90" asChild>
            <Link to="/apply">Applications Closed</Link>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden flex flex-col space-y-1.5 p-2" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <span className={cn(
            "w-6 h-0.5 bg-foreground transition-transform duration-300",
            isMobileMenuOpen && "transform rotate-45 translate-y-2"
          )}></span>
          <span className={cn(
            "w-6 h-0.5 bg-foreground transition-opacity duration-300",
            isMobileMenuOpen && "opacity-0"
          )}></span>
          <span className={cn(
            "w-6 h-0.5 bg-foreground transition-transform duration-300",
            isMobileMenuOpen && "transform -rotate-45 -translate-y-2"
          )}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "md:hidden fixed left-0 right-0 bg-white shadow-lg transition-all duration-300 ease-in-out",
        isMobileMenuOpen ? "top-[calc(var(--header-height,_60px))] max-h-[calc(100vh-var(--header-height,_60px))] overflow-auto" : "-top-[100vh]"
      )}>
        <div className="container flex flex-col space-y-4 py-4">
          {navItems.map((item) => (
            <button
              key={item.sectionId}
              onClick={() => handleNavClick(item.sectionId)}
              className="py-2 px-4 text-foreground/80 hover:text-foreground text-left"
            >
              {item.label}
            </button>
          ))}
          <div className="px-4 pt-2">
            <Button 
              className="bg-brand-yellow text-black hover:bg-brand-yellow/90 w-full"
              onClick={() => setIsMobileMenuOpen(false)}
              asChild
            >
              <Link to="/apply">Applications Closed</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
