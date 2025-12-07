import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  Navigation
} from 'lucide-react';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 XXX XXX XXXX", "+91 XXX XXX XXXX"],
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["tourism@imc.gov.in", "support@indoretourism.in"],
      color: "bg-green-100 text-green-600"
    },
    {
      icon: MapPin,
      title: "Address",
      details: ["Indore Municipal Corporation", "Mahatma Gandhi Road, Indore", "Madhya Pradesh - 452001"],
      color: "bg-orange-100 text-orange-600"
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday: 9:00 AM - 2:00 PM", "Sunday: Closed"],
      color: "bg-purple-100 text-purple-600"
    }
  ];

  const departments = [
    { name: "Tourist Information", phone: "+91 XXX XXX XXXX", email: "info@indoretourism.in" },
    { name: "Ticket Booking Support", phone: "+91 XXX XXX XXXX", email: "tickets@indoretourism.in" },
    { name: "Emergency Helpline", phone: "+91 XXX XXX XXXX", email: "emergency@imc.gov.in" },
    { name: "General Enquiries", phone: "+91 XXX XXX XXXX", email: "enquiry@imc.gov.in" }
  ];

  const socialMedia = [
    { icon: Facebook, bg: "bg-blue-600 hover:bg-blue-700" },
    { icon: Twitter, bg: "bg-sky-500 hover:bg-sky-600" },
    { icon: Instagram, bg: "bg-pink-600 hover:bg-pink-700" },
    { icon: Youtube, bg: "bg-red-600 hover:bg-red-700" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-blue-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-2">Contact Us</h1>
          <p className="text-blue-100">We're here to help and answer any questions you might have</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info, idx) => (
            <div key={idx} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className={`w-12 h-12 ${info.color} rounded-lg flex items-center justify-center mb-4`}>
                <info.icon className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-3">{info.title}</h3>
              <div className="space-y-1">
                {info.details.map((detail, i) => (
                  <p key={i} className="text-sm text-gray-600">{detail}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 hover:shadow-md transition-shadow">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              
              {submitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3 animate-fade-in">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Send className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-green-900">Message Sent!</div>
                    <div className="text-sm text-green-700">We'll get back to you within 24 hours.</div>
                  </div>
                </div>
              )}

              <div className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-colors"
                      placeholder="Aryan Pathak"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-colors"
                      placeholder="aryan@gmail.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-colors"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-colors bg-white"
                    >
                      <option value="">Select Subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="booking">Booking Support</option>
                      <option value="feedback">Feedback</option>
                      <option value="complaint">Complaint</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none resize-none transition-colors"
                    placeholder="Tell us more about your inquiry..."
                  ></textarea>
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium flex items-center justify-center gap-2 transition-colors shadow-sm hover:shadow"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Department Contacts */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-4">Department Contacts</h3>
              <div className="space-y-4">
                {departments.map((dept, idx) => (
                  <div key={idx} className="pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                    <div className="font-medium text-gray-900 mb-2">{dept.name}</div>
                    <div className="space-y-1 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <Phone className="w-3 h-3" />
                        <a href={`tel:${dept.phone}`} className="hover:text-blue-600 transition-colors">
                          {dept.phone}
                        </a>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="w-3 h-3" />
                        <a href={`mailto:${dept.email}`} className="hover:text-blue-600 transition-colors">
                          {dept.email}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-4">Follow Us</h3>
              <div className="flex gap-3">
                {socialMedia.map((social, idx) => (
                  <a
                    key={idx}
                    href="https://www.instagram.com/swachhindore/"
                    className={`w-10 h-10 ${social.bg} text-white rounded-lg flex items-center justify-center transition-colors transform hover:scale-105`}
                    aria-label="Social media"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Help */}
            <div className="bg-blue-50 rounded-lg border border-blue-200 p-6 hover:border-blue-300 transition-colors">
              <h3 className="font-semibold text-gray-900 mb-3">Need Immediate Help?</h3>
              <p className="text-sm text-gray-600 mb-4">For urgent matters, call our 24/7 helpline</p>
              <a
                href="tel:+91XXXXXXXXXX"
                className="block w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium flex items-center justify-center gap-2 transition-colors shadow-sm hover:shadow"
              >
                <Phone className="w-4 h-4" />
                +91 XXX XXX XXXX
              </a>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12 bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Visit Our Office</h2>
            <p className="text-gray-600">Find us at Indore Municipal Corporation headquarters</p>
          </div>
          <div className="h-96 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Navigation className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Indore Municipal Corporation</h3>
              <p className="text-gray-600 mb-4">Tourism Department</p>
              <div className="space-y-1 text-gray-500">
                <p>Mahatma Gandhi Road</p>
                <p>Indore, Madhya Pradesh</p>
                <p>PIN: 452001</p>
              </div>
              <a
                href="https://maps.google.com/?q=Indore+Municipal+Corporation+Indore"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}