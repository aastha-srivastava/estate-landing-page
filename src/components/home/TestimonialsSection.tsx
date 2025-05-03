
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Testimonial } from '../../types/testimonial';

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

const TestimonialsSection = ({ testimonials }: TestimonialsSectionProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        size={18}
        className={i < rating ? "text-estate-gold fill-estate-gold" : "text-gray-300"}
      />
    ));
  };

  return (
    <section className="py-20 bg-estate-navy text-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">What Our Clients Say</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Hear from our satisfied clients about their experience working with Estate Elegance
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="text-center">
                    <div className="mb-6">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name} 
                        className="w-20 h-20 rounded-full mx-auto object-cover"
                      />
                    </div>
                    <div className="flex justify-center mb-6">
                      {renderStars(testimonial.rating)}
                    </div>
                    <blockquote className="text-xl italic mb-6">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="font-semibold text-lg">{testimonial.name}</div>
                    <div className="text-gray-300 text-sm">{testimonial.location}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button 
            onClick={prevTestimonial}
            className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-white text-estate-navy p-2 rounded-full shadow-lg hover:bg-estate-gold hover:text-white transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={nextTestimonial}
            className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white text-estate-navy p-2 rounded-full shadow-lg hover:bg-estate-gold hover:text-white transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
        </div>
        
        <div className="flex justify-center mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full mx-1 ${
                index === activeIndex ? "bg-estate-gold" : "bg-gray-500"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
