import React from "react";
import { ArrowRight, Play, Shield, Award, Zap } from "lucide-react";
import { useInView } from "react-intersection-observer";
import Button from "../UI/Button";
import { useNavigate } from "react-router-dom";

const Hero: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const navigate = useNavigate();

  const features = [
    { icon: Shield, label: "Superior Quality", value: "ISO 9001:2015" },
    { icon: Award, label: "Industry Leader", value: "25+ Years" },
    { icon: Zap, label: "Production Capacity", value: "500K MT/Year" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-steel-900 via-blue-900 to-steel-800">
        <div className="absolute inset-0 bg-black/40" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              'url("https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </div>

      {/* Content */}
      <div
        ref={ref}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <div
          className={`transition-all duration-1000 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Building Tomorrow's
            <span className="block bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Steel Infrastructure
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-steel-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            Premium TMT steel bars engineered with cutting-edge technology for
            unmatched strength, durability, and corrosion resistance in modern
            construction.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              onClick={() => navigate("/products")}
              size="lg"
              icon={ArrowRight}
              iconPosition="right"
            >
              View Products
            </Button>
            <Button
              variant="outline"
              size="lg"
              icon={Play}
              className="text-white border-white hover:bg-white hover:text-steel-900"
            >
              Watch Process
            </Button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 transition-all duration-500 hover:scale-105 ${
                  inView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <feature.icon className="h-8 w-8 text-orange-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">
                  {feature.label}
                </h3>
                <p className="text-2xl font-bold text-orange-400">
                  {feature.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce-soft">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
