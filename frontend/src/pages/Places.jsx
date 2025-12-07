import React, { useState } from 'react';
import { Search, Filter, MapPin, Star, Clock, Navigation, Phone, Calendar, Heart, Share2, ChevronDown } from 'lucide-react';

const allPlaces = [
  { id: 1, name: "Rajwada Palace", category: "Historical", rating: 4.5, reviews: 2847, imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Indore_Rajwada01.jpg/1200px-Indore_Rajwada01.jpg", distance: "2.3 km", openHours: "9 AM - 6 PM", phone: "+91 731 254 5678", price: "₹50", duration: "2 hours" },
  { id: 2, name: "Lal Bagh Palace", category: "Heritage", rating: 4.7, reviews: 1823, imageUrl: "https://adventurousgopal.wordpress.com/wp-content/uploads/2015/12/lal-bagh-palace.jpg", distance: "4.1 km", openHours: "10 AM - 5 PM", phone: "+91 731 254 9012", price: "₹100", duration: "3 hours" },
  { id: 3, name: "Sarafa Bazaar", category: "Food & Culture", rating: 4.8, reviews: 5234, imageUrl: "https://wanderon-images.gumlet.io/gallery/new/2025/10/08/1759861886127-history-of-sarafa-bazaar-indore.jpeg", distance: "1.5 km", openHours: "8 PM - 2 AM", phone: "+91 731 254 3456", price: "Free", duration: "2-3 hours" },
  { id: 4, name: "Patalpani Waterfall", category: "Nature", rating: 4.6, reviews: 3192, imageUrl: "https://wanderon-images.gumlet.io/blogs/new/2024/04/best-time-to-visit-patalpani-waterfall.png", distance: "35 km", openHours: "6 AM - 6 PM", phone: "N/A", price: "Free", duration: "Half day" },
  { id: 5, name: "Khajrana Ganesh Temple", category: "Religious", rating: 4.9, reviews: 6543, imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/e2/a4/98/temple.jpg?w=1200&h=-1&s=1", distance: "3.8 km", openHours: "5 AM - 10 PM", phone: "+91 731 254 7890", price: "Free", duration: "1 hour" },
  { id: 6, name: "Central Museum", category: "Museum", rating: 4.4, reviews: 892, imageUrl: "https://wanderon-images.gumlet.io/gallery/new/2025/05/06/1746522465678-central-museum-indore.webp", distance: "2.8 km", openHours: "10 AM - 5 PM", phone: "+91 731 254 2345", price: "₹20", duration: "2 hours" },
  { id: 7, name: "Ralamandal Wildlife Sanctuary", category: "Nature", rating: 4.5, reviews: 1456, imageUrl: "https://hblimg.mmtcdn.com/content/hubble/img/indoredestimages/mmt/activities/m_Ralamandal_Wildlife_Sanctuary_1_l_479_640.jpg", distance: "12 km", openHours: "6 AM - 6 PM", phone: "+91 731 254 6789", price: "₹30", duration: "4 hours" },
  { id: 8, name: "Chappan Dukaan", category: "Food & Culture", rating: 4.7, reviews: 4321, imageUrl: "https://media.assettype.com/freepressjournal/2021-06/aa49c8c2-dcf8-4224-a5d0-7dfce1531cb1/56_Dukan__2_.JPG", distance: "3.2 km", openHours: "11 AM - 11 PM", phone: "N/A", price: "Free", duration: "2 hours" }
];

export default function PlacesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popular');
  const [showFilters, setShowFilters] = useState(false);
  const [likedPlaces, setLikedPlaces] = useState(new Set());

  const categories = ['all', 'Historical', 'Heritage', 'Nature', 'Food & Culture', 'Religious', 'Museum'];

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

  const filteredPlaces = allPlaces.filter(place => {
    const matchesSearch = place.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         place.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || place.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-blue-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-2">Places to Visit</h1>
          <p className="text-blue-100">Discover {allPlaces.length} amazing destinations in Indore</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Search and Filter Bar */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search places..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg font-medium transition-colors"
            >
              <Filter className="w-5 h-5" />
              Filters
            </button>

            <div className="relative hidden lg:block">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none cursor-pointer bg-white"
              >
                <option value="popular">Most Popular</option>
                <option value="rating">Highest Rated</option>
                <option value="distance">Nearest First</option>
                <option value="name">Name (A-Z)</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
            </div>

            <button className="hidden lg:flex items-center gap-2 px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-colors border border-blue-200">
              <MapPin className="w-4 h-4" />
              Map View
            </button>
          </div>

          <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full font-medium whitespace-nowrap text-sm transition-colors ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Results Header */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-gray-600">
            Showing <span className="font-semibold text-gray-900">{filteredPlaces.length}</span> places
          </p>
        </div>

        {/* Places Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPlaces.map(place => (
            <div key={place.id} className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="relative h-48 overflow-hidden group">
                <img 
                  src={place.imageUrl} 
                  alt={place.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                <div className="absolute top-3 left-3 px-2 py-1 bg-white/95 backdrop-blur-sm rounded text-xs font-medium">
                  {place.category}
                </div>
                
                <div className="absolute top-3 right-3 flex gap-2">
                  <button 
                    onClick={() => toggleLike(place.id)}
                    className="p-2 bg-white/95 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
                  >
                    <Heart className={`w-4 h-4 ${likedPlaces.has(place.id) ? 'fill-rose-500 text-rose-500' : 'text-gray-600'}`} />
                  </button>
                  <button className="p-2 bg-white/95 backdrop-blur-sm rounded-full hover:bg-white transition-colors">
                    <Share2 className="w-4 h-4 text-gray-600" />
                  </button>
                </div>

                <div className="absolute bottom-3 left-3 flex items-center gap-2 text-white">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <span className="font-semibold text-sm">{place.rating}</span>
                  <span className="text-xs text-white/80">({place.reviews})</span>
                </div>
              </div>

              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{place.name}</h3>
                
                <div className="space-y-2 mb-4 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-blue-600" />
                    <span>{place.distance} away</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-blue-600" />
                    <span>{place.openHours}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-blue-600" />
                    <span>{place.duration} visit</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <div className="text-lg font-semibold text-blue-600">{place.price}</div>
                  <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium flex items-center gap-2 transition-colors">
                    View Details
                    <Navigation className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        {filteredPlaces.length > 6 && (
          <div className="text-center mt-10">
            <button className="px-8 py-3 bg-white hover:bg-gray-50 text-gray-700 rounded-lg font-medium shadow-sm border border-gray-200 hover:border-gray-300 transition-all">
              Load More Places
            </button>
          </div>
        )}
      </div>
    </div>
  );
}