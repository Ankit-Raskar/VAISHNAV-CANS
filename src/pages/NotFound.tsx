import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="text-center">
        <div
          className="text-[200px] font-black leading-none mb-4"
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            background: "linear-gradient(135deg, #c8a84b, #f5d38a, #b8860b)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          404
        </div>
        <p className="text-white/50 text-xl mb-8 uppercase tracking-widest">Page Not Found</p>
        <a
          href="/"
          className="px-8 py-3 bg-amber-500 text-black font-bold uppercase tracking-widest hover:bg-amber-400 transition-colors duration-300"
        >
          Return Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
