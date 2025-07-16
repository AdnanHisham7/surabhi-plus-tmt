import React, { useState, useEffect } from "react";
import { ArrowRight, Download, Eye, Phone, Send, User } from "lucide-react";
import { useInView } from "react-intersection-observer";
import Card from "../UI/Card";
import Button from "../UI/Button";
import arrow1 from "../../assets/arrow5.svg";
import { useNavigate } from "react-router-dom";
import fe550One from "../../assets/550-1.png";
import fe550Two from "../../assets/550-2.png";
import fe550Three from "../../assets/550-3.png";

const ProductHighlights = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const navigate = useNavigate();

  // Function to handle smooth scrolling to the top
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const product = {
    id: 2,
    name: "Fe 550 Grade",
    grade: "Fe 550",
    images: [fe550Three, fe550Two, fe550One],
    specifications: {
      yieldStrength: "550 N/mm²",
      tensileStrength: "585 N/mm²",
      elongation: "10%",
      bendTest: "180° (4d)",
    },
    applications: [
      "High-rise Buildings",
      "Industrial Structures",
      "Heavy Infrastructure Projects",
      "Bridges and Flyovers",
    ],
    sizes: ["8mm", "10mm", "12mm", "16mm", "20mm", "25mm"],
    features: [
      "High Strength",
      "Reduced Steel Consumption",
      "Cost Efficient for Large Projects",
      "Improved Weldability",
    ],
  };

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (product.images.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex(
          (prevIndex) => (prevIndex + 1) % product.images.length
        );
      }, 3000); // Change every 3 seconds
      return () => clearInterval(interval);
    }
  }, [product.images]);

  return (
    <section className="py-20 bg-gradient-to-b from-steel-50 to-white grid-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-1000 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-steel-900 mb-6">
            Premium <span className="text-orange-500">TMT Steel</span> Range
          </h2>
          <p className="text-xl text-steel-600 max-w-3xl mx-auto leading-relaxed">
            Engineered for excellence with superior mechanical properties and
            advanced manufacturing processes to meet diverse construction
            requirements.
          </p>
        </div>

        <div className="relative">
          <img
            src={arrow1}
            alt="Left arrow"
            className={`absolute left-0 top-1/2 transform -translate-y-1/2 w-1/4 md:w-1/5 lg:w-1/6 transition-opacity duration-1000 ${
              inView ? "opacity-60" : "opacity-0"
            } z-0`}
          />

          <div className="max-w-4xl mx-auto relative z-10">
            <Card
              hover
              className={`transition-all duration-700 ${
                inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="relative overflow-hidden rounded-lg mb-6 h-48">
                {product.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${product.name} image ${index + 1}`}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                      index === currentImageIndex ? "opacity-100" : "opacity-0"
                    }`}
                  />
                ))}
                {product.images.length > 1 && (
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                    {product.images.map((_, index) => (
                      <button
                        key={index}
                        className={`w-3 h-3 rounded-full ${
                          index === currentImageIndex
                            ? "bg-white"
                            : "bg-white/50"
                        }`}
                        onClick={() => setCurrentImageIndex(index)}
                      />
                    ))}
                  </div>
                )}
                <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {product.grade}
                </div>
              </div>

              <h3 className="text-2xl font-bold text-steel-900 mb-4">
                {product.name}
              </h3>

              <div className="bg-steel-50 rounded-lg p-4 mb-6">
                <h4 className="font-semibold text-steel-800 mb-3">
                  Technical Specifications
                </h4>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  {Object.entries(product.specifications).map(
                    ([key, value]) => (
                      <div key={key} className="flex justify-between">
                        <span className="text-steel-600 capitalize">
                          {key.replace(/([A-Z])/g, " $1")}
                        </span>
                        <span className="font-medium text-steel-800">
                          {value}
                        </span>
                      </div>
                    )
                  )}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-steel-800 mb-3">
                  Key Features
                </h4>
                <div className="flex flex-wrap gap-2">
                  {product.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-steel-800 mb-3">
                  Available Sizes
                </h4>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <span
                      key={size}
                      className="px-2 py-1 bg-steel-100 text-steel-700 rounded text-xs font-medium"
                    >
                      {size}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-2">
                <Button
                  onClick={() => {
                    handleScrollToTop();
                    navigate("/contact");
                  }}
                  size="sm"
                  icon={Phone}
                  className="flex-1"
                >
                  Contact Us
                </Button>
              </div>
            </Card>
          </div>
        </div>
        <div className="text-center mt-12">
          <Button
            onClick={() => {
              handleScrollToTop();
              navigate("/products");
            }}
            size="lg"
            icon={ArrowRight}
            iconPosition="right"
            className="z-50"
          >
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductHighlights;
