import React from 'react';
import { Link } from 'react-router-dom';

export default function PlaceCard({ place }) {
  return (
    <article className="bg-white rounded-lg shadow-sm border overflow-hidden">
      <div className="h-44 overflow-hidden">
        <img
          src={place.imageUrl}
          alt={place.name}
          className="w-full h-full object-cover transform hover:scale-105 transition duration-300"
          onError={(e) => { e.target.src = '/fallback.jpg'; }}
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-slate-900">{place.name}</h3>
        <p className="mt-2 text-sm text-slate-600 line-clamp-2">{place.description}</p>
        <div className="mt-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-xs bg-indigo-50 text-indigo-700 px-2 py-1 rounded-full">{place.category}</span>
            <span className="text-sm text-slate-500">{place.ticketRequired ? `₹${place.price}` : 'Free'}</span>
          </div>
          <Link to={`/places`} className="text-indigo-600 hover:underline text-sm">View</Link>
        </div>
      </div>
    </article>
  );
}
