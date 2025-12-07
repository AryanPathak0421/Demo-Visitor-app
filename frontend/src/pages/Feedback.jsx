// import React, { useState } from 'react';
// import { FaStar, FaThumbsUp, FaThumbsDown, FaComments, FaCheckCircle, FaSmile, FaMeh, FaFrown, FaLightbulb, FaBug, FaHeart } from 'react-icons/fa';

// export default function Feedback() {
//   const [rating, setRating] = useState(0);
//   const [hoveredRating, setHoveredRating] = useState(0);
//   const [feedbackType, setFeedbackType] = useState('');
//   const [satisfaction, setSatisfaction] = useState('');
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     visitDate: '',
//     place: '',
//     message: ''
//   });
//   const [submitted, setSubmitted] = useState(false);

//   const handleSubmit = () => {
//     setSubmitted(true);
//     setTimeout(() => {
//       setSubmitted(false);
//       setRating(0);
//       setFeedbackType('');
//       setSatisfaction('');
//       setFormData({ name: '', email: '', visitDate: '', place: '', message: '' });
//     }, 3000);
//   };

//   const feedbackTypes = [
//     { id: 'suggestion', icon: FaLightbulb, label: 'Suggestion', color: 'bg-yellow-100 text-yellow-600 border-yellow-200' },
//     { id: 'complaint', icon: FaBug, label: 'Complaint', color: 'bg-red-100 text-red-600 border-red-200' },
//     { id: 'appreciation', icon: FaHeart, label: 'Appreciation', color: 'bg-pink-100 text-pink-600 border-pink-200' },
//     { id: 'general', icon: FaComments, label: 'General Feedback', color: 'bg-blue-100 text-blue-600 border-blue-200' }
//   ];

//   const satisfactionLevels = [
//     { id: 'very-satisfied', icon: FaSmile, label: 'Very Satisfied', color: 'text-green-600' },
//     { id: 'satisfied', icon: FaSmile, label: 'Satisfied', color: 'text-blue-600' },
//     { id: 'neutral', icon: FaMeh, label: 'Neutral', color: 'text-yellow-600' },
//     { id: 'dissatisfied', icon: FaFrown, label: 'Dissatisfied', color: 'text-orange-600' },
//     { id: 'very-dissatisfied', icon: FaFrown, label: 'Very Dissatisfied', color: 'text-red-600' }
//   ];

//   const recentFeedback = [
//     { name: "Priya S.", place: "Rajwada Palace", rating: 5, comment: "Amazing experience! The palace is well-maintained.", date: "2 days ago" },
//     { name: "Rahul K.", place: "Sarafa Bazaar", rating: 5, comment: "Best food market in India. Must visit at night!", date: "3 days ago" },
//     { name: "Anjali M.", place: "Lal Bagh Palace", rating: 4, comment: "Beautiful architecture. Needs better parking facilities.", date: "5 days ago" }
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Header */}
//       <div className="bg-blue-600 text-white py-12">
//         <div className="max-w-7xl mx-auto px-6">
//           <h1 className="text-4xl font-bold mb-2">Share Your Feedback</h1>
//           <p className="text-blue-100">Help us improve your experience. Your opinion matters!</p>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-6 py-12">
//         <div className="grid lg:grid-cols-3 gap-8">
//           {/* Main Feedback Form */}
//           <div className="lg:col-span-2">
//             <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
//               {submitted ? (
//                 <div className="text-center py-12">
//                   <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                     <FaCheckCircle className="w-12 h-12 text-green-600" />
//                   </div>
//                   <h2 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h2>
//                   <p className="text-gray-600 mb-6">Your feedback has been submitted successfully. We appreciate your input!</p>
//                   <button 
//                     onClick={() => setSubmitted(false)}
//                     className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
//                   >
//                     Submit Another Feedback
//                   </button>
//                 </div>
//               ) : (
//                 <>
//                   <h2 className="text-2xl font-bold text-gray-900 mb-6">We'd Love to Hear From You</h2>

//                   {/* Rating Section */}
//                   <div className="mb-8">
//                     <label className="block text-sm font-medium text-gray-700 mb-3">How would you rate your experience?</label>
//                     <div className="flex gap-2">
//                       {[1, 2, 3, 4, 5].map((star) => (
//                         <button
//                           key={star}
//                           onClick={() => setRating(star)}
//                           onMouseEnter={() => setHoveredRating(star)}
//                           onMouseLeave={() => setHoveredRating(0)}
//                           className="transition-transform hover:scale-110"
//                         >
//                           <FaStar 
//                             className={`w-10 h-10 ${
//                               star <= (hoveredRating || rating) 
//                                 ? 'text-yellow-400' 
//                                 : 'text-gray-300'
//                             }`}
//                           />
//                         </button>
//                       ))}
//                       {rating > 0 && (
//                         <span className="ml-3 text-lg font-medium text-gray-700">
//                           {rating === 5 ? 'Excellent!' : rating === 4 ? 'Good' : rating === 3 ? 'Average' : rating === 2 ? 'Below Average' : 'Poor'}
//                         </span>
//                       )}
//                     </div>
//                   </div>

