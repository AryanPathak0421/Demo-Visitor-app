import React, { useState } from 'react';
import placesData from '../data/placesData';
import PlaceCard from '../components/PlaceCard';

export default function Places() {
  const [query, setQuery] = useState('');
  const results = placesData.filter(p =>
    p.name.toLowerCase().includes(query.toLowerCase()) ||
    p.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold">All places</h2>
          <p className="text-sm text-slate-600">Filter and explore attractions across Indore.</p>
        </div>
        <div>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by name or category..."
            className="px-4 py-2 border rounded-md shadow-sm"
          />
        </div>
      </div>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {results.map(p => <PlaceCard key={p.id} place={p} />)}
      </div>

      {results.length === 0 && <div className="text-center text-slate-600 mt-8">No matching places found.</div>}
    </section>
  );
}
