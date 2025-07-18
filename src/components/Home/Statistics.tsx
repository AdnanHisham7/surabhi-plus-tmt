import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { TrendingUp, Users, Award, Globe } from 'lucide-react';

const Statistics: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [counters, setCounters] = useState({
    production: 0,
    clients: 0,
    experience: 0,
    projects: 0,
  });

  const finalValues = {
    production: 500000,
    clients: 5000,
    experience: 25,
    projects: 15000,
  };

  useEffect(() => {
    if (inView) {
      const duration = 2000; // 2 seconds
      const steps = 60; // 60 steps for smooth animation
      const stepDuration = duration / steps;

      const intervals = Object.keys(finalValues).map((key) => {
        const finalValue = finalValues[key as keyof typeof finalValues];
        const increment = finalValue / steps;
        let currentValue = 0;

        return setInterval(() => {
          currentValue += increment;
          if (currentValue >= finalValue) {
            currentValue = finalValue;
          }
          
          setCounters(prev => ({
            ...prev,
            [key]: Math.floor(currentValue)
          }));

          if (currentValue >= finalValue) {
            clearInterval(intervals.find(interval => interval === interval));
          }
        }, stepDuration);
      });

      return () => {
        intervals.forEach(interval => clearInterval(interval));
      };
    }
  }, [inView]);

  const stats = [
    {
      icon: TrendingUp,
      value: counters.production,
      label: 'MT Annual Production',
      suffix: '+',
      color: 'text-green-600' // Replaced text-blue-400
    },
    {
      icon: Users,
      value: counters.clients,
      label: 'Satisfied Clients',
      suffix: '+',
      color: 'text-green-400' // Unchanged
    },
    {
      icon: Award,
      value: counters.experience,
      label: 'Years Experience',
      suffix: '+',
      color: 'text-lime-400' // Replaced text-orange-400
    },
    {
      icon: Globe,
      value: counters.projects,
      label: 'Projects Completed',
      suffix: '+',
      color: 'text-purple-400' // Unchanged
    }
  ];

  const formatNumber = (num: number): string => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1);
    } else if (num >= 1000) {
      return (num / 1000).toFixed(0) + 'K';
    }
    return num.toString();
  };

  return (
    <section className="py-20 bg-gradient-to-r from-green-900 via-steel-900 to-green-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-green-600/10 to-lime-600/10" /> {/* Replaced from-blue-600/10 to-orange-600/10 */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={ref} className={`text-center mb-16 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Excellence in <span className="text-lime-400">Numbers</span> {/* Replaced text-orange-400 */}
          </h2>
          <p className="text-xl text-steel-300 max-w-3xl mx-auto leading-relaxed">
            Our commitment to quality and innovation has established us as a trusted leader 
            in the steel manufacturing industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className={`text-center transition-all duration-700 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:scale-105 transition-transform duration-300">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${stat.color.includes('green-600') ? 'from-green-600 to-green-700' : 
                  stat.color.includes('green-400') ? 'from-green-500 to-green-600' :
                  stat.color.includes('lime') ? 'from-lime-400 to-lime-500' :
                  'from-purple-500 to-purple-600'} mb-6`}> {/* Updated gradient logic */}
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                
                <div className="space-y-2">
                  <div className={`text-4xl md:text-5xl font-bold ${stat.color}`}>
                    {formatNumber(stat.value)}
                    {stat.value === finalValues[Object.keys(finalValues)[index] as keyof typeof finalValues] && stat.suffix}
                  </div>
                  <p className="text-steel-300 font-medium text-lg">{stat.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Live Production Status */}
        <div className={`mt-16 bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">Live Production Status</h3>
            <p className="text-steel-300">Real-time data from our manufacturing facility</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">
                <span className="inline-flex items-center">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse mr-2"></div>
                  Online
                </span>
              </div>
              <p className="text-steel-300">Production Status</p>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">1,250 MT</div> {/* Replaced text-blue-400 */}
              <p className="text-steel-300">This Month</p>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-lime-400 mb-2">98.5%</div> {/* Replaced text-orange-400 */}
              <p className="text-steel-300">Quality Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;