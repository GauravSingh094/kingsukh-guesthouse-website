import React from 'react';
import EnhancedGallery from '../components/EnhancedGallery';

const Gallery: React.FC = () => {

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&w=1600)'
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="relative z-10 h-full flex items-center justify-center text-center text-white">
          <div className="max-w-4xl mx-auto px-6">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Gallery</h1>
            <p className="text-xl opacity-90">
              Explore our beautiful property and surroundings through these stunning images
            </p>
          </div>
        </div>
      </section>

      <EnhancedGallery />
    </div>
  );
};

export default Gallery;