//                   {/* Feedback Type */}
//                   <div className="mb-8">
//                     <label className="block text-sm font-medium text-gray-700 mb-3">Type of Feedback</label>
//                     <div className="grid grid-cols-2 gap-3">
//                       {feedbackTypes.map((type) => (
//                         <button
//                           key={type.id}
//                           onClick={() => setFeedbackType(type.id)}
//                           className={`flex items-center gap-3 p-4 rounded-lg border-2 transition-all ${
//                             feedbackType === type.id
//                               ? `${type.color} border-2`
//                               : 'bg-white border-gray-200 hover:border-gray-300'
//                           }`}
//                         >
//                           <type.icon className="w-5 h-5" />
//                           <span className="font-medium text-gray-900">{type.label}</span>
//                         </button>
//                       ))}
//                     </div>
//                   </div>

//                   {/* Satisfaction Level */}
//                   <div className="mb-8">
//                     <label className="block text-sm font-medium text-gray-700 mb-3">Overall Satisfaction</label>
//                     <div className="flex gap-2 justify-between">
//                       {satisfactionLevels.map((level) => (
//                         <button
//                           key={level.id}
//                           onClick={() => setSatisfaction(level.id)}
//                           className={`flex flex-col items-center gap-2 p-3 rounded-lg border-2 transition-all flex-1 ${
//                             satisfaction === level.id
//                               ? 'border-blue-500 bg-blue-50'
//                               : 'border-gray-200 hover:border-gray-300'
//                           }`}
//                         >
//                           <level.icon className={`w-8 h-8 ${level.color}`} />
//                           <span className="text-xs font-medium text-gray-700 text-center">{level.label}</span>
//                         </button>
//                       ))}
//                     </div>
//                   </div>

//                   {/* Form Fields */}
//                   <div className="space-y-5">
//                     <div className="grid md:grid-cols-2 gap-5">
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
//                         <input
//                           type="text"
//                           value={formData.name}
//                           onChange={(e) => setFormData({...formData, name: e.target.value})}
//                           className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
//                           placeholder="John Doe"
//                         />
//                       </div>
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
//                         <input
//                           type="email"
//                           value={formData.email}
//                           onChange={(e) => setFormData({...formData, email: e.target.value})}
//                           className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
//                           placeholder="john@example.com"
//                         />
//                       </div>
//                     </div>

//                     <div className="grid md:grid-cols-2 gap-5">
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-2">Visit Date</label>
//                         <input
//                           type="date"
//                           value={formData.visitDate}
//                           onChange={(e) => setFormData({...formData, visitDate: e.target.value})}
//                           className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
//                         />
//                       </div>
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-2">Place Visited</label>
//                         <select
//                           value={formData.place}
//                           onChange={(e) => setFormData({...formData, place: e.target.value})}
//                           className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
//                         >
//                           <option value="">Select a place</option>
//                           <option value="rajwada">Rajwada Palace</option>
//                           <option value="lalbagh">Lal Bagh Palace</option>
//                           <option value="sarafa">Sarafa Bazaar</option>
//                           <option value="khajrana">Khajrana Temple</option>
//                           <option value="patalpani">Patalpani Waterfall</option>
//                           <option value="other">Other</option>
//                         </select>
//                       </div>
//                     </div>

//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">Your Feedback</label>
//                       <textarea
//                         value={formData.message}
//                         onChange={(e) => setFormData({...formData, message: e.target.value})}
//                         rows="6"
//                         className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none resize-none"
//                         placeholder="Share your experience, suggestions, or concerns..."
//                       ></textarea>
//                     </div>

//                     <button
//                       onClick={handleSubmit}
//                       className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
//                     >
//                       <FaComments className="w-5 h-5" />
//                       Submit Feedback
//                     </button>
//                   </div>
//                 </>
//               )}
//             </div>
//           </div>

