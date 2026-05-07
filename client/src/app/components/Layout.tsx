import { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Home, Briefcase, User, Mail, Menu, X } from "lucide-react";

const Layout = () => {
  const location = useLocation();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/", icon: Home },
    { name: "Projects", path: "/projects", icon: Briefcase },
    { name: "Skills", path: "/skills", icon: User },
    { name: "Contact", path: "/contact", icon: Mail },
  ];

  useEffect(() => {
    setMobileNavOpen(false);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans selection:bg-neutral-900 selection:text-white">
      {/* Top Navigation Bar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-neutral-100">
        <div className="max-w-6xl mx-auto px-6 h-16 md:h-20 grid grid-cols-1 md:grid-cols-3 items-center">
          <div className="hidden md:block" />

          {/* Desktop Nav Links */}
          <div className="hidden md:flex justify-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-neutral-900 ${
                  location.pathname === link.path
                    ? "text-neutral-900"
                    : "text-neutral-500"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:block" />
        </div>
      </nav>

      {/* Mobile Menu Toggle */}
      <button
        type="button"
        className="fixed top-4 right-4 z-[60] md:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-900 shadow-sm"
        onClick={() => setMobileNavOpen((open) => !open)}
        aria-label={mobileNavOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={mobileNavOpen}
        aria-controls="mobile-navigation-panel"
      >
        {mobileNavOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile Navigation Panel */}
      {mobileNavOpen && (
        <>
          <button
            type="button"
            className="fixed inset-0 z-40 bg-neutral-900/20 md:hidden"
            onClick={() => setMobileNavOpen(false)}
            aria-label="Close navigation overlay"
          />
          <div
            id="mobile-navigation-panel"
            className="fixed top-16 right-4 z-[55] w-[calc(100%-2rem)] max-w-xs rounded-2xl border border-neutral-200 bg-white p-3 shadow-2xl md:hidden"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const isActive = location.pathname === link.path;

                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-neutral-900 text-white"
                        : "text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900"
                    }`}
                  >
                    <Icon size={18} />
                    <span>{link.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </>
      )}

      {/* Main Content */}
      <main className="pt-20 min-h-screen flex flex-col">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t border-neutral-200 py-12 md:py-16 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-6 md:mb-8 items-start">
            {/* Left: Name and Title */}
            <div className="flex flex-col">
              <h3 className="text-lg font-bold text-neutral-900">Owen Ganza</h3>
              <p className="text-sm text-neutral-500 mt-1">Full-Stack Dev</p>
            </div>

            {/* Center: Navigation Links */}
            <div className="flex flex-col space-y-3">
              <Link to="/projects" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
                Projects
              </Link>
              <Link to="/skills" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
                About
              </Link>
              <Link to="/contact" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
                Contact
              </Link>
            </div>

            {/* Right: Social Links */}
            <div className="flex flex-col space-y-3">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
                GitHub
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
                LinkedIn
              </a>
              <a href="mailto:contact@example.com" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
                Email
              </a>
            </div>
          </div>

          {/* Copyright (no separator) */}
          <div className="text-center mt-4">
            <p className="text-sm text-neutral-500">&copy; {new Date().getFullYear()} Owen Ganza</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
