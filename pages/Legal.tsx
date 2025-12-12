import React from 'react';
import { useLocation } from 'react-router-dom';

export const Legal: React.FC = () => {
  const location = useLocation();
  const isPrivacy = location.pathname.includes('privacy');
  
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-8">
          {isPrivacy ? 'Privacy Policy' : 'Terms of Service'}
        </h1>
        
        <div className="prose prose-indigo text-gray-500">
          <p className="mb-4">Last Updated: October 24, 2023</p>
          
          {isPrivacy ? (
            <>
              <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">1. Information We Collect</h3>
              <p className="mb-4">
                We collect information you provide directly to us, such as when you create an account, subscribe to our newsletter, request customer support, or otherwise communicate with us.
              </p>
              
              <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">2. How We Use Information</h3>
              <p className="mb-4">
                We use the information we collect to provide, maintain, and improve our services, to process transactions, and to send you related information including confirmations and invoices.
              </p>

              <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">3. Information Sharing</h3>
              <p className="mb-4">
                We do not share your personal information with third parties except as described in this privacy policy or with your consent.
              </p>
            </>
          ) : (
            <>
              <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">1. Acceptance of Terms</h3>
              <p className="mb-4">
                By accessing or using our services, you agree to be bound by these Terms of Service and all applicable laws and regulations.
              </p>
              
              <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">2. Use License</h3>
              <p className="mb-4">
                Permission is granted to temporarily download one copy of the materials (information or software) on Clipping World LLC's website for personal, non-commercial transitory viewing only.
              </p>

              <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">3. Disclaimer</h3>
              <p className="mb-4">
                The materials on Clipping World LLC's website are provided on an 'as is' basis. Clipping World LLC makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability.
              </p>
            </>
          )}

          <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">Contact Us</h3>
          <p>
            If you have any questions about this {isPrivacy ? 'Privacy Policy' : 'Terms of Service'}, please contact us at infoclipping01@gmail.com.
          </p>
        </div>
      </div>
    </div>
  );
};