import React, { useEffect, useState } from 'react';
import { Crown } from 'lucide-react';

const Preloader: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 flex items-center justify-center">
      <div className="text-center">
        <div className="relative">
          <Crown className="h-20 w-20 text-white mx-auto mb-6 animate-bounce" />
          <div className="absolute -inset-4 bg-white/20 rounded-full animate-ping"></div>
        </div>
        
        <h1 className="text-3xl font-bold text-white mb-4">King Sukh Guest House</h1>
        
        <div className="flex space-x-2 justify-center">
          <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{animationDelay: '0ms'}}></div>
          <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{animationDelay: '150ms'}}></div>
          <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{animationDelay: '300ms'}}></div>
        </div>
        
        <p className="text-white/80 mt-4">Loading your perfect stay...</p>
      </div>
    </div>
  );
};

export default Preloader;