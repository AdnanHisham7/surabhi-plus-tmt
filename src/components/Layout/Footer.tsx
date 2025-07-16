import React from "react";
import { Link } from "react-router-dom";
import {
  Factory,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  // Function to handle smooth scrolling to the top
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    {
      Icon: Facebook,
      href: "https://www.facebook.com/share/14Dkd7BSnbf/",
      label: "Facebook",
    },
    {
      Icon: Instagram,
      href: "https://www.instagram.com/surabhiplustmt",
      label: "Instagram",
    },
  ];

  return (
    <footer className="bg-steel-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <Link
              to="/"
              className="flex items-center space-x-2"
              onClick={handleScrollToTop}
            >
              <div className="p-2 bg-gradient-to-r from-blue-600 to-orange-500 rounded-lg">
                <Factory className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">SurabhiPlusTMT</span>
            </Link>
            <p className="text-steel-300 text-sm leading-relaxed">
              Leading manufacturer of premium TMT steel bars with cutting-edge
              technology and unwavering commitment to quality and
              sustainability.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(({ Icon, href, label }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-steel-800 rounded-lg hover:bg-orange-500 transition-colors duration-200"
                  aria-label={label}
                  onClick={handleScrollToTop}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {["Home", "Products", "Company", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-steel-300 hover:text-orange-400 transition-colors duration-200 text-sm"
                    onClick={handleScrollToTop}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Products</h3>
            <ul className="space-y-3">
              {["Fe 550", "MS Angles", "MS Flat", "MS Square Rods"].map(
                (product) => (
                  <li key={product}>
                    <Link
                      to="/products"
                      className="text-steel-300 hover:text-orange-400 transition-colors duration-200 text-sm"
                      onClick={handleScrollToTop}
                    >
                      {product}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-orange-400 mt-0.5 flex-shrink-0" />
                <p className="text-steel-300 text-sm">
                  DOOR NO.17/595, B BLOCK
                  <br />
                  VIRTUE TOWER
                  <br />
                  PARAPIRIVU, KANJIKODE
                  <br />
                  PALAKKAD - 678621, India
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-orange-400 flex-shrink-0" />
                <p className="text-steel-300 text-sm">
                  +91 94463 43439
                  <br />
                  +91 96451 13003
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-orange-400 flex-shrink-0" />
                <p className="text-steel-300 text-sm">
                  surabhisteelspkd@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-steel-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-steel-400 text-sm">
              © {currentYear} SurabhiPlusTMT. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <a
                href="#"
                className="text-steel-400 hover:text-orange-400 transition-colors duration-200"
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollToTop();
                }}
              >
                Privacy Policy
              </a>
              {/* <span className="text-steel-500">
                Designed by{" "}
                <a
                  href="https://www.noxwing.site/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleScrollToTop}
                >
                  <span className="font-semibold text-orange-400">Noxwing</span>
                </a>
              </span> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
