import SectionTitle from '../components/SectionTitle';
import PlantCard from '../components/PlantCard';
import { topSellingPlants } from '../data/plants';

export default function TopSellingPlants() {
  return (
    <section id="products" className="py-20 bg-[#0D1610] relative">
      {/* Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-green/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <SectionTitle 
          tag="Our Top Selling Plants" 
          title="Breathe Fresh Air Into Your Home" 
          align="center"
        />

        {/* Responsive Grid mapping top selling plants */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {topSellingPlants.map((plant) => (
            <div key={plant.id} className="h-full">
              <PlantCard
                name={plant.name}
                description={plant.description}
                price={plant.price}
                rating={plant.rating}
                image={plant.image}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
