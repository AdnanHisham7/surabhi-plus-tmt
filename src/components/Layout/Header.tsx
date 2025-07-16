import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Factory } from "lucide-react";
import logo from "../../assets/surabhi-logo.svg";
import logoWithName from "../../assets/surabhi-logo-2.svg";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to handle smooth scrolling to the top
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navigationItems = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Company", path: "/company" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-2 group"
            onClick={handleScrollToTop}
          >
            <img src={logo} alt="Surabhi Logo" className="h-8 w-8" />
            <span
              className={`text-xl font-bold transition-colors duration-200 ${
                isScrolled ? "text-steel-800" : "text-steel-800"
              }`}
            >
              Surabhi <span className="text-green-800">Plus</span> TMT
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-colors duration-200 hover:text-orange-500 ${
                  location.pathname === item.path
                    ? "text-orange-500"
                    : isScrolled
                    ? "text-steel-700"
                    : "text-steel-700"
                }`}
                onClick={handleScrollToTop}
              >
                {item.name}
              </Link>
            ))}
            <button
              onClick={() => {
                handleScrollToTop();
                navigate("/contact");
              }}
              className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:from-orange-600 hover:to-orange-700 transition-all duration-200 hover:scale-105 hover:shadow-lg"
            >
              Contact Us
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md transition-colors duration-200 ${
                isScrolled ? "text-steel-700" : "text-white"
              }`}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md rounded-lg mt-2 p-4 shadow-lg">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => {
                  setIsOpen(false);
                  handleScrollToTop();
                }}
                className={`block py-3 text-sm font-medium transition-colors duration-200 hover:text-orange-500 ${
                  location.pathname === item.path
                    ? "text-orange-500"
                    : "text-steel-700"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <button
              onClick={() => {
                setIsOpen(false);
                handleScrollToTop();
                navigate("/contact");
              }}
              className="w-full mt-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-full text-sm font-medium hover:from-orange-600 hover:to-orange-700 transition-all duration-200"
            >
              Contact Us
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
