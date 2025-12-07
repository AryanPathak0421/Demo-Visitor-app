import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Layout
import Layout from '../components/Layout/Layout';

// Pages
import Home from '../pages/Home';
import ContactUs from '../pages/ContactUs';
import Explore from '../pages/Explore';
import Places from '../pages/Places';
import Booking from '../pages/Booking';
import About from '../pages/About';
import NotFound from '../pages/NotFound';

// Public Routes Configuration
const publicRoutes = [
  { path: '/', element: <Home /> },
  { path: '/contact', element: <ContactUs /> },
  { path: '/explore', element: <Explore /> },
  { path: '/places', element: <Places /> },
  { path: '/booking', element: <Booking /> },
  { path: '/about', element: <About /> },
  { path: '/404', element: <NotFound /> },
  { path: '*', element: <Navigate to="/404" replace /> },
];

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {publicRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Route>
    </Routes>
  );
}