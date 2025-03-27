
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 text-center">
      <div className="animate-fade-down">
        <div className="inline-flex items-center justify-center w-24 h-24 mb-8 bg-red-50 rounded-full">
          <span className="text-5xl">404</span>
        </div>
      </div>
      
      <h1 className="text-4xl font-bold mb-4 animate-fade-up">Page Not Found</h1>
      
      <p className="text-xl text-gray-600 mb-8 max-w-md animate-fade-up" style={{ animationDelay: "100ms" }}>
        We couldn't find the page you were looking for. It might have been removed or doesn't exist.
      </p>
      
      <a 
        href="/" 
        className="flex items-center gap-2 px-6 py-3 text-white bg-brand-orange hover:bg-brand-orange-dark rounded-full transition-all shadow-md hover:shadow-lg transform hover:scale-105 duration-300 animate-fade-up"
        style={{ animationDelay: "200ms" }}
      >
        <Home className="w-4 h-4" />
        Return to Home
      </a>
    </div>
  );
};

export default NotFound;
