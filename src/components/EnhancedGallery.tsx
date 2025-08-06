import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface GalleryImage {
  src: string;
  title: string;
  category: string;
}

const EnhancedGallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filter, setFilter] = useState('all');

  const images: GalleryImage[] = [
    {
      src: 'Project Assets/ayodhya.webp?auto=compress&cs=tinysrgb&w=800',
      title: 'Guest House Exterior',
      category: 'exterior'
    },
    {
      src: 'Project Assets/service.jpg?auto=compress&cs=tinysrgb&w=800',
      title: 'Service Area',
      category: 'interior'
    },
    {
      src: 'Project Assets/room1.jpg?auto=compress&cs=tinysrgb&w=800',
      title: 'Room',
      category: 'rooms'
    },
    {
      src: 'Project Assets/small.jpg?auto=compress&cs=tinysrgb&w=800',
      title: 'Room',
      category: 'rooms'
    },
    {
      src: 'https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'room',
      category: 'rooms'
    },
    {
      src: 'https://images.pexels.com/photos/775219/pexels-photo-775219.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Room',
      category: 'rooms'
    },
    {
      src: 'Project Assets/baranti.webp?auto=compress&cs=tinysrgb&w=800',
      title: 'Biharinath Hills View',
      category: 'landscape'
    },
    {
      src: 'Project Assets/mithonDam.webp?auto=compress&cs=tinysrgb&w=800',
      title: 'Baranti Lake',
      category: 'landscape'
    },
    {
      src: 'Project Assets/1.jpg?auto=compress&cs=tinysrgb&w=800',
      title: 'view',
      category: 'landscape'
    },
    {
      src: 'Project Assets/palash.webp?auto=compress&cs=tinysrgb&w=800',
      title: 'Palash Flower',
      category: 'exterior'
    },
    {
      src: 'Project Assets/flower.jpg?auto=compress&cs=tinysrgb&w=800',
      title: 'Flower',
      category: 'exterior'
    },
    {
      src: 'Project Assets/large.jpg?auto=compress&cs=tinysrgb&w=800',
      title: 'Large Room',
      category: 'rooms'
    },
    {
      src: 'Project Assets/small.jpg?auto=compress&cs=tinysrgb&w=800',
      title: 'small Room',
      category: 'interior'
    },
    {
      src: 'Project Assets/out.jpg?auto=compress&cs=tinysrgb&w=800',
      title: 'out View',
      category: 'exterior'
    },
    {
      src: 'Project Assets/recep.jpg?auto=compress&cs=tinysrgb&w=800',
      title: 'Reception Area',
      category: 'interior'
    },
    {
      src: 'https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Bathroom Amenities',
      category: 'rooms'
    }
  ];

  const categories = ['all', 'rooms', 'interior', 'exterior', 'landscape'];

  const filteredImages = filter === 'all' 
    ? images 
    : images.filter(img => img.category === filter);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredImages.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
  };

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (selectedImage !== null) {
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'ArrowLeft') prevImage();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [selectedImage]);

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Gallery
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Explore our beautiful property and surroundings through these stunning images
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  filter === category
                    ? 'bg-yellow-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-yellow-100 dark:hover:bg-gray-700'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          <AnimatePresence>
            {filteredImages.map((image, index) => (
              <motion.div
                key={`${filter}-${index}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="break-inside-avoid cursor-pointer group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
                onClick={() => openLightbox(index)}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={image.src} 
                    alt={image.title}
                    loading="lazy"
                    className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-500 filter group-hover:brightness-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="font-semibold text-lg mb-1">{image.title}</h3>
                      <p className="text-sm opacity-80 capitalize">{image.category}</p>
                    </div>
                    
                    <div className="absolute top-4 right-4">
                      <ZoomIn className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
              onClick={closeLightbox}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative max-w-7xl max-h-full"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={closeLightbox}
                  className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors duration-200"
                >
                  <X className="h-6 w-6" />
                </button>
                
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors duration-200"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors duration-200"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>

                <img 
                  src={filteredImages[currentIndex]?.src} 
                  alt={filteredImages[currentIndex]?.title}
                  className="max-w-full max-h-full object-contain"
                />
                
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center text-white bg-black/50 rounded-lg px-6 py-3">
                  <h3 className="text-xl font-semibold mb-1">{filteredImages[currentIndex]?.title}</h3>
                  <p className="text-sm opacity-80">
                    {currentIndex + 1} of {filteredImages.length}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default EnhancedGallery;