import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-white border-t mt-12">
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-start justify-between gap-4">
        <div>
          <div className="font-semibold text-lg">Indore Visitor</div>
          <div className="text-sm text-slate-600 mt-1">A demo application for Indore Municipal Corporation.</div>
        </div>
        <div className="text-sm text-slate-600">
          <div>Contact: <a href="mailto:info@imc.indore" className="text-indigo-600">info@imc.indore</a></div>
          <div className="mt-1">© {new Date().getFullYear()} Indore Municipal Corporation</div>
        </div>
      </div>
    </footer>
    // footer React---
    // Next.js
  );
}