//           {/* Sidebar */}
//           <div className="space-y-6">
//             {/* Why Feedback Matters */}
//             <div className="bg-blue-50 rounded-lg border border-blue-200 p-6">
//               <h3 className="font-semibold text-gray-900 mb-3">Why Your Feedback Matters</h3>
//               <ul className="space-y-3 text-sm text-gray-700">
//                 <li className="flex items-start gap-2">
//                   <FaCheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
//                   <span>Helps us improve services</span>
//                 </li>
//                 <li className="flex items-start gap-2">
//                   <FaCheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
//                   <span>Assists other visitors</span>
//                 </li>
//                 <li className="flex items-start gap-2">
//                   <FaCheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
//                   <span>Shapes future experiences</span>
//                 </li>
//                 <li className="flex items-start gap-2">
//                   <FaCheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
//                   <span>Makes your voice heard</span>
//                 </li>
//               </ul>
//             </div>

//             {/* Quick Feedback Options */}
//             <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
//               <h3 className="font-semibold text-gray-900 mb-4">Quick Feedback</h3>
//               <div className="space-y-3">
//                 <button className="w-full flex items-center justify-between p-3 bg-green-50 hover:bg-green-100 border border-green-200 rounded-lg transition-colors">
//                   <span className="flex items-center gap-2 text-sm font-medium text-gray-900">
//                     <FaThumbsUp className="w-4 h-4 text-green-600" />
//                     Great Experience
//                   </span>
//                 </button>
//                 <button className="w-full flex items-center justify-between p-3 bg-red-50 hover:bg-red-100 border border-red-200 rounded-lg transition-colors">
//                   <span className="flex items-center gap-2 text-sm font-medium text-gray-900">
//                     <FaThumbsDown className="w-4 h-4 text-red-600" />
//                     Needs Improvement
//                   </span>
//                 </button>
//               </div>
//             </div>

//             {/* Recent Feedback */}
//             <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
//               <h3 className="font-semibold text-gray-900 mb-4">Recent Feedback</h3>
//               <div className="space-y-4">
//                 {recentFeedback.map((feedback, idx) => (
//                   <div key={idx} className="pb-4 border-b border-gray-100 last:border-0 last:pb-0">
//                     <div className="flex items-center justify-between mb-2">
//                       <span className="font-medium text-gray-900 text-sm">{feedback.name}</span>
//                       <div className="flex gap-0.5">
//                         {[...Array(feedback.rating)].map((_, i) => (
//                           <FaStar key={i} className="w-3 h-3 text-yellow-400" />
//                         ))}
//                       </div>
//                     </div>
//                     <p className="text-xs text-gray-600 mb-1">{feedback.place}</p>
//                     <p className="text-sm text-gray-700 mb-2">{feedback.comment}</p>
//                     <span className="text-xs text-gray-500">{feedback.date}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Contact Alternative */}
//             <div className="bg-gray-100 rounded-lg border border-gray-200 p-6">
//               <h3 className="font-semibold text-gray-900 mb-3">Need Direct Support?</h3>
//               <p className="text-sm text-gray-600 mb-4">For urgent matters or detailed concerns</p>
//               <button className="w-full py-2.5 bg-white hover:bg-gray-50 text-gray-900 border border-gray-300 rounded-lg font-medium transition-colors">
//                 Contact Support
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import React, { useState } from 'react';
import { 
  Send, 
  Star, 
  CheckCircle, 
  ThumbsUp, 
  MessageSquare,
  Smile,
  Frown,
  Meh
} from 'lucide-react';

