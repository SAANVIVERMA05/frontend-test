import PropTypes from 'prop-types';
import { FaStar } from 'react-icons/fa';

export default function TestimonialCard({ name, rating, text, avatar }) {
  return (
    <div 
      className="glass-panel glass-panel-hover p-6 rounded-3xl flex flex-col justify-between h-full space-y-4"
    >
      {/* 5-Star Rating Header */}
      <div className="flex text-accent-green gap-0.5">
        {[...Array(rating)].map((_, i) => (
          <FaStar key={i} size={14} />
        ))}
      </div>

      {/* Review Text */}
      <blockquote className="text-sage text-sm italic leading-relaxed flex-grow">
        "{text}"
      </blockquote>

      {/* User Information Footer */}
      <div className="flex items-center gap-3 pt-3 border-t border-white/5">
        <img 
          src={avatar} 
          alt={name} 
          className="w-10 h-10 rounded-full object-cover border border-white/10"
          loading="lazy"
        />
        <div>
          <h4 className="text-white font-semibold text-sm">
            {name}
          </h4>
          <span className="text-accent-green/80 text-[10px] font-medium tracking-wide uppercase">
            Verified Customer
          </span>
        </div>
      </div>
    </div>
  );
}

TestimonialCard.propTypes = {
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired
};
