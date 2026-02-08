import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Circle } from 'lucide-react';
import { Button } from '../shared/Button';
import { WHATSAPP_LINK } from '../../constants';
import logo from "@/assets/logo.png";


interface NavbarProps {
  onEnrollClick: () => void;
}

export function Navbar({ onEnrollClick }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/classes', label: 'Classes' },
    { href: '/teachers', label: 'Teachers' },
    { href: '/contact', label: 'Contact' },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <nav className="sticky top-0 z-40 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="bg-primary-600 rounded-full p-0.5">
              {/* <Circle size={24} className="text-accent-500" fill="currentColor" /> */}
              <img
                src={logo}
                alt="Company logo"
                className="w-10 h-10 object-contain"
              />
            </div>
            <span className="hidden sm:inline font-bold text-primary-600 text-lg">
              A2 Smart Classes
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`font-semibold transition-colors duration-200 ${
                  isActive(link.href)
                    ? 'text-accent-500 border-b-2 border-accent-500'
                    : 'text-gray-700 hover:text-primary-600'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Button
              variant="accent"
              size="md"
              onClick={onEnrollClick}
            >
              Enroll Now
            </Button>
          </div>


          <button
            className="md:hidden text-gray-700 hover:text-primary-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {links.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-2 rounded-lg font-semibold transition-colors ${
                  isActive(link.href)
                    ? 'bg-accent-100 text-accent-500'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button
              variant="accent"
              size="md"
              className="w-full"
              onClick={() => {
                setIsMenuOpen(false);
                window.open(WHATSAPP_LINK, '_blank');
              }}
            >
              Enroll Now
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
