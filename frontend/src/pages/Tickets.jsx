// // import React, { useState } from 'react';
// // import places from '../data/placesData';

// // export default function Tickets() {
// //   const [selected, setSelected] = useState(places[0]?.id || null);
// //   const [qty, setQty] = useState(1);
// //   const place = places.find(p => p.id === Number(selected)) || {};

// //   function handleBook(e) {
// //     e.preventDefault();
// //     alert(`Booked ${qty} ticket(s) for "${place.name}". (Demo)`);
// //   }

// //   return (
// //     <section className="max-w-3xl mx-auto px-6 py-12">
// //       <h2 className="text-2xl font-bold mb-4">Book Tickets (Demo)</h2>

// //       <form onSubmit={handleBook} className="bg-white p-6 rounded-lg shadow-sm border">
// //         <label className="block mb-3 text-sm">
// //           Choose place
// //           <select value={selected} onChange={(e) => setSelected(e.target.value)} className="w-full mt-2 px-3 py-2 border rounded-md">
// //             {places.map(p => <option key={p.id} value={p.id}>{p.name} {p.ticketRequired ? `- ₹${p.price}` : '(Free)'}</option>)}
// //           </select>
// //         </label>

// //         <label className="block mb-3 text-sm">
// //           Quantity
// //           <input type="number" min="1" value={qty} onChange={(e) => setQty(e.target.value)} className="w-full mt-2 px-3 py-2 border rounded-md" />
// //         </label>

// //         <div className="flex items-center justify-between mt-4">
// //           <div className="text-sm text-slate-700">Total: <strong>₹{(place.price || 0) * qty}</strong></div>
// //           <button type="submit" className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md">Book now</button>
// //         </div>
// //       </form>
// //     </section>
// //   );
// // }


// import React, { useState } from 'react';
// import { Calendar, Users, Clock, MapPin, CreditCard, CheckCircle, ArrowRight, Ticket, AlertCircle, Info, Plus, Minus } from 'lucide-react';

// export default function TicketBooking() {
//   const [step, setStep] = useState(1);
//   const [selectedPlace, setSelectedPlace] = useState(null);
//   const [selectedDate, setSelectedDate] = useState('');
//   const [selectedTime, setSelectedTime] = useState('');
//   const [adultCount, setAdultCount] = useState(2);
//   const [childCount, setChildCount] = useState(0);
//   const [showConfirmation, setShowConfirmation] = useState(false);

//   const places = [
//     { id: 1, name: "Rajwada Palace", price: 50, image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=400&h=300&fit=crop", category: "Historical" },
//     { id: 2, name: "Lal Bagh Palace", price: 100, image: "https://images.unsplash.com/photo-1599046832509-1e7e4de8ef4e?w=400&h=300&fit=crop", category: "Heritage" },
//     { id: 3, name: "Central Museum", price: 20, image: "https://images.unsplash.com/photo-1566127444979-b3d2b64d6b4f?w=400&h=300&fit=crop", category: "Museum" },
//     { id: 4, name: "Ralamandal Wildlife", price: 30, image: "https://images.unsplash.com/photo-1535083783855-76ae62b2914e?w=400&h=300&fit=crop", category: "Nature" }
//   ];

//   const timeSlots = [
//     "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", 
//     "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM"
//   ];

//   const calculateTotal = () => {
//     if (!selectedPlace) return 0;
//     return (adultCount * selectedPlace.price) + (childCount * selectedPlace.price * 0.5);
//   };

//   const handleBooking = () => {
//     setShowConfirmation(true);
//   };

//   const BookingSummary = () => (
//     <div className="bg-blue-50 rounded-lg p-5 border border-blue-100">
//       <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
//         <Ticket className="w-5 h-5 text-blue-600" />
//         Booking Summary
//       </h3>
//       <div className="space-y-3 text-sm">
//         {selectedPlace && (
//           <>
//             <div className="flex justify-between">
//               <span className="text-gray-600">Destination</span>
//               <span className="font-medium text-gray-900">{selectedPlace.name}</span>
//             </div>
//             {selectedDate && (
//               <div className="flex justify-between">
//                 <span className="text-gray-600">Date</span>
//                 <span className="font-medium text-gray-900">{selectedDate}</span>
//               </div>
//             )}
//             {selectedTime && (
//               <div className="flex justify-between">
//                 <span className="text-gray-600">Time</span>
//                 <span className="font-medium text-gray-900">{selectedTime}</span>
//               </div>
//             )}
//             <div className="flex justify-between">
//               <span className="text-gray-600">Adults</span>
//               <span className="font-medium text-gray-900">{adultCount} × ₹{selectedPlace.price}</span>
//             </div>
//             {childCount > 0 && (
//               <div className="flex justify-between">
//                 <span className="text-gray-600">Children</span>
//                 <span className="font-medium text-gray-900">{childCount} × ₹{selectedPlace.price * 0.5}</span>
//               </div>
//             )}
//             <div className="pt-3 border-t border-blue-200 flex justify-between">
//               <span className="font-semibold text-gray-900">Total</span>
//               <span className="font-bold text-2xl text-blue-600">₹{calculateTotal()}</span>
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );

