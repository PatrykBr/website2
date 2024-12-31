import React from 'react';

const StickyCTA = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black/50 backdrop-blur-md z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <p className="text-gray-500">Ready to take your trading to the next level?</p>
        <button className="px-6 py-3 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors">
          Start Free Trial
        </button>
      </div>
    </div>
  );
};

export default StickyCTA;