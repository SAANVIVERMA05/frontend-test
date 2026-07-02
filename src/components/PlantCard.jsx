import PropTypes from 'prop-types';
import { FaStar } from 'react-icons/fa';
import { FiPlus } from 'react-icons/fi';

export default function PlantCard({ name, description, price, rating, image }) {
  return (
    <article 
      className="glass-panel glass-panel-hover p-5 rounded-3xl flex flex-col justify-between h-full group"
    >
      <div className="relative overflow-hidden rounded-2xl bg-white/5 aspect-square flex items-center justify-center mb-4">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D1610]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>

      <div className="flex-grow flex flex-col justify-between">
        <div>
          <h3 className="text-white font-semibold text-lg hover:text-accent-green transition-colors duration-300 truncate">
            <a 
              href={`#product-${name.toLowerCase().replace(/\s+/g, '-')}`} 
              className="focus:outline-none focus-visible:underline decoration-accent-green"
            >
              {name}
            </a>
          </h3>
          
          <p className="text-sage text-xs line-clamp-2 mt-1 mb-3 leading-relaxed">
            {description}
          </p>
        </div>

        <div className="pt-2 border-t border-white/5 flex items-center justify-between">
          <div className="space-y-1">
            <div className="flex items-center gap-1">
              <FaStar className="text-accent-green text-[10px]" />
              <span className="text-white font-bold text-xs">{rating.toFixed(1)}</span>
            </div>
            <div className="text-white font-bold text-sm">
              Rs. {price}/-
            </div>
          </div>

          <button 
            type="button"
            className="bg-accent-green text-[#0D1610] p-3 rounded-full hover:bg-white hover:text-accent-green hover:scale-105 active:scale-95 shadow-md shadow-accent-green/10 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            aria-label={`Add ${name} to shopping cart`}
          >
            <FiPlus size={16} />
          </button>
        </div>
      </div>
    </article>
  );
}

PlantCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired
};
