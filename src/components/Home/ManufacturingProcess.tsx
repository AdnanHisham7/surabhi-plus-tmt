import React from 'react';
import { CheckCircle, ArrowRight, Factory, Zap, Shield, Award } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const ManufacturingProcess: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const processes = [
    {
      step: 1,
      title: 'Raw Material Selection',
      description: 'Premium quality billets sourced from certified suppliers with strict chemical composition control',
      icon: Factory,
      details: ['Chemical Analysis', 'Quality Certification', 'Vendor Audits']
    },
    {
      step: 2,
      title: 'Reheating & Rolling',
      description: 'Advanced reheating furnaces and high-speed rolling mills ensure optimal mechanical properties',
      icon: Zap,
      details: ['Temperature Control', 'Rolling Sequence', 'Microstructure Formation']
    },
    {
      step: 3,
      title: 'Thermo-Mechanical Treatment',
      description: 'Controlled cooling and tempering process creates the characteristic rib pattern and strength',
      icon: Shield,
      details: ['Water Quenching', 'Self-Tempering', 'Rib Formation']
    },
    {
      step: 4,
      title: 'Quality Assurance',
      description: 'Comprehensive testing at every stage ensures consistent quality and compliance with standards',
      icon: Award,
      details: ['Tensile Testing', 'Bend Testing', 'Chemical Analysis']
    }
  ];

  return (
    <section className="py-20 bg-steel-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={ref} className={`text-center mb-16 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Advanced Manufacturing
            <span className="block text-orange-400">Process</span>
          </h2>
          <p className="text-xl text-steel-300 max-w-3xl mx-auto leading-relaxed">
            State-of-the-art production facility with cutting-edge technology ensuring 
            superior quality and consistency in every TMT bar we manufacture.
          </p>
        </div>

        <div className="space-y-12">
          {processes.map((process, index) => (
            <div 
              key={process.step}
              className={`transition-all duration-700 ${
                inView ? 'opacity-100 translate-x-0' : `opacity-0 ${index % 2 === 0 ? 'translate-x-[-50px]' : 'translate-x-[50px]'}`
              }`}
              style={{ transitionDelay: `${index * 300}ms` }}
            >
              <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}>
                {/* Content */}
                <div className="flex-1 space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-2xl font-bold">
                      {process.step}
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold">{process.title}</h3>
                  </div>
                  
                  <p className="text-lg text-steel-300 leading-relaxed">
                    {process.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {process.details.map((detail, detailIndex) => (
                      <div 
                        key={detailIndex}
                        className="flex items-center space-x-2 bg-steel-800/50 rounded-lg p-3"
                      >
                        <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                        <span className="text-sm font-medium">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300">
                    <process.icon className="h-16 w-16 text-white" />
                  </div>
                </div>
              </div>

              {/* Connector */}
              {index < processes.length - 1 && (
                <div className="flex justify-center mt-8">
                  <ArrowRight className="h-8 w-8 text-orange-400 animate-bounce-soft" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ManufacturingProcess;