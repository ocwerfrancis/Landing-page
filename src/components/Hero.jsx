import { Star, ArrowRight } from "lucide-react";
import { Button } from "../layouts/Button";
import heroImage from "../assets/hero-image.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      <div className="w-full max-w-6xl mx-auto px-6 sm:px-8 py-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8 min-w-0 flex flex-col items-center text-center lg:items-start lg:text-left">
            <span
              className="inline-flex items-center gap-1 px-4 py-2 rounded-full text-sm border border-gray-300 animate-fade-in animation-delay-100"
              style={{
                backgroundColor: "var(--color-primary-foreground)",
                backdropFilter: "blur(16px)",
              }}
            >
              <Star className="w-4 h-4 fill-current text-primary" />
              <span className="text-sm font-medium text-gray-900">
                Jump start your growth
              </span>
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-4xl xl:text-5xl font-bold text-gray-900 text-balance animate-fade-in animation-delay-200">
              We boost the growth for{" "}
              <span className="text-primary relative inline-block">
                Startup to Fortune 500
              </span>{" "}
              Companies
              <span className="inline-block ml-2 animate-pulse">⏰</span>
            </h1>

            <p className="text-lg text-gray-600 animate-fade-in animation-delay-300">
              Discover how our innovative approach can drive growth and success
              for your organization.
            </p>

            <div className="flex items-center gap-3 w-full max-w-md">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 min-w-0 px-6 py-4 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all text-gray-600"
              />
              <Button className="bg-blue-600 text-white px-6 py-4 rounded-xl hover:bg-blue-700 cursor-pointer transition-all hover:shadow-lg hover:shadow-blue-100 active:scale-95">
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Right content */}
          <div className="relative min-w-0 flex justify-center animate-fade-in animation-delay-400 z-10">
            <img
              src={heroImage}
              alt="Hero image"
              className="w-full max-w-md lg:max-w-full h-auto object-contain rounded-lg hover:scale-[1.02] transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
