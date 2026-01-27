import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { X } from 'lucide-react'

const COOKIE_CONSENT_KEY = 'townconnect_cookie_consent'

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    // Check if user has already consented
    const hasConsented = localStorage.getItem(COOKIE_CONSENT_KEY)
    if (!hasConsented) {
      // Small delay to prevent flash on page load
      const timer = setTimeout(() => setShowBanner(true), 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'accepted')
    setShowBanner(false)
  }

  const handleDecline = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'declined')
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-fade">
      <div className="mx-auto max-w-4xl">
        <div className="relative rounded-2xl bg-gray-900 p-6 shadow-2xl">
          <button
            onClick={handleDecline}
            className="absolute right-4 top-4 text-gray-400 hover:text-white transition-colors"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="pr-8 sm:pr-0">
              <p className="text-white font-medium mb-1">
                We use cookies to improve your experience
              </p>
              <p className="text-sm text-gray-400">
                We use cookies to analyze site traffic and optimize your experience.{' '}
                <Link to="/cookies" className="text-teal-light hover:underline">
                  Learn more
                </Link>
              </p>
            </div>

            <div className="flex gap-3 shrink-0">
              <button
                onClick={handleDecline}
                className="px-4 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors"
              >
                Decline
              </button>
              <button
                onClick={handleAccept}
                className="px-6 py-2 bg-teal hover:bg-teal-dark text-white text-sm font-semibold rounded-lg transition-colors"
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
