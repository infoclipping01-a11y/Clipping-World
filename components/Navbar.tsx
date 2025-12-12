import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Scissors, MapPin } from 'lucide-react';
import { PageRoute } from '../types';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: PageRoute.HOME },
    { name: 'About Us', path: PageRoute.ABOUT },
    { name: 'Services', path: PageRoute.SERVICES },
    { name: 'Contact', path: PageRoute.CONTACT },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to={PageRoute.HOME} className="flex-shrink-0 flex items-center gap-2">
              <div className="bg-cyan-600 p-2 rounded-lg">
                <Scissors className="h-6 w-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl text-gray-900 tracking-tight leading-none">Clipping World LLC</span>
                <span className="text-xs text-cyan-600 font-medium tracking-wider">CLIP, MARKET, EARN</span>
              </div>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors duration-200 ${
                  isActive(link.path)
                    ? 'border-cyan-500 text-gray-900'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Address Display - Visible on Desktop Top Right */}
            <div className="flex flex-col items-end text-right border-l pl-6 border-gray-200">
               <div className="flex items-center gap-1 text-xs text-gray-500 font-medium uppercase tracking-wide">
                  <MapPin className="w-3 h-3 text-cyan-500" />
                  <span>5830 E 2nd St, Ste 7000</span>
               </div>
               <span className="text-xs text-gray-900 font-bold">Casper WY 82609</span>
            </div>
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
                  isActive(link.path)
                    ? 'bg-cyan-50 border-cyan-500 text-cyan-700'
                    : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300'
                }`}
              >
                {link.name}
              </Link>
            ))}
            {/* Address on Mobile Menu */}
             <div className="block pl-3 pr-4 py-4 border-t border-gray-100 bg-gray-50">
                <p className="text-xs text-gray-500 font-bold uppercase">Company Address:</p>
                <p className="text-sm text-gray-800">5830 E 2nd St, Ste 7000</p>
                <p className="text-sm text-gray-800">Casper WY 82609</p>
             </div>
          </div>
        </div>
      )}
    </nav>
  );
};