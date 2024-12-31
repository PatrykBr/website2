import React from 'react';

interface TestimonialCardProps {
  name: string;
  title: string;
  image: string;
  review: string;
  rating: number;
}

const TestimonialCard = ({ name, title, image, review, rating }: TestimonialCardProps) => {
  return (
    <div className="p-6 rounded-lg border border-white/10 bg-gradient-to-b from-emerald-500/5 to-transparent">
      <div className="flex items-center space-x-4">
        <img src={image} alt={name} className="w-12 h-12 rounded-full" />
        <div>
          <h4 className="font-bold">{name}</h4>
          <p className="text-sm text-gray-500">{title}</p>
        </div>
      </div>
      <p className="mt-4 text-gray-500">{review}</p>
      <div className="mt-4 flex items-center space-x-1">
        {Array.from({ length: rating }).map((_, i) => (
          <span key={i} className="text-yellow-400">★</span>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCard;