import React from 'react';
import { Link } from 'react-router-dom';
import { PageRoute } from '../types';
import { ArrowRight, CheckCircle, Video, Users, Share2, Mail, Phone, MapPin, User } from 'lucide-react';

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="md:w-2/3">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6">
              Digital Solutions for <br/>
              <span className="text-cyan-400">Content Creation</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
              Clipping World LLC is a premier digital agency focused on maximizing your brand's reach. We specialize in producing high-impact short-form content, managing dedicated social pages, and fostering powerful brand affiliations to help you clip, market, and earn.
            </p>

            {/* Owner & Contact Info Block */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 mb-8 max-w-xl">
               <div className="flex items-start gap-4 mb-4">
                  <div className="bg-cyan-600 p-2 rounded-full hidden sm:block">
                     <User className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-cyan-300 font-bold uppercase tracking-wider mb-1">CEO & Founder</p>
                    <p className="text-xl font-bold text-white">Muhammad Suleman Hussain</p>
                  </div>
               </div>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-300 border-t border-white/10 pt-4">
                  <div className="flex items-center gap-2">
                     <Mail className="w-4 h-4 text-cyan-400" />
                     <span>infoclipping01@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                     <Phone className="w-4 h-4 text-cyan-400" />
                     <span>202 968 7989</span>
                  </div>
                  <div className="flex items-start gap-2 col-span-1 sm:col-span-2">
                     <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                     <span>5830 E 2nd St, Ste 7000, Casper WY 82609</span>
                  </div>
               </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to={PageRoute.CONTACT} className="inline-flex justify-center items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 md:text-lg transition-all shadow-lg hover:shadow-cyan-500/30">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link to={PageRoute.SERVICES} className="inline-flex justify-center items-center px-8 py-3 border border-gray-500 text-base font-medium rounded-md text-gray-100 bg-transparent hover:bg-white/10 md:text-lg transition-all">
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Why Choose Clipping World?</h2>
            <p className="mt-4 text-lg text-gray-500">We turn your content into a revenue-generating asset with our expert strategies.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="bg-cyan-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Video className="h-6 w-6 text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Short Form Mastery</h3>
              <p className="text-gray-600 leading-relaxed">
                We craft engaging Reels, TikToks, and Shorts designed to capture attention in the first 3 seconds and drive viral growth.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="bg-cyan-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Users className="h-6 w-6 text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Dedicated Communities</h3>
              <p className="text-gray-600 leading-relaxed">
                We build and manage dedicated social pages that foster loyal communities around your brand niche.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="bg-cyan-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Share2 className="h-6 w-6 text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Strategic Affiliation</h3>
              <p className="text-gray-600 leading-relaxed">
                Leverage our network to build profitable brand affiliations and partnerships that monetize your digital presence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-cyan-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">Ready to grow your audience?</h2>
          <p className="text-cyan-100 text-lg mb-8 max-w-2xl mx-auto">
            Join content creators and businesses who are scaling with Clipping World LLC.
          </p>
          <Link to={PageRoute.CONTACT} className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-cyan-600 bg-white hover:bg-cyan-50 transition-colors">
            Contact Us <CheckCircle className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};