//   if (showConfirmation) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
//         <div className="max-w-2xl w-full">
//           <div className="bg-white rounded-lg shadow-lg overflow-hidden">
//             <div className="bg-emerald-600 p-8 text-white text-center">
//               <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
//                 <CheckCircle className="w-10 h-10 text-emerald-600" />
//               </div>
//               <h2 className="text-3xl font-bold mb-2">Booking Confirmed!</h2>
//               <p className="text-emerald-100">Your tickets have been booked successfully</p>
//             </div>
            
//             <div className="p-8">
//               <div className="bg-gray-50 rounded-lg p-5 mb-6 border border-gray-200">
//                 <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-200">
//                   <div>
//                     <div className="text-sm text-gray-600 mb-1">Booking ID</div>
//                     <div className="text-xl font-bold text-gray-900">IMC{Math.random().toString(36).substr(2, 9).toUpperCase()}</div>
//                   </div>
//                   <div className="w-14 h-14 bg-blue-600 rounded-lg flex items-center justify-center">
//                     <Ticket className="w-7 h-7 text-white" />
//                   </div>
//                 </div>
                
//                 <div className="space-y-3 text-sm">
//                   <div className="flex items-center gap-3">
//                     <MapPin className="w-5 h-5 text-blue-600" />
//                     <div>
//                       <div className="text-gray-600">Location</div>
//                       <div className="font-medium text-gray-900">{selectedPlace?.name}</div>
//                     </div>
//                   </div>
//                   <div className="flex items-center gap-3">
//                     <Calendar className="w-5 h-5 text-blue-600" />
//                     <div>
//                       <div className="text-gray-600">Visit Date</div>
//                       <div className="font-medium text-gray-900">{selectedDate} at {selectedTime}</div>
//                     </div>
//                   </div>
//                   <div className="flex items-center gap-3">
//                     <Users className="w-5 h-5 text-blue-600" />
//                     <div>
//                       <div className="text-gray-600">Visitors</div>
//                       <div className="font-medium text-gray-900">{adultCount} Adults, {childCount} Children</div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6 flex items-start gap-3">
//                 <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
//                 <div className="text-sm text-blue-900">
//                   <div className="font-medium mb-1">Important Information</div>
//                   <ul className="space-y-1 text-blue-800">
//                     <li>• Show this confirmation at the entry gate</li>
//                     <li>• Valid only for selected date and time</li>
//                     <li>• Arrive 15 minutes early</li>
//                   </ul>
//                 </div>
//               </div>

