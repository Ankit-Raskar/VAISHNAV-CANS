import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#0a2e1a] flex items-center justify-center px-6">
      <div className="text-center">
        <div
          className="font-display font-extrabold text-[120px] lg:text-[200px] leading-none text-white/5 pointer-events-none select-none"
        >
          404
        </div>
        <div className="-mt-8">
          <h1 className="font-display font-extrabold text-4xl text-white mb-3">Page Not Found</h1>
          <p className="text-white/50 mb-8">The page you're looking for doesn't exist.</p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-[#4ade80] text-[#0a2e1a] px-7 py-3.5 rounded-full font-bold hover:bg-[#22c55e] transition-all duration-300 hover:scale-105"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
