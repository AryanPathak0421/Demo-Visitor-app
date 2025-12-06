import React, { createContext, useContext, useEffect, useState } from 'react';
import { fetchPlaces } from '../api';

const PlacesContext = createContext();

export function usePlaces() {
  return useContext(PlacesContext);
}

export function PlacesProvider({ children }) {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function load() {
    setLoading(true);
    try {
      const p = await fetchPlaces();
      setPlaces(p);
    } catch (err) {
      setError(err.message || 'Failed to load');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => { load(); }, []);

  return (
    <PlacesContext.Provider value={{ places, loading, error, reload: load, setPlaces }}>
      {children}
    </PlacesContext.Provider>
  );
}
