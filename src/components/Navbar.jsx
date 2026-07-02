import { useState, useEffect } from 'react';
import { FiSearch, FiShoppingCart, FiUser, FiMenu, FiX } from 'react-icons/fi';
import { FaLeaf } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Products', href: '#products' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'O2 Plants', href: '#o2-plants' }
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300 glass-panel border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a 
          href="#home" 
          className="flex items-center gap-2 group focus-visible:outline-2 focus-visible:outline-accent-green rounded-md px-1"
          aria-label="FloraMaison Home"
        >
          <div className="bg-accent-green/20 p-2 rounded-lg text-accent-green group-hover:rotate-12 transition-transform duration-300">
            <FaLeaf size={20} />
          </div>
          <span className="text-white font-semibold text-xl tracking-wide group-hover:text-accent-green transition-colors duration-300">
            FloraMaison
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Desktop Navigation">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="relative text-sage hover:text-white font-medium text-sm transition-colors duration-300 py-2 group focus-visible:outline-2 focus-visible:outline-accent-green rounded"
                >
                  {link.name}
                  {/* Underline Micro-animation */}
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-accent-green scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Utility Actions (Desktop & Mobile) */}
        <div className="flex items-center gap-4">
          {/* Search Button */}
          <button 
            type="button" 
            className="text-sage hover:text-white hover:scale-110 p-2 rounded-full hover:bg-white/5 transition-all duration-300 focus-visible:outline-2 focus-visible:outline-accent-green"
            aria-label="Search plants"
          >
            <FiSearch size={20} />
          </button>

          {/* Cart Button */}
          <button 
            type="button" 
            className="relative text-sage hover:text-white hover:scale-110 p-2 rounded-full hover:bg-white/5 transition-all duration-300 focus-visible:outline-2 focus-visible:outline-accent-green"
            aria-label="Shopping Cart"
          >
            <FiShoppingCart size={20} />
            <span className="absolute -top-1 -right-1 bg-accent-green text-[#0D1610] text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
              2
            </span>
          </button>

          {/* Profile Button */}
          <button 
            type="button" 
            className="hidden sm:flex text-sage hover:text-white hover:scale-110 p-2 rounded-full hover:bg-white/5 transition-all duration-300 focus-visible:outline-2 focus-visible:outline-accent-green"
            aria-label="User profile"
          >
            <FiUser size={20} />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            className="md:hidden text-sage hover:text-white p-2 focus-visible:outline-2 focus-visible:outline-accent-green"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Close main menu" : "Open main menu"}
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay Menu */}
      <div 
        id="mobile-menu"
        className={`md:hidden fixed inset-0 top-20 bg-[#0D1610]/95 backdrop-blur-lg border-t border-white/5 z-40 transition-all duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <nav className="h-full flex flex-col justify-start p-8" aria-label="Mobile Navigation">
          <ul className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-sage hover:text-white font-medium text-lg border-l-2 border-transparent hover:border-accent-green pl-4 py-2 hover:bg-white/5 transition-all duration-300 rounded"
                >
                  {link.name}
                </a>
              </li>
            ))}
            {/* Mobile Profile Link */}
            <li className="sm:hidden pt-4 border-t border-white/10">
              <a
                href="#profile"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 text-sage hover:text-white font-medium text-lg pl-4 py-2 hover:bg-white/5 transition-all duration-300 rounded"
              >
                <FiUser size={20} />
                <span>My Profile</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
