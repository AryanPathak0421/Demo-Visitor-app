import React, { useState } from 'react';
import places from '../data/placesData';

export default function Tickets() {
  const [selected, setSelected] = useState(places[0]?.id || null);
  const [qty, setQty] = useState(1);
  const place = places.find(p => p.id === Number(selected)) || {};

  function handleBook(e) {
    e.preventDefault();
    alert(`Booked ${qty} ticket(s) for "${place.name}". (Demo)`);
  }

  return (
    <section className="max-w-3xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-bold mb-4">Book Tickets (Demo)</h2>

      <form onSubmit={handleBook} className="bg-white p-6 rounded-lg shadow-sm border">
        <label className="block mb-3 text-sm">
          Choose place
          <select value={selected} onChange={(e) => setSelected(e.target.value)} className="w-full mt-2 px-3 py-2 border rounded-md">
            {places.map(p => <option key={p.id} value={p.id}>{p.name} {p.ticketRequired ? `- ₹${p.price}` : '(Free)'}</option>)}
          </select>
        </label>

        <label className="block mb-3 text-sm">
          Quantity
          <input type="number" min="1" value={qty} onChange={(e) => setQty(e.target.value)} className="w-full mt-2 px-3 py-2 border rounded-md" />
        </label>

        <div className="flex items-center justify-between mt-4">
          <div className="text-sm text-slate-700">Total: <strong>₹{(place.price || 0) * qty}</strong></div>
          <button type="submit" className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md">Book now</button>
        </div>
      </form>
    </section>
  );
}
