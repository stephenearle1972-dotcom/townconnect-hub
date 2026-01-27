import { Link } from 'react-router-dom'
import { CheckCircle, ArrowRight, Mail } from 'lucide-react'

export default function ThankYou() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-16">
      <div className="mx-auto max-w-lg px-4 text-center">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-teal-50">
          <CheckCircle className="h-10 w-10 text-teal" />
        </div>

        <h1 className="mt-6 font-serif text-3xl font-bold text-gray-800">
          Thank You for Your Payment!
        </h1>

        <p className="mt-4 text-lg text-gray-600">
          Your payment has been received successfully. We're processing your order and you'll receive a confirmation email shortly.
        </p>

        <div className="mt-8 card rounded-2xl p-6">
          <h2 className="font-semibold text-gray-800">What happens next?</h2>
          <ul className="mt-4 space-y-3 text-left text-sm text-gray-600">
            <li className="flex items-start gap-3">
              <Mail className="h-5 w-5 flex-shrink-0 text-teal" />
              <span>You'll receive a confirmation email with your receipt</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 flex-shrink-0 text-teal" />
              <span>Our team will review and activate your listing within 24-48 hours</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 flex-shrink-0 text-teal" />
              <span>We'll send you login details to manage your listing</span>
            </li>
          </ul>
        </div>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Link
            to="/"
            className="btn-primary inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3"
          >
            Return Home
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-gray-300 px-6 py-3 font-semibold text-gray-700 transition-colors hover:border-teal hover:text-teal"
          >
            Contact Support
          </Link>
        </div>

        <p className="mt-8 text-sm text-gray-500">
          Questions? Email us at{' '}
          <a href="mailto:hello@townconnect.co.za" className="text-teal hover:underline">
            hello@townconnect.co.za
          </a>
        </p>
      </div>
    </div>
  )
}
