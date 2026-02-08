import React from 'react';
import { Mail } from 'lucide-react';
import { FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-primary-900 text-white pt-4 pb-1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4 text-accent-500">A2 Smart Classes</h3>
            <p className="text-gray-300 text-sm">
              Empowering students through technology-enabled education and expert guidance.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="/" className="hover:text-accent-500 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-accent-500 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="/classes" className="hover:text-accent-500 transition-colors">
                  Classes
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-accent-500 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className = "space-y-3">
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <p className="text-sm text-gray-300 flex items-center gap-2">
              <FaWhatsapp size={16} />
              <a href="https://wa.me/7596867475" className="hover:text-accent-500">7596867475</a>
            </p>
            <p className="text-sm text-gray-300 flex items-center gap-2">
              <Mail size={16} />
              <a href="mailto:a2smartclass@gmail.com" className="hover:text-accent-500">
                a2smartclass@gmail.com
              </a>
            </p>
          </div>
          {/* Address */}
          <div>
            <h4 className="font-bold mb-4">Address</h4>
            <p className="text-sm text-gray-300 flex items-start gap-2">
              <FaMapMarkerAlt className="mt-1 text-gray-300" size={16} />
              <span>
                Nabapally Chotobazar, opposite Sarani Goshthi Club
              </span>
            </p>
          </div>
          </div>
        </div>
        

        <div className="border-t border-primary-800 pt-2">
          <div className="text-center text-sm text-gray-400 space-y-2">
            <p>© Copyright 2026 A2 Smart Classes | Design and Developed by Rohan Roy | 
            
              Email:{' '}
              <a href="mailto:roy.rohan14378@gmail.com" className="hover:text-accent-500">
                roy.rohan14378@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