//               <div className="space-y-3">
//                 <button className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
//                   Download Ticket
//                 </button>
//                 <button 
//                   onClick={() => {
//                     setShowConfirmation(false);
//                     setStep(1);
//                     setSelectedPlace(null);
//                     setSelectedDate('');
//                     setSelectedTime('');
//                   }}
//                   className="w-full py-3 bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 rounded-lg font-medium transition-colors"
//                 >
//                   Book Another Ticket
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="bg-blue-600 text-white py-12">
//         <div className="max-w-7xl mx-auto px-6">
//           <h1 className="text-4xl font-bold mb-2">Book Tickets</h1>
//           <p className="text-blue-100">Skip the queue and book in advance</p>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-6 py-8">
//         {/* Progress Steps */}
//         <div className="mb-8">
//           <div className="flex items-center justify-between max-w-3xl mx-auto">
//             {[
//               { num: 1, label: 'Select Place' },
//               { num: 2, label: 'Date & Time' },
//               { num: 3, label: 'Visitors' },
//               { num: 4, label: 'Payment' }
//             ].map((s, idx) => (
//               <div key={s.num} className="flex items-center flex-1">
//                 <div className="flex flex-col items-center">
//                   <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm transition-all ${
//                     step >= s.num 
//                       ? 'bg-blue-600 text-white' 
//                       : 'bg-white text-gray-400 border-2 border-gray-300'
//                   }`}>
//                     {step > s.num ? <CheckCircle className="w-5 h-5" /> : s.num}
//                   </div>
//                   <div className={`text-xs mt-2 font-medium ${step >= s.num ? 'text-gray-900' : 'text-gray-400'}`}>
//                     {s.label}
//                   </div>
//                 </div>
//                 {idx < 3 && (
//                   <div className={`flex-1 h-0.5 mx-4 transition-all ${
//                     step > s.num ? 'bg-blue-600' : 'bg-gray-300'
//                   }`} />
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="grid lg:grid-cols-3 gap-8">
//           <div className="lg:col-span-2">
//             <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
//               {/* Step 1: Select Place */}
//               {step === 1 && (
//                 <div>
//                   <h2 className="text-2xl font-bold text-gray-900 mb-6">Choose Destination</h2>
//                   <div className="grid md:grid-cols-2 gap-4">
//                     {places.map(place => (
//                       <button
//                         key={place.id}
//                         onClick={() => setSelectedPlace(place)}
//                         className={`text-left rounded-lg overflow-hidden transition-all ${
//                           selectedPlace?.id === place.id
//                             ? 'ring-2 ring-blue-600 shadow-md'
//                             : 'hover:shadow-md border border-gray-200'
//                         }`}
//                       >
//                         <img src={place.image} alt={place.name} className="w-full h-36 object-cover" />
//                         <div className="p-4">
//                           <div className="text-xs text-blue-600 font-medium mb-1">{place.category}</div>
//                           <div className="font-semibold text-gray-900 mb-2">{place.name}</div>
//                           <div className="text-sm text-gray-600">From <span className="text-lg font-bold text-blue-600">₹{place.price}</span></div>
//                         </div>
//                       </button>
//                     ))}
//                   </div>
//                   <button
//                     onClick={() => selectedPlace && setStep(2)}
//                     disabled={!selectedPlace}
//                     className="mt-6 w-full py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 text-white rounded-lg font-medium flex items-center justify-center gap-2 transition-colors"
//                   >
//                     Continue
//                     <ArrowRight className="w-5 h-5" />
//                   </button>
//                 </div>
//               )}

//               {/* Step 2: Date & Time */}
//               {step === 2 && (
//                 <div>
//                   <h2 className="text-2xl font-bold text-gray-900 mb-6">Select Date & Time</h2>
                  
//                   <div className="mb-5">
//                     <label className="block text-sm font-medium text-gray-700 mb-2">Visit Date</label>
//                     <input
//                       type="date"
//                       value={selectedDate}
//                       onChange={(e) => setSelectedDate(e.target.value)}
//                       min={new Date().toISOString().split('T')[0]}
//                       className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
//                     />
//                   </div>

//                   <div className="mb-6">
//                     <label className="block text-sm font-medium text-gray-700 mb-2">Time Slot</label>
//                     <div className="grid grid-cols-3 gap-2">
//                       {timeSlots.map(time => (
//                         <button
//                           key={time}
//                           onClick={() => setSelectedTime(time)}
//                           className={`p-2 rounded-lg font-medium text-sm transition-all ${
//                             selectedTime === time
//                               ? 'bg-blue-600 text-white'
//                               : 'bg-gray-100 hover:bg-gray-200 text-gray-700 border border-gray-200'
//                           }`}
//                         >
//                           {time}
//                         </button>
//                       ))}
//                     </div>
//                   </div>

//                   <div className="flex gap-3">
//                     <button
//                       onClick={() => setStep(1)}
//                       className="flex-1 py-3 bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 rounded-lg font-medium transition-colors"
//                     >
//                       Back
//                     </button>
//                     <button
//                       onClick={() => selectedDate && selectedTime && setStep(3)}
//                       disabled={!selectedDate || !selectedTime}
//                       className="flex-1 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 text-white rounded-lg font-medium flex items-center justify-center gap-2 transition-colors"
//                     >
//                       Continue
//                       <ArrowRight className="w-5 h-5" />
//                     </button>
//                   </div>
//                 </div>
//               )}

//               {/* Step 3: Visitors */}
//               {step === 3 && (
//                 <div>
//                   <h2 className="text-2xl font-bold text-gray-900 mb-6">Number of Visitors</h2>
                  
//                   <div className="space-y-4 mb-6">
//                     <div className="flex items-center justify-between p-5 bg-gray-50 rounded-lg border border-gray-200">
//                       <div>
//                         <div className="font-medium text-gray-900">Adults</div>
//                         <div className="text-sm text-gray-600">Age 13+</div>
//                         <div className="text-sm font-medium text-blue-600 mt-1">₹{selectedPlace?.price} each</div>
//                       </div>
//                       <div className="flex items-center gap-3">
//                         <button
//                           onClick={() => setAdultCount(Math.max(1, adultCount - 1))}
//                           className="w-8 h-8 bg-white rounded-lg border border-gray-300 hover:border-blue-600 flex items-center justify-center transition-colors"
//                         >
//                           <Minus className="w-4 h-4" />
//                         </button>
//                         <span className="text-xl font-bold text-gray-900 w-8 text-center">{adultCount}</span>
//                         <button
//                           onClick={() => setAdultCount(adultCount + 1)}
//                           className="w-8 h-8 bg-white rounded-lg border border-gray-300 hover:border-blue-600 flex items-center justify-center transition-colors"
//                         >
//                           <Plus className="w-4 h-4" />
//                         </button>
//                       </div>
//                     </div>

