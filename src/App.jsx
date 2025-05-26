import React, { useState,useCallback } from 'react'
import './App.css'

import { FeatureCards } from '../pages/FeatureCards.jsx'


export const App = () => {
  const [url, setUrl] = useState('')
  const [shortUrl, setShortUrl] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [copied, setCopied] = useState(false)

  const handleSubmit = useCallback( async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setCopied(false)
    
    try {
      const response = await fetch('https://gonelink-backend-production.up.railway.app/api/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),
      })
      
      const data = await response.json()
      
      if (response.ok) {
        setShortUrl(data.shortUrl)
      } else {
        setError(data.error || 'Failed to create short URL')
      }
    } catch (err) {
      setError('Server error. Please try again.')
    } finally {
      setLoading(false)
    }
  },[url])

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(shortUrl)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }, [shortUrl])

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-400 to-blue-500 flex flex-col items-center justify-center p-4 sm:p-6 md:p-8">
      <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="p-4 sm:p-6 md:p-8">
          <div className="flex flex-col items-center justify-center mb-4 sm:mb-6">
            <svg className="h-10 w-10 sm:h-12 sm:w-12 text-teal-500 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
            <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-teal-500 to-blue-600 bg-clip-text text-transparent text-center">SnapLink</h1>
          </div>
          
          <h2 className="text-center text-sm sm:text-base text-gray-600 mb-6">Transform long URLs into short, shareable links</h2>

            <form  className="space-y-4">
            <div>
              <label htmlFor="url" className="block text-sm font-medium text-gray-700 mb-1">
                Enter your URL
              </label>
              <input
                type="url"
                id="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://example.com/long/url"
                required
                className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500 shadow-sm"
              />
            </div>
            
            <button
              type="submit"
              onClick={handleSubmit}
              disabled={loading}
              className="w-full bg-gradient-to-r from-teal-500 to-blue-500 text-white py-3 px-4 rounded-lg hover:from-teal-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition-all disabled:opacity-50 text-sm sm:text-base font-medium shadow-md"
            >
              {loading ? 'Creating...' : 'Create Short Link'}
            </button>
          </form>
          
           {error && (
            <div className="mt-4 text-red-600 text-sm bg-red-50 p-3 rounded-lg">
              {error}
            </div>
            )}
          
          {shortUrl && (
            <div className="mt-6 p-4 bg-gradient-to-r from-teal-50 to-blue-50 rounded-lg border border-teal-100">
              <p className="text-sm text-gray-700 mb-2 font-medium">Your shortened URL:</p>
              <div className="flex items-center">
                <a 
                  href={shortUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 font-medium truncate flex-1 text-sm"
                >
                  {shortUrl}
                </a>
                <button
                  onClick={handleCopy}
                  className="ml-2 p-2 text-teal-600 hover:bg-teal-100 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors"
                  title="Copy to clipboard"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                  </svg>
                </button>
              </div>
              {copied && (
                <p className="text-xs text-teal-600 mt-2 bg-teal-50 p-2 rounded-md inline-block">Copied to clipboard!</p>
              )}
            </div>
          )}
          
          {/* Feature Cards */}
          <FeatureCards/>
        </div>
        
        <div className="bg-gradient-to-r from-teal-50 to-blue-50 px-4 py-3 sm:px-6 sm:py-4 text-center">
          <p className="text-xs text-gray-600">
            © 2025 SnapLink • Share links beautifully
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
