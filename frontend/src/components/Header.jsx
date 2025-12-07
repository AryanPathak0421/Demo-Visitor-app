import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="bg-white/80 backdrop-blur sticky top-0 z-30 border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl  flex items-center justify-center shadow-lg">
  <img 
    src="https://e7.pngegg.com/pngimages/823/692/png-clipart-sukhliya-indore-indore-municipal-corporation-depalpur-nagar-nigam-others-food-city.png" 
    alt="IMC Logo"
    className="w-9 h-9 object-contain"
  />
</div>

          <div>
            <div className="text-lg font-semibold text-slate-900">Indore Visitor</div>
            <div className="text-xs text-slate-500">Smart City — IMC Demo</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <NavLink to="/" active={location.pathname === '/'}>Home</NavLink>
          <NavLink to="/places" active={location.pathname === '/places'}>Places</NavLink>
          <NavLink to="/tickets" active={location.pathname === '/tickets'}>Tickets</NavLink>
          <NavLink to="/about" active={location.pathname === '/about'}>About</NavLink>
          <NavLink to="/contact" active={location.pathname === '/contact'}>Contact</NavLink>
          <NavLink to="/faqs" active={location.pathname === '/faqs'}>FAQS</NavLink>
          <NavLink to="/helpcenter" active={location.pathname === '/helpcenter'}>Help Center</NavLink>
          <NavLink to="/feedback" active={location.pathname === '/feedback'}>Feedback</NavLink>
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} className="p-2 rounded-md bg-slate-100">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M3 6h14M3 10h14M3 14h14" stroke="#334155" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {open && (
        <div className="md:hidden bg-white border-t">
          <div className="px-6 py-4 flex flex-col gap-3">
            <MobileLink to="/" onClick={() => setOpen(false)}>Home</MobileLink>
            <MobileLink to="/places" onClick={() => setOpen(false)}>Places</MobileLink>
            <MobileLink to="/tickets" onClick={() => setOpen(false)}>Tickets</MobileLink>
            <MobileLink to="/about" onClick={() => setOpen(false)}>About</MobileLink>
            <MobileLink to="/contact" onClick={() => setOpen(false)}>Contact</MobileLink>
            <MobileLink to="/faqs" onClick={() => setOpen(false)}>FAQS</MobileLink>
            <MobileLink to="/helpcenter" onClick={() => setOpen(false)}>Help Center</MobileLink>
            <MobileLink to="/feedback" onClick={() => setOpen(false)}>Feedback</MobileLink>
          </div>
        </div>
      )}
    </header>
  );
}

function NavLink({ to, children, active }) {
  return (
    <Link to={to} className={`text-sm ${active ? 'text-slate-900 font-medium' : 'text-slate-600 hover:text-slate-900'}`}>
      {children}
    </Link>
  );
}

function MobileLink({ to, children, onClick }) {
  return (
    <Link to={to} onClick={onClick} className="py-2 text-slate-700 border-b last:border-b-0">
      {children}
    </Link>
  );
}
