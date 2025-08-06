import React from 'react';
import { Calendar } from 'lucide-react';

const BookNowBtn: React.FC = () => {
  const handleBookNow = () => {
    // Redirect to booking page or open booking modal
    window.open('https://wa.me/919007062180?text=Hello! I would like to book a room at King Sukh Guest House.', '_blank');
  };

  return (
    <button
      onClick={handleBookNow}
      className="fixed bottom-8 right-8 bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 z-50 flex items-center space-x-2 font-semibold"
    >
      <Calendar className="h-5 w-5" />
      <span className="hidden sm:inline">Book Now</span>
    </button>
  );
};

export default BookNowBtn;