//                     <div className="flex items-center justify-between p-5 bg-gray-50 rounded-lg border border-gray-200">
//                       <div>
//                         <div className="font-medium text-gray-900">Children</div>
//                         <div className="text-sm text-gray-600">Age 3-12</div>
//                         <div className="text-sm font-medium text-blue-600 mt-1">₹{selectedPlace?.price * 0.5} each</div>
//                       </div>
//                       <div className="flex items-center gap-3">
//                         <button
//                           onClick={() => setChildCount(Math.max(0, childCount - 1))}
//                           className="w-8 h-8 bg-white rounded-lg border border-gray-300 hover:border-blue-600 flex items-center justify-center transition-colors"
//                         >
//                           <Minus className="w-4 h-4" />
//                         </button>
//                         <span className="text-xl font-bold text-gray-900 w-8 text-center">{childCount}</span>
//                         <button
//                           onClick={() => setChildCount(childCount + 1)}
//                           className="w-8 h-8 bg-white rounded-lg border border-gray-300 hover:border-blue-600 flex items-center justify-center transition-colors"
//                         >
//                           <Plus className="w-4 h-4" />
//                         </button>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6 flex items-start gap-3">
//                     <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
//                     <div className="text-sm text-blue-900">
//                       Children under 3 years get free entry. Valid ID required.
//                     </div>
//                   </div>

//                   <div className="flex gap-3">
//                     <button
//                       onClick={() => setStep(2)}
//                       className="flex-1 py-3 bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 rounded-lg font-medium transition-colors"
//                     >
//                       Back
//                     </button>
//                     <button
//                       onClick={() => setStep(4)}
//                       className="flex-1 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium flex items-center justify-center gap-2 transition-colors"
//                     >
//                       Continue
//                       <ArrowRight className="w-5 h-5" />
//                     </button>
//                   </div>
//                 </div>
//               )}

//               {/* Step 4: Payment */}
//               {step === 4 && (
//                 <div>
//                   <h2 className="text-2xl font-bold text-gray-900 mb-6">Payment Details</h2>
                  
//                   <div className="space-y-4 mb-6">
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">Card Number</label>
//                       <input
//                         type="text"
//                         placeholder="1234 5678 9012 3456"
//                         className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
//                       />
//                     </div>
//                     <div className="grid grid-cols-2 gap-4">
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-2">Expiry Date</label>
//                         <input
//                           type="text"
//                           placeholder="MM/YY"
//                           className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
//                         />
//                       </div>
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-2">CVV</label>
//                         <input
//                           type="text"
//                           placeholder="123"
//                           className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
//                         />
//                       </div>
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">Cardholder Name</label>
//                       <input
//                         type="text"
//                         placeholder="John Doe"
//                         className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
//                       />
//                     </div>
//                   </div>

//                   <div className="flex gap-3">
//                     <button
//                       onClick={() => setStep(3)}
//                       className="flex-1 py-3 bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 rounded-lg font-medium transition-colors"
//                     >
//                       Back
//                     </button>
//                     <button
//                       onClick={handleBooking}
//                       className="flex-1 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-medium flex items-center justify-center gap-2 transition-all"
//                     >
//                       <CreditCard className="w-5 h-5" />
//                       Pay ₹{calculateTotal()}
//                     </button>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* Sidebar Summary */}
//           <div className="lg:sticky lg:top-8 h-fit">
//             <BookingSummary />
            
//             <div className="mt-6 bg-white rounded-lg shadow-sm border border-gray-200 p-5">
//               <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
//                 <AlertCircle className="w-5 h-5 text-blue-600" />
//                 Booking Policy
//               </h3>
//               <ul className="space-y-2 text-sm text-gray-600">
//                 <li className="flex items-start gap-2">
//                   <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
//                   <span>Free cancellation up to 24 hours</span>
//                 </li>
//                 <li className="flex items-start gap-2">
//                   <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
//                   <span>Instant confirmation via email</span>
//                 </li>
//                 <li className="flex items-start gap-2">
//                   <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
//                   <span>Skip ticket counter queue</span>
//                 </li>
//                 <li className="flex items-start gap-2">
//                   <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
//                   <span>Valid ID required at entry</span>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// } 

