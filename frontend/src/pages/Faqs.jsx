import React, { useState } from 'react';
import { FaChevronDown, FaSearch, FaQuestionCircle, FaTicketAlt, FaMapMarkedAlt, FaClock, FaCreditCard, FaMobileAlt } from 'react-icons/fa';

export default function FAQ() {
  const [searchQuery, setSearchQuery] = useState('');
  const [openItems, setOpenItems] = useState(new Set([0]));
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All FAQs', icon: FaQuestionCircle },
    { id: 'booking', name: 'Ticket Booking', icon: FaTicketAlt },
    { id: 'visiting', name: 'Visiting Info', icon: FaMapMarkedAlt },
    { id: 'timing', name: 'Timings & Hours', icon: FaClock },
    { id: 'payment', name: 'Payment', icon: FaCreditCard },
    { id: 'app', name: 'Mobile App', icon: FaMobileAlt }
  ];

  const faqs = [
    {
      category: 'booking',
      question: 'How do I book tickets online?',
      answer: 'You can book tickets through our website by selecting your destination, choosing a date and time slot, and completing the payment. You will receive a confirmation email and SMS with your booking details.'
    },
    {
      category: 'booking',
      question: 'Can I cancel my booking?',
      answer: 'Yes, you can cancel your booking up to 24 hours before your visit time. Full refund will be processed within 5-7 working days. Cancellations made less than 24 hours before the visit are non-refundable.'
    },
    {
      category: 'booking',
      question: 'Do children need separate tickets?',
      answer: 'Children aged 3-12 years need tickets at 50% of the adult price. Children under 3 years can enter free of charge but must be accompanied by an adult.'
    },
    {
      category: 'visiting',
      question: 'What are the must-visit places in Indore?',
      answer: 'Top attractions include Rajwada Palace, Lal Bagh Palace, Sarafa Bazaar, Khajrana Ganesh Temple, and Patalpani Waterfall. Each offers unique cultural and historical experiences.'
    },
    {
      category: 'visiting',
      question: 'Is photography allowed at all places?',
      answer: 'Photography is generally allowed at most tourist spots. However, professional photography equipment like tripods may require special permission. Some religious sites have restrictions - please check before visiting.'
    },
    {
      category: 'visiting',
      question: 'Are the places wheelchair accessible?',
      answer: 'Most major tourist attractions in Indore are wheelchair accessible. However, some heritage sites have limited accessibility due to their historical architecture. Please check specific place details before visiting.'
    },
    {
      category: 'timing',
      question: 'What are the general visiting hours?',
      answer: 'Most monuments and museums are open from 9:00 AM to 6:00 PM. Religious sites may have different timings, typically 6:00 AM to 9:00 PM. Some food markets like Sarafa Bazaar operate at night (8 PM onwards).'
    },
    {
      category: 'timing',
      question: 'What is the best time to visit Indore?',
      answer: 'The best time to visit Indore is from October to March when the weather is pleasant. Avoid visiting during peak summer months (April-June) as temperatures can exceed 40°C.'
    },
    {
      category: 'timing',
      question: 'Are places open on public holidays?',
      answer: 'Most tourist attractions remain open on public holidays, though some government museums may be closed. We recommend checking the specific place details or calling ahead on major holidays.'
    },
    {
      category: 'payment',
      question: 'What payment methods are accepted?',
      answer: 'We accept all major credit/debit cards, UPI, net banking, and digital wallets. At physical locations, both cash and card payments are accepted.'
    },
    {
      category: 'payment',
      question: 'Will I get a refund if I cancel?',
      answer: 'Yes, full refunds are provided for cancellations made 24+ hours before the visit. The refund is processed to the original payment method within 5-7 working days.'
    },
    {
      category: 'payment',
      question: 'Are there any group discounts available?',
      answer: 'Yes, groups of 15 or more people are eligible for a 10% discount. School groups and senior citizens may receive additional discounts. Please contact us for bulk booking inquiries.'
    },
    {
      category: 'app',
      question: 'Is there a mobile app available?',
      answer: 'Yes, the Indore Tourism app is available for both Android and iOS. It features offline maps, live navigation, ticket booking, and real-time crowd updates.'
    },
    {
      category: 'app',
      question: 'Can I use the app offline?',
      answer: 'Yes, you can download maps and place information for offline use. However, ticket booking and live updates require an internet connection.'
    },
    {
      category: 'app',
      question: 'How do I show my mobile ticket?',
      answer: 'Your ticket will be available in the app under "My Bookings". Simply show the QR code to the staff at the entry gate. You can also access it via the email sent to you.'
    }
  ];

  const toggleItem = (index) => {
    setOpenItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch = searchQuery === '' || 
                         faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-blue-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-2">Frequently Asked Questions</h1>
          <p className="text-blue-100">Find answers to common questions about visiting Indore</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Search Bar */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
          <div className="relative max-w-2xl mx-auto">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search for answers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
            />
          </div>
        </div>

        {/* Category Tabs */}
        <div className="mb-8 overflow-x-auto">
          <div className="flex gap-3 pb-2">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium whitespace-nowrap transition-colors ${
                  activeCategory === cat.id
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-white text-gray-700 border border-gray-200 hover:border-gray-300'
                }`}
              >
                <cat.icon className="w-4 h-4" />
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* FAQ List */}
          <div className="lg:col-span-2">
            {filteredFaqs.length === 0 ? (
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12 text-center">
                <FaQuestionCircle className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No results found</h3>
                <p className="text-gray-600">Try adjusting your search or browse by category</p>
              </div>
            ) : (
              <div className="space-y-3">
                {filteredFaqs.map((faq, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                    <button
                      onClick={() => toggleItem(index)}
                      className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-medium text-gray-900 text-left pr-4">{faq.question}</span>
                      <FaChevronDown className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${
                        openItems.has(index) ? 'rotate-180' : ''
                      }`} />
                    </button>
                    {openItems.has(index) && (
                      <div className="px-6 pb-4 pt-2 text-gray-600 border-t border-gray-100">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Still Have Questions */}
            <div className="mt-8 bg-blue-50 rounded-lg border border-blue-200 p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Still have questions?</h3>
              <p className="text-gray-600 mb-4">Can't find what you're looking for? Our support team is here to help.</p>
              <div className="flex gap-3">
                <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
                  Contact Support
                </button>
                <button className="px-6 py-2 bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 rounded-lg font-medium transition-colors">
                  Submit a Ticket
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Links */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
              <div className="space-y-3">
                <button className="w-full text-left px-4 py-3 bg-gray-50 hover:bg-gray-100 rounded-lg text-sm font-medium text-gray-700 transition-colors">
                  Booking Guidelines
                </button>
                <button className="w-full text-left px-4 py-3 bg-gray-50 hover:bg-gray-100 rounded-lg text-sm font-medium text-gray-700 transition-colors">
                  Visitor Rules
                </button>
                <button className="w-full text-left px-4 py-3 bg-gray-50 hover:bg-gray-100 rounded-lg text-sm font-medium text-gray-700 transition-colors">
                  Safety Guidelines
                </button>
                <button className="w-full text-left px-4 py-3 bg-gray-50 hover:bg-gray-100 rounded-lg text-sm font-medium text-gray-700 transition-colors">
                  Refund Policy
                </button>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Need Help?</h3>
              <div className="space-y-4 text-sm">
                <div>
                  <div className="text-gray-600 mb-1">Phone Support</div>
                  <div className="font-medium text-gray-900">+91 XXX XXX XXXX</div>
                  <div className="text-xs text-gray-500">Mon-Fri: 9 AM - 6 PM</div>
                </div>
                <div>
                  <div className="text-gray-600 mb-1">Email Support</div>
                  <div className="font-medium text-gray-900">support@indoretourism.in</div>
                  <div className="text-xs text-gray-500">Response within 24 hours</div>
                </div>
                <div>
                  <div className="text-gray-600 mb-1">Emergency Helpline</div>
                  <div className="font-medium text-red-600">+91 XXX XXX XXXX</div>
                  <div className="text-xs text-gray-500">Available 24/7</div>
                </div>
              </div>
            </div>

            {/* Popular Topics */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border border-blue-200 p-6">
              <h3 className="font-semibold text-gray-900 mb-3">Popular Topics</h3>
              <div className="space-y-2 text-sm">
                <button className="text-blue-700 hover:text-blue-800 hover:underline">
                  → How to book tickets?
                </button>
                <button className="text-blue-700 hover:text-blue-800 hover:underline">
                  → Cancellation policy
                </button>
                <button className="text-blue-700 hover:text-blue-800 hover:underline">
                  → Best places to visit
                </button>
                <button className="text-blue-700 hover:text-blue-800 hover:underline">
                  → Group booking discounts
                </button>
                <button className="text-blue-700 hover:text-blue-800 hover:underline">
                  → Download mobile app
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}