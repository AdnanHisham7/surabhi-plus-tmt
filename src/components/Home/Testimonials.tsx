import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import type { Testimonial } from '../../types';

const Testimonials: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Rajesh Kumar',
      company: 'Kumar Construction Ltd.',
      position: 'Project Director',
      content: 'SurabhiPlusTMT has been our preferred choice for the last 8 years. Their Fe 500 grade TMT bars have exceptional strength and durability. The consistent quality has helped us complete projects on time with zero structural issues.',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5
    },
    {
      id: '2',
      name: 'Priya Sharma',
      company: 'Skyline Developers',
      position: 'Chief Engineer',
      content: 'The technical support team at SurabhiTMT is outstanding. They provided detailed specifications and helped us optimize our material usage. Their TMT bars exceeded our expectations in terms of bendability and weldability.',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5
    },
    {
      id: '3',
      name: 'Ahmed Hassan',
      company: 'Metropolitan Infrastructure',
      position: 'Senior Manager',
      content: 'We have used SurabhiTMT bars in our high-rise projects across the city. The corrosion resistance is remarkable, especially in coastal areas. Their delivery schedule is always on time, which is crucial for our project timelines.',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5
    },
    {
      id: '4',
      name: 'Sunita Patel',
      company: 'Patel Housing Solutions',
      position: 'Managing Partner',
      content: 'Quality and reliability - that\'s what SurabhiTMT represents. We\'ve built over 500 homes using their TMT bars, and each one stands strong. Their customer service is prompt and professional.',
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5
    },
    {
      id: '5',
      name: 'David Johnson',
      company: 'Johnson Engineering',
      position: 'Structural Engineer',
      content: 'The technical specifications of SurabhiTMT bars are consistently excellent. We conduct regular tests, and their bars always exceed industry standards. Perfect for earthquake-resistant construction.',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-5 w-5 ${
          index < rating ? 'text-orange-400 fill-current' : 'text-steel-300'
        }`}
      />
    ));
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-steel-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`text-center mb-16 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-steel-900 mb-6">
            What Our <span className="text-orange-500">Clients</span> Say
          </h2>
          <p className="text-xl text-steel-600 max-w-3xl mx-auto leading-relaxed">
            Trusted by leading construction companies and engineers across the country. 
            Here's what our valued clients have to say about our products and services.
          </p>
        </div>

        <div className={`relative transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Main Testimonial */}
          <div className="relative bg-white rounded-2xl shadow-xl p-8 md:p-12 mx-auto max-w-4xl border border-steel-100">
            <Quote className="h-12 w-12 text-orange-400 mb-6" />
            
            <div className="text-center mb-8">
              <p className="text-lg md:text-xl text-steel-700 leading-relaxed mb-6 italic">
                "{testimonials[currentIndex].content}"
              </p>
              
              <div className="flex justify-center mb-4">
                {renderStars(testimonials[currentIndex].rating)}
              </div>
            </div>

            <div className="flex items-center justify-center space-x-4">
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="w-16 h-16 rounded-full object-cover border-4 border-orange-100"
              />
              <div className="text-center">
                <h4 className="text-lg font-semibold text-steel-900">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-orange-600 font-medium">
                  {testimonials[currentIndex].position}
                </p>
                <p className="text-steel-600 text-sm">
                  {testimonials[currentIndex].company}
                </p>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg border border-steel-200 flex items-center justify-center hover:bg-steel-50 transition-colors duration-200"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6 text-steel-600" />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg border border-steel-200 flex items-center justify-center hover:bg-steel-50 transition-colors duration-200"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6 text-steel-600" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentIndex ? 'bg-orange-500' : 'bg-steel-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Thumbnail Preview */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.id}
                onClick={() => setCurrentIndex(index)}
                className={`relative group transition-all duration-300 ${
                  index === currentIndex ? 'scale-110' : 'opacity-60 hover:opacity-80'
                }`}
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full aspect-square rounded-lg object-cover border-2 border-transparent group-hover:border-orange-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                <div className="absolute bottom-2 left-2 right-2 text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  {testimonial.name}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;