import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { ContactFormData } from '../types';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  return (
    <div className="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
      <div className="relative max-w-xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Contact Us</h2>
          <p className="mt-4 text-lg text-gray-500">
            Ready to start your project? Contact Clipping World LLC today.
          </p>
        </div>
        
        <div className="mt-12">
           <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 mb-12">
             <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg border border-gray-100">
                <div className="flex-shrink-0 bg-cyan-600 rounded-full p-2">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-500 uppercase">Phone</p>
                  <p className="text-sm font-bold text-gray-900">202 968 7989</p>
                </div>
             </div>
             <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg border border-gray-100">
                <div className="flex-shrink-0 bg-cyan-600 rounded-full p-2">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-500 uppercase">Email</p>
                  <p className="text-sm font-bold text-gray-900 break-all">infoclipping01@gmail.com</p>
                </div>
             </div>
             <div className="col-span-1 sm:col-span-2 flex items-center gap-3 p-4 bg-gray-50 rounded-lg border border-gray-100">
                <div className="flex-shrink-0 bg-cyan-600 rounded-full p-2">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-500 uppercase">Headquarters</p>
                  <p className="text-sm font-bold text-gray-900">5830 E 2nd St, Ste 7000, Casper WY 82609</p>
                </div>
             </div>
           </div>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full name</label>
              <div className="mt-1">
                <input
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="py-3 px-4 block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 border-gray-300 border rounded-md"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="py-3 px-4 block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 border-gray-300 border rounded-md"
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
              <div className="mt-1">
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="py-3 px-4 block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 border-gray-300 border rounded-md"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <div className="mt-1">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="py-3 px-4 block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 border border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                disabled={status === 'submitting' || status === 'success'}
                className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 disabled:opacity-50 transition-all"
              >
                {status === 'submitting' ? (
                  'Sending...'
                ) : status === 'success' ? (
                  'Message Sent!'
                ) : (
                  <>
                    Send Message <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};