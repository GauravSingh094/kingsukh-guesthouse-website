import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import { Star, Quote } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const TestimonialSlider: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Rahul Sharma',
      location: 'Mumbai, Maharashtra',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300',
      text: 'Amazing hospitality and beautiful location. The staff made our stay memorable with their warm service. The proximity to Biharinath Hills made our trekking experience unforgettable.',
      rating: 5,
      date: 'December 2023'
    },
    {
      id: 2,
      name: 'Priya Patel',
      location: 'Ahmedabad, Gujarat',
      image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=300',
      text: 'Perfect place for a weekend getaway. Clean rooms, great food, and stunning views of the surrounding nature. The lake view from our room was absolutely breathtaking.',
      rating: 5,
      date: 'November 2023'
    },
    {
      id: 3,
      name: 'Amit Kumar',
      location: 'Delhi, NCR',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300',
      text: 'Excellent value for money. The proximity to tourist spots and comfortable accommodation exceeded expectations. Will definitely recommend to friends and family.',
      rating: 5,
      date: 'October 2023'
    },
    {
      id: 4,
      name: 'Sneha Ghosh',
      location: 'Kolkata, West Bengal',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300',
      text: 'Being a local, I was skeptical about staying at a guest house so close to home. But King Sukh surprised me with their exceptional service and attention to detail.',
      rating: 5,
      date: 'September 2023'
    },
    {
      id: 5,
      name: 'Rajesh Verma',
      location: 'Pune, Maharashtra',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300',
      text: 'The family suite was perfect for our group. Kids loved the garden area and we enjoyed the peaceful environment. Great place to disconnect and rejuvenate.',
      rating: 5,
      date: 'August 2023'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-yellow-50 via-white to-yellow-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            What Our Guests Say
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Read testimonials from our satisfied guests who have experienced our hospitality
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            className="testimonial-swiper"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id} className="max-w-md">
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mx-4 transform transition-all duration-300 hover:shadow-2xl">
                  <Quote className="h-12 w-12 text-yellow-500 mb-6 mx-auto" />
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-center italic">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  
                  <div className="text-center">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-20 h-20 rounded-full mx-auto mb-4 object-cover shadow-lg"
                    />
                    <h4 className="font-bold text-gray-900 dark:text-white text-lg">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      {testimonial.location}
                    </p>
                    <p className="text-yellow-600 dark:text-yellow-400 text-xs mt-1">
                      {testimonial.date}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;