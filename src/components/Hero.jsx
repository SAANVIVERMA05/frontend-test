import { FaPlay } from 'react-icons/fa';
import TrendingPlants from '../sections/TrendingPlants';

export default function Hero() {
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
                Earth's Exhale
              </h1>
              <p className="text-sage text-base md:text-lg max-w-lg leading-relaxed">
                "Earth Exhale" symbolizes the purity and vitality of the Earth's natural environment and its essential role in sustaining life.
              </p>
            </div>

            <div className="flex items-center gap-6">
              <button
                type="button"
                className="border border-white text-white font-medium rounded-2xl px-8 py-3.5 bg-transparent hover:bg-white hover:text-[#0D1610] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white"
              >
                Buy Now
              </button>

              <button
                type="button"
                className="flex items-center gap-3 text-white font-medium text-sm group focus:outline-none"
              >
                <span className="w-12 h-12 rounded-full border border-white flex items-center justify-center text-white group-hover:bg-white group-hover:text-[#0D1610] transition-all duration-300">
                  <FaPlay className="text-[10px] translate-x-[1px]" />
                </span>
                <span>Live Demo...</span>
              </button>
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
