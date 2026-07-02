import SectionTitle from '../components/SectionTitle';
import TestimonialCard from '../components/TestimonialCard';
import { reviews } from '../data/reviews';

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 bg-[#0A100B] relative">
      <div className="absolute top-1/10 right-1/10 w-96 h-96 bg-accent-green/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle 
          tag="Customer Review" 
          title="What Our Plant Lovers Say" 
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {reviews.map((review) => (
            <div key={review.id} className="h-full">
              <TestimonialCard
                name={review.name}
                rating={review.rating}
                text={review.text}
                avatar={review.avatar}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
