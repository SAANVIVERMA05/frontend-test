import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import TopSellingPlants from '../sections/TopSellingPlants';
import OxygenPlants from '../sections/OxygenPlants';
import Reviews from '../sections/Reviews';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0D1610] text-white flex flex-col">
      {/* Header Navigation */}
      <Navbar />

      {/* Page Content sections */}
      <main className="flex-grow">
        <Hero />
        <TopSellingPlants />
        <OxygenPlants />
        <Reviews />
      </main>

      {/* Footer Branding & Links */}
      <Footer />
    </div>
  );
}