export default function Feedback() {
  const [rating, setRating] = useState(0);
  const [emojiRating, setEmojiRating] = useState(null);
  const [feedbackType, setFeedbackType] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    category: 'general'
  });

  const emojiOptions = [
    { icon: Smile, label: 'Excellent', value: 'excellent', color: 'text-green-500' },
    { icon: Meh, label: 'Average', value: 'average', color: 'text-yellow-500' },
    { icon: Frown, label: 'Poor', value: 'poor', color: 'text-red-500' },
  ];

  const feedbackCategories = [
    { id: 'general', label: 'General Feedback' },
    { id: 'bug', label: 'Bug Report' },
    { id: 'suggestion', label: 'Feature Suggestion' },
    { id: 'complaint', label: 'Complaint' },
    { id: 'praise', label: 'Praise' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.message.trim()) {
      alert('Please enter your feedback message');
      return;
    }
    
    setSubmitted(true);
    console.log('Feedback submitted:', { ...formData, rating, emojiRating });
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setRating(0);
      setEmojiRating(null);
      setFeedbackType('');
      setFormData({
        name: '',
        email: '',
        message: '',
        category: 'general'
      });
    }, 3000);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full mb-4">
            <MessageSquare className="w-5 h-5" />
            <span className="font-medium">Share Your Experience</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            We Value Your Feedback
          </h1>
          <p className="text-lg text-gray-600">
            Help us improve Indore's tourism experience
          </p>
        </div>

        {submitted && (
          <div className="mb-8 p-6 bg-green-50 border border-green-200 rounded-2xl flex items-center gap-4 animate-fade-in">
            <CheckCircle className="w-8 h-8 text-green-500 flex-shrink-0" />
            <div>
              <div className="font-semibold text-green-900 text-lg">Thank You!</div>
              <div className="text-green-700">
                Your feedback has been submitted successfully. We appreciate your input!
              </div>
            </div>
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column - Form */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Submit Feedback</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Star Rating */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Rate your overall experience
                </label>
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      className={`p-2 rounded-lg transition-all transform hover:scale-110 ${
                        star <= rating
                          ? 'bg-yellow-50 border-2 border-yellow-500'
                          : 'bg-gray-100 border-2 border-transparent hover:border-gray-300'
                      }`}
                    >
                      <Star
                        className={`w-6 h-6 ${
                          star <= rating 
                            ? 'fill-yellow-400 text-yellow-400' 
                            : 'text-gray-300 hover:text-yellow-300'
                        }`}
                      />
                    </button>
                  ))}
                </div>
                <div className="text-sm text-gray-500">
                  {rating === 0 && 'Select a rating'}
                  {rating === 1 && 'Poor'}
                  {rating === 2 && 'Fair'}
                  {rating === 3 && 'Good'}
                  {rating === 4 && 'Very Good'}
                  {rating === 5 && 'Excellent!'}
                </div>
              </div>

              {/* Emoji Rating */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  How was your experience?
                </label>
                <div className="flex gap-4">
                  {emojiOptions.map((emoji) => (
                    <button
                      key={emoji.value}
                      type="button"
                      onClick={() => setEmojiRating(emoji.value)}
                      className={`flex flex-col items-center p-3 rounded-xl border-2 transition-all ${
                        emojiRating === emoji.value
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-transparent hover:border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      <emoji.icon className={`w-8 h-8 ${emoji.color}`} />
                      <span className="text-xs mt-2 text-gray-600">{emoji.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Feedback Category */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Category
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none bg-white"
                >
                  {feedbackCategories.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Your Feedback *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none resize-none"
                  placeholder="Tell us about your experience, suggestions, or issues..."
                />
              </div>

              {/* Name and Email */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name (Optional)
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email (Optional)
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={submitted}
                className={`w-full py-3 rounded-xl font-medium transition-all flex items-center justify-center gap-2 ${
                  submitted
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700'
                } text-white`}
              >
                <Send className="w-5 h-5" />
                {submitted ? 'Submitting...' : 'Submit Feedback'}
              </button>
            </form>
          </div>

          {/* Right Column - Info */}
          <div className="space-y-6">
            {/* Why Feedback Matters */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Your Feedback Matters</h3>
              <ul className="space-y-3">
                {[
                  "Helps us improve tourist facilities and services",
                  "Guides future development and planning",
                  "Ensures better experiences for future visitors",
                  "Identifies areas that need immediate attention",
                  "Shapes city tourism policies and initiatives"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <ThumbsUp className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Tips */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 sm:p-8 border border-blue-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Tips for Effective Feedback</h3>
              <div className="space-y-3">
                {[
                  "Be specific about what you liked or disliked",
                  "Mention dates and locations for reference",
                  "Provide suggestions for improvement",
                  "Keep it constructive and respectful",
                  "Include photos if relevant (can be emailed separately)"
                ].map((tip, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-white/50 rounded-xl">
                    <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                      {idx + 1}
                    </div>
                    <span className="text-gray-700">{tip}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 sm:p-8 border border-purple-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Other Ways to Reach Us</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-white/50 rounded-xl">
                  <MessageSquare className="w-5 h-5 text-purple-600 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-gray-900">Live Chat Support</div>
                    <div className="text-sm text-gray-600">Available 24/7 for immediate assistance</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white/50 rounded-xl">
                  <Send className="w-5 h-5 text-purple-600 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-gray-900">Email Feedback</div>
                    <div className="text-sm text-gray-600">feedback@indoretourism.in</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-12 bg-white rounded-2xl p-8 border border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Your Feedback Makes a Difference
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '95%', label: 'Feedback Resolved' },
              { value: '24h', label: 'Average Response Time' },
              { value: '10k+', label: 'Suggestions Implemented' },
              { value: '4.8★', label: 'Visitor Satisfaction' },
            ].map((stat, idx) => (
              <div key={idx} className="text-center p-4">
                <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}