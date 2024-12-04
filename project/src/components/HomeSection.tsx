import React from 'react';
import { ProductCard } from './ProductCard';

export function HomeSection() {
  const products = [
    {
      title: "Designer Kurti Collection",
      price: "$12.99/piece",
      image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&q=80&w=800",
      category: "Kurti"
    },
    {
      title: "Premium Pants Collection",
      price: "$15.99/piece",
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&q=80&w=800",
      category: "Pants"
    },
    {
      title: "Elegant Palazzo Collection",
      price: "$14.99/piece",
      image: "https://images.unsplash.com/photo-1577900232427-18219b9166a0?auto=format&fit=crop&q=80&w=800",
      category: "Palazzo"
    }
  ];

  return (
    <section id="home" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Collections</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}