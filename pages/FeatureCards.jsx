import React from 'react'

export const FeatureCards = () => {
  return (
     <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-teal-50 to-blue-50 p-4 rounded-lg border border-teal-100">
              <div className="flex items-center mb-2">
                <svg className="h-5 w-5 text-teal-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <h3 className="font-medium text-gray-800">Fast & Reliable</h3>
              </div>
              <p className="text-xs sm:text-sm text-gray-600">Create short links instantly that never expire</p>
            </div>
            
            <div className="bg-gradient-to-br from-teal-50 to-blue-50 p-4 rounded-lg border border-teal-100">
              <div className="flex items-center mb-2">
                <svg className="h-5 w-5 text-teal-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <h3 className="font-medium text-gray-800">Secure</h3>
              </div>
              <p className="text-xs sm:text-sm text-gray-600">All links use HTTPS for secure sharing</p>
            </div>
            
            <div className="bg-gradient-to-br from-teal-50 to-blue-50 p-4 rounded-lg border border-teal-100">
              <div className="flex items-center mb-2">
                <svg className="h-5 w-5 text-teal-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                <h3 className="font-medium text-gray-800">Analytics</h3>
              </div>
              <p className="text-xs sm:text-sm text-gray-600">Track clicks and visitor insights</p>
            </div>
            
            <div className="bg-gradient-to-br from-teal-50 to-blue-50 p-4 rounded-lg border border-teal-100">
              <div className="flex items-center mb-2">
                <svg className="h-5 w-5 text-teal-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                <h3 className="font-medium text-gray-800">Mobile Friendly</h3>
              </div>
              <p className="text-xs sm:text-sm text-gray-600">Works perfectly on all devices</p>
            </div>
          </div>
  )
}
