import { FiArrowRight, FiCheckCircle } from 'react-icons/fi';
import { oxygenPlantSection } from '../data/plants';

export default function OxygenPlants() {
  const benefits = [
    { title: '24/7 Oxygen Output', desc: 'Continuous oxygen release, perfect for bedrooms and office workspaces.' },
    { title: 'Natural Toxins Filtration', desc: 'Purifies indoor air by absorbing harmful chemical compounds.' },
    { title: 'Stress & Fatigue Reduction', desc: 'Scientifically proven to improve humidity and lower stress levels.' }
  ];

  return (
    <section id="o2-plants" className="py-24 bg-[#0D1610] relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute -bottom-10 left-1/10 w-96 h-96 bg-accent-green/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Giant Showcase Plant Image */}
          <div className="lg:col-span-6 flex justify-center group">
            <div className="relative max-w-md w-full bg-white/5 border border-white/5 p-4 sm:p-6 rounded-[32px] overflow-hidden shadow-2xl transition-all duration-500 hover:scale-[1.01] hover:border-accent-green/20">
              <img 
                src={oxygenPlantSection.image} 
                alt="Giant Oxygen Plant Collection" 
                className="w-full h-[400px] object-cover rounded-2xl group-hover:scale-102 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute top-8 right-8 bg-[#0D1610]/80 backdrop-blur-md border border-white/10 px-4 py-2 rounded-xl text-center">
                <span className="text-accent-green text-[10px] font-bold uppercase tracking-wider block">Starts From</span>
                <span className="text-white font-bold text-base">Rs. {oxygenPlantSection.price}/-</span>
              </div>
            </div>
          </div>

          {/* Right Column: Copy, Highlight Benefits, and Action */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <span className="inline-block bg-accent-green/10 text-accent-green text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full border border-accent-green/20">
                {oxygenPlantSection.title}
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
                {oxygenPlantSection.subtitle}
              </h2>
              <p className="text-sage text-sm sm:text-base leading-relaxed">
                {oxygenPlantSection.description}
              </p>
            </div>

            {/* Benefits List */}
            <div className="space-y-4">
              {benefits.map((benefit, idx) => (
                <div 
                  key={idx} 
                  className="flex items-start gap-4 p-4 rounded-2xl bg-[#142118]/40 border border-white/5 hover:border-accent-green/15 transition-colors duration-300"
                >
                  <div className="text-accent-green mt-1 flex-shrink-0">
                    <FiCheckCircle size={18} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm">
                      {benefit.title}
                    </h4>
                    <p className="text-sage/80 text-xs mt-0.5 leading-relaxed">
                      {benefit.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Action CTA Button */}
            <div className="pt-2">
              <button 
                type="button"
                className="bg-accent-green hover:bg-[#34a366] text-[#0D1610] font-bold px-8 py-4 rounded-full flex items-center gap-2 group hover:scale-[1.02] active:scale-98 shadow-lg shadow-accent-green/10 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent-green"
              >
                <span>Shop O₂ Collection</span>
                <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
