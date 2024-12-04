import React from 'react';
import { Instagram, Facebook, Youtube, Mail, Phone } from 'lucide-react';

export function ContactSection() {
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="text-pink-600 w-5 h-5" />
                    <span>binapaul1978@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="text-pink-600 w-5 h-5" />
                    <span>8013568967</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-pink-600 w-5 h-5">&#x1F4CD;</span> {/* Map Pin Emoji */}
                    <span>
                      Agarpara, Uttarpally Sporting Club,
                      <br />
                      Kolkata - 700109
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://www.instagram.com/binapaul42/profilecard/?igsh=MWVtdXBuZjFiZDU5ag==" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-pink-600 hover:text-pink-700"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a 
                    href="https://www.facebook.com/profile.php?id=100086402146940&mibextid=ZbWKwL" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-pink-600 hover:text-pink-700"
                  >
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a 
                    href="https://m.youtube.com/@fashionexclusive117" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-pink-600 hover:text-pink-700"
                  >
                    <Youtube className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


