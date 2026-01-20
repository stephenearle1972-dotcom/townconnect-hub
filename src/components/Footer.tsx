import { Link } from 'react-router-dom'
import { Mail, MapPin } from 'lucide-react'

const footerLinks = {
  towns: [
    { name: 'VaalwaterConnect', href: 'https://vaalwaterconnect.co.za', external: true },
    { name: 'MenlynConnect', href: 'https://comfy-paprenjak-68fb7b.netlify.app/', external: true },
    { name: 'Port Alfred Connect', href: 'https://wonderful-kheer-842fe7.netlify.app/', external: true },
  ],
  company: [
    { name: 'About Us', href: '/contact' },
    { name: 'Contact', href: '/contact' },
    { name: 'For Businesses', href: '/business' },
    { name: 'Network Solutions', href: '/network' },
  ],
  resources: [
    { name: 'All Towns', href: '/towns' },
    { name: 'Business Pricing', href: '/business' },
    { name: 'Become an Operator', href: '/contact' },
  ],
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal text-white font-bold text-xl">
                TC
              </div>
              <span className="text-xl font-bold text-white">
                Town<span className="text-teal-light">Connect</span>
              </span>
            </Link>
            <p className="mt-4 text-sm leading-6 text-gray-400">
              Connecting communities with local businesses through WhatsApp-first directories across South Africa.
            </p>
            <div className="mt-4 flex flex-col gap-2 text-sm">
              <a
                href="mailto:hello@townconnect.co.za"
                className="flex items-center gap-2 hover:text-teal-light transition-colors"
              >
                <Mail className="h-4 w-4" />
                hello@townconnect.co.za
              </a>
              <div className="flex items-center gap-2 text-gray-500">
                <MapPin className="h-4 w-4" />
                South Africa
              </div>
            </div>
          </div>

          {/* Towns */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Our Towns
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.towns.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-400 hover:text-teal-light transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Company
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-gray-400 hover:text-teal-light transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Resources
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-gray-400 hover:text-teal-light transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-gray-500">
              &copy; {currentYear} TownConnect. All rights reserved.
            </p>
            <p className="text-sm text-gray-600">
              A family-operated network of hyperlocal directories
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
