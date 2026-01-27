import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Building2,
  MessageCircle,
  Award,
  Megaphone,
  Users,
  BarChart3,
  Check,
  ArrowRight
} from 'lucide-react'
import { towns } from '../data/towns'

const networkProducts = [
  {
    id: 'multi-location',
    icon: Building2,
    name: 'Multi-Location Listings',
    price: 'R999',
    period: '/month',
    description: 'Establish your presence across multiple towns with a single dashboard.',
    features: [
      'Presence in 3 towns of your choice',
      'Unified management dashboard',
      'Priority placement in all locations',
      'Monthly analytics report',
      'Consistent branding across sites',
    ],
  },
  {
    id: 'whatsapp-broadcast',
    icon: MessageCircle,
    name: 'WhatsApp Network Broadcast',
    price: 'R500',
    period: '/month add-on',
    description: 'Reach customers directly via WhatsApp communities across our network.',
    features: [
      'One broadcast per month',
      'Reach all opted-in subscribers',
      'Professional message design',
      'Performance tracking',
      'A/B testing support',
    ],
  },
  {
    id: 'category-sponsorship',
    icon: Award,
    name: 'Category Sponsorship',
    price: 'R2,500',
    period: '/month',
    description: 'Own a category across all TownConnect sites for maximum brand visibility.',
    features: [
      'Top placement in sponsored category',
      'Featured badge on all listings',
      'Logo on hub site category page',
      'Priority in WhatsApp directory',
      'Exclusive category banner ads',
    ],
  },
  {
    id: 'national-brand',
    icon: Megaphone,
    name: 'National Brand Advertising',
    price: 'R10,000+',
    period: '/month',
    description: 'Custom advertising packages for national brands and franchises.',
    features: [
      'Banner ads across all sites',
      'Sponsored listings network-wide',
      'WhatsApp bot integration',
      'Custom landing pages',
      'Dedicated account manager',
    ],
    isCustom: true,
  },
]

