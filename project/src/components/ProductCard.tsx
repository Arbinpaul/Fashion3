import React from 'react';

interface ProductCardProps {
  title: string;
  price: string;
  image: string;
  category: string;
}

export function ProductCard({ title, price, image, category }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <img src={image} alt={title} className="w-full h-64 object-cover" />
      <div className="p-4">
        <span className="text-xs text-pink-600 font-semibold uppercase">{category}</span>
        <h3 className="text-lg font-semibold mt-1">{title}</h3>
        <p className="text-gray-600 mt-2">Starting from</p>
        <p className="text-xl font-bold text-pink-600 mt-1">{price}</p>
      </div>
    </div>
  );
}