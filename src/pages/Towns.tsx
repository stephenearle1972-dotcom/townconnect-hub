import { Link } from 'react-router-dom'
import {
  MapPin,
  Users,
  Building2,
  ExternalLink,
  MessageCircle,
  Clock,
  ArrowRight,
  Plus
} from 'lucide-react'
import { towns, upcomingTowns } from '../data/towns'
import TownMap from '../components/TownMap'

export default function Towns() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1489824904134-891ab64532f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
          }}
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 text-center lg:px-8">
          <h1 className="font-serif text-4xl font-bold tracking-tight text-white sm:text-5xl animate-fade">
            TownConnect Communities
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/90 animate-fade">
            Find your local directory and discover businesses in your community
          </p>
        </div>
      </section>

      {/* Active Towns */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-50">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal opacity-75"></span>
                <span className="relative inline-flex h-3 w-3 rounded-full bg-teal"></span>
              </span>
            </div>
            <h2 className="font-serif text-2xl font-bold text-gray-800">Active Communities</h2>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {towns.map((town) => (
              <div
                key={town.id}
                className="card flex flex-col overflow-hidden rounded-2xl"
              >
                {/* Town Header */}
                <div className="bg-teal-dark px-6 py-8 text-white">
                  <h3 className="font-serif text-2xl font-bold">
                    {town.name}
                    <span className="text-amber">Connect</span>
                  </h3>
                  <div className="mt-2 flex items-center gap-2 text-white/80">
                    <MapPin className="h-4 w-4" />
                    {town.region}
                  </div>
                </div>

                {/* Town Details */}
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-gray-600">{town.description}</p>

                  <div className="mt-6 grid grid-cols-2 gap-4">
                    {town.population && (
                      <div className="rounded-lg bg-gray-50 p-3">
                        <div className="flex items-center gap-2 text-gray-500">
                          <Users className="h-4 w-4" />
                          <span className="text-xs font-medium uppercase">Population</span>
                        </div>
                        <div className="mt-1 font-semibold text-gray-800">{town.population}</div>
                      </div>
                    )}
                    <div className="rounded-lg bg-gray-50 p-3">
                      <div className="flex items-center gap-2 text-gray-500">
                        <Building2 className="h-4 w-4" />
                        <span className="text-xs font-medium uppercase">Businesses</span>
                      </div>
                      <div className="mt-1 font-semibold text-gray-800">{town.businessCount}</div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <div className="text-xs font-medium uppercase text-gray-500">Key Categories</div>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {town.categories.map((category) => (
                        <span
                          key={category}
                          className="inline-flex items-center rounded-full bg-teal-50 px-3 py-1 text-xs font-medium text-teal"
                        >
                          {category}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Buttons pinned to bottom */}
                  <div className="mt-auto pt-6">
                    <div className="flex gap-3">
                      <a
                        href={town.siteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary flex flex-1 items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-semibold"
                      >
                        Visit {town.name}Connect
                        <ExternalLink className="h-4 w-4" />
                      </a>
                      {town.whatsappUrl && (
                        <a
                          href={town.whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center rounded-lg border-2 border-green-600 px-4 py-3 text-green-600 transition-colors hover:bg-green-50"
                          title="WhatsApp Directory"
                        >
                          <MessageCircle className="h-5 w-5" />
                        </a>
                      )}
                    </div>
                    {town.listingUrl && (
                      <a
                        href={town.listingUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 flex w-full items-center justify-center gap-2 rounded-lg border-2 border-teal px-4 py-3 text-sm font-semibold text-teal transition-colors hover:bg-teal-50"
                      >
                        <Plus className="h-4 w-4" />
                        Add Your Business
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Map */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="font-serif text-2xl font-bold text-gray-800">Our Coverage</h2>
          <p className="mt-2 text-gray-600">
            TownConnect is growing across South Africa. Click on a marker to learn more.
          </p>

          <div className="mt-8 overflow-hidden rounded-2xl shadow-lg">
            <TownMap />
          </div>
        </div>
      </section>

      {/* Upcoming Towns */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-light">
              <Clock className="h-5 w-5 text-amber" />
            </div>
            <h2 className="font-serif text-2xl font-bold text-gray-800">Launching Soon</h2>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {upcomingTowns.map((town) => (
              <div
                key={town.id}
                className="relative overflow-hidden rounded-2xl border-2 border-dashed border-gray-300 bg-gray-50/50 p-6"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-serif text-lg font-bold text-gray-800">
                      {town.name}
                      <span className="text-gray-400">Connect</span>
                    </h3>
                    <div className="mt-1 flex items-center gap-2 text-sm text-gray-500">
                      <MapPin className="h-4 w-4" />
                      {town.region}
                    </div>
                  </div>
                  {town.launchDate && (
                    <span className="inline-flex items-center rounded-full bg-amber-light px-2.5 py-0.5 text-xs font-medium text-amber-hover">
                      {town.launchDate}
                    </span>
                  )}
                </div>
                <p className="mt-4 text-sm text-gray-600">{town.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {town.categories.map((category) => (
                    <span
                      key={category}
                      className="inline-flex items-center rounded-full bg-gray-200 px-2.5 py-0.5 text-xs font-medium text-gray-600"
                    >
                      {category}
                    </span>
                  ))}
                </div>
              </div>
            ))}

            {/* More coming placeholder */}
            <div className="flex items-center justify-center rounded-2xl border-2 border-dashed border-gray-200 bg-white p-6">
              <div className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
                  <span className="text-2xl text-teal">+</span>
                </div>
                <p className="mt-3 font-medium text-gray-800">More communities coming</p>
                <p className="mt-1 text-sm text-gray-500">We're expanding across South Africa</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Want TownConnect in Your Area CTA */}
      <section className="bg-teal-dark py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex flex-col items-center text-center lg:flex-row lg:justify-between lg:text-left">
            <div className="max-w-xl">
              <h2 className="font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Want TownConnect in Your Area?
              </h2>
              <p className="mt-4 text-lg text-white/80">
                Interested in bringing TownConnect to your town or neighbourhood? We work with trusted
                partners to expand our network across South Africa.
              </p>
              <p className="mt-2 text-white/60">
                This is a family business model - contact us to learn more about operating
                a TownConnect directory in your community.
              </p>
            </div>
            <div className="mt-8 lg:mt-0 lg:ml-8">
              <Link
                to="/contact"
                className="btn-primary inline-flex items-center gap-2 rounded-lg px-6 py-3.5 text-base"
              >
                Contact Us
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
