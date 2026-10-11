import { useState } from "react";
import { Button } from "../layouts/Button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  const [activeLink, setActiveLink] = useState("#home");

  const navlinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Our Services" },
    { href: "#testimonials", label: "Testimonials" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-lg border-b border-gray-100 shadow">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center gap-0.5 group cursor-pointer">
            <div className="w-4 h-4 bg-blue-500 rounded-full opacity-75 group-hover:opacity-100 transition-opacity"></div>
            <div className="w-4 h-4 bg-green-500 -ml-2 rounded-full opacity-100 group-hover:opacity-75 transition-opacity"></div>
          </div>
          {/* NavLinks */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navlinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className={`text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-primary after:transition-all
                ${activeLink === link.href ? "text-primary after:w-full  " : "text-gray-600 hover:text-black"}`}
                onClick={() => setActiveLink(link.href)}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Get in touch button */}
          <div className="hidden md:block">
            {<Button size="sm">Get in touch</Button>}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-black hover:text-white cursor-pointer"
            onClick={() => setMobileMenuIsOpen(!mobileMenuIsOpen)}
          >
            {mobileMenuIsOpen ? (
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            ) : (
              <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
            )}
          </button>
        </div>
        {
            mobileMenuIsOpen && (
              <div className="md:hidden bg-white/90 backdrop-blur-lg border-t border-amber-500/85 animate-fade-in slide-in-from-top duration-300">
                <div className="w-full flex flex-col space-y-3 sm:space-y-4 px-4 py-4 sm:py-6">
                  {navlinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      className={`text-sm font-medium ${activeLink === link.href ? "text-primary" : "text-gray-600 hover:text-gray-900"}`}
                      onClick={() => {
                        setActiveLink(link.href);
                        setMobileMenuIsOpen(false);
                      }}
                    >
                      {link.label}
                    </a>
                  ))}
                  <Button size="sm" onClick={() => setMobileMenuIsOpen(false)}>Get in touch</Button>
                </div>
              </div>
            )
          }
      </nav>
    </header>
  );
};

export default Navbar;
