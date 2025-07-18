import React from "react";
import { Calendar, Users, Target, Heart, Award, Globe } from "lucide-react";
import { useInView } from "react-intersection-observer";
import Card from "../components/UI/Card";

const CompanyPage: React.FC = () => {
  const { ref: heroRef, inView: heroInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: timelineRef, inView: timelineInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: teamRef, inView: teamInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const timeline = [
    {
      year: "1998",
      event:
        "Company founded with a vision to revolutionize steel manufacturing",
    },
    {
      year: "2002",
      event:
        "First TMT production line commissioned with capacity of 50,000 MT/year",
    },
    {
      year: "2008",
      event:
        "ISO 9001:2008 certification achieved, expansion to 200,000 MT/year",
    },
    {
      year: "2015",
      event:
        "Second manufacturing unit established, capacity increased to 350,000 MT/year",
    },
    {
      year: "2020",
      event:
        "Advanced automation implemented, achieved 500,000 MT/year capacity",
    },
    {
      year: "2023",
      event:
        "Sustainability initiatives launched, carbon footprint reduced by 30%",
    },
  ];

  const leadership = [
    {
      name: "Rajesh Surabhi",
      position: "Chairman & Managing Director",
      department: "Executive Leadership",
      experience: "25+ years",
      image:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      bio: "Visionary leader with extensive experience in steel manufacturing and business development.",
    },
    {
      name: "Dr. Priya Sharma",
      position: "Chief Technology Officer",
      department: "Research & Development",
      experience: "20+ years",
      image:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      bio: "Leading metallurgist with expertise in advanced steel processing technologies.",
    },
    {
      name: "Ahmed Hassan",
      position: "Chief Operations Officer",
      department: "Manufacturing",
      experience: "22+ years",
      image:
        "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      bio: "Operations expert focused on efficiency, quality, and sustainable manufacturing practices.",
    },
    {
      name: "Sunita Patel",
      position: "Chief Financial Officer",
      department: "Finance & Strategy",
      experience: "18+ years",
      image:
        "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      bio: "Financial strategist with deep understanding of steel industry dynamics and growth planning.",
    },
  ];

  const values = [
    {
      icon: Target,
      title: "Quality Excellence",
      description:
        "Unwavering commitment to delivering superior quality products that exceed industry standards.",
    },
    {
      icon: Users,
      title: "Customer Focus",
      description:
        "Building lasting relationships through exceptional service and innovative solutions.",
    },
    {
      icon: Globe,
      title: "Sustainability",
      description:
        "Environmental responsibility and sustainable practices in all our operations.",
    },
    {
      icon: Heart,
      title: "Integrity",
      description:
        "Conducting business with transparency, honesty, and ethical practices.",
    },
  ];

  const csrInitiatives = [
    {
      title: "Education Support",
      description:
        "Scholarship programs and infrastructure development for rural schools",
      impact: "500+ students benefited",
    },
    {
      title: "Healthcare Access",
      description:
        "Mobile medical units and health camps in underserved communities",
      impact: "10,000+ people served annually",
    },
    {
      title: "Environmental Conservation",
      description: "Tree plantation drives and water conservation projects",
      impact: "50,000+ trees planted",
    },
    {
      title: "Skill Development",
      description: "Vocational training programs for local youth",
      impact: "200+ youth trained annually",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-steel-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-steel-900 to-[#009C49] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="Steel manufacturing"
            className="w-full h-full object-cover"
          />
        </div>
        <div
          ref={heroRef}
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div
            className={`text-center transition-all duration-1000 ${
              heroInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Building the Future with
              <span className="block text-[#009C49]">Steel Excellence</span>
            </h1>
            <p className="text-xl text-steel-200 max-w-3xl mx-auto leading-relaxed">
              For over 25 years, SurabhiPlusTMT has been at the forefront of
              steel innovation, setting industry standards for quality,
              sustainability, and technological advancement.
            </p>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={timelineRef}
            className={`text-center mb-16 transition-all duration-1000 ${
              timelineInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-steel-900 mb-6">
              Our <span className="text-[#009C49]">Journey</span>
            </h2>
            <p className="text-xl text-steel-600 max-w-3xl mx-auto leading-relaxed">
              From humble beginnings to industry leadership - the milestones
              that shaped our legacy.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-[#009C49] h-full hidden lg:block"></div>

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col lg:flex-row items-center transition-all duration-700 ${
                    timelineInView
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  {/* Left or Right Card */}
                  <div
                    className={`lg:w-1/2 ${
                      index % 2 === 0
                        ? "lg:pr-12 lg:text-right"
                        : "lg:pl-12 lg:order-2"
                    }`}
                  >
                    <Card className="relative">
                      <div className="flex items-center space-x-3 mb-3">
                        <Calendar className="h-5 w-5 text-[#009C49]" />
                        <span className="text-2xl font-bold text-[#009C49]">
                          {item.year}
                        </span>
                      </div>
                      <p className="text-steel-600 leading-relaxed">
                        {item.event}
                      </p>
                    </Card>
                  </div>

                  {/* Timeline Dot - absolutely positioned */}
                  <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 z-10">
                    <div className="w-6 h-6 bg-[#009C49] rounded-full border-4 border-white shadow-lg" />
                  </div>

                  {/* Spacer to balance flex structure */}
                  <div
                    className={`lg:w-1/2 ${
                      index % 2 === 0 ? "lg:pl-12 lg:order-2" : "lg:pr-12"
                    }`}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-steel-900 mb-6">
              Our <span className="text-[#009C49]">Values</span>
            </h2>
            <p className="text-xl text-steel-600 max-w-3xl mx-auto leading-relaxed">
              The principles that guide our actions and define our commitment to
              excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} hover className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#009C49] to-[#009C49] rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-steel-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-steel-600 leading-relaxed">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CSR Initiatives */}
      {/* <section className="py-20 bg-gradient-to-r from-[#009C49] to-steel-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Corporate Social <span className="text-[#9CBC66]">Responsibility</span>
            </h2>
            <p className="text-xl text-steel-300 max-w-3xl mx-auto leading-relaxed">
              Committed to making a positive impact on society and the environment through 
              meaningful CSR initiatives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {csrInitiatives.map((initiative, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:scale-105 transition-transform duration-300"
              >
                <h3 className="text-xl font-bold mb-3">{initiative.title}</h3>
                <p className="text-steel-300 mb-4 leading-relaxed">{initiative.description}</p>
                <div className="inline-block bg-[#9CBC66] text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {initiative.impact}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default CompanyPage;