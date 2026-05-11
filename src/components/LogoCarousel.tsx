
import React from 'react';
import { motion } from 'framer-motion';

const PLACEHOLDER_LOGOS = [
  { name: 'HEX', image: 'images/partners/hex.png' },
  { name: 'Melbourne Accelerator Program', image: 'images/partners/map.png' },
  { name: 'LaunchVic', image: 'images/partners/launchvic.png' },
  { name: 'Notion', image: 'images/partners/notion.png' },
  { name: 'Boab', image: 'images/partners/boab.png' }
];

const LogoCarousel: React.FC = () => {
  return (
    <section className="py-8 sm:py-12 bg-gradient-to-r from-gray-50 to-white">
      <div className="container">
        <motion.h3
          className="text-center text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Supported by
        </motion.h3>

        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 max-w-4xl mx-auto">
          {PLACEHOLDER_LOGOS.map((logo) => (
            <div
              key={logo.name}
              className="flex-shrink-0 w-48 h-24 bg-white rounded-lg border border-border flex items-center justify-center p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <img
                src={logo.image}
                alt={logo.name}
                className="max-w-full max-h-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoCarousel;
