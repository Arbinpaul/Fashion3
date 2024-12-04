import React from 'react';
import Bina from './Bina.jpg'; 
export function AboutSection() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">About Us</h2>
          <div className="bg-pink-50 p-8 rounded-lg shadow-lg">
            <img
              src={Bina}
              alt="Fashion Studio"
              className="w-full h-64 object-contain rounded-lg mb-6"
            />
            <h3 className="text-2xl font-semibold mb-4">Bina Pani Paul</h3>
            <p className="text-gray-600 leading-relaxed">
              Hi, I am Bina Pani Paul. Our commitment to quality,
              innovative designs, and customer satisfaction has made us the preferred choice for retailers
              across the India. We take pride in offering trendy, high-quality garments at competitive
              wholesale prices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}