
import { useState, useEffect } from "react";
import { Search, Menu, X, ShoppingCart, Home, Phone } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getItemCount } = useCart();
  const cartItemCount = getItemCount();
  
  // Detect scroll for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? "bg-white/80 backdrop-blur-md shadow-sm" 
        : "bg-transparent"
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold text-brand-orange mr-1">Tasty</span>
              <span className="text-xl font-bold">Trakz</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-sm font-medium hover:text-brand-orange transition-colors">
              Home
            </Link>
            <a href="/#restaurants" className="text-sm font-medium hover:text-brand-orange transition-colors">
              Restaurants
            </a>
            <a href="/#popular" className="text-sm font-medium hover:text-brand-orange transition-colors">
              Popular
            </a>
            <a href="#about" className="text-sm font-medium hover:text-brand-orange transition-colors">
              About
            </a>
            <a href="#contact" className="text-sm font-medium hover:text-brand-orange transition-colors">
              Contact
            </a>
          </nav>
          
          {/* Search & Cart */}
          <div className="flex items-center">
            <div className="hidden md:block mr-4">
              <SearchBar />
            </div>
            
            <Link 
              to="/cart" 
              className="p-2 rounded-full hover:bg-gray-100 transition-colors relative"
              aria-label="View cart"
            >
              <ShoppingCart className="h-5 w-5" />
              {cartItemCount > 0 && (
                <Badge 
                  className="absolute -top-1 -right-1 flex items-center justify-center h-5 w-5 p-0 bg-brand-orange text-white" 
                  variant="destructive"
                >
                  {cartItemCount}
                </Badge>
              )}
            </Link>
            
            {/* Mobile menu button */}
            <button
              className="inline-flex md:hidden ml-1 p-2 rounded-full hover:bg-gray-100 transition-colors"
              onClick={toggleMenu}
              aria-label="Menu"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-2 px-4 shadow-lg animate-fade-down">
          <div className="pt-2 pb-4">
            <SearchBar />
          </div>
          <nav className="grid gap-1">
            <Link 
              to="/" 
              className="flex items-center p-3 rounded-md hover:bg-gray-50 transition-colors"
              onClick={toggleMenu}
            >
              <Home className="h-4 w-4 mr-3" />
              <span className="text-sm font-medium">Home</span>
            </Link>
            <a 
              href="/#restaurants" 
              className="flex items-center p-3 rounded-md hover:bg-gray-50 transition-colors"
              onClick={toggleMenu}
            >
              <ShoppingCart className="h-4 w-4 mr-3" />
              <span className="text-sm font-medium">Restaurants</span>
            </a>
            <a 
              href="/#popular" 
              className="flex items-center p-3 rounded-md hover:bg-gray-50 transition-colors"
              onClick={toggleMenu}
            >
              <Search className="h-4 w-4 mr-3" />
              <span className="text-sm font-medium">Popular</span>
            </a>
            <a 
              href="#about" 
              className="flex items-center p-3 rounded-md hover:bg-gray-50 transition-colors"
              onClick={toggleMenu}
            >
              <Menu className="h-4 w-4 mr-3" />
              <span className="text-sm font-medium">About</span>
            </a>
            <a 
              href="#contact" 
              className="flex items-center p-3 rounded-md hover:bg-gray-50 transition-colors"
              onClick={toggleMenu}
            >
              <Phone className="h-4 w-4 mr-3" />
              <span className="text-sm font-medium">Contact</span>
            </a>
            <Link 
              to="/cart" 
              className="flex items-center p-3 rounded-md hover:bg-gray-50 transition-colors mt-1 border-t border-gray-100 pt-4"
              onClick={toggleMenu}
            >
              <ShoppingCart className="h-4 w-4 mr-3" />
              <span className="text-sm font-medium">Cart</span>
              {cartItemCount > 0 && (
                <Badge 
                  className="ml-2 bg-brand-orange text-white" 
                  variant="destructive"
                >
                  {cartItemCount}
                </Badge>
              )}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
