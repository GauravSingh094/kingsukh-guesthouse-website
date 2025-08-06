import React, { useEffect } from 'react';
import { Users, Award, MapPin, Heart } from 'lucide-react';

const About: React.FC = () => {
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

  const stats = [
    { icon: Users, number: '500+', label: 'Happy Guests' },
    { icon: Award, number: '5', label: 'Years Experience' },
    { icon: MapPin, number: '3', label: 'Nearby Attractions' },
    { icon: Heart, number: '100%', label: 'Guest Satisfaction' },
  ];

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1600)'
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="relative z-10 h-full flex items-center justify-center text-center text-white">
          <div className="max-w-4xl mx-auto px-6">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">About Us</h1>
            <p className="text-xl opacity-90">
              Discover the story behind King Sukh Guest House and our commitment to exceptional hospitality
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                King Sukh Guest House was founded with a simple yet profound vision: to create a home away from home 
                for travelers exploring the breathtaking landscapes of West Bengal. Established in 2019, our guest house 
                has become a cherished destination for those seeking authentic hospitality combined with modern comfort.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Located strategically near some of West Bengal's most stunning natural attractions - Biharinath Hills, 
                Baranti Lake, and Maithon Dam - we have positioned ourselves as the perfect base for nature enthusiasts, 
                adventure seekers, and families looking for a peaceful retreat.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Our commitment goes beyond providing accommodation; we strive to create memorable experiences that 
                connect our guests with the rich culture, natural beauty, and warm hospitality that West Bengal is known for.
              </p>
            </div>
            <div className="animate-on-scroll">
              <img 
                src="https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="King Sukh Guest House Property"
                className="rounded-lg shadow-xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              These core values guide everything we do and shape the experience we provide to our guests
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="animate-on-scroll text-center p-6">
              <div className="bg-yellow-100 dark:bg-yellow-900/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Hospitality</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We believe in treating every guest like family, providing warm, personalized service that creates lasting memories.
              </p>
            </div>

            <div className="animate-on-scroll text-center p-6" style={{animationDelay: '0.1s'}}>
              <div className="bg-yellow-100 dark:bg-yellow-900/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Excellence</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We maintain the highest standards in cleanliness, comfort, and service quality to exceed guest expectations.
              </p>
            </div>

            <div className="animate-on-scroll text-center p-6" style={{animationDelay: '0.2s'}}>
              <div className="bg-yellow-100 dark:bg-yellow-900/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Local Connection</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We help guests discover authentic local experiences and hidden gems that showcase the beauty of West Bengal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-yellow-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Achievements</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Numbers that reflect our commitment to providing exceptional guest experiences
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="animate-on-scroll text-center p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <stat.icon className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{stat.number}</div>
                <div className="text-gray-600 dark:text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              The dedicated professionals who make your stay memorable
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="animate-on-scroll text-center">
              <img 
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300" 
                alt="Sukh Ghosh - Owner"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-lg"
              />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Sukh Ghosh</h3>
              <p className="text-yellow-600 dark:text-yellow-400 mb-2">Founder & Owner</p>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Passionate about hospitality and local tourism, Sukh founded King Sukh Guest House to share 
                the beauty of West Bengal with travelers from around the world.
              </p>
            </div>

            <div className="animate-on-scroll text-center" style={{animationDelay: '0.1s'}}>
              <img 
                src="https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=300" 
                alt="Priya Sharma - Manager"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-lg"
              />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Priya Sharma</h3>
              <p className="text-yellow-600 dark:text-yellow-400 mb-2">Guest Relations Manager</p>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                With years of experience in hospitality, Priya ensures every guest receives personalized 
                attention and has an unforgettable stay.
              </p>
            </div>

            <div className="animate-on-scroll text-center" style={{animationDelay: '0.2s'}}>
              <img 
                src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300" 
                alt="Rajesh Kumar - Chef"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-lg"
              />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Rajesh Kumar</h3>
              <p className="text-yellow-600 dark:text-yellow-400 mb-2">Head Chef</p>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Rajesh brings authentic Bengali flavors to our restaurant, creating culinary experiences 
                that showcase the rich food culture of the region.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;