import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Communities', href: '/towns' },
  { name: 'For Businesses', href: '/business' },
  { name: 'FAQ', href: '/#faq', isAnchor: true },
  { name: 'Network Solutions', href: '/network' },
  { name: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const isActive = (path: string) => {
    if (path === '/' || path === '/#faq') {
      return location.pathname === '/'
    }
    return location.pathname.startsWith(path)
  }

  const handleNavClick = (item: typeof navigation[0], e: React.MouseEvent) => {
    if (item.isAnchor) {
      e.preventDefault()
      if (location.pathname === '/') {
        // Already on home page, just scroll
        document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })
      } else {
        // Navigate to home page then scroll
        navigate('/')
        setTimeout(() => {
          document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      }
    }
  }

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal text-white font-bold text-xl">
            TC
          </div>
          <span className="text-xl font-bold text-gray-800">
            Town<span className="text-teal">Connect</span>
          </span>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              onClick={(e) => handleNavClick(item, e)}
              className={`text-sm font-semibold transition-colors ${
                isActive(item.href)
                  ? 'text-teal'
                  : 'text-gray-700 hover:text-teal'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* CTA Button - Desktop */}
        <div className="hidden lg:block">
          <Link
            to="/business"
            className="btn-primary rounded-lg px-5 py-2.5 text-sm"
          >
            List Your Business
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="lg:hidden -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="sr-only">Open menu</span>
          {mobileMenuOpen ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="space-y-1 border-t border-gray-200 bg-white px-4 pb-4 pt-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block rounded-lg px-3 py-3.5 text-base font-semibold transition-colors ${
                  isActive(item.href)
                    ? 'bg-teal-50 text-teal'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
                onClick={(e) => {
                  handleNavClick(item, e)
                  setMobileMenuOpen(false)
                }}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/business"
              className="btn-primary mt-4 block w-full rounded-lg px-3 py-2.5 text-center text-base"
              onClick={() => setMobileMenuOpen(false)}
            >
              List Your Business
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