export default function Network() {
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    businessType: '',
    locations: '',
    product: '',
    budget: '',
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
            backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
          }}
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 text-center lg:px-8">
          <div className="mx-auto flex items-center justify-center gap-2">
            <span className="inline-flex items-center gap-1 rounded-full bg-white/20 px-4 py-1 text-sm font-semibold text-white">
              Enterprise Solutions
            </span>
          </div>
          <h1 className="mt-6 font-serif text-4xl font-bold tracking-tight text-white sm:text-5xl animate-fade">
            Reach Customers Across South Africa
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/90 animate-fade">
            Multi-location businesses and national brands: amplify your presence
            across our growing network of hyperlocal directories.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            <a
              href="#network-form"
              className="btn-primary w-full rounded-lg px-8 py-4 text-base sm:w-auto"
            >
              Get Started
            </a>
            <div className="flex items-center gap-2 text-white/80">
              <Users className="h-5 w-5" />
              <span>Currently serving {towns.length} towns</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-teal">3+</div>
              <div className="mt-1 text-sm text-gray-500">Active Towns</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-teal">100+</div>
              <div className="mt-1 text-sm text-gray-500">Listed Businesses</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-teal">1000+</div>
              <div className="mt-1 text-sm text-gray-500">Monthly Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber">Growing</div>
              <div className="mt-1 text-sm text-gray-500">Network</div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl">
              Network Solutions
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Powerful tools for businesses that operate across multiple locations
            </p>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            {networkProducts.map((product) => (
              <div
                key={product.id}
                className="card overflow-hidden rounded-2xl p-8"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-teal text-white">
                    <product.icon className="h-7 w-7" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-xl font-bold text-gray-800">{product.name}</h3>
                    <div className="mt-1">
                      <span className="text-2xl font-bold text-amber">{product.price}</span>
                      <span className="text-gray-500"> {product.period}</span>
                    </div>
                  </div>
                </div>

                <p className="mt-4 text-gray-600">{product.description}</p>

                <ul className="mt-6 space-y-3">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="h-5 w-5 flex-shrink-0 text-teal" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <a
                    href="#network-form"
                    className={`inline-flex items-center gap-2 font-semibold ${
                      product.isCustom ? 'text-gray-800' : 'text-teal'
                    } hover:underline`}
                  >
                    {product.isCustom ? 'Contact us for custom pricing' : 'Get started'}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Generation Section */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex flex-col items-center gap-8 lg:flex-row lg:justify-between">
            <div className="max-w-xl text-center lg:text-left">
              <div className="flex items-center justify-center gap-2 lg:justify-start">
                <BarChart3 className="h-6 w-6 text-teal" />
                <span className="text-sm font-semibold uppercase tracking-wider text-teal">
                  Lead Generation
                </span>
              </div>
              <div className="mt-4 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
                <h2 className="font-serif text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl">
                  Generate Qualified Leads
                </h2>
                <span className="inline-flex items-center rounded-full bg-amber px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                  Coming Q2 2026
                </span>
              </div>
              <p className="mt-4 text-lg text-gray-600">
                Soon we'll help you generate qualified leads for your business through our
                hyperlocal network. Our community-focused approach means higher
                quality leads from customers actively looking for your services.
              </p>
              <ul className="mt-6 space-y-3 text-left">
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 flex-shrink-0 text-teal" />
                  <span className="text-gray-600">Local intent-based leads</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 flex-shrink-0 text-teal" />
                  <span className="text-gray-600">WhatsApp-verified contact details</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 flex-shrink-0 text-teal" />
                  <span className="text-gray-600">Category-specific targeting</span>
                </li>
              </ul>
            </div>
            <div className="flex-shrink-0">
              <Link
                to="/contact"
                className="btn-primary inline-flex items-center gap-2 rounded-lg px-6 py-3.5 text-base"
              >
                Register Your Interest
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Network Inquiry Form */}
      <section id="network-form" className="py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <div className="text-center">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl">
              Network Solutions Inquiry
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Tell us about your business and goals. We'll create a custom solution for you.
            </p>
          </div>

          {submitted ? (
            <div className="mt-12 card rounded-2xl p-8 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-teal-50">
                <Check className="h-6 w-6 text-teal" />
              </div>
              <h3 className="mt-4 font-serif text-lg font-semibold text-gray-800">Thank you for your inquiry!</h3>
              <p className="mt-2 text-gray-600">
                Our enterprise team will be in touch within 24-48 hours to discuss your needs.
              </p>
            </div>
          ) : (
            <form
              name="network-inquiry"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="mt-12 card rounded-2xl p-8"
            >
              <input type="hidden" name="form-name" value="network-inquiry" />
              <p className="hidden">
                <label>
                  Don't fill this out: <input name="bot-field" />
                </label>
              </p>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    required
                    value={formData.companyName}
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
                  <label htmlFor="businessType" className="block text-sm font-medium text-gray-700">
                    Business Type *
                  </label>
                  <select
                    id="businessType"
                    name="businessType"
                    required
                    value={formData.businessType}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-800 focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal"
                  >
                    <option value="">Select type</option>
                    <option value="Multi-location Local">Multi-location Local Business</option>
                    <option value="Franchise">Franchise</option>
                    <option value="National Brand">National Brand</option>
                    <option value="Agency">Marketing Agency</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="locations" className="block text-sm font-medium text-gray-700">
                    Number of Locations
                  </label>
                  <select
                    id="locations"
                    name="locations"
                    value={formData.locations}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-800 focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal"
                  >
                    <option value="">Select</option>
                    <option value="2-3">2-3 locations</option>
                    <option value="4-10">4-10 locations</option>
                    <option value="10-50">10-50 locations</option>
                    <option value="50+">50+ locations</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="product" className="block text-sm font-medium text-gray-700">
                    Product Interest *
                  </label>
                  <select
                    id="product"
                    name="product"
                    required
                    value={formData.product}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-800 focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal"
                  >
                    <option value="">Select product</option>
                    <option value="Multi-Location Listings">Multi-Location Listings</option>
                    <option value="WhatsApp Broadcast">WhatsApp Network Broadcast</option>
                    <option value="Category Sponsorship">Category Sponsorship</option>
                    <option value="National Brand Advertising">National Brand Advertising</option>
                    <option value="Lead Generation">Lead Generation</option>
                    <option value="Custom Package">Custom Package</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-700">
                    Monthly Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-800 focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal"
                  >
                    <option value="">Select budget</option>
                    <option value="R1,000 - R5,000">R1,000 - R5,000</option>
                    <option value="R5,000 - R10,000">R5,000 - R10,000</option>
                    <option value="R10,000 - R25,000">R10,000 - R25,000</option>
                    <option value="R25,000+">R25,000+</option>
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Tell us about your goals
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-800 placeholder-gray-400 focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal"
                    placeholder="What are you hoping to achieve with TownConnect?"
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
