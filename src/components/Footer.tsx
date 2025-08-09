import React from 'react';
import { Crown, MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Crown className="h-8 w-8 text-yellow-400" />
              <span className="font-bold text-xl">King Sukh Guest House</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Experience comfort and hospitality at its finest. Located near beautiful attractions 
              like Biharinath Hills and Baranti Lake, we provide the perfect base for your West Bengal adventure.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com/kingsukh.guesthouse" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 transform hover:scale-110"
                aria-label="Visit our Facebook page"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://instagram.com/kingsukh.guesthouse" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 transform hover:scale-110"
                aria-label="Visit our Instagram page"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://twitter.com/kingsukh_gh" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 transform hover:scale-110"
                aria-label="Visit our Twitter page"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/" className="hover:text-yellow-400 transition-colors">Home</a></li>
              <li><a href="/rooms" className="hover:text-yellow-400 transition-colors">Our Rooms</a></li>
              <li><a href="/gallery" className="hover:text-yellow-400 transition-colors">Gallery</a></li>
              <li><a href="/about" className="hover:text-yellow-400 transition-colors">About Us</a></li>
              <li><a href="/contact" className="hover:text-yellow-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 mt-0.5 text-yellow-400" />
                <span className="text-sm">Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-yellow-400" />
                <span>+91 9007062180</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-yellow-400" />
                <a 
                  href="mailto:kkghosh0099@gmail.com?subject=Inquiry%20about%20King%20Sukh%20Guest%20House&body=Hello,%0D%0A%0D%0AI%20would%20like%20to%20inquire%20about%20your%20guest%20house.%0D%0A%0D%0AThank%20you."
                  className="hover:text-yellow-400 transition-colors duration-300 hover:underline"
                  aria-label="Send email to King Sukh Guest House"
                >
                  kkghosh0099@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 King Sukh Guest House. All rights reserved. | Designed with ❤️ for your comfort</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;