import React, { useState } from 'react';
import { Calendar, Users, Clock, MapPin, CreditCard, CheckCircle, ArrowRight, Ticket, AlertCircle, Info, Plus, Minus, Image as ImageIcon } from 'lucide-react';

export default function TicketBooking() {
  const [step, setStep] = useState(1);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [adultCount, setAdultCount] = useState(2);
  const [childCount, setChildCount] = useState(0);
  const [showConfirmation, setShowConfirmation] = useState(false);

  // Enhanced places data with better images
  const places = [
    { 
      id: 1, 
      name: "Rajwada Palace", 
      price: 50, 
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Indore_Rajwada01.jpg/1200px-Indore_Rajwada01.jpg", 
      category: "Historical",
      description: "7th-century Maratha palace in the heart of Indore",
      duration: "2-3 hours"
    },
    { 
      id: 2, 
      name: "Lal Bagh Palace", 
      price: 100, 
      image: "https://maahishmati.com/cdn/shop/articles/Maahishmati_Sarees_Blog_Post_on_Lal_Bagh_Palace_Indore_2025_5_1_190b8bec-eeef-49fd-baa9-98b625a9f503.jpg?v=1738751763", 
      category: "Heritage",
      description: "European-style palace built by Holkar rulers",
      duration: "3-4 hours"
    },
    { 
      id: 3, 
      name: "Central Museum", 
      price: 20, 
      image: "https://optimatravels.com/images/madhya-pradesh-images/Central-Museum-indore-madhya-pradesh.jpg", 
      category: "Museum",
      description: "Archaeological museum with rich collection",
      duration: "1-2 hours"
    },
    { 
      id: 4, 
      name: "Ralamandal Wildlife", 
      price: 30, 
      image: "https://ramadaencoreindore.com/wp-content/uploads/2025/03/hq720-5.jpg", 
      category: "Nature",
      description: "Wildlife sanctuary with diverse flora and fauna",
      duration: "4-5 hours"
    },
    { 
      id: 5, 
      name: "Kanch Mandir", 
      price: 20, 
      image: "https://hblimg.mmtcdn.com/content/hubble/img/indoredestimages/mmt/activities/m_Kanch_Mandir_1_l_416_640.jpg", 
      category: "Temple",
      description: "Glass temple with intricate mirror work",
      duration: "1 hour"
    },
    { 
      id: 6, 
      name: "Sarafa Bazaar", 
      price: 0, 
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/c1/8f/39/sarafa-bazar.jpg?w=1200&h=-1&s=1", 
      category: "Food & Market",
      description: "Famous night food market and jewelry market",
      duration: "2-3 hours"
    },
    { 
      id: 7, 
      name: "Patalpani Waterfall", 
      price: 40, 
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/25/ee/dd/8c/caption.jpg?w=900&h=500&s=1", 
      category: "Nature",
      description: "Scenic waterfall during monsoon season",
      duration: "Full day"
    },
    { 
      id: 8, 
      name: "Annapurna Temple", 
      price: 0, 
      image: "https://travelthrivehub.com/wp-content/uploads/2025/10/010272_annapurna_temple_indore_mp_011-e1754892328805.jpg", 
      category: "Temple",
      description: "Sacred Hindu temple dedicated to Goddess Annapurna",
      duration: "1-2 hours"
    }
  ];

  const timeSlots = [
    "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", 
    "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM"
  ];

  const calculateTotal = () => {
    if (!selectedPlace) return 0;
    return (adultCount * selectedPlace.price) + (childCount * selectedPlace.price * 0.5);
  };

  const handleBooking = () => {
    setShowConfirmation(true);
  };

  // Enhanced Booking Summary with image
  const BookingSummary = () => (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-5 border border-blue-200 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
        <Ticket className="w-5 h-5 text-blue-600" />
        Booking Summary
      </h3>
      
      {selectedPlace ? (
        <>
          {/* Place Image in Summary */}
          <div className="mb-4 relative rounded-lg overflow-hidden h-40">
            <img 
              src={selectedPlace.image} 
              alt={selectedPlace.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-2 left-2">
              <div className="px-2 py-1 bg-black/70 text-white text-xs rounded">
                {selectedPlace.category}
              </div>
            </div>
            <div className="absolute bottom-2 left-2 text-white font-semibold text-sm">
              {selectedPlace.name}
            </div>
          </div>

          <div className="space-y-3 text-sm">
            {selectedDate && (
              <div className="flex items-center gap-3">
                <Calendar className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <div className="flex-1">
                  <div className="text-gray-600">Date</div>
                  <div className="font-medium text-gray-900">{selectedDate}</div>
                </div>
              </div>
            )}
            {selectedTime && (
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <div className="flex-1">
                  <div className="text-gray-600">Time Slot</div>
                  <div className="font-medium text-gray-900">{selectedTime}</div>
                </div>
              </div>
            )}
            <div className="flex items-center gap-3">
              <Users className="w-4 h-4 text-blue-600 flex-shrink-0" />
              <div className="flex-1">
                <div className="text-gray-600">Visitors</div>
                <div className="font-medium text-gray-900">
                  {adultCount} Adult{adultCount !== 1 ? 's' : ''}
                  {childCount > 0 ? `, ${childCount} Child${childCount !== 1 ? 'ren' : ''}` : ''}
                </div>
              </div>
            </div>
            <div className="pt-4 border-t border-blue-200">
              <div className="flex justify-between items-center">
                <div>
                  <div className="font-semibold text-gray-900">Total Amount</div>
                  <div className="text-xs text-gray-500">Including all taxes</div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-blue-600">₹{calculateTotal()}</div>
                  <div className="text-xs text-gray-500">
                    ₹{selectedPlace.price} × {adultCount} Adult(s)
                    {childCount > 0 && ` + ₹${selectedPlace.price * 0.5} × ${childCount} Child(ren)`}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="text-center py-8">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
            <ImageIcon className="w-8 h-8 text-blue-600" />
          </div>
          <p className="text-gray-600">Select a place to see booking details</p>
        </div>
      )}
    </div>
  );

  if (showConfirmation) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-50 flex items-center justify-center p-6">
        <div className="max-w-2xl w-full">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Confirmation Header with Image */}
            <div className="relative h-48 overflow-hidden">
              <img 
                src={selectedPlace?.image || "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Indore_Rajwada01.jpg/1200px-Indore_Rajwada01.jpg"}
                alt={selectedPlace?.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute top-8 left-8 right-8">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <CheckCircle className="w-10 h-10 text-emerald-600" />
                </div>
                <h2 className="text-3xl font-bold text-white text-center mb-2">Booking Confirmed!</h2>
                <p className="text-emerald-100 text-center">Your tickets have been booked successfully</p>
              </div>
            </div>
            
            <div className="p-8">
              <div className="bg-gray-50 rounded-xl p-5 mb-6 border border-gray-200">
                <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-200">
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Booking ID</div>
                    <div className="text-xl font-bold text-gray-900">IMC{Math.random().toString(36).substr(2, 9).toUpperCase()}</div>
                  </div>
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center shadow">
                    <Ticket className="w-7 h-7 text-white" />
                  </div>
                </div>
                
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <div>
                      <div className="text-gray-600">Location</div>
                      <div className="font-medium text-gray-900">{selectedPlace?.name}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-blue-600" />
                    <div>
                      <div className="text-gray-600">Visit Date & Time</div>
                      <div className="font-medium text-gray-900">{selectedDate} at {selectedTime}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-blue-600" />
                    <div>
                      <div className="text-gray-600">Visitors</div>
                      <div className="font-medium text-gray-900">{adultCount} Adults, {childCount} Children</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <CreditCard className="w-5 h-5 text-emerald-600" />
                    <div>
                      <div className="text-gray-600">Amount Paid</div>
                      <div className="font-bold text-emerald-700">₹{calculateTotal()}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6 flex items-start gap-3">
                <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-blue-900">
                  <div className="font-medium mb-1">Important Information</div>
                  <ul className="space-y-1 text-blue-800">
                    <li>• Show this confirmation at the entry gate</li>
                    <li>• Valid only for selected date and time</li>
                    <li>• Arrive 15 minutes early for smooth entry</li>
                    <li>• Valid ID required for age verification</li>
                    <li>• No refund for no-shows or late arrivals</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-3">
                <button className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-lg font-medium transition-all shadow-sm hover:shadow flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Ticket PDF
                </button>
                <button 
                  onClick={() => {
                    setShowConfirmation(false);
                    setStep(1);
                    setSelectedPlace(null);
                    setSelectedDate('');
                    setSelectedTime('');
                    setAdultCount(2);
                    setChildCount(0);
                  }}
                  className="w-full py-3 bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 rounded-lg font-medium transition-all flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  Book Another Ticket
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-50">
      {/* Hero Header with Background Image */}
      <div className="relative bg-gradient-to-r from-blue-900/90 to-indigo-900/90 text-white py-16 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Indore_Rajwada01.jpg/1200px-Indore_Rajwada01.jpg"
            alt="Indore Tourism Background"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-3">Book Your Tickets</h1>
          <p className="text-blue-100 text-lg">Skip the queue, book in advance and explore Indore's wonders</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between max-w-3xl mx-auto">
            {[
              { num: 1, label: 'Select Place', icon: MapPin },
              { num: 2, label: 'Date & Time', icon: Calendar },
              { num: 3, label: 'Visitors', icon: Users },
              { num: 4, label: 'Payment', icon: CreditCard }
            ].map((s, idx) => (
              <div key={s.num} className="flex items-center flex-1">
                <div className="flex flex-col items-center">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center font-semibold text-sm transition-all shadow ${
                    step >= s.num 
                      ? 'bg-gradient-to-br from-blue-600 to-indigo-600 text-white' 
                      : 'bg-white text-gray-400 border-2 border-gray-300'
                  }`}>
                    {step > s.num ? <CheckCircle className="w-5 h-5" /> : <s.icon className="w-5 h-5" />}
                  </div>
                  <div className={`text-xs mt-2 font-medium ${step >= s.num ? 'text-gray-900' : 'text-gray-400'}`}>
                    {s.label}
                  </div>
                </div>
                {idx < 3 && (
                  <div className={`flex-1 h-0.5 mx-4 transition-all ${
                    step > s.num ? 'bg-gradient-to-r from-blue-600 to-indigo-600' : 'bg-gray-300'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
              {/* Step 1: Select Place */}
              {step === 1 && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Choose Your Destination</h2>
                  <p className="text-gray-600 mb-6">Select from Indore's top attractions</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {places.map(place => (
                      <button
                        key={place.id}
                        onClick={() => setSelectedPlace(place)}
                        className={`text-left rounded-xl overflow-hidden transition-all group ${
                          selectedPlace?.id === place.id
                            ? 'ring-3 ring-blue-500 shadow-lg scale-[1.02]'
                            : 'hover:shadow-lg hover:scale-[1.01] border border-gray-200'
                        }`}
                      >
                        <div className="relative h-40 overflow-hidden">
                          <img 
                            src={place.image} 
                            alt={place.name} 
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                          <div className="absolute top-3 left-3">
                            <div className="px-2 py-1 bg-black/70 text-white text-xs rounded">
                              {place.category}
                            </div>
                          </div>
                          <div className="absolute bottom-3 left-3">
                            <div className="text-lg font-bold text-white drop-shadow-lg">{place.name}</div>
                            <div className="text-xs text-white/90">{place.duration}</div>
                          </div>
                          <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded">
                            <span className="text-lg font-bold text-blue-600">₹{place.price}</span>
                            <span className="text-xs text-gray-600 ml-1">{place.price === 0 ? 'Free' : 'per person'}</span>
                          </div>
                        </div>
                        <div className="p-4">
                          <p className="text-sm text-gray-600 mb-3 line-clamp-2">{place.description}</p>
                          <div className="flex items-center justify-between">
                            <div className="text-xs text-gray-500 flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {place.duration}
                            </div>
                            <div className={`text-xs px-2 py-1 rounded ${
                              place.price === 0 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-blue-100 text-blue-800'
                            }`}>
                              {place.price === 0 ? 'Free Entry' : 'Ticket Required'}
                            </div>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                  <button
                    onClick={() => selectedPlace && setStep(2)}
                    disabled={!selectedPlace}
                    className="mt-8 w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 disabled:bg-gray-300 text-white rounded-lg font-medium flex items-center justify-center gap-2 transition-all shadow hover:shadow-lg"
                  >
                    Continue to Date & Time
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              )}

              {/* Step 2: Date & Time */}
              {step === 2 && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Select Date & Time</h2>
                  <p className="text-gray-600 mb-6">Choose your preferred visit slot</p>
                  
                  <div className="mb-5">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Visit Date</label>
                    <input
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none bg-white"
                    />
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Time Slot</label>
                    <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-2">
                      {timeSlots.map(time => (
                        <button
                          key={time}
                          onClick={() => setSelectedTime(time)}
                          className={`p-3 rounded-lg font-medium transition-all flex items-center justify-center ${
                            selectedTime === time
                              ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow'
                              : 'bg-gray-50 hover:bg-gray-100 text-gray-700 border border-gray-200 hover:border-blue-300'
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={() => setStep(1)}
                      className="flex-1 py-3 bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 rounded-lg font-medium transition-colors"
                    >
                      Back
                    </button>
                    <button
                      onClick={() => selectedDate && selectedTime && setStep(3)}
                      disabled={!selectedDate || !selectedTime}
                      className="flex-1 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 disabled:bg-gray-300 text-white rounded-lg font-medium flex items-center justify-center gap-2 transition-all"
                    >
                      Continue to Visitors
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Visitors */}
              {step === 3 && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Number of Visitors</h2>
                  <p className="text-gray-600 mb-6">Select the number of adults and children</p>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center justify-between p-5 bg-gray-50 rounded-xl border border-gray-200 hover:border-blue-300 transition-colors">
                      <div>
                        <div className="font-medium text-gray-900 flex items-center gap-2">
                          <Users className="w-4 h-4" />
                          Adults
                        </div>
                        <div className="text-sm text-gray-600 mt-1">Age 13+ years</div>
                        <div className="text-sm font-bold text-blue-600 mt-2">₹{selectedPlace?.price} per person</div>
                      </div>
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => setAdultCount(Math.max(1, adultCount - 1))}
                          className="w-10 h-10 bg-white rounded-lg border border-gray-300 hover:border-blue-600 hover:bg-blue-50 flex items-center justify-center transition-colors"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="text-2xl font-bold text-gray-900 w-12 text-center">{adultCount}</span>
                        <button
                          onClick={() => setAdultCount(adultCount + 1)}
                          className="w-10 h-10 bg-white rounded-lg border border-gray-300 hover:border-blue-600 hover:bg-blue-50 flex items-center justify-center transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-5 bg-gray-50 rounded-xl border border-gray-200 hover:border-blue-300 transition-colors">
                      <div>
                        <div className="font-medium text-gray-900 flex items-center gap-2">
                          <Users className="w-4 h-4" />
                          Children
                        </div>
                        <div className="text-sm text-gray-600 mt-1">Age 3-12 years</div>
                        <div className="text-sm font-bold text-blue-600 mt-2">₹{selectedPlace?.price * 0.5} per person (50% off)</div>
                      </div>
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => setChildCount(Math.max(0, childCount - 1))}
                          className="w-10 h-10 bg-white rounded-lg border border-gray-300 hover:border-blue-600 hover:bg-blue-50 flex items-center justify-center transition-colors"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="text-2xl font-bold text-gray-900 w-12 text-center">{childCount}</span>
                        <button
                          onClick={() => setChildCount(childCount + 1)}
                          className="w-10 h-10 bg-white rounded-lg border border-gray-300 hover:border-blue-600 hover:bg-blue-50 flex items-center justify-center transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6 flex items-start gap-3">
                    <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div className="text-sm text-blue-900">
                      <span className="font-medium">Note:</span> Children under 3 years get free entry. Valid ID proof required for age verification.
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={() => setStep(2)}
                      className="flex-1 py-3 bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 rounded-lg font-medium transition-colors"
                    >
                      Back
                    </button>
                    <button
                      onClick={() => setStep(4)}
                      className="flex-1 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-lg font-medium flex items-center justify-center gap-2 transition-all"
                    >
                      Continue to Payment
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 4: Payment */}
              {step === 4 && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Payment Details</h2>
                  <p className="text-gray-600 mb-6">Secure payment powered by IMC Tourism</p>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Card Number</label>
                      <input
                        type="text"
                        placeholder="1234 5678 9012 3456"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Expiry Date</label>
                        <input
                          type="text"
                          placeholder="MM/YY"
                          className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">CVV</label>
                        <input
                          type="text"
                          placeholder="123"
                          className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Cardholder Name</label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={() => setStep(3)}
                      className="flex-1 py-3 bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 rounded-lg font-medium transition-colors"
                    >
                      Back
                    </button>
                    <button
                      onClick={handleBooking}
                      className="flex-1 py-3 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white rounded-lg font-medium flex items-center justify-center gap-2 transition-all shadow hover:shadow-lg"
                    >
                      <CreditCard className="w-5 h-5" />
                      Pay ₹{calculateTotal()}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar Summary */}
          <div className="lg:sticky lg:top-8 h-fit space-y-6">
            <BookingSummary />
            
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-sm border border-gray-200 p-5">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-blue-600" />
                Booking Policy
              </h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span>Free cancellation up to 24 hours before visit</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span>Instant confirmation via email & SMS</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span>Skip the ticket counter queue</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span>Valid ID proof required at entry</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span>Children under 3 get free entry</span>
                </li>
              </ul>
            </div>

            {/* Image Gallery Preview */}
            {selectedPlace && (
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
                <h3 className="font-semibold text-gray-900 mb-4">Gallery Preview</h3>
                <div className="grid grid-cols-3 gap-2">
                  {[selectedPlace.image, selectedPlace.image, selectedPlace.image].map((img, idx) => (
                    <div key={idx} className="aspect-square rounded-lg overflow-hidden">
                      <img 
                        src={img} 
                        alt={`${selectedPlace.name} view ${idx + 1}`}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}