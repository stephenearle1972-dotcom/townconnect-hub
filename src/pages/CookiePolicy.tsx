import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-4xl px-4 py-16 lg:px-8 lg:py-24">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-teal hover:text-teal-dark transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        <h1 className="font-serif text-4xl font-bold text-gray-800 mb-4">Cookie Policy</h1>
        <p className="text-gray-500 mb-12">Effective Date: January 2025</p>

        <div className="prose prose-lg max-w-none">
          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-800 mb-4">What Are Cookies?</h2>
            <p className="text-gray-600 mb-4">
              Cookies are small text files that are stored on your device (computer, tablet, or mobile) when you visit
              a website. They help websites remember your preferences and improve your browsing experience.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-800 mb-4">How We Use Cookies</h2>
            <p className="text-gray-600 mb-4">
              TownConnect and our network of local directories use cookies for the following purposes:
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Essential Cookies</h3>
            <p className="text-gray-600 mb-4">
              These cookies are necessary for the website to function properly. They enable core functionality such as
              page navigation, form submissions, and security features. You cannot opt out of these cookies.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Analytics Cookies</h3>
            <p className="text-gray-600 mb-4">
              We use analytics cookies to understand how visitors interact with our website. This helps us improve our
              services and user experience. These cookies collect anonymous information about pages visited, time spent
              on site, and how users navigate between pages.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Preference Cookies</h3>
            <p className="text-gray-600 mb-4">
              These cookies remember your choices and preferences, such as cookie consent status and any display
              preferences you may have set.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-800 mb-4">Third-Party Cookies</h2>
            <p className="text-gray-600 mb-4">
              Our Platform may use cookies from third-party services, including:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
              <li>
                <strong>Google Analytics:</strong> We use Google Analytics to understand website traffic and usage patterns.
                Google may set cookies to collect anonymous data about your visit.
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline ml-1">
                  Google Privacy Policy
                </a>
              </li>
              <li>
                <strong>Netlify:</strong> Our website is hosted on Netlify, which may use cookies for security and
                performance purposes.
              </li>
              <li>
                <strong>Cloudinary:</strong> Images on our platform may be served through Cloudinary, which may set
                cookies for content delivery optimization.
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-800 mb-4">Managing Cookies</h2>
            <p className="text-gray-600 mb-4">
              You can control and manage cookies in several ways:
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Browser Settings</h3>
            <p className="text-gray-600 mb-4">
              Most web browsers allow you to manage cookies through their settings. You can:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
              <li>View cookies stored on your device</li>
              <li>Delete all or specific cookies</li>
              <li>Block all cookies or cookies from specific websites</li>
              <li>Set preferences for different types of cookies</li>
            </ul>

            <p className="text-gray-600 mb-4">
              Please note that blocking certain cookies may affect your experience on our website and limit some functionality.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Opt-Out Links</h3>
            <p className="text-gray-600 mb-4">
              You can opt out of Google Analytics tracking by installing the{' '}
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal hover:underline"
              >
                Google Analytics Opt-out Browser Add-on
              </a>.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-800 mb-4">Cookie Consent</h2>
            <p className="text-gray-600 mb-4">
              When you first visit our website, you will be shown a cookie consent banner. By clicking "Accept", you
              consent to our use of cookies as described in this policy. You can change your preferences at any time
              by clearing your browser cookies and revisiting our site.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-800 mb-4">Changes to This Policy</h2>
            <p className="text-gray-600 mb-4">
              We may update this Cookie Policy from time to time. Any changes will be posted on this page with an
              updated effective date.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-800 mb-4">More Information</h2>
            <p className="text-gray-600 mb-4">
              For more information about how we handle your personal data, please see our{' '}
              <Link to="/privacy" className="text-teal hover:underline">Privacy Policy</Link>.
            </p>
            <p className="text-gray-600 mb-4">
              If you have any questions about our use of cookies, please contact us at:
            </p>
            <ul className="list-none text-gray-600 space-y-1">
              <li>Email: <a href="mailto:hello@townconnect.co.za" className="text-teal hover:underline">hello@townconnect.co.za</a></li>
              <li>WhatsApp: <a href="https://wa.me/27688986081" className="text-teal hover:underline">068 898 6081</a></li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}
