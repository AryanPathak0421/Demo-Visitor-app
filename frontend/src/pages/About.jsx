import React from 'react';

export default function About() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-bold">About this Project</h2>
      <p className="mt-4 text-slate-600">
        This Indore Visitor demo is built to showcase a modern mobile-first city guide for the Indore Municipal Corporation (IMC).
        It demonstrates curated attractions, booking flows, and an emergency helpline widget — all presented in a clean, accessible UI.
      </p>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card title="Purpose">Showcase tourist spots & local services for citizens and tourists.</Card>
        <Card title="Tech">React + Vite + TailwindCSS + React Router (v6).</Card>
        <Card title="Demo">This is a demo; production would connect to IMC APIs, maps, and ticketing backend.</Card>
      </div>
    </section>
  );
}

function Card({ title, children }) {
  return (
    <div className="bg-white border rounded-lg p-4 shadow-sm">
      <div className="font-semibold">{title}</div>
      <div className="text-sm text-slate-600 mt-2">{children}</div>
    </div>
  );
}
