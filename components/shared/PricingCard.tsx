'use client';

import React from 'react';

interface PricingCardProps {
  title: string;
  price: number;
  features: string[];
  cta: string;
  priceId: string;
  isPopular?: boolean;
  discount?: string;
  limitedTime?: string;
}

const PricingCard = ({ title, price, features, cta, priceId, isPopular, discount, limitedTime }: PricingCardProps) => {
  const handleCheckout = async () => {
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ priceId, userId: 'user-id' }), // Replace with actual user ID
      });

      const { sessionId } = await response.json();
      window.location.href = sessionId;
    } catch (error) {
      console.error('Error creating checkout session:', error);
    }
  };

  return (
    <div className={`relative p-8 rounded-2xl border border-white/10 backdrop-blur-md bg-white/5 ${
      isPopular ? 'border-emerald-500/20 shadow-lg shadow-emerald-500/10' : ''
    }`}>
      {isPopular && (
        <div className="absolute top-0 right-0 bg-emerald-500 text-white px-4 py-1 rounded-bl-lg rounded-tr-lg">
          Most Popular
        </div>
      )}
      {discount && (
        <div className="absolute top-12 right-0 bg-blue-500 text-white px-4 py-1 rounded-bl-lg rounded-tr-lg">
          {discount}
        </div>
      )}
      <h3 className="text-2xl font-bold text-center">{title}</h3>
      <p className="text-4xl font-bold text-center my-6">${price}<span className="text-lg text-gray-500">/mo</span></p>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <span className="text-emerald-500 mr-2">✔</span>
            {feature}
          </li>
        ))}
      </ul>
      <button
        onClick={handleCheckout}
        className="w-full bg-emerald-500 text-white py-3 rounded-lg hover:bg-emerald-600 transition-colors"
      >
        {cta}
      </button>
      {limitedTime && (
        <p className="text-sm text-center text-gray-500 mt-4">{limitedTime}</p>
      )}
    </div>
  );
};

export default PricingCard;