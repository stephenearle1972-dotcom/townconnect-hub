import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Check, Star, Zap, TrendingUp, ArrowRight } from 'lucide-react'
import { towns, businessCategories } from '../data/towns'
import PayFastButton from '../components/PayFastButton'

const pricingTiers = [
  {
    name: 'Basic',
    price: 99,
    period: '/month',
    description: 'Get your business listed and discovered by local customers.',
    features: [
      'Business name & contact details',
      'Category listing',
      'Basic description',
      'Google Maps location',
    ],
    cta: 'Get Started',
    popular: false,
  },
  {
    name: 'Standard',
    price: 299,
    period: '/month',
    description: 'Stand out with enhanced visibility and features.',
    features: [
      'Everything in Basic',
      'Photo gallery (up to 10 photos)',
      'Extended description',
      'Social media links',
      'Priority in category search',
      'Operating hours display',
    ],
    cta: 'Get Started',
    popular: true,
  },
  {
    name: 'Premium',
    price: 999,
    period: '/month',
    description: 'Maximum visibility and premium features for growing businesses.',
    features: [
      'Everything in Standard',
      'Featured placement on homepage',
      'Analytics dashboard',
      'WhatsApp integration boost',
      'Priority support',
      'Promotional badge',
    ],
    cta: 'Get Started',
    popular: false,
  },
]

const addOnModules = [
  { name: 'Events Listing', price: 'R99', period: '/month', description: 'Promote your events to the community' },
  { name: 'Jobs Board', price: 'R149', period: '/month', description: 'Post job opportunities' },
  { name: 'Property Listings', price: 'R199', period: '/month', description: 'List properties for sale or rent' },
  { name: 'Classifieds', price: 'R49', period: '/month', description: 'Post items for sale' },
]

