import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';

export function Header() {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path ? 'text-pink-600 font-semibold' : 'text-gray-600';
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <ShoppingBag className="h-8 w-8 text-pink-600" />
          <h1 className="text-2xl font-bold text-gray-800">Fashion Exclusive</h1>
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className={`${isActive('/')} hover:text-pink-600 transition-colors`}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className={`${isActive('/about')} hover:text-pink-600 transition-colors`}>
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className={`${isActive('/contact')} hover:text-pink-600 transition-colors`}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}