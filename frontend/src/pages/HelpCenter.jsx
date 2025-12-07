import React, { useState } from 'react';
import { FaSearch, FaBook, FaTicketAlt, FaMapMarkedAlt, FaCreditCard, FaMobileAlt, FaHeadset, FaQuestionCircle, FaVideo, FaFileAlt, FaArrowRight, FaPhone } from 'react-icons/fa';
import { MdHelp } from 'react-icons/md';

export default function HelpCenter() {
  const [searchQuery, setSearchQuery] = useState('');

  const helpCategories = [
    {
      icon: FaBook,
      title: "Getting Started",
      description: "Learn the basics of using our platform",
      articles: 12,
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: FaTicketAlt,
      title: "Booking & Tickets",
      description: "Everything about ticket booking and management",
      articles: 18,
      color: "bg-green-100 text-green-600"
    },
    {
      icon: FaMapMarkedAlt,
      title: "Visiting Information",
      description: "Plan your visit with our guides",
      articles: 24,
      color: "bg-orange-100 text-orange-600"
    },
    {
      icon: FaCreditCard,
      title: "Payments & Refunds",
      description: "Payment methods and refund policies",
      articles: 10,
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: FaMobileAlt,
      title: "Mobile App",
      description: "Using the Indore Tourism mobile app",
      articles: 15,
      color: "bg-pink-100 text-pink-600"
    },
    {
      icon: FaHeadset,
      title: "Account & Support",
      description: "Account management and customer support",
      articles: 8,
      color: "bg-indigo-100 text-indigo-600"
    }
  ];

  const popularArticles = [
    { title: "How to book tickets online?", views: "12.5k", readTime: "3 min" },
    { title: "Complete guide to visiting Rajwada Palace", views: "8.2k", readTime: "5 min" },
    { title: "Understanding the cancellation policy", views: "6.8k", readTime: "4 min" },
    { title: "Best time to visit Indore attractions", views: "5.4k", readTime: "6 min" },
    { title: "How to use offline maps in the app?", views: "4.9k", readTime: "2 min" },
    { title: "Group booking discounts and benefits", views: "4.2k", readTime: "4 min" }
  ];

  const quickActions = [
    { icon: FaQuestionCircle, title: "FAQs", description: "Quick answers to common questions", link: "/faq" },
    { icon: FaVideo, title: "Video Tutorials", description: "Watch step-by-step guides", link: "/tutorials" },
    { icon: FaFileAlt, title: "Documentation", description: "Detailed guides and manuals", link: "/docs" },
    { icon: FaHeadset, title: "Contact Support", description: "Get help from our team", link: "/contact" }
  ];

  const supportChannels = [
    {
      icon: FaPhone,
      title: "Phone Support",
      description: "Mon-Fri: 9 AM - 6 PM",
      value: "+91 XXX XXX XXXX",
      color: "bg-blue-50 border-blue-200"
    },
    {
      icon: FaHeadset,
      title: "Live Chat",
      description: "Average response time: 2 mins",
      value: "Start Chat",
      color: "bg-green-50 border-green-200"
    },
    {
      icon: FaTicketAlt,
      title: "Support Ticket",
      description: "Response within 24 hours",
      value: "Create Ticket",
      color: "bg-purple-50 border-purple-200"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
            <MdHelp className="w-10 h-10" />
          </div>
          <h1 className="text-5xl font-bold mb-4">How can we help you?</h1>
          <p className="text-xl text-blue-100 mb-8">Search our help center or browse by category</p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search for help articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-14 pr-4 py-4 bg-white text-gray-900 rounded-lg focus:ring-2 focus:ring-white focus:outline-none shadow-lg"
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Help Categories */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Browse by Category</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {helpCategories.map((category, idx) => (
              <button key={idx} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md hover:border-gray-300 transition-all text-left group">
                <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <category.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{category.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{category.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{category.articles} articles</span>
                  <FaArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* Popular Articles */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Popular Articles</h2>
            <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2">
              View All
              <FaArrowRight className="w-4 h-4" />
            </button>
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 divide-y divide-gray-100">
            {popularArticles.map((article, idx) => (
              <button key={idx} className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors group">
                <div className="flex-1 text-left">
                  <h3 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">{article.title}</h3>
                  <div className="flex items-center gap-4 mt-1 text-sm text-gray-500">
                    <span>{article.views} views</span>
                    <span>•</span>
                    <span>{article.readTime} read</span>
                  </div>
                </div>
                <FaArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
              </button>
            ))}
          </div>
        </section>

        {/* Quick Actions */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Actions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickActions.map((action, idx) => (
              <button key={idx} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md hover:border-blue-300 transition-all group">
                <action.icon className="w-8 h-8 text-blue-600 mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-gray-900 mb-2">{action.title}</h3>
                <p className="text-sm text-gray-600">{action.description}</p>
              </button>
            ))}
          </div>
        </section>

        {/* Support Channels */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Support</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {supportChannels.map((channel, idx) => (
              <div key={idx} className={`${channel.color} rounded-lg p-6 border`}>
                <channel.icon className="w-8 h-8 text-gray-700 mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">{channel.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{channel.description}</p>
                <button className="w-full py-2.5 bg-white hover:bg-gray-50 text-gray-900 border border-gray-300 rounded-lg font-medium transition-colors">
                  {channel.value}
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Additional Help */}
        <section className="mt-12">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">Still Need Help?</h2>
            <p className="text-blue-100 mb-6">Our support team is available to assist you with any questions or concerns</p>
            <div className="flex flex-wrap justify-center gap-3">
              <button className="px-6 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors">
                Chat with Support
              </button>
              <button className="px-6 py-3 bg-blue-500 text-white border-2 border-blue-400 rounded-lg font-medium hover:bg-blue-600 transition-colors">
                Email Us
              </button>
            </div>
          </div>
        </section>

        {/* Resources */}
        <section className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <FaVideo className="w-8 h-8 text-blue-600 mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2">Video Tutorials</h3>
            <p className="text-sm text-gray-600 mb-4">Watch our step-by-step video guides</p>
            <button className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center gap-2">
              Watch Now
              <FaArrowRight className="w-4 h-4" />
            </button>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <FaBook className="w-8 h-8 text-green-600 mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2">User Guide</h3>
            <p className="text-sm text-gray-600 mb-4">Complete documentation for all features</p>
            <button className="text-green-600 hover:text-green-700 font-medium text-sm flex items-center gap-2">
              Read Guide
              <FaArrowRight className="w-4 h-4" />
            </button>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <FaFileAlt className="w-8 h-8 text-purple-600 mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2">Downloads</h3>
            <p className="text-sm text-gray-600 mb-4">Brochures, maps, and travel guides</p>
            <button className="text-purple-600 hover:text-purple-700 font-medium text-sm flex items-center gap-2">
              Download
              <FaArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}