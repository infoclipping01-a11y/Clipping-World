import React from 'react';

export const About: React.FC = () => {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-16">
          <h2 className="text-base text-cyan-600 font-semibold tracking-wide uppercase">Who We Are</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Innovators in Content Creation
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Clipping World LLC creates digital experiences that matter. We help brands clip their best moments, market them to the right audience, and earn sustainable revenue.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8 items-center">
            <div className="relative rounded-xl overflow-hidden shadow-xl">
               <img 
                 className="w-full h-full object-cover" 
                 src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                 alt="Creative team working" 
               />
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              <p className="text-lg text-gray-600">
                To empower content creators and businesses with the tools and strategies needed to thrive in the fast-paced world of social media. We believe in the power of short-form video to tell compelling stories that convert.
              </p>
              
              <h3 className="text-2xl font-bold text-gray-900 pt-4">Our Core Principles</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li><strong>Quality First:</strong> Every frame matters in short-form content.</li>
                <li><strong>Viral Strategy:</strong> We use data to predict and ride trends.</li>
                <li><strong>Authenticity:</strong> Building real connections with audiences.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-24">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Leadership</h3>
          <div className="flex justify-center">
            <div className="text-center max-w-sm">
              <div className="w-40 h-40 mx-auto rounded-full bg-gray-200 overflow-hidden mb-6 border-4 border-cyan-100">
                 {/* Placeholder for CEO image */}
                 <img src="https://ui-avatars.com/api/?name=Muhammad+Suleman+Hussain&background=0891b2&color=fff&size=200" alt="Muhammad Suleman Hussain" className="w-full h-full object-cover"/>
              </div>
              <h4 className="text-xl font-bold text-gray-900">Muhammad Suleman Hussain</h4>
              <p className="text-cyan-600 font-medium mb-2">CEO & Founder</p>
              <p className="text-gray-500 text-sm">
                Leading Clipping World with a vision to transform how businesses approach content creation and digital marketing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};