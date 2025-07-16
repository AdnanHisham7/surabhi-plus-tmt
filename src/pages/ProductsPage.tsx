import React, { useState, useEffect } from "react";
import { Download } from "lucide-react";
import Card from "../components/UI/Card";
import Button from "../components/UI/Button";
import type { Product } from "../types";
import msAngles from "../assets/ms-angles.png";
import msFlat from "../assets/ms-flat.png";
import msSquareRod from "../assets/ms-square-rod.png";
import msRoundRod from "../assets/ms-round-rod.png";
import msChannels from "../assets/ms-channels.png";
import iBeem from "../assets/i-beem.png";
import polishRod from "../assets/polish-rod.png";
import msWire from "../assets/ms-wire.png";
import msTAngle from "../assets/ms-t-angle.png";
import asianTmt from "../assets/asian-tmt.webp";
import apexTmt from "../assets/apex-tmt.png";
import ordinaryTmt from "../assets/ordinary-tmt.png";
import msRings from "../assets/ms-rings.webp";
import raipur4Tmt from "../assets/raipur-4tmt.png";
import fe550One from "../assets/550-1.png";
import fe550Two from "../assets/550-2.png";
import fe550Three from "../assets/550-3.png";

const ProductsPage: React.FC = () => {
  const products: Product[] = [
    {
      id: "1",
      name: "TMT Fe 550",
      grade: "Fe 550",
      sizes: [8, 10, 12, 16, 20, 25],
      specifications: {
        yieldStrength: "415 N/mm²",
        tensileStrength: "485 N/mm²",
        elongation: "14.5%",
        bendTest: "180° (3d)",
      },
      applications: [
        "Residential Buildings",
        "Commercial Structures",
        "Bridge Construction",
      ],
      category: "Standard Grade",
      images: [fe550One, fe550Two, fe550Three],
      dataSheet: "/datasheets/fe415.pdf",
    },
    {
      id: "2",
      name: "MS ANGLES",
      grade: "From 20x3 - Upto 100x6",
      images: [msAngles],
    },
    {
      id: "3",
      name: "MS FLAT",
      grade: "From 12x6 - Upto 200x6",
      images: [msFlat],
    },
    {
      id: "4",
      name: "MS SQUARE ROD",
      grade: "From 9 - Upto 32",
      images: [msSquareRod],
    },
    {
      id: "5",
      name: "MS ROUND ROD",
      grade: "From 6 - Upto 32",
      images: [msRoundRod],
    },
    {
      id: "6",
      name: "MS CHANNELS",
      grade: "From 75x40 - Upto 200x100",
      images: [msChannels],
    },
    {
      id: "7",
      name: "I BEEM",
      grade: "From 4 Inches - Upto 14 Inches",
      images: [iBeem],
    },
    {
      id: "8",
      name: "POLISH ROD",
      grade: "BRIGHT BARS",
      images: [polishRod],
    },
    {
      id: "9",
      name: "MS WIRE",
      grade: "25 Kg / Bundle",
      images: [msWire],
    },
    {
      id: "10",
      name: "MS T ANGLE",
      grade: "25*3 ang up to 40*6",
      images: [msTAngle],
    },
    {
      id: "11",
      name: "ASIAN TMT",
      grade: "AVAILABLE",
      images: [asianTmt],
    },
    {
      id: "12",
      name: "APEX TMT",
      grade: "AVAILABLE",
      images: [apexTmt],
    },
    {
      id: "13",
      name: "ORDINARY TMT",
      grade: "From 4mm - Upto 32mm",
      images: [ordinaryTmt],
    },
    {
      id: "14",
      name: "MS RINGS",
      grade: "All Sizes-Customized",
      images: [msRings],
    },
    {
      id: "15",
      name: "RAIPUR 4TMT",
      grade: "AVAILABLE",
      images: [raipur4Tmt],
    },
  ];

  const mainProduct = products.find((p) => p.grade === "Fe 550");
  const otherProducts = products.filter((p) => p.grade !== "Fe 550");

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (mainProduct && mainProduct.images.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex(
          (prevIndex) => (prevIndex + 1) % mainProduct.images.length
        );
      }, 3000); // Change every 3 seconds
      return () => clearInterval(interval);
    }
  }, [mainProduct]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-steel-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with fade-in */}
        <div className="text-center mb-12 fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-steel-900 mb-6">
            Our <span className="text-orange-500">Product</span> Range
          </h1>
          <p className="text-xl text-steel-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive range of TMT steel bars engineered for superior
            performance in all types of construction projects.
          </p>
        </div>

        {/* Main Product Section with fade-in and delay */}
        {mainProduct && (
          <Card className="mb-12 fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="flex flex-col lg:flex-row">
              {/* Image Carousel with Smooth Transition */}
              <div className="lg:w-1/3 relative">
                {mainProduct.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={mainProduct.name}
                    className={`absolute inset-0 rounded-lg w-full h-full object-cover transition-opacity duration-500 ${
                      index === currentImageIndex ? "opacity-100" : "opacity-0"
                    }`}
                  />
                ))}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                  {mainProduct.images.map((_, index) => (
                    <button
                      key={index}
                      className={`w-3 h-3 rounded-full ${
                        index === currentImageIndex ? "bg-white" : "bg-white/50"
                      }`}
                      onClick={() => setCurrentImageIndex(index)}
                    />
                  ))}
                </div>
              </div>

              {/* Details */}
              <div className="lg:w-2/3 p-6">
                <h2 className="text-3xl font-bold mb-4">{mainProduct.name}</h2>
                <p className="mb-2 text-steel-700 font-medium">
                  Grade: {mainProduct.grade}
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                  {Object.entries(mainProduct?.specifications).map(
                    ([key, value]) => (
                      <div key={key} className="flex justify-between">
                        <span className="text-steel-600 capitalize">{key}</span>
                        <span className="font-medium">{value}</span>
                      </div>
                    )
                  )}
                </div>
                <div className="mb-4">
                  <h4 className="font-semibold mb-1">Available Sizes:</h4>
                  <div className="flex flex-wrap gap-2">
                    {mainProduct.sizes.map((size) => (
                      <span
                        key={size}
                        className="bg-steel-100 text-steel-700 px-2 py-1 text-xs rounded"
                      >
                        {size}mm
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mb-4">
                  <h4 className="font-semibold mb-1">Applications:</h4>
                  <ul className="list-disc list-inside text-sm text-steel-600">
                    {mainProduct.applications.map((app) => (
                      <li key={app}>{app}</li>
                    ))}
                  </ul>
                </div>
                {/* <div className="flex gap-2">
                  <Button icon={Download}>Download Datasheet</Button>
                </div> */}
              </div>
            </div>
          </Card>
        )}

        {/* Other Products Section with fade-in and delay */}
        <div className="fade-in" style={{ animationDelay: "0.6s" }}>
          <h2 className="text-2xl font-bold text-steel-900 mt-16 mb-8 text-start">
            Other products
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {otherProducts.map((product) => (
              <div
                key={product.id}
                className="group flex flex-col items-center text-center p-4 rounded-lg bg-white shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer hover:-translate-y-1"
              >
                <div className="relative mb-4">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="h-36 w-36 object-cover rounded-lg shadow-sm group-hover:shadow-lg transition-shadow duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h4 className="text-sm font-semibold text-steel-800 mb-1 group-hover:text-steel-900 transition-colors">
                  {product.name}
                </h4>
                <p className="text-xs text-steel-500 font-medium">
                  {product.grade}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
