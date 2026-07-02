import { FiPlus } from 'react-icons/fi';
import { trendingPlants } from '../data/plants';

export default function TrendingPlants() {
  // Extract trending/floating plants from data
  const arecaPalm = trendingPlants.find(p => p.name === 'Areca Palm') || trendingPlants[0];
  const snakePlant = trendingPlants.find(p => p.name === 'Snake Plant') || trendingPlants[1];
  const aloeVera = trendingPlants.find(p => p.name === 'Aloe Vera') || trendingPlants[2];

  return (
    <div className="relative flex justify-center items-center min-h-[450px] lg:min-h-[600px] w-full z-10">
      
      {/* Background Halo Behind Tree */}
      <div className="absolute w-64 h-64 sm:w-80 sm:h-80 bg-accent-green/10 rounded-full border border-accent-green/20 animate-pulse pointer-events-none" />

      {/* Central Potted Tree */}
      <div className="relative group/tree z-10 max-w-[280px] sm:max-w-[380px] transition-transform duration-500 hover:scale-[1.03]">
        <img
          src="https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&q=80&w=600"
          alt="Main Lush Potted Tree"
          className="w-full h-auto drop-shadow-[0_20px_50px_rgba(62,189,120,0.25)]"
        />
        {/* Central "Our Trendy plants" Tag */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-accent-green text-[#0D1610] px-4 py-1.5 rounded-full font-bold text-xs uppercase tracking-widest shadow-lg shadow-accent-green/20 border border-white/10 whitespace-nowrap">
          Our Trendy plants
        </div>
      </div>

      {/* Floating Card 1: Areca Palm (Top Right) */}
      <div className="absolute top-[5%] right-[2%] sm:right-[10%] z-20 glass-panel glass-panel-hover p-3 rounded-2xl flex items-center gap-3 w-44 shadow-2xl">
        <img 
          src={arecaPalm.image} 
          alt={arecaPalm.name} 
          className="w-12 h-12 object-cover rounded-xl bg-white/5"
          loading="lazy"
        />
        <div className="flex-grow min-w-0">
          <h4 className="text-white font-semibold text-xs truncate">{arecaPalm.name}</h4>
          <p className="text-sage text-[10px] truncate">{arecaPalm.description}</p>
          <div className="flex items-center justify-between mt-1">
            <span className="text-white font-bold text-xs">Rs. {arecaPalm.price}/-</span>
            <button 
              type="button"
              className="bg-accent-green/10 text-accent-green hover:bg-accent-green hover:text-[#0D1610] p-1 rounded-lg transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-green"
              aria-label={`Add ${arecaPalm.name} to cart`}
            >
              <FiPlus size={12} />
            </button>
          </div>
        </div>
      </div>

      {/* Floating Card 2: Snake Plant (Middle Left) */}
      <div className="absolute top-[35%] left-[2%] sm:left-[5%] z-20 glass-panel glass-panel-hover p-3 rounded-2xl flex items-center gap-3 w-48 shadow-2xl">
        <img 
          src={snakePlant.image} 
          alt={snakePlant.name} 
          className="w-12 h-12 object-cover rounded-xl bg-white/5"
          loading="lazy"
        />
        <div className="flex-grow min-w-0">
          <h4 className="text-white font-semibold text-xs truncate">{snakePlant.name}</h4>
          <p className="text-sage text-[10px] truncate">{snakePlant.description}</p>
          <div className="flex items-center justify-between mt-1">
            <span className="text-white font-bold text-xs">Rs. {snakePlant.price}/-</span>
            <button 
              type="button"
              className="bg-accent-green/10 text-accent-green hover:bg-accent-green hover:text-[#0D1610] p-1 rounded-lg transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-green"
              aria-label={`Add ${snakePlant.name} to cart`}
            >
              <FiPlus size={12} />
            </button>
          </div>
        </div>
      </div>

      {/* Floating Card 3: Aloe Vera (Bottom Right) */}
      <div className="absolute bottom-[10%] right-[2%] sm:right-[5%] z-20 glass-panel glass-panel-hover p-3 rounded-2xl flex items-center gap-3 w-44 shadow-2xl">
        <img 
          src={aloeVera.image} 
          alt={aloeVera.name} 
          className="w-12 h-12 object-cover rounded-xl bg-white/5"
          loading="lazy"
        />
        <div className="flex-grow min-w-0">
          <h4 className="text-white font-semibold text-xs truncate">{aloeVera.name}</h4>
          <p className="text-sage text-[10px] truncate">{aloeVera.description}</p>
          <div className="flex items-center justify-between mt-1">
            <span className="text-white font-bold text-xs">Rs. {aloeVera.price}/-</span>
            <button 
              type="button"
              className="bg-accent-green/10 text-accent-green hover:bg-accent-green hover:text-[#0D1610] p-1 rounded-lg transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-green"
              aria-label={`Add ${aloeVera.name} to cart`}
            >
              <FiPlus size={12} />
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}
