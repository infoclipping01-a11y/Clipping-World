import React, { useState } from 'react';
import { Video, Users, Share2, Sparkles, TrendingUp, Edit3, MonitorPlay } from 'lucide-react';
import { ServiceItem } from '../types';
import { getServiceRecommendation } from '../services/geminiService';

const services: ServiceItem[] = [
  {
    id: 'short-form',
    title: 'Short Form Content',
    description: 'Expert editing and production of vertical videos (TikTok, Reels, Shorts) optimized for maximum retention and virality.',
    icon: <Video className="h-8 w-8 text-white" />,
    priceRange: 'Custom Packages Available'
  },
  {
    id: 'social-pages',
    title: 'Dedicated Social Pages',
    description: 'Full management of niche social media pages including content scheduling, community engagement, and growth strategy.',
    icon: <Users className="h-8 w-8 text-white" />,
    priceRange: 'Monthly Retainers'
  },
  {
    id: 'brand-affiliation',
    title: 'Brand Affiliation',
    description: 'Connecting your brand with relevant partners and affiliates to expand reach and generate new revenue streams.',
    icon: <Share2 className="h-8 w-8 text-white" />,
    priceRange: 'Performance Based'
  },
  {
    id: 'video-editing',
    title: 'Professional Editing',
    description: 'High-quality post-production services including color grading, sound design, and motion graphics.',
    icon: <Edit3 className="h-8 w-8 text-white" />,
    priceRange: 'Per Project / Hourly'
  },
  {
    id: 'content-strategy',
    title: 'Viral Strategy Consulting',
    description: 'Data-driven analysis of your current content with actionable insights to improve engagement rates.',
    icon: <TrendingUp className="h-8 w-8 text-white" />,
    priceRange: 'Consultation Fees'
  },
  {
    id: 'streaming',
    title: 'Live Stream Setup',
    description: 'Technical setup and management for professional live streaming events and broadcasts.',
    icon: <MonitorPlay className="h-8 w-8 text-white" />,
    priceRange: 'Project Based'
  }
];

export const Services: React.FC = () => {
  const [aiQuery, setAiQuery] = useState('');
  const [recommendation, setRecommendation] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleAiAsk = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!aiQuery.trim()) return;

    setLoading(true);
    setRecommendation(null);
    
    const serviceTitles = services.map(s => s.title);
    const result = await getServiceRecommendation(aiQuery, serviceTitles);
    
    setRecommendation(result);
    setLoading(false);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-cyan-600 font-semibold tracking-wide uppercase">Our Expertise</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Services Designed for Growth
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            From creation to distribution, Clipping World provides the tools you need to succeed in the digital creator economy.
          </p>
        </div>

        {/* AI Recommender Section */}
        <div className="mb-16 bg-white rounded-2xl shadow-lg border border-cyan-100 overflow-hidden">
          <div className="bg-cyan-900 px-6 py-4 flex items-center justify-between">
            <h3 className="text-lg font-medium text-white flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-yellow-400" />
              AI Service Consultant
            </h3>
            <span className="text-cyan-200 text-xs uppercase tracking-wider">Powered by Gemini</span>
          </div>
          <div className="p-6 md:p-8">
            <p className="text-gray-600 mb-4">Not sure which service fits your goals? Tell us about your brand, and our AI will assist you.</p>
            <form onSubmit={handleAiAsk} className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                value={aiQuery}
                onChange={(e) => setAiQuery(e.target.value)}
                placeholder="e.g., I want to grow my TikTok following..."
                className="flex-1 rounded-md border-gray-300 border p-3 focus:ring-cyan-500 focus:border-cyan-500 shadow-sm"
              />
              <button
                type="submit"
                disabled={loading}
                className="inline-flex justify-center items-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 disabled:opacity-50"
              >
                {loading ? 'Analyzing...' : 'Get Recommendation'}
              </button>
            </form>
            
            {recommendation && (
              <div className="mt-6 p-4 bg-cyan-50 rounded-lg border border-cyan-100">
                <h4 className="text-sm font-bold text-cyan-800 uppercase mb-2">Recommendation:</h4>
                <p className="text-gray-800">{recommendation}</p>
              </div>
            )}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="flex flex-col bg-white rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100">
              <div className="flex-1 p-8">
                <div className="flex items-center justify-center h-16 w-16 rounded-md bg-cyan-500 shadow-lg mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
              </div>
              <div className="bg-gray-50 px-8 py-4 border-t border-gray-100 flex items-center justify-between">
                <span className="text-sm font-medium text-gray-900">{service.priceRange}</span>
                <span className="text-sm font-medium text-cyan-600 cursor-pointer hover:text-cyan-500">Learn more &rarr;</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};