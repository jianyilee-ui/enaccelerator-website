
import React, { useEffect, useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({ 
      opacity: 1, 
      y: 0, 
      transition: { 
        delay: custom * 0.15, 
        duration: 0.5, 
        ease: "easeOut" 
      } 
    })
  };

  return (
    <section className="min-h-screen pt-24 pb-12 sm:pt-32 sm:pb-16 md:pt-40 md:pb-24 lg:pt-48 lg:pb-32 relative overflow-hidden" ref={heroRef}>
      {/* Enhanced Interactive Background Elements */}
      <div className="absolute top-10 right-10 sm:top-20 sm:right-20 h-32 w-32 sm:h-64 sm:w-64 lg:h-80 lg:w-80 bg-brand-yellow/20 rounded-full blur-3xl -z-10 animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
          }}></div>
      <div className="absolute -bottom-10 -left-10 sm:-bottom-20 sm:-left-20 h-48 w-48 sm:h-96 sm:w-96 lg:h-[480px] lg:w-[480px] bg-brand-yellow/10 rounded-full blur-3xl -z-10 animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * -0.01}px, ${mousePosition.y * -0.01}px)`,
          }}></div>
      
      {/* New decorative elements */}
      <div className="absolute top-1/4 left-[5%] w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 rotate-45 border-2 border-brand-yellow/30 animate-spin-slow"></div>
      <div className="absolute bottom-1/4 right-[10%] w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 bg-brand-yellow/20 rounded-full animate-bounce-soft"></div>
      <div className="absolute top-[15%] right-[15%] w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 bg-brand-yellow/30 rounded-full animate-pulse-slow"></div>
      <div className="absolute bottom-[20%] left-[20%] w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 border border-brand-yellow/20 rounded-full animate-pulse-slow"></div>
      
      {/* Main floating logo */}
      <motion.div 
        className="absolute right-[5%] top-[20%] w-32 h-32 lg:w-48 lg:h-48 xl:w-56 xl:h-56 opacity-10 hidden md:block"
        animate={{
          y: [0, -10, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <img src="/logos/SVG/Logo Yellow SVG.svg" alt="EnAccelerator Logo" className="w-full h-full" />
      </motion.div>
      
      <motion.div 
        className="container relative z-10"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { 
            opacity: 1,
            transition: { 
              staggerChildren: 0.15,
              delayChildren: 0.3
            } 
          }
        }}
      >
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6">
          <motion.div variants={fadeInUp} custom={0}>
            <span className="inline-block py-2 px-4 sm:py-2.5 sm:px-6 bg-brand-yellow/20 backdrop-blur-sm text-xs sm:text-sm font-medium rounded-full mb-6 sm:mb-8">
              <a href="https://enactusmelbourne.com/" target="_blank" className="hover:text-brand-yellow transition-colors">Presented By Enactus Melbourne</a>
            </span>
          </motion.div>
          
          <motion.h1 
            className="mb-6 sm:mb-8 relative font-heading font-bold leading-tight"
            variants={fadeInUp}
            custom={1}
          >
            <span className="block sm:inline">Turning Students Into</span>{' '}
            <br className="hidden sm:block" />
            <motion.span 
              className="text-brand-yellow inline-block relative"
              animate={{ 
                textShadow: ["0 0 0px #FFC222", "0 0 8px #FFC22250", "0 0 0px #FFC222"],
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                repeatType: "reverse" 
              }}
            >Startup Founders</motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-foreground/70 mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed"
            variants={fadeInUp}
            custom={2}
          >
            EnAccelerator is the premier student-run startup incubator at the University of Melbourne.
          </motion.p>
          
          <motion.p
            className="text-lg sm:text-xl md:text-2xl font-bold text-brand-yellow mb-6 sm:mb-8"
            variants={fadeInUp}
            custom={3}
          >
            Applications for Semester 1, 2026 are now closed.
          </motion.p>

          <motion.p
            className="text-sm sm:text-base md:text-lg text-foreground/70 mb-6 sm:mb-8 max-w-2xl mx-auto"
            variants={fadeInUp}
            custom={3.5}
          >
            Keep an eye out for our Demo Day later this semester, and stay tuned for Semester 2 applications!
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
            variants={fadeInUp}
            custom={4}
          >
            <Button
              size="lg"
              className="bg-brand-yellow text-black hover:bg-brand-yellow/90 w-full sm:w-auto min-w-[160px] sm:min-w-[180px] hover:scale-105 transition-transform shadow-md h-12 sm:h-14 text-sm sm:text-base"
              asChild
            >
              <Link to="/apply">Learn More</Link>
            </Button>
            {/* <Button 
              size="lg" 
              variant="outline" 
              className="w-full sm:w-auto min-w-[160px] sm:min-w-[180px] backdrop-blur-sm border-white/20 hover:border-brand-yellow/50 hover:bg-white/5 transition-all h-12 sm:h-14 text-sm sm:text-base" 
              asChild
            >
              <a href="#program">Learn More</a>
            </Button> */}
          </motion.div>
          
          {/* New: Featured highlights 
          <motion.div 
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto"
            variants={fadeInUp}
            custom={4}
          >
            <div className="bg-white/5 backdrop-blur-sm p-5 rounded-lg border border-white/10 hover:border-brand-yellow/30 transition-all">
              <div className="w-12 h-12 bg-brand-yellow/10 rounded-full flex items-center justify-center mb-3 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-yellow">
                  <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"></path>
                  <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2Z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-1 text-center">Mentorship</h3>
              <p className="text-sm text-center text-foreground/70">Access industry experts and successful founders</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm p-5 rounded-lg border border-white/10 hover:border-brand-yellow/30 transition-all">
              <div className="w-12 h-12 bg-brand-yellow/10 rounded-full flex items-center justify-center mb-3 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-yellow">
                  <path d="M12 6v12"></path>
                  <path d="M6 12h12"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-1 text-center">Resources</h3>
              <p className="text-sm text-center text-foreground/70">Technology, workspace, and funding opportunities</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm p-5 rounded-lg border border-white/10 hover:border-brand-yellow/30 transition-all">
              <div className="w-12 h-12 bg-brand-yellow/10 rounded-full flex items-center justify-center mb-3 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-yellow">
                  <path d="M17 11h1a3 3 0 0 1 0 6h-1"></path>
                  <path d="M9 12v6"></path>
                  <path d="M13 12v6"></path>
                  <path d="M14 7V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-1 text-center">Community</h3>
              <p className="text-sm text-center text-foreground/70">Connect with like-minded student entrepreneurs</p>
            </div>
          </motion.div>*/}
          
          {/* Stats - Now centered */}
          <motion.div 
            className="flex flex-col items-center mt-12 sm:mt-16 md:mt-20 pt-8 sm:pt-10 border-t border-white/10"
            variants={{
              hidden: { opacity: 0 },
              visible: { 
                opacity: 1,
                transition: { 
                  staggerChildren: 0.1,
                  delayChildren: 0.8
                } 
              }
            }}
            initial="hidden"
            animate="visible"
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 w-full max-w-2xl mx-auto text-center">
              <motion.div 
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                }}
                className="flex flex-col items-center"
              >
                <motion.p 
                  className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-yellow"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                >20+</motion.p>
                <p className="text-xs sm:text-sm text-foreground/70">Student Founders</p>
              </motion.div>
              
              <motion.div 
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                }}
                className="flex flex-col items-center"
              >
                <motion.p 
                  className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-yellow"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: 0.3 }}
                >10+</motion.p>
                <p className="text-xs sm:text-sm text-foreground/70">Startups Launched</p>
              </motion.div>
              
              <motion.div 
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                }}
                className="flex flex-col items-center"
              >
                <motion.p 
                  className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-yellow"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: 0.6 }}
                >2024</motion.p>
                <p className="text-xs sm:text-sm text-foreground/70">Launched In</p>
              </motion.div>
            </div>

          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
