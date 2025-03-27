
import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-100 z-0"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-brand-orange/5 rounded-full blur-3xl z-0 animate-float"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl z-0 animate-float" style={{ animationDelay: "2s" }}></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Hero content */}
          <div className={`w-full lg:w-1/2 space-y-6 text-center lg:text-left transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          }`}>
            <div>
              <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider text-brand-orange bg-brand-orange/10 rounded-full">
                DELICIOUS FOOD DELIVERED FAST
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
              Discover the Best Food & Drinks in Your Area
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-lg mx-auto lg:mx-0">
              Order food from the best local restaurants with easy, on-demand delivery.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:items-center justify-center lg:justify-start">
              <a 
                href="#restaurants" 
                className="flex items-center justify-center gap-2 px-8 py-3 text-white bg-brand-orange hover:bg-brand-orange-dark rounded-full transition-all shadow-md hover:shadow-lg transform hover:scale-[1.03] duration-300"
              >
                Explore Restaurants
                <ArrowRight className="w-4 h-4" />
              </a>
              <a 
                href="#how-it-works" 
                className="flex items-center justify-center gap-2 px-8 py-3 text-gray-700 bg-white hover:bg-gray-50 rounded-full border border-gray-200 transition-all duration-300"
              >
                How It Works
              </a>
            </div>
          </div>
          
          {/* Hero image */}
          <div className={`w-full lg:w-1/2 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          }`}>
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-orange to-brand-orange-light rounded-2xl blur opacity-30 animate-pulse"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1609167830220-7164aa360951?q=80&w=2670&auto=format&fit=crop" 
                  alt="Delicious Food" 
                  className="w-full h-auto rounded-2xl"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
