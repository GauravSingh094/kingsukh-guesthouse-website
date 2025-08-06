import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { Users, Award, MapPin, Heart, Calendar, Star } from 'lucide-react';

const StatsCounter: React.FC = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [inView, hasAnimated]);

  const stats = [
    {
      icon: Users,
      number: 1200,
      suffix: '+',
      label: 'Happy Guests',
      description: 'Satisfied customers'
    },
    {
      icon: Calendar,
      number: 5,
      suffix: '+',
      label: 'Years Experience',
      description: 'In hospitality'
    },
    {
      icon: MapPin,
      number: 15,
      suffix: '+',
      label: 'Tourist Spots',
      description: 'Nearby attractions'
    },
    {
      icon: Star,
      number: 4.9,
      suffix: '/5',
      label: 'Guest Rating',
      description: 'Average review score'
    },
    {
      icon: Award,
      number: 50,
      suffix: '+',
      label: 'Awards Won',
      description: 'Recognition received'
    },
    {
      icon: Heart,
      number: 98,
      suffix: '%',
      label: 'Satisfaction',
      description: 'Guest happiness rate'
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-r from-yellow-600 to-yellow-700 dark:from-yellow-800 dark:to-yellow-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Achievements
          </h2>
          <p className="text-xl text-yellow-100 max-w-2xl mx-auto">
            Numbers that reflect our commitment to providing exceptional guest experiences
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center transform transition-all duration-500 hover:scale-105"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
                <stat.icon className="h-12 w-12 text-white mx-auto mb-4" />
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {hasAnimated ? (
                    <CountUp
                      end={stat.number}
                      duration={2.5}
                      decimals={stat.suffix === '/5' ? 1 : 0}
                      suffix={stat.suffix}
                    />
                  ) : (
                    `0${stat.suffix}`
                  )}
                </div>
                <div className="text-lg font-semibold text-white mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-yellow-100 opacity-80">
                  {stat.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;