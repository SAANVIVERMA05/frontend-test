import PropTypes from 'prop-types';

export default function SectionTitle({ tag, title, align = 'center' }) {
  const isLeft = align === 'left';
  
  return (
    <div className={`flex flex-col space-y-3 mb-10 ${isLeft ? 'items-start text-left' : 'items-center text-center'}`}>
      {/* Upper green badge/tag */}
      {tag && (
        <span className="inline-block bg-accent-green/10 text-accent-green text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full border border-accent-green/20">
          {tag}
        </span>
      )}
      
      {/* Main heading */}
      {title && (
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight max-w-2xl">
          {title}
        </h2>
      )}
    </div>
  );
}

SectionTitle.propTypes = {
  tag: PropTypes.string,
  title: PropTypes.string,
  align: PropTypes.oneOf(['left', 'center'])
};
