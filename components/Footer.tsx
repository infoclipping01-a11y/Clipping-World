import React from 'react';
import { Link } from 'react-router-dom';
import { PageRoute } from '../types';
import { Mail, Phone, MapPin, Scissors } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
               <div className="bg-cyan-600 p-1.5 rounded-md">
                <Scissors className="h-5 w-5 text-white" />
              </div>
              <span className="font-bold text-lg tracking-tight">Clipping World LLC</span>
            </div>
            <p className="text-gray-400 text-sm">
              Clip, Market, Earn. We provide top-tier short form content and social media management solutions for brands ready to go viral.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase mb-4">Services</h3>
            <ul className="space-y-3">
              <li><Link to={PageRoute.SERVICES} className="text-gray-400 hover:text-white text-sm transition">Short Form Content</Link></li>
              <li><Link to={PageRoute.SERVICES} className="text-gray-400 hover:text-white text-sm transition">Dedicated Social Pages</Link></li>
              <li><Link to={PageRoute.SERVICES} className="text-gray-400 hover:text-white text-sm transition">Brand Affiliation</Link></li>
              <li><Link to={PageRoute.SERVICES} className="text-gray-400 hover:text-white text-sm transition">Content Strategy</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase mb-4">Legal</h3>
            <ul className="space-y-3">
              <li><Link to={PageRoute.PRIVACY} className="text-gray-400 hover:text-white text-sm transition">Privacy Policy</Link></li>
              <li><Link to={PageRoute.TERMS} className="text-gray-400 hover:text-white text-sm transition">Terms of Service</Link></li>
              <li><Link to={PageRoute.CONTACT} className="text-gray-400 hover:text-white text-sm transition">Support</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin className="h-5 w-5 text-cyan-400 shrink-0" />
                <span>5830 E 2nd St, Ste 7000<br />Casper WY 82609</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Phone className="h-5 w-5 text-cyan-400 shrink-0" />
                <span>202 968 7989</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Mail className="h-5 w-5 text-cyan-400 shrink-0" />
                <span>infoclipping01@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Clipping World LLC. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
             {/* Social placeholders */}
             <span className="text-gray-600 hover:text-gray-400 cursor-pointer">LinkedIn</span>
             <span className="text-gray-600 hover:text-gray-400 cursor-pointer">Twitter</span>
          </div>
        </div>
      </div>
    </footer>
  );
};