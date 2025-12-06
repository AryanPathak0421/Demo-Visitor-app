import React from 'react';
import places from '../data/placesData';
import PlaceCard from '../components/PlaceCard';
import { Link } from 'react-router-dom';

export default function Home() {
  const top = places.slice(0, 4);

  return (
    <div>
      <section className="bg-gradient-to-r from-indigo-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl font-extrabold text-slate-900 leading-tight">Explore Indore — curated places & live routes</h1>
            <p className="mt-4 text-lg text-slate-600">A modern, mobile-friendly visitor guide built for Indore Municipal Corporation.</p>
            <div className="mt-6 flex gap-3">
              <Link to="/places" className="px-5 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md shadow">Browse all places</Link>
              <Link to="/tickets" className="px-5 py-3 border border-slate-200 rounded-md text-slate-700">Book tickets</Link>
            </div>
          </div>
          <div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img src={top[0].imageUrl} alt={top[0].name} className="w-full h-72 object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold">Top picks</h2>
            <p className="text-sm text-slate-600">Popular places recommended for visitors.</p>
          </div>
          <div>
            <Link to="/places" className="text-indigo-600 hover:underline">See all places →</Link>
          </div>
        </div>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {top.map(p => <PlaceCard key={p.id} place={p} />)}
        </div>
      </section>
    </div>
  );
}
