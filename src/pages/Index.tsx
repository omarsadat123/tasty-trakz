
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import RestaurantGrid from "@/components/RestaurantGrid";
import FoodCard from "@/components/FoodCard";
import Footer from "@/components/Footer";
import { restaurants } from "@/assets/restaurantData";

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Get featured items from all restaurants
  const featuredItems = restaurants
    .filter(restaurant => restaurant.featured)
    .flatMap(restaurant => 
      restaurant.menu.map(item => ({
        ...item,
        restaurantName: restaurant.name,
        restaurantId: restaurant.id
      }))
    )
    .slice(0, 6);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className={`min-h-screen transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Navbar />
      
      <main>
        <HeroSection />
        
        <RestaurantGrid />
        
        {/* How It Works Section */}
        <section id="how-it-works" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">How It Works</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Getting your favorite food delivered is as easy as 1-2-3
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <div className="bg-white p-6 rounded-xl shadow-sm text-center transform transition-transform hover:-translate-y-1 hover:shadow-md">
                <div className="w-16 h-16 bg-brand-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-brand-orange">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Choose a Restaurant</h3>
                <p className="text-gray-600">
                  Browse through our extensive list of restaurants and find your favorite.
                </p>
              </div>
              
              {/* Step 2 */}
              <div className="bg-white p-6 rounded-xl shadow-sm text-center transform transition-transform hover:-translate-y-1 hover:shadow-md">
                <div className="w-16 h-16 bg-brand-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-brand-orange">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Select Your Food</h3>
                <p className="text-gray-600">
                  Choose from a wide variety of delicious meals and add them to your cart.
                </p>
              </div>
              
              {/* Step 3 */}
              <div className="bg-white p-6 rounded-xl shadow-sm text-center transform transition-transform hover:-translate-y-1 hover:shadow-md">
                <div className="w-16 h-16 bg-brand-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-brand-orange">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Delivery or Pickup</h3>
                <p className="text-gray-600">
                  Get your food delivered to your doorstep or pick it up at the restaurant.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Popular Food Section */}
        <section id="popular" className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Popular Items</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Discover our customers' favorite dishes from top-rated restaurants
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredItems.map((item, index) => (
                <div 
                  key={`${item.id}-${index}`}
                  className="animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <FoodCard item={item} />
                  <div className="mt-2 text-sm text-center text-gray-500">
                    From <span className="font-medium">{item.restaurantName}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* App Download Section */}
        <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold mb-4">Get the TastyTrakz App</h2>
                <p className="text-gray-300 mb-6">
                  Download our mobile app for a better experience. Track your orders in real-time, save your favorite restaurants, and get exclusive deals.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors">
                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"></path><path d="M10 2c1 .5 2 2 2 5"></path></svg>
                    <div className="text-left">
                      <div className="text-xs">Download on the</div>
                      <div className="text-sm font-medium">App Store</div>
                    </div>
                  </button>
                  <button className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors">
                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><polygon points="3 2 3 22 21 12 3 2"></polygon></svg>
                    <div className="text-left">
                      <div className="text-xs">GET IT ON</div>
                      <div className="text-sm font-medium">Google Play</div>
                    </div>
                  </button>
                </div>
              </div>
              <div className="lg:w-1/2 flex justify-center">
                <div className="relative w-64 h-96 sm:w-72 sm:h-[28rem]">
                  <div className="absolute top-0 left-0 w-full h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-[2.5rem] transform -rotate-6"></div>
                  <div className="absolute top-0 left-0 w-full h-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-[2.5rem] transform rotate-3"></div>
                  <div className="relative w-full h-full overflow-hidden rounded-[2.5rem] border-8 border-gray-800 bg-black z-10">
                    <img 
                      src="https://images.unsplash.com/photo-1565299585323-38d6b0865b47?q=80&w=2080&auto=format&fit=crop" 
                      alt="Food delivery app" 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Contact Section */}
        <section id="contact" className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Have a question or feedback? We'd love to hear from you!
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange/30 focus:border-brand-orange outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange/30 focus:border-brand-orange outline-none transition-colors"
                    placeholder="Your email"
                  />
                </div>
                
                <div className="md:col-span-2">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange/30 focus:border-brand-orange outline-none transition-colors"
                    placeholder="Message subject"
                  />
                </div>
                
                <div className="md:col-span-2">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange/30 focus:border-brand-orange outline-none transition-colors"
                    placeholder="Your message"
                  ></textarea>
                </div>
                
                <div className="md:col-span-2">
                  <button
                    type="submit"
                    className="w-full md:w-auto px-8 py-3 bg-brand-orange text-white font-medium rounded-lg shadow hover:bg-brand-orange-dark transition-colors focus:outline-none focus:ring-2 focus:ring-brand-orange/50"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
