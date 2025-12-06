import React from 'react';

export default function EmergencyButton() {
  function handleEmergency() {
    // In real app: trigger call, share location, alert IMC API. Here: simple fallback.
    const phone = '102'; // emergency / municipal helpline (example)
    if (confirm('Call emergency helpline now?')) {
      window.location.href = `tel:${phone}`;
    }
  }

  return (
    <button
      onClick={handleEmergency}
      title="Emergency / Helpline"
      className="fixed right-5 bottom-5 z-50 bg-red-600 hover:bg-red-700 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg"
    >
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M12 2v10" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="12" cy="18" r="2" fill="white"/>
      </svg>
    </button>
  );
}
