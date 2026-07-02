import { FiArrowRight } from 'react-icons/fi';

export default function Footer() {
  const usefulLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Product', href: '#products' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { name: 'GitHub', icon: 'github-icon', href: 'https://github.com' },
    { name: 'Discord', icon: 'discord-icon', href: 'https://discord.com' },
    { name: 'X / Twitter', icon: 'x-icon', href: 'https://x.com' },
    { name: 'Bluesky', icon: 'bluesky-icon', href: 'https://bsky.app' }
  ];

  return (
    <footer id="footer" className="bg-[#0A100B] text-white border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/5">
          
          {/* Brand Summary Column (4 spans) */}
          <div className="md:col-span-4 space-y-4">
            <a href="#home" className="flex items-center gap-2 group focus:outline-none inline-flex" aria-label="FloraVision Home">
              <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                🪴
              </span>
              <span className="text-white font-semibold text-lg tracking-wide group-hover:text-accent-green transition-colors duration-300">
                FloraVision
              </span>
            </a>
            <p className="text-sage text-sm leading-relaxed max-w-sm">
              We are committed to bringing nature closer to your life by providing the best quality indoor and outdoor plants.
            </p>
            {/* Social Icons Bar using icons.svg symbols */}
            <div className="flex gap-4 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent-green hover:border-accent-green text-sage hover:text-[#0D1610] transition-all duration-300"
                  aria-label={`Follow us on ${social.name}`}
                >
                  <svg className="w-4 h-4 fill-current">
                    <use href={`/icons.svg#${social.icon}`} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Useful Links Column (2 spans) */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-accent-green">
              Useful Links
            </h4>
            <ul className="space-y-2">
              {usefulLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-sage hover:text-white text-sm transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-accent-green"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Social Links List Column (2 spans) */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-accent-green">
              Social Links
            </h4>
            <ul className="space-y-2">
              {socialLinks.map((social) => (
                <li key={social.name}>
                  <a 
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sage hover:text-white text-sm transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-accent-green"
                  >
                    {social.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column (4 spans) */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-accent-green">
              Subscribe to Newsletter
            </h4>
            <p className="text-sage text-sm leading-relaxed">
              Stay updated on the latest arrivals and special offers.
            </p>
            {/* Subscription Form */}
            <form onSubmit={(e) => e.preventDefault()} className="relative flex items-center">
              <input
                id="newsletter-email"
                type="email"
                placeholder="Enter your email"
                aria-label="Email address for newsletter subscription"
                required
                className="w-full bg-[#142118] text-white placeholder-sage/50 pl-4 pr-12 py-3 rounded-xl border border-white/5 focus:outline-none focus:border-accent-green focus-visible:ring-1 focus-visible:ring-accent-green transition-all duration-300"
              />
              <button
                type="submit"
                className="absolute right-2 bg-accent-green hover:bg-[#34a366] text-[#0D1610] p-2 rounded-lg hover:scale-105 active:scale-95 transition-all duration-300"
                aria-label="Subscribe to newsletter"
              >
                <FiArrowRight size={16} />
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-sage gap-4">
          <p>© {new Date().getFullYear()} FloraVision. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#privacy" className="hover:text-white transition-colors duration-200">Privacy Policy</a>
            <a href="#terms" className="hover:text-white transition-colors duration-200">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
