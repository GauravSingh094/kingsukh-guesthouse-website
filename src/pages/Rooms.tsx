import React, { useEffect } from 'react';
import { Star, Wifi, Tv, Coffee, Car } from 'lucide-react';
import BookNowBtn from '../components/BookNowBtn';

const Rooms: React.FC = () => {
  const rooms = [
    {
      id: 1,
      name: 'Room',
      image: 'Project Assets/room1.jpg?auto=compress&cs=tinysrgb&w=800',
      price: '₹1,500',
      features: ['King Size Bed', 'Private Bathroom', 'AC', 'Free Wi-Fi', 'Room Service'],
      amenities: [Wifi, Tv, Coffee, Car],
      rating: 4.8,
      description: 'Spacious and elegantly furnished with modern amenities for a comfortable stay.'
    },
    {
      id: 2,
      name: 'Standard Room',
      image: 'Project Assets/small.jpg?auto=compress&cs=tinysrgb&w=800',
      price: '₹1,500',
      features: ['Queen Size Bed', 'Private Bathroom', 'Fan/AC', 'Free Wi-Fi'],
      amenities: [Wifi, Tv, Coffee],
      rating: 4.6,
      description: 'Comfortable accommodation with essential amenities at an affordable price.'
    },
    {
      id: 3,
      name: 'Family Suite',
      image: 'Project Assets/large.jpg?auto=compress&cs=tinysrgb&w=800',
      price: '₹2,000',
      features: ['2 Bedrooms', 'Living Area', 'Kitchenette', 'Private Balcony', '24/7 Service'],
      amenities: [Wifi, Tv, Coffee, Car],
      rating: 4.9,
      description: 'Perfect for families with separate living space and panoramic views.'
    },
    {
      id: 4,
      name: 'Premium Room',
      image: 'https://images.pexels.com/photos/775219/pexels-photo-775219.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: '₹2,200',
      features: ['King Size Bed', 'Premium Bathroom', 'AC', 'Mini Bar', 'Garden View'],
      amenities: [Wifi, Tv, Coffee, Car],
      rating: 4.7,
      description: 'Enhanced comfort with premium furnishings and beautiful garden views.'
    },
    {
      id: 5,
      name: 'Economy Room',
      image: 'https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: '₹1,500',
      features: ['Double Bed', 'Shared Bathroom', 'Fan', 'Basic Amenities'],
      amenities: [Wifi, Coffee],
      rating: 4.3,
      description: 'Budget-friendly option with clean and comfortable accommodation.'
    },
    {
      id: 6,
      name: 'Honeymoon Suite',
      image: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: '₹3,800',
      features: ['Romantic Decor', 'Jacuzzi', 'Private Terrace', 'Champagne Service', 'Lake View'],
      amenities: [Wifi, Tv, Coffee, Car],
      rating: 5.0,
      description: 'Romantic getaway with luxurious amenities and breathtaking lake views.'
    }
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

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=1600)'
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="relative z-10 h-full flex items-center justify-center text-center text-white">
          <div className="max-w-4xl mx-auto px-6">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Rooms</h1>
            <p className="text-xl opacity-90">
              Choose from our selection of comfortable and elegantly appointed rooms
            </p>
          </div>
        </div>
      </section>

      {/* Rooms Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rooms.map((room, index) => (
              <div 
                key={room.id}
                className="animate-on-scroll bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 room-card"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="relative">
                  <img 
                    src={room.image} 
                    alt={room.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-yellow-600 text-white px-3 py-1 rounded-full font-semibold">
                    {room.price}
                  </div>
                  <div className="absolute bottom-4 left-4 flex space-x-2">
                    {room.amenities.map((Amenity, idx) => (
                      <div key={idx} className="bg-black/50 p-2 rounded-full">
                        <Amenity className="h-4 w-4 text-white" />
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{room.name}</h3>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">{room.rating}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                    {room.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">Features:</h4>
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
        </div>
      </section>

      <BookNowBtn />
    </div>
  );
};

export default Rooms;