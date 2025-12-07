import React, { useState } from 'react';
import { MapPin, Calendar, Clock, Star, Navigation, Phone, Award, Users, Heart, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from "react-router-dom";
// Mock data
const places = [
  { id: 1, name: "Rajwada Palace", category: "Historical", rating: 4.5, visitors: "2.5k", imageUrl: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&h=600&fit=crop", distance: "2.3 km", description: "Historic palace in the heart of Indore" },
  { id: 2, name: "Lal Bagh Palace", category: "Heritage", rating: 4.7, visitors: "1.8k", imageUrl: "https://images.unsplash.com/photo-1599046832509-1e7e4de8ef4e?w=800&h=600&fit=crop", distance: "4.1 km", description: "Magnificent palace with European architecture" },
  { id: 3, name: "Sarafa Bazaar", category: "Food & Culture", rating: 4.8, visitors: "5k", imageUrl: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&h=600&fit=crop", distance: "1.5 km", description: "Famous night food market" },
  { id: 4, name: "Patalpani Waterfall", category: "Nature", rating: 4.6, visitors: "3.2k", imageUrl: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=800&h=600&fit=crop", distance: "35 km", description: "Scenic waterfall during monsoon" }
];



const topDestinations = [
  { 
    id: 1, 
    name: "Rajwada Palace", 
    category: "Historical", 
    rating: 4.5, 
    reviews: 2847, 
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Indore_Rajwada01.jpg/1200px-Indore_Rajwada01.jpg", 
    distance: "2.3 km", 
    openHours: "9 AM - 6 PM", 
    phone: "+91 731 254 5678", 
    price: "₹50", 
    duration: "2 hours" 
  },
  { 
    id: 2, 
    name: "Lal Bagh Palace", 
    category: "Heritage", 
    rating: 4.7, 
    reviews: 1823, 
    imageUrl: "https://adventurousgopal.wordpress.com/wp-content/uploads/2015/12/lal-bagh-palace.jpg", 
    distance: "4.1 km", 
    openHours: "10 AM - 5 PM", 
    phone: "+91 731 254 9012", 
    price: "₹100", 
    duration: "3 hours" 
  },
  { 
    id: 6, 
    name: "Central Museum", 
    category: "Museum", 
    rating: 4.4, 
    reviews: 892, 
    imageUrl: "https://wanderon-images.gumlet.io/gallery/new/2025/05/06/1746522465678-central-museum-indore.webp", 
    distance: "2.8 km", 
    openHours: "10 AM - 5 PM", 
    phone: "+91 731 254 2345", 
    price: "₹20", 
    duration: "2 hours" 
  },
  { 
    id: 7, 
    name: "Ralamandal Wildlife Sanctuary", 
    category: "Nature", 
    rating: 4.5, 
    reviews: 1456, 
    imageUrl: "https://hblimg.mmtcdn.com/content/hubble/img/indoredestimages/mmt/activities/m_Ralamandal_Wildlife_Sanctuary_1_l_479_640.jpg", 
    distance: "12 km", 
    openHours: "6 AM - 6 PM", 
    phone: "+91 731 254 6789", 
    price: "₹30", 
    duration: "4 hours" 
  }
];


const features = [
  { icon: MapPin, title: "Live Navigation", desc: "Real-time GPS routes", color: "bg-emerald-600" },
  { icon: Calendar, title: "Easy Booking", desc: "Reserve tickets online", color: "bg-blue-600" },
  { icon: Clock, title: "Live Updates", desc: "Current wait times", color: "bg-orange-600" },
  { icon: Award, title: "Top Rated", desc: "Expert recommendations", color: "bg-rose-600" }
];

const stats = [
  { value: "50+", label: "Tourist Places" },
  { value: "100k+", label: "Monthly Visitors" },
  { value: "4.8★", label: "Average Rating" },
  { value: "24/7", label: "Help & Support" }
];

export default function Home() {
  const [likedPlaces, setLikedPlaces] = useState(new Set());

  const toggleLike = (id) => {
    setLikedPlaces(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const PlaceCard = ({ place }) => (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="relative h-48 overflow-hidden group">
        <img 
          src={place.imageUrl} 
          alt={place.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <button 
          onClick={() => toggleLike(place.id)}
          className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow"
        >
          <Heart className={`w-4 h-4 ${likedPlaces.has(place.id) ? 'fill-rose-500 text-rose-500' : 'text-gray-600'}`} />
        </button>
        <div className="absolute top-3 left-3 px-2 py-1 bg-white/95 backdrop-blur-sm rounded text-xs font-medium text-gray-700">
          {place.category}
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-1">{place.name}</h3>
        <p className="text-sm text-gray-600 mb-3">{place.description}</p>
        
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span className="font-medium text-gray-900">{place.rating}</span>
            </div>
            <div className="flex items-center gap-1 text-gray-500">
              <Users className="w-4 h-4" />
              <span>{place.visitors}</span>
            </div>
          </div>
          <div className="flex items-center gap-1 text-gray-500">
            <MapPin className="w-3 h-3" />
            <span className="text-xs">{place.distance}</span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium mb-4">
                
                Official IMC Tourism Portal
              </div>
              
              <h1 className="text-5xl font-bold text-gray-900 mb-4 leading-tight">
                Explore the Heart of Madhya Pradesh
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Discover Indore's rich heritage, vibrant culture, and modern attractions with real-time navigation and expert guides.
              </p>
              
              <div className="flex flex-wrap gap-3">
                <Link to="/places">
                <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  Explore Places
                </button>
                </Link>
                <Link to="/tickets">
  <button className="px-6 py-3 bg-white text-gray-700 border-2 border-gray-200 rounded-lg font-medium hover:border-gray-300 transition-colors flex items-center gap-2">
    <Calendar className="w-5 h-5" />
    Book Tickets
  </button>
</Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="rounded-xl overflow-hidden shadow-xl">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Indore_Rajwada01.jpg/1200px-Indore_Rajwada01.jpg" 
                  alt="Indore Heritage" 
                  className="w-full h-96 object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">100k+</div>
                    <div className="text-sm text-gray-600">Monthly Visitors</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Why Visit Indore?</h2>
          <p className="text-lg text-gray-600">Modern amenities meet rich cultural heritage</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-white rounded-lg p-6 border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all">
              <div className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center mb-4`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Top Destinations */}
      {/* Top Destinations */}
<section className="bg-white py-16 border-t">
  <div className="max-w-7xl mx-auto px-6">
    <div className="flex items-center justify-between mb-8">
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Top Destinations</h2>
        <p className="text-gray-600">Most visited places in Indore</p>
      </div>
      <button className="hidden lg:flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium">
        View All
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {topDestinations.map(place => (
        <PlaceCard key={place.id} place={place} />
      ))}
    </div>

    <div className="text-center mt-8">
      <button className="lg:hidden px-6 py-3 bg-white text-gray-700 border-2 border-gray-200 rounded-lg font-medium hover:border-gray-300 transition-colors">
        View All Places
      </button>
    </div>
  </div>
</section>


      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-8 items-center p-12">
            <div className="text-white">
              <h2 className="text-3xl font-bold mb-4">Ready to Explore Indore?</h2>
              <p className="text-lg text-blue-50 mb-6">
                Download our mobile app for offline maps, live navigation, and exclusive offers on tickets and tours.
              </p>
              <div className="flex flex-wrap gap-3">
                <button className="px-6 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors">
                  Download App
                </button>
                <Link to="/contact">
                <button className="px-6 py-3 bg-blue-500 text-white border-2 border-blue-400 rounded-lg font-medium hover:bg-blue-600 transition-colors">
                  Contact Us
                </button>
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <img 
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop" 
                alt="Mobile App" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer Info */}
      <section className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Indore Tourism</h3>
              <p className="text-gray-400 text-sm">Official portal of Indore Municipal Corporation for tourism and city exploration.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="places" className="hover:text-white transition-colors">Places to Visit</a></li>
                <li><a href="/tickets" className="hover:text-white transition-colors">Book Tickets</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Events</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Routes</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="helpcenter" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="Contact" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="/faqs" className="hover:text-white transition-colors">FAQs</a></li>
                <li><a href="feedback" className="hover:text-white transition-colors">Feedback</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>+91 XXXXX XXXXX</span>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Indore, Madhya Pradesh</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>© 2025 Indore Municipal Corporation. All rights reserved.</p>
          </div>
        </div>
      </section>
    </div>
  );
}