export default function Business() {
  const [formData, setFormData] = useState({
    businessName: '',
    contactPerson: '',
    email: '',
    phone: '',
    towns: '',
    category: '',
    tier: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
          }}
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 text-center lg:px-8">
          <h1 className="font-serif text-4xl font-bold tracking-tight text-white sm:text-5xl animate-fade">
            Grow Your Business with TownConnect
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/90 animate-fade">
            Join South Africa's fastest-growing hyperlocal directory network.
            Get discovered by customers in your community.
          </p>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl">
              Local Listing Plans
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Choose the plan that fits your business needs
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className={`card relative rounded-2xl p-8 ${
                  tier.popular ? 'ring-2 ring-amber' : ''
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 rounded-full bg-amber px-4 py-1 text-sm font-semibold text-white">
                      <Star className="h-4 w-4" /> Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center">
                  <h3 className="font-serif text-xl font-bold text-gray-800">{tier.name}</h3>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-gray-800">R{tier.price}</span>
                    <span className="text-gray-500">{tier.period}</span>
                  </div>
                  <p className="mt-4 text-sm text-gray-600">{tier.description}</p>
                </div>
                <ul className="mt-8 space-y-4">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="h-5 w-5 flex-shrink-0 text-teal" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <PayFastButton
                  amount={tier.price}
                  itemName={`TownConnect ${tier.name} Listing - Monthly`}
                  itemDescription={`Monthly subscription for ${tier.name} tier business listing`}
                  className={`mt-8 block w-full rounded-lg py-3 text-center font-semibold transition-all ${
                    tier.popular
                      ? 'btn-primary'
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  {tier.cta}
                </PayFastButton>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-On Modules */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl">
              Add-On Modules
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Expand your listing with additional features
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {addOnModules.map((addon) => (
              <Link
                key={addon.name}
                to={`/contact?subject=${encodeURIComponent(addon.name + ' Module Inquiry')}`}
                className="card rounded-xl p-6 transition-all hover:shadow-lg hover:border-teal group"
              >
                <h3 className="font-semibold text-gray-800 group-hover:text-teal transition-colors">{addon.name}</h3>
                <p className="mt-2 text-sm text-gray-600">{addon.description}</p>
                <div className="mt-4">
                  <span className="text-2xl font-bold text-gray-800">{addon.price}</span>
                  <span className="text-gray-500">{addon.period}</span>
                </div>
                <p className="mt-3 text-xs font-semibold text-teal opacity-0 group-hover:opacity-100 transition-opacity">
                  Click to inquire &rarr;
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Network Solutions Preview */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-teal-dark px-6 py-16 sm:px-12 lg:px-16">
            <div className="relative flex flex-col items-center text-center lg:flex-row lg:justify-between lg:text-left">
              <div className="max-w-xl">
                <div className="flex items-center justify-center gap-2 lg:justify-start">
                  <Zap className="h-6 w-6 text-amber" />
                  <span className="text-sm font-semibold uppercase tracking-wider text-amber">
                    For Multi-Location Businesses
                  </span>
                </div>
                <h2 className="mt-4 font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Network Solutions
                </h2>
                <p className="mt-4 text-lg text-white/80">
                  Reach customers across multiple towns with our enterprise packages.
                  Multi-location listings, category sponsorship, and more.
                </p>
                <ul className="mt-6 space-y-2 text-white/80">
                  <li className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-amber" />
                    Multi-Location Listings from R999/month
                  </li>
                  <li className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-amber" />
                    Category Sponsorship from R2,500/month
                  </li>
                </ul>
              </div>
              <div className="mt-8 lg:mt-0 lg:ml-8">
                <Link
                  to="/network"
                  className="btn-primary inline-flex items-center gap-2 rounded-lg px-6 py-3.5 text-base"
                >
                  Explore Network Solutions
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section id="inquiry-form" className="bg-gray-50 py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <div className="text-center">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl">
              Business Inquiry Form
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Tell us about your business and we'll get back to you within 24 hours
            </p>
          </div>

          {submitted ? (
            <div className="mt-12 card rounded-2xl p-8 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-teal-50">
                <Check className="h-6 w-6 text-teal" />
              </div>
              <h3 className="mt-4 font-serif text-lg font-semibold text-gray-800">Thank you for your inquiry!</h3>
              <p className="mt-2 text-gray-600">
                We've received your submission and will be in touch within 24 hours.
              </p>
            </div>
          ) : (
            <form
              name="business-inquiry"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="mt-12 card rounded-2xl p-8"
            >
              <input type="hidden" name="form-name" value="business-inquiry" />
              <p className="hidden">
                <label>
                  Don't fill this out: <input name="bot-field" />
                </label>
              </p>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label htmlFor="businessName" className="block text-sm font-medium text-gray-700">
                    Business Name *
                  </label>
                  <input
                    type="text"
                    id="businessName"
                    name="businessName"
                    required
                    value={formData.businessName}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-800 placeholder-gray-400 focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal"
                  />
                </div>

                <div>
                  <label htmlFor="contactPerson" className="block text-sm font-medium text-gray-700">
                    Contact Person *
                  </label>
                  <input
                    type="text"
                    id="contactPerson"
                    name="contactPerson"
                    required
                    value={formData.contactPerson}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-800 placeholder-gray-400 focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-800 placeholder-gray-400 focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-800 placeholder-gray-400 focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal"
                  />
                </div>

                <div>
                  <label htmlFor="towns" className="block text-sm font-medium text-gray-700">
                    Town(s) Interested In *
                  </label>
                  <select
                    id="towns"
                    name="towns"
                    required
                    value={formData.towns}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-800 focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal"
                  >
                    <option value="">Select a town</option>
                    {towns.map((town) => (
                      <option key={town.id} value={town.name}>
                        {town.name}
                      </option>
                    ))}
                    <option value="Multiple Towns">Multiple Towns</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                    Business Category *
                  </label>
                  <select
                    id="category"
                    name="category"
                    required
                    value={formData.category}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-800 focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal"
                  >
                    <option value="">Select a category</option>
                    {businessCategories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="tier" className="block text-sm font-medium text-gray-700">
                    Preferred Tier *
                  </label>
                  <select
                    id="tier"
                    name="tier"
                    required
                    value={formData.tier}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-800 focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal"
                  >
                    <option value="">Select a tier</option>
                    <option value="Basic">Basic (R99/month)</option>
                    <option value="Standard">Standard (R299/month)</option>
                    <option value="Premium">Premium (R999/month)</option>
                    <option value="Network">Network Solutions</option>
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-800 placeholder-gray-400 focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal"
                    placeholder="Tell us more about your business..."
                  />
                </div>
              </div>

              <div className="mt-8">
                <button
                  type="submit"
                  className="btn-primary w-full rounded-lg px-6 py-3.5 text-base"
                >
                  Submit Inquiry
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </div>
  )
}
