import React from "react";
import { Award, Shield, CheckCircle, Globe } from "lucide-react";
import { useInView } from "react-intersection-observer";
import Card from "../UI/Card";

const Certifications: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const certifications = [
    {
      id: 1,
      name: "ISO 9001:2015",
      description:
        "Quality Management System certification ensuring consistent product quality and customer satisfaction.",
      icon: Award,
      validUntil: "2026",
      certifyingBody: "Bureau Veritas",
      color: "from-blue-500 to-blue-600",
    },
    {
      id: 2,
      name: "ISO 14001:2015",
      description:
        "Environmental Management System certification demonstrating our commitment to environmental protection.",
      icon: Globe,
      validUntil: "2026",
      certifyingBody: "TUV SUD",
      color: "from-green-500 to-green-600",
    },
    {
      id: 3,
      name: "BIS 1786:2008",
      description:
        "Bureau of Indian Standards certification for high strength deformed steel bars and wires.",
      icon: Shield,
      validUntil: "2025",
      certifyingBody: "Bureau of Indian Standards",
      color: "from-orange-500 to-orange-600",
    },
    // {
    //   id: 4,
    //   name: "OHSAS 18001",
    //   description:
    //     "Occupational Health and Safety Management System ensuring workplace safety standards.",
    //   icon: CheckCircle,
    //   validUntil: "2025",
    //   certifyingBody: "SGS",
    //   color: "from-purple-500 to-purple-600",
    // },
    {
      id: 5,
      name: "Trade Mark Registration",
      description:
        "Registered trademark for SURABHI PLUS TMT under the Trade Marks Act, 1999. Covers common metals, alloys, and TMT bars in Class 6.",
      icon: Shield,
      validUntil: "2030",
      certifyingBody: "Trade Marks Registry, Government of India",
      color: "from-red-500 to-red-600",
      pdfLink: "/trademark_certificate.pdf", // Assumes PDF is in public folder
    },
  ];

  const qualityStandards = [
    "Seismic Resistance as per IS 13920",
    "Corrosion Resistance Testing",
    "Chemical Composition Analysis",
    "Mechanical Property Testing",
    "Dimensional Tolerance Check",
    "Surface Quality Inspection",
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-1000 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-steel-900 mb-6">
            Industry <span className="text-[#009C49]">Certifications</span>
          </h2>
          <p className="text-xl text-steel-600 max-w-3xl mx-auto leading-relaxed">
            Our commitment to excellence is validated by prestigious industry
            certifications and rigorous quality standards that ensure superior
            product quality.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {certifications.map((cert, index) => (
            <Card
              key={cert.id}
              hover
              className={`text-center transition-all duration-700 ${
                inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div
                className={`w-16 h-16 bg-gradient-to-r ${cert.color} rounded-full flex items-center justify-center mx-auto mb-6`}
              >
                <cert.icon className="h-8 w-8 text-white" />
              </div>

              <h3 className="text-xl font-bold text-steel-900 mb-3">
                {cert.name}
              </h3>
              <p className="text-steel-600 text-sm leading-relaxed mb-4">
                {cert.description}
              </p>

              <div className="space-y-2 text-xs text-steel-500">
                <div className="flex justify-between items-center">
                  <span>Valid Until:</span>
                  <span className="font-semibold text-green-600">
                    {cert.validUntil}
                  </span>
                </div>
                <div className="text-center pt-2 border-t border-steel-100">
                  <span className="text-steel-700 font-medium">
                    {cert.certifyingBody}
                  </span>
                </div>
              </div>

              {cert.pdfLink && (
                <div className="mt-4">
                  <a
                    href={cert.pdfLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
                  >
                    View Certificate
                  </a>
                </div>
              )}
            </Card>
          ))}
        </div>

        {/* Quality Standards */}
        <div
          className={`bg-gradient-to-r from-steel-50 to-blue-50 rounded-2xl p-8 lg:p-12 transition-all duration-1000 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-steel-900 mb-4">
              Quality Standards & Testing
            </h3>
            <p className="text-lg text-steel-600 max-w-2xl mx-auto">
              Every TMT bar undergoes rigorous testing to ensure compliance with
              international and national quality standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {qualityStandards.map((standard, index) => (
              <div
                key={index}
                className={`flex items-center space-x-3 bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300 ${
                  inView
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-[-20px]"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span className="text-steel-700 font-medium text-sm">
                  {standard}
                </span>
              </div>
            ))}
          </div>

          {/* Testing Lab Info */}
          <div className="mt-8 text-center">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full">
              <Award className="h-4 w-4" />
              <span className="text-sm font-medium">
                NABL Accredited Testing Laboratory
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
