import { Link } from 'react-router-dom'
import {
  Search,
  MessageCircle,
  Calendar,
  ArrowRight,
  ExternalLink,
  MapPin
} from 'lucide-react'
import { towns } from '../data/towns'

export default function Home() {
  const scrollToTowns = () => {
    document.getElementById('town-directory')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div>
      {/* Hero Section with South African community montage */}
      <section className="relative min-h-[90vh] flex items-center">
        {/* Background image - South African street market/community scene */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1577948000111-9c970dfe3743?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
          }}
        />
        {/* Teal gradient overlay */}
        <div className="hero-overlay absolute inset-0" />

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 lg:px-8">
          <div className="max-w-3xl animate-fade">
            <h1 className="font-serif text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Hyperlocal Business Discovery
              <span className="block text-white/90">Across South Africa</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/90">
              Connecting communities with local businesses through WhatsApp-first directories.
              Find everything you need in your town, right at your fingertips.
            </p>
            <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:gap-6">
              <button
                onClick={scrollToTowns}
                className="btn-primary w-full rounded-lg px-8 py-4 text-base sm:w-auto"
              >
                Find Your Town
              </button>
              <Link
                to="/business"
                className="btn-white-outline flex w-full items-center justify-center gap-2 rounded-lg px-8 py-4 text-base sm:w-auto"
              >
                List Your Business
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Town Directory Section */}
      <section id="town-directory" className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl">
              Explore Our Towns
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Discover local businesses, events, and services in communities across South Africa
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {towns.map((town) => (
              <div
                key={town.id}
                className="card group overflow-hidden rounded-2xl p-6"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-gray-800">
                      {town.name}
                      <span className="text-teal">Connect</span>
                    </h3>
                    <div className="mt-1 flex items-center gap-1 text-sm text-gray-500">
                      <MapPin className="h-4 w-4" />
                      {town.region}
                    </div>
                  </div>
                  <span className="inline-flex items-center rounded-full bg-teal-50 px-2.5 py-0.5 text-xs font-medium text-teal">
                    Active
                  </span>
                </div>

                <p className="mt-4 text-sm text-gray-600">{town.description}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {town.categories.slice(0, 3).map((category) => (
                    <span
                      key={category}
                      className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-700"
                    >
                      {category}
                    </span>
                  ))}
                </div>

                <div className="mt-4 text-sm text-gray-500">
                  <span className="font-semibold text-gray-800">{town.businessCount}</span> businesses listed
                </div>

                <div className="mt-6 flex gap-3">
                  <a
                    href={town.siteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary flex flex-1 items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm"
                  >
                    Visit Site
                    <ExternalLink className="h-4 w-4" />
                  </a>
                  {town.whatsappUrl && (
                    <a
                      href={town.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center rounded-lg border-2 border-green-500 px-4 py-2.5 text-green-600 transition-colors hover:bg-green-50"
                    >
                      <MessageCircle className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-light px-4 py-2 text-sm font-medium text-amber-hover">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-amber"></span>
              </span>
              More towns launching soon
            </div>
            <p className="mt-4">
              <Link to="/towns" className="text-teal hover:text-teal-dark font-medium transition-colors">
                View all towns and upcoming launches <ArrowRight className="inline h-4 w-4" />
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl">
              How TownConnect Works
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Simple, local, connected. Discover what makes TownConnect different.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Feature 1 */}
            <div className="card rounded-2xl p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal text-white">
                <Search className="h-6 w-6" />
              </div>
              <h3 className="mt-6 font-serif text-xl font-semibold text-gray-800">
                Browse Local Businesses
              </h3>
              <p className="mt-4 text-gray-600">
                Easily find and discover businesses in your town. From restaurants to services,
                everything is organized by category and easy to search.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="card rounded-2xl p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-500 text-white">
                <MessageCircle className="h-6 w-6" />
              </div>
              <h3 className="mt-6 font-serif text-xl font-semibold text-gray-800">
                WhatsApp Directory Bot
              </h3>
              <p className="mt-4 text-gray-600">
                Get instant business information via WhatsApp. Simply message our bot
                to find contact details, hours, and more without leaving the chat.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="card rounded-2xl p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber text-white">
                <Calendar className="h-6 w-6" />
              </div>
              <h3 className="mt-6 font-serif text-xl font-semibold text-gray-800">
                Events, Jobs & Classifieds
              </h3>
              <p className="mt-4 text-gray-600">
                Stay updated with local events, job opportunities, and classifieds.
                Your one-stop platform for everything happening in your community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* For Businesses CTA */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl">
            {/* Background */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
              }}
            />
            <div className="hero-overlay absolute inset-0" />

            {/* Content */}
            <div className="relative px-6 py-16 sm:px-12 lg:px-16">
              <div className="flex flex-col items-center text-center lg:flex-row lg:justify-between lg:text-left">
                <div className="max-w-xl">
                  <h2 className="font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    Want to list your business?
                  </h2>
                  <p className="mt-4 text-lg text-white/90">
                    Join thousands of local businesses across South Africa.
                    Get discovered by customers in your community.
                  </p>
                </div>
                <div className="mt-8 lg:mt-0 lg:ml-8">
                  <Link
                    to="/business"
                    className="btn-primary inline-flex items-center gap-2 rounded-lg px-8 py-4 text-base"
                  >
                    Get Started
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
