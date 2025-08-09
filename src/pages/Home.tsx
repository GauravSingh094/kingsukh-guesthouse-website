import React, { useEffect, useState } from 'react';
import { ArrowRight, Wifi, Clock, MapPin, Utensils, Star, Quote, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import BookNowBtn from '../components/BookNowBtn';
import TestimonialSlider from '../components/TestimonialSlider';
import StatsCounter from '../components/StatsCounter';

const Home: React.FC = () => {

  const services = [
    { icon: Wifi, title: 'Free Wi-Fi', description: 'High-speed internet throughout the property' },
    { icon: Clock, title: '24/7 Room Service', description: 'Round-the-clock assistance for all your needs' },
    { icon: MapPin, title: 'Guide Facility', description: 'Local tour guides to explore nearby attractions' },
    { icon: Utensils, title: 'Restaurant', description: 'Delicious local and international cuisine' },
  ];

  const attractions = [
    {
      name: 'Biharinath Hills',
      image: 'Project Assets/1.jpg?auto=compress&cs=tinysrgb&w=800',
      description: 'Scenic hills perfect for trekking and photography'
    },
    {
      name: 'Baranti Lake',
      image: 'Project Assets/baranti.webp?auto=compress&cs=tinysrgb&w=800',
      description: 'Serene lake ideal for boating and relaxation'
    },
    {
      name: 'Maithon Dam',
      image: 'Project Assets/mithonDam.webp?auto=compress&cs=tinysrgb&w=800',
      description: 'Magnificent dam with breathtaking water views'
    },
  ];

useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToRooms = () => {
    const roomsSection = document.getElementById('rooms-preview');
    if (roomsSection) {
      roomsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1600)'
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 h-full flex items-center justify-center text-center text-white">
          <div className="max-w-4xl mx-auto px-6">
            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              Make Yourself at Home
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl mb-8 opacity-90"
            >
              Experience luxury and comfort at King Sukh Guest House
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <button 
                onClick={scrollToRooms}
                className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Discover Our Rooms
              </button>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
          onClick={scrollToRooms}
        >
          <ChevronDown className="h-8 w-8 text-white" />
        </motion.div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Welcome to King Sukh Guest House
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Nestled in the heart of West Bengal's scenic landscape, King Sukh Guest House offers 
                a perfect blend of comfort, hospitality, and authentic local experiences. Our guest house 
                is strategically located near some of the most beautiful tourist destinations including 
                Biharinath Hills, Baranti Lake, and Maithon Dam.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Whether you're here for adventure, relaxation, or cultural exploration, we provide 
                the ideal base with modern amenities and warm Bengali hospitality that will make 
                your stay truly memorable.
              </p>
              <Link 
                to="/about"
                className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2 w-fit"
              >
                <span>Learn More About Us</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
            <div className="animate-on-scroll">
              <img 
                src="https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="King Sukh Guest House Lobby"
                className="rounded-lg shadow-xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter */}
      <StatsCounter />

      {/* Services Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We provide comprehensive amenities and services to ensure your stay is comfortable and memorable
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="animate-on-scroll text-center p-6 rounded-lg bg-gray-50 dark:bg-gray-800 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <service.icon className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rooms Preview Section */}
      <section id="rooms-preview" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Rooms</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Choose from our selection of comfortable and elegantly appointed rooms
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                name: 'Deluxe Room',
                image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800',
                price: '₹2,500',
                features: ['King Size Bed', 'Private Bathroom', 'AC', 'Free Wi-Fi']
              },
              {
                name: 'Family Suite',
                image: 'https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg?auto=compress&cs=tinysrgb&w=800',
                price: '₹3,200',
                features: ['2 Bedrooms', 'Living Area', 'Kitchenette', 'Private Balcony']
              },
              {
                name: 'Standard Room',
                image: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800',
                price: '₹1,800',
                features: ['Queen Size Bed', 'Private Bathroom', 'Fan/AC', 'Free Wi-Fi']
              }
            ].map((room, index) => (
              <div 
                key={index}
                className="animate-on-scroll bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="relative">
                  <img 
                    src={room.image} 
                    alt={room.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-yellow-600 text-white px-3 py-1 rounded-full font-semibold">
                    {room.price}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{room.name}</h3>
                  
                  <div className="mb-4">
                    <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                      {room.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-yellow-600 rounded-full"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-300">
                    <a 
                      href="https://wa.me/919007602180?text=Hello,%20I%20want%20to%20book%20a%20room%20at%20Kingsukh%20Guest%20House" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block w-full h-full"
                    >
                      Book Now
                    </a>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link 
              to="/rooms"
              className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 inline-flex items-center space-x-2"
            >
              <span>View All Rooms</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
      {/* Nearby Attractions */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Nearby Attractions</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Explore the natural beauty and cultural richness of West Bengal with easy access to these stunning locations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {attractions.map((attraction, index) => (
              <div 
                key={index}
                className="animate-on-scroll bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <img 
                  src={attraction.image} 
                  alt={attraction.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{attraction.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{attraction.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialSlider />

      <BookNowBtn />
    </div>
  );
};

export default Home;