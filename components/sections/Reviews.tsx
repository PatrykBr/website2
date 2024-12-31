import React from 'react';
import TestimonialCard from '../shared/TestimonialCard';

const Reviews = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      title: "Professional Trader",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&auto=format&fit=crop",
      review: "After switching to TradePro Premium, my win rate increased from 45% to 78%. The AI-powered indicators have been a game-changer for my trading strategy.",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      title: "Crypto Investor",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&auto=format&fit=crop",
      review: "In just 3 months using TradePro Premium, I've increased my portfolio by 127%. The automated trading features saved me countless hours of manual work.",
      rating: 5
    },
    {
      name: "Emily Watson",
      title: "Day Trader",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&auto=format&fit=crop",
      review: "Made back my annual Premium subscription fee in just 2 weeks! The advanced risk management tools helped me reduce losses by 65% while maximizing profits.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-emerald-500/10 to-transparent">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;