import { FiArrowRight } from 'react-icons/fi';
import { FaStar } from 'react-icons/fa';
import { trendingPlants } from '../data/plants';
import TrendingPlants from '../sections/TrendingPlants';

export default function Hero() {
  const decorCard = trendingPlants.find(p => p.id === 'trend-decor') || trendingPlants[3];

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 flex items-center overflow-hidden bg-[#0D1610]"
    >
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-accent-green/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-[500px] h-[500px] bg-accent-green/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          <div className="lg:col-span-5 flex flex-col justify-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight">
                Earth's <br />
                <span className="text-accent-green relative">
                  Exhale
                  <span className="absolute bottom-1 left-0 w-full h-[6px] bg-accent-green/20 -z-10 rounded" />
                </span>
              </h1>
              <p className="text-sage text-base md:text-lg max-w-lg leading-relaxed">
                "Earth Exhale" symbolizes the purity and vitality of the Earth's natural environment and its essential role in sustaining life.
              </p>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex -space-x-2">
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-[#0D1610]" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=facearea&facepad=2&w=100&h=100&q=80" alt="User" />
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-[#0D1610]" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=facearea&facepad=2&w=100&h=100&q=80" alt="User" />
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-[#0D1610]" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=100&h=100&q=80" alt="User" />
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <span className="text-white font-bold text-sm">5.0</span>
                  <div className="flex text-accent-green text-xs">
                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                  </div>
                </div>
                <p className="text-sage text-xs">Rated by 10k+ plant enthusiasts</p>
              </div>
            </div>

            <div className="glass-panel glass-panel-hover p-4 rounded-3xl flex items-center gap-4 max-w-md">
              <img
                src={decorCard.image}
                alt={decorCard.name}
                className="w-20 h-20 object-cover rounded-2xl bg-white/5"
              />
              <div className="flex-1 min-w-0">
                <span className="text-accent-green text-[10px] uppercase font-bold tracking-wider">
                  Special Pick
                </span>
                <h3 className="text-white font-semibold text-sm truncate">
                  {decorCard.title}
                </h3>
                <p className="text-sage text-xs line-clamp-1 mt-0.5">
                  {decorCard.description}
                </p>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-white font-bold text-sm">
                    Rs. {decorCard.price}/-
                  </span>
                  <button
                    type="button"
                    className="text-accent-green hover:text-white flex items-center gap-1 text-xs font-semibold group/btn focus:outline-none"
                  >
                    <span>Shop Now</span>
                    <FiArrowRight className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 w-full">
            <TrendingPlants />
          </div>

        </div>
      </div>
    </section>
  );
}
