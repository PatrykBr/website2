import React from 'react';

const CookieConsent = () => {
  return (
    <div className="fixed bottom-4 right-4 bg-black/50 backdrop-blur-md p-4 rounded-lg z-50">
      <p className="text-sm text-gray-500">We use cookies to enhance your experience. <a href="/privacy" className="text-emerald-500 hover:underline">Learn more</a></p>
      <button className="mt-2 px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors">
        Accept
      </button>
    </div>
  );
};

export default CookieConsent;