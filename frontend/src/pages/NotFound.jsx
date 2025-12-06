import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-20 text-center">
      <h1 className="text-4xl font-extrabold">404</h1>
      <p className="mt-4 text-slate-600">Page not found.</p>
      <Link to="/" className="mt-6 inline-block bg-indigo-600 text-white px-4 py-2 rounded-md">Go home</Link>
    </section>
  );
}
