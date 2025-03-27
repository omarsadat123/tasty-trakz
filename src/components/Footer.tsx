
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <span className="text-xl font-bold text-brand-orange">Chayan</span>
            </div>
            <p className="text-gray-600 mb-4">
              Delivering the best food right to your doorstep. Fast delivery, exceptional taste.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-brand-orange transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-orange transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-orange transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-brand-orange transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#restaurants" className="text-gray-600 hover:text-brand-orange transition-colors">
                  Restaurants
                </a>
              </li>
              <li>
                <a href="#popular" className="text-gray-600 hover:text-brand-orange transition-colors">
                  Popular Foods
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-600 hover:text-brand-orange transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-600 hover:text-brand-orange transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          {/* More Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">More</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-brand-orange transition-colors">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-brand-orange transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-brand-orange transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-brand-orange transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-brand-orange transition-colors">
                  Partners
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-brand-orange mr-2 mt-0.5" />
                <span className="text-gray-600">
                  123 Food Street, Cuisine City, 10001
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-brand-orange mr-2" />
                <a href="tel:+1234567890" className="text-gray-600 hover:text-brand-orange transition-colors">
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-brand-orange mr-2" />
                <a href="mailto:info@chayan.com" className="text-gray-600 hover:text-brand-orange transition-colors">
                  info@chayan.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-100 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Chayan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
