import Logo from "../assets/ALogo.png";
import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Open Roles", path: "/positions" },
  { name: "Apply", path: "/apply" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-xl shadow-lg py-2"
          : "bg-white/90 backdrop-blur-md py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-3 group"
          >
            <div className="relative overflow-hidden rounded-xl">
              <img 
                src={Logo} 
                alt="Logo" 
                className="h-10 w-10 object-contain transition-transform duration-300 group-hover:scale-110" 
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Aparaitech
              </span>
              <span className="text-xs text-gray-500 font-medium">
                Innovation & Careers
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative px-5 py-2.5 rounded-full font-medium transition-all duration-300 ${
                  location.pathname === item.path
                    ? "text-blue-700"
                    : "text-gray-600 hover:text-blue-600"
                }`}
              >
                <span className="relative z-10">{item.name}</span>
                {location.pathname === item.path && (
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-blue-100/50 rounded-full -z-0" />
                )}
                {/* Animated underline effect */}
                <div 
                  className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full transition-all duration-300 ${
                    location.pathname === item.path 
                      ? "w-3/4" 
                      : "w-0 group-hover:w-3/4"
                  }`}
                />
              </Link>
            ))}
            {/* CTA Button */}
            <Link
              to="/apply"
              className="ml-4 px-6 py-2.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 shadow-lg hover:shadow-blue-500/30 text-white font-medium rounded-full hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:-translate-y-0.5 shadow-md hover:shadow-lg"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2.5 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 hover:from-gray-100 hover:to-gray-200 transition-all duration-300 shadow-sm hover:shadow-md"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-gradient-to-b from-white to-gray-50/95 backdrop-blur-xl rounded-2xl p-4 shadow-xl border border-gray-100">
            <div className="space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`flex items-center justify-between px-4 py-4 rounded-xl transition-all duration-300 ${
                    location.pathname === item.path
                      ? "bg-gradient-to-r from-blue-50 to-blue-100/50 text-blue-700"
                      : "text-gray-700 hover:bg-gray-50/80"
                  }`}
                >
                  <span className="font-medium">{item.name}</span>
                  {location.pathname === item.path && (
                    <div className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
                  )}
                </Link>
              ))}
              {/* Mobile CTA */}
              <Link
                to="/apply"
                className="block mt-4 px-4 py-3.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium text-center rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-md hover:shadow-lg active:scale-[0.98]"
              >
                Start Application
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;