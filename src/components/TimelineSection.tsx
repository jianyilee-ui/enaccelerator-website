
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const timelineItems = [
  {
    week: "3",
    title: "Induction & Introduction",
    description: "Meet your cohort of fellow founders, and learn about the program, and get an introduction to start-ups.",
    color: "bg-brand-yellow",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=250&fit=crop"
  },
  {
    week: "4",
    title: "Problem Space",
    description: "Learn about what a Problem Space is, why choosing the right one is important and how to go about it.",
    color: "bg-brand-yellow/90",
    image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=400&h=250&fit=crop"
  },
  {
    week: "5",
    title: "Key Customer",
    description: "Learn how to build customer profiles and understand their needs.",
    color: "bg-brand-yellow/80",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop"
  },
  {
    week: "6",
    title: "Customer Validation",
    description: "Learn how to recognise when a problem exists and when to start building a solution.",
    color: "bg-brand-yellow/70",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=250&fit=crop"
  },
  {
    week: "7",
    title: "Prototyping",
    description: "Learn how to transform customer needs into a solution, and how to go about building one.",
    color: "bg-brand-yellow/60",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop"
  },
  {
    week: "8-10",
    title: "Building & Testing",
    description: "Get three weeks of open workshops supported by founders and industry professionals to build your MVP",
    color: "bg-brand-yellow/50",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop"
  },
  {
    week: "11",
    title: "Pitching",
    description: "Learn how to develop a pitch deck and sell the story of your solution.",
    color: "bg-brand-yellow/40",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=250&fit=crop"
  },
  {
    week: "12",
    title: "Demo Day",
    description: "Present your startup to fellow founders, mentors, and the university community.",
    color: "bg-brand-yellow/30",
    image: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c?w=400&h=250&fit=crop"
  }
];

const TimelineSection = () => {
  const [activeItem, setActiveItem] = useState(0);
  
  return (
    <section id="timeline" className="bg-brand-light">
      <div className="container">
        <div className="max-w-4xl mx-auto mb-12 sm:mb-16 text-center">
          <h2 className="mb-4 sm:mb-6">Your <span className="text-brand-yellow">Week 3–12</span> Journey</h2>
          <p className="text-base sm:text-lg md:text-xl text-foreground/70 leading-relaxed">
            Follow our program from ideation to launch, with tailored support every step of the way.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* Timeline Navigation - Left Side - Hidden on mobile */}
          <div className="hidden lg:block lg:col-span-4 order-2 lg:order-1 lg:sticky lg:top-24">
            <div className="space-y-1">
              {timelineItems.map((item, index) => (
                  <button
                    key={index}
                    className={`w-full text-left p-3 lg:p-4 transition-all duration-300 rounded-lg flex items-center gap-3 lg:gap-4 ${
                      activeItem === index ? 'bg-brand-yellow text-black' : 'hover:bg-brand-yellow/10'
                    }`}
                    onClick={() => setActiveItem(index)}
                  >
                    <div className={`h-8 w-8 lg:h-10 lg:w-10 rounded-full flex items-center justify-center text-xs lg:text-sm font-bold ${
                      activeItem === index ? 'bg-black text-brand-yellow' : 'bg-brand-yellow text-black'
                    }`}>
                      {item.week}
                    </div>
                    <div>
                      <p className={`font-medium text-sm lg:text-base ${activeItem === index ? 'text-black' : 'text-foreground'}`}>
                        Week {item.week}
                      </p>
                      <p className={`text-xs lg:text-sm truncate ${activeItem === index ? 'text-black/70' : 'text-foreground/70'}`}>
                        {item.title}
                      </p>
                    </div>
                  </button>
              ))}
            </div>
          </div>
          
          {/* Timeline Content - Right Side */}
          <div className="lg:col-span-8 order-1 lg:order-2">
            <Card className="border-brand-yellow overflow-hidden">
              <div className="h-2 bg-brand-yellow"></div>
              <CardContent className="p-4 sm:p-6 lg:p-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 sm:mb-8 gap-4">
                  <div>
                    <p className="text-xs sm:text-sm text-foreground/70 mb-1">WEEK {timelineItems[activeItem].week}</p>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">{timelineItems[activeItem].title}</h3>
                  </div>
                  <div className="flex gap-1 sm:gap-2">
                    <button 
                      className="h-8 w-8 sm:h-10 sm:w-10 rounded-full flex items-center justify-center border border-border hover:border-brand-yellow disabled:opacity-50"
                      onClick={() => setActiveItem(prev => Math.max(prev - 1, 0))}
                      disabled={activeItem === 0}
                      aria-label="Previous week"
                    >
                      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.84182 3.13514C9.04327 3.32401 9.05348 3.64042 8.86462 3.84188L5.43521 7.49991L8.86462 11.1579C9.05348 11.3594 9.04327 11.6758 8.84182 11.8647C8.64036 12.0535 8.32394 12.0433 8.13508 11.8419L4.38508 7.84188C4.20477 7.64955 4.20477 7.35027 4.38508 7.15794L8.13508 3.15794C8.32394 2.95648 8.64036 2.94628 8.84182 3.13514Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                      </svg>
                    </button>
                    <button 
                      className="h-8 w-8 sm:h-10 sm:w-10 rounded-full flex items-center justify-center border border-border hover:border-brand-yellow disabled:opacity-50"
                      onClick={() => setActiveItem(prev => Math.min(prev + 1, timelineItems.length - 1))}
                      disabled={activeItem === timelineItems.length - 1}
                      aria-label="Next week"
                    >
                      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.1584 3.13514C5.95694 3.32401 5.94673 3.64042 6.13559 3.84188L9.565 7.49991L6.13559 11.1579C5.94673 11.3594 5.95694 11.6758 6.1584 11.8647C6.35986 12.0535 6.67627 12.0433 6.86514 11.8419L10.6151 7.84188C10.7954 7.64955 10.7954 7.35027 10.6151 7.15794L6.86514 3.15794C6.67627 2.95648 6.35986 2.94628 6.1584 3.13514Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                      </svg>
                    </button>
                  </div>
                </div>
                
                <div className="mb-6 sm:mb-8">
                  <p className="text-foreground/80 text-base sm:text-lg leading-relaxed">
                    {timelineItems[activeItem].description}
                  </p>
                </div>
                
                {/* Visualization */}
                <div className="bg-brand-light rounded-lg p-4 sm:p-6">
                  <div className="h-3 sm:h-4 bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-brand-yellow transition-all duration-500 ease-out" 
                      style={{ width: `${(activeItem + 1) * 12.5}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between mt-2 sm:mt-3 text-xs text-foreground/70">
                    <span>Start</span>
                    <span>Demo Day</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
