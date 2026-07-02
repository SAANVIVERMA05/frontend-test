import { useState, useEffect, useRef } from 'react';
import { FiSearch, FiShoppingCart, FiUser, FiMenu, FiX, FiChevronDown } from 'react-icons/fi';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close mobile menu scroll lock
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

  // Click outside listener for desktop dropdown
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const dropdownItems = [
    { name: 'Trending Plants', href: '#home' },
    { name: 'Top Selling', href: '#products' },
    { name: 'O2 Plants', href: '#o2-plants' },
    { name: 'Reviews', href: '#reviews' }
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300 glass-panel border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo with Plant Pot Emoji */}
        <a 
          href="#home" 
          className="flex items-center gap-2 group focus-visible:outline-2 focus-visible:outline-accent-green rounded-md px-1"
          aria-label="FloraVision Home"
        >
          <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
            🪴
          </span>
          <span className="text-white font-semibold text-xl tracking-wide group-hover:text-accent-green transition-colors duration-300">
            FloraVision
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Desktop Navigation">
          <ul className="flex items-center gap-8">
            {/* Home link */}
            <li>
              <a
                href="#home"
                className="relative text-sage hover:text-white font-medium text-sm transition-colors duration-300 py-2 group focus-visible:outline-2 focus-visible:outline-accent-green rounded"
              >
                Home
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-accent-green scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </a>
            </li>

            {/* Plants Type Dropdown */}
            <li className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-1 text-sage hover:text-white font-medium text-sm transition-colors duration-300 py-2 group focus-visible:outline-2 focus-visible:outline-accent-green rounded focus:outline-none"
                aria-expanded={isDropdownOpen}
                aria-haspopup="true"
              >
                <span>Plants Type</span>
                <FiChevronDown 
                  size={16} 
                  className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180 text-accent-green' : ''}`} 
                />
              </button>

              {/* Dropdown Menu Overlay */}
              <div 
                className={`absolute left-0 mt-2 w-48 rounded-2xl bg-[#0D1610] border border-white/10 shadow-2xl p-2 space-y-1 transition-all duration-300 origin-top-left ${
                  isDropdownOpen 
                    ? 'opacity-100 scale-100 pointer-events-auto' 
                    : 'opacity-0 scale-95 pointer-events-none'
                }`}
              >
                {dropdownItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsDropdownOpen(false)}
                    className="block px-4 py-2.5 text-xs text-sage hover:text-white hover:bg-white/5 rounded-xl transition-all duration-200 focus:outline-none focus-visible:bg-white/5"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </li>

            {/* Contact link */}
            <li>
              <a
                href="#footer"
                className="relative text-sage hover:text-white font-medium text-sm transition-colors duration-300 py-2 group focus-visible:outline-2 focus-visible:outline-accent-green rounded"
              >
                Contact
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-accent-green scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </a>
            </li>
          </ul>
        </nav>

        {/* Utility Actions */}
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
          <ul className="flex flex-col gap-5">
            {/* Home link */}
            <li>
              <a
                href="#home"
                onClick={() => setIsOpen(false)}
                className="block text-sage hover:text-white font-medium text-lg border-l-2 border-transparent hover:border-accent-green pl-4 py-2 hover:bg-white/5 transition-all duration-300 rounded"
              >
                Home
              </a>
            </li>

            {/* Plants Type Mobile Accordion */}
            <li>
              <button
                type="button"
                onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
                className="w-full flex items-center justify-between text-sage hover:text-white font-medium text-lg border-l-2 border-transparent pl-4 py-2 hover:bg-white/5 transition-all duration-300 rounded text-left focus:outline-none"
              >
                <span>Plants Type</span>
                <FiChevronDown 
                  size={20} 
                  className={`transition-transform duration-300 ${isMobileDropdownOpen ? 'rotate-180 text-accent-green' : ''}`} 
                />
              </button>
              
              {/* Accordion Sub-links */}
              <div 
                className={`overflow-hidden transition-all duration-300 pl-8 space-y-3 ${
                  isMobileDropdownOpen ? 'max-h-60 mt-3 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
                }`}
              >
                {dropdownItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => {
                      setIsOpen(false);
                      setIsMobileDropdownOpen(false);
                    }}
                    className="block text-sage hover:text-white text-sm py-1.5 transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </li>

            {/* Contact link */}
            <li>
              <a
                href="#footer"
                onClick={() => setIsOpen(false)}
                className="block text-sage hover:text-white font-medium text-lg border-l-2 border-transparent hover:border-accent-green pl-4 py-2 hover:bg-white/5 transition-all duration-300 rounded"
              >
                Contact
              </a>
            </li>

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
