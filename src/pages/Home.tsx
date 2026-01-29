import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Globe,
  Zap,
  Check,
  ArrowRight,
  MapPin,
  Phone,
  Mail,
  Send,
  Briefcase,
  TrendingUp,
  Shield
} from 'lucide-react'
import { towns } from '../data/towns'

export default function Home() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    preferredArea: '',
    whyPartner: '',
    howHeard: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const scrollToApplication = () => {
    document.getElementById('partner-application')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToAreas = () => {
    document.getElementById('available-areas')?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const formBody = new URLSearchParams({
        'form-name': 'partner-application',
        ...formData
      }).toString()

      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formBody
      })
      setSubmitted(true)
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitted(true)
    }
  }

  const liveTowns = towns.filter(t => t.isActive && parseInt(t.businessCount) > 0)

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
          }}
        />
        <div className="hero-overlay absolute inset-0" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 lg:px-8">
          <div className="max-w-3xl animate-fade">
            <span className="inline-block rounded-full bg-amber/20 px-4 py-1.5 text-sm font-semibold text-white mb-6">
              Area Partner Program
            </span>
            <h1 className="font-serif text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Own a Local Directory
              <span className="block text-amber">Business</span>
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-8 text-white/90">
              Launch your own TownConnect site. We provide everything — website, WhatsApp bot,
              training, and support. You focus on signing local businesses and growing your directory.
            </p>
            <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:gap-6">
              <button
                onClick={scrollToApplication}
                className="btn-primary w-full rounded-lg px-8 py-4 text-lg sm:w-auto"
              >
                Apply for Your Area
              </button>
              <button
                onClick={scrollToAreas}
                className="btn-white-outline flex w-full items-center justify-center gap-2 rounded-lg px-8 py-4 text-base sm:w-auto"
              >
                See Available Areas
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition - 3 columns */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl">
              Why Partner With TownConnect?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Everything you need to run a profitable local directory business
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Business in a Box */}
            <div className="card rounded-2xl p-8 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-teal text-white">
                <Briefcase className="h-8 w-8" />
              </div>
              <h3 className="mt-6 font-serif text-2xl font-bold text-gray-800">
                Business in a Box
              </h3>
              <p className="mt-4 text-gray-600">
                Website, WhatsApp bot, Facebook page, Google Business profile —
                all set up and ready to go. Just add your town name.
              </p>
            </div>

            {/* We Handle the Tech */}
            <div className="card rounded-2xl p-8 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-teal text-white">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="mt-6 font-serif text-2xl font-bold text-gray-800">
                We Handle the Tech
              </h3>
              <p className="mt-4 text-gray-600">
                Listings, updates, support, bug fixes — all managed centrally.
                You never touch code or worry about servers.
              </p>
            </div>

            {/* Revenue Partnership */}
            <div className="card rounded-2xl p-8 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-amber text-white">
                <TrendingUp className="h-8 w-8" />
              </div>
              <h3 className="mt-6 font-serif text-2xl font-bold text-gray-800">
                Revenue Partnership
              </h3>
              <p className="mt-4 text-gray-600">
                Build sustainable monthly income as your local directory grows.
                Earn from every business you sign up in your area.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="font-serif text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl">
                What You Get
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                A complete, turnkey local directory business with everything included:
              </p>

              <ul className="mt-8 space-y-4">
                {[
                  'Branded [Town]Connect website',
                  'WhatsApp directory bot',
                  'Facebook Page setup',
                  'Google Business Profile',
                  'Training & onboarding',
                  'Ongoing technical support',
                  'Central listing management',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal text-white">
                      <Check className="h-4 w-4" />
                    </div>
                    <span className="text-gray-800 font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-teal to-teal-light text-white text-center">
                <p className="text-white/80 text-sm uppercase tracking-wider">Setup Fee</p>
                <p className="text-3xl font-bold">R19,999</p>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Business owner with laptop"
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - 3 Steps */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl">
              How It Works
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              From application to earning in just 3 simple steps
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Step 1 */}
            <div className="relative">
              <div className="absolute -top-4 -left-4 flex h-12 w-12 items-center justify-center rounded-full bg-teal text-white text-xl font-bold shadow-lg">
                1
              </div>
              <div className="card rounded-2xl p-8 pt-12">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-teal-50 text-teal">
                  <Send className="h-7 w-7" />
                </div>
                <h3 className="mt-6 font-serif text-xl font-bold text-gray-800">
                  Apply
                </h3>
                <p className="mt-4 text-gray-600">
                  Tell us which area you want to partner for. We'll review your application
                  and get back to you within 48 hours.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="absolute -top-4 -left-4 flex h-12 w-12 items-center justify-center rounded-full bg-teal text-white text-xl font-bold shadow-lg">
                2
              </div>
              <div className="card rounded-2xl p-8 pt-12">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-teal-50 text-teal">
                  <Zap className="h-7 w-7" />
                </div>
                <h3 className="mt-6 font-serif text-xl font-bold text-gray-800">
                  Setup
                </h3>
                <p className="mt-4 text-gray-600">
                  We build everything in 48 hours — your branded website, WhatsApp bot,
                  social pages, and train you on the sales process.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="absolute -top-4 -left-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber text-white text-xl font-bold shadow-lg">
                3
              </div>
              <div className="card rounded-2xl p-8 pt-12">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-amber-light text-amber">
                  <TrendingUp className="h-7 w-7" />
                </div>
                <h3 className="mt-6 font-serif text-xl font-bold text-gray-800">
                  Earn
                </h3>
                <p className="mt-4 text-gray-600">
                  Start signing local businesses. Build recurring monthly income
                  as your directory grows in your community.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={scrollToApplication}
              className="btn-primary inline-flex items-center gap-2 rounded-lg px-8 py-4 text-base"
            >
              Start Your Application
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Available Areas Section */}
      <section id="available-areas" className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl">
              Available Areas
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              700+ communities across South Africa. Here are our current live sites:
            </p>
          </div>

          {/* Live Sites */}
          <div className="mb-12">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-teal mb-6">
              Live Sites (Partner Success Stories)
            </h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {liveTowns.map((town) => (
                <a
                  key={town.id}
                  href={town.siteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-xl border border-teal/20 bg-teal-50/50 hover:bg-teal-50 transition-colors"
                >
                  <div className="flex h-3 w-3 rounded-full bg-green-500" />
                  <div>
                    <p className="font-semibold text-gray-800">{town.name}Connect</p>
                    <p className="text-sm text-gray-500">{town.region} • {town.businessCount} businesses</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Open Areas CTA */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-teal to-teal-dark p-8 md:p-12 text-center text-white">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl" />
            <Globe className="h-16 w-16 mx-auto mb-6 opacity-80" />
            <h3 className="font-serif text-2xl md:text-3xl font-bold mb-4">
              Your Community Could Be Next
            </h3>
            <p className="text-white/90 max-w-2xl mx-auto mb-8">
              Pretoria, Johannesburg, Cape Town, Durban, Bloemfontein, East London,
              Polokwane, Nelspruit, Kimberley, Rustenburg... and hundreds more towns
              and neighbourhoods across all 9 provinces are available.
            </p>
            <button
              onClick={scrollToApplication}
              className="bg-amber hover:bg-amber-hover text-white font-semibold px-8 py-4 rounded-lg transition-all hover:-translate-y-1 shadow-lg"
            >
              Claim Your Area Now
            </button>
          </div>
        </div>
      </section>

      {/* Partner Application Form */}
      <section id="partner-application" className="py-16 lg:py-24 bg-gray-50">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl">
              Apply to Become a Partner
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Fill out the form below and we'll be in touch within 48 hours
            </p>
          </div>

          {submitted ? (
            <div className="card rounded-3xl p-12 text-center">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-teal-50 text-teal mb-6">
                <Check className="h-10 w-10" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-gray-800 mb-4">
                Application Received!
              </h3>
              <p className="text-gray-600 mb-6">
                Thank you for your interest in becoming a TownConnect Area Partner.
                We'll review your application and contact you within 48 hours.
              </p>
              <p className="text-sm text-gray-500">
                Questions? WhatsApp us at <a href="https://wa.me/27688986081" className="text-teal font-medium">068 898 6081</a>
              </p>
            </div>
          ) : (
            <form
              name="partner-application"
              method="POST"
              data-netlify="true"
              onSubmit={handleSubmit}
              className="card rounded-3xl p-8 md:p-12"
            >
              <input type="hidden" name="form-name" value="partner-application" />

              <div className="space-y-6">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none transition-all"
                    placeholder="Your full name"
                  />
                </div>

                {/* Phone & Email */}
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone (WhatsApp) *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none transition-all"
                        placeholder="082 123 4567"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none transition-all"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>
                </div>

                {/* Preferred Area */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Preferred Area / Town *
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      name="preferredArea"
                      required
                      value={formData.preferredArea}
                      onChange={(e) => setFormData({ ...formData, preferredArea: e.target.value })}
                      className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none transition-all"
                      placeholder="e.g., Sandton, Ballito, Stellenbosch..."
                    />
                  </div>
                </div>

                {/* Why Partner */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Why do you want to be a TownConnect partner? *
                  </label>
                  <textarea
                    name="whyPartner"
                    required
                    rows={4}
                    value={formData.whyPartner}
                    onChange={(e) => setFormData({ ...formData, whyPartner: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none transition-all resize-none"
                    placeholder="Tell us about your background and why you'd be a great partner..."
                  />
                </div>

                {/* How Heard */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    How did you hear about us?
                  </label>
                  <select
                    name="howHeard"
                    value={formData.howHeard}
                    onChange={(e) => setFormData({ ...formData, howHeard: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none transition-all bg-white"
                  >
                    <option value="">Select an option</option>
                    <option value="google">Google Search</option>
                    <option value="facebook">Facebook</option>
                    <option value="whatsapp">WhatsApp</option>
                    <option value="referral">Friend / Referral</option>
                    <option value="existing-site">Saw a TownConnect site</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full btn-primary rounded-xl py-4 text-lg font-semibold flex items-center justify-center gap-2"
                >
                  Submit Application
                  <ArrowRight className="h-5 w-5" />
                </button>

                <p className="text-center text-sm text-gray-500">
                  By submitting, you agree to be contacted about the TownConnect Partner Program.
                </p>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* Footer CTA for Businesses */}
      <section className="py-12 bg-gray-800">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="text-white">
              <p className="text-lg font-semibold">Already a business owner?</p>
              <p className="text-gray-400">List your business with your local TownConnect directory</p>
            </div>
            <Link
              to="/business"
              className="btn-primary rounded-lg px-6 py-3 text-sm whitespace-nowrap"
            >
              List Your Business
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
