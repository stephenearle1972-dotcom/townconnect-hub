import { useState } from 'react'
import { Mail, MapPin, Users, Check } from 'lucide-react'

const inquiryTypes = [
  'General Inquiry',
  'Business Listing',
  'Network Solutions',
  'Become an Area Partner',
  'Press/Media',
  'Other',
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: '',
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
            backgroundImage: `url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
          }}
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 text-center lg:px-8">
          <h1 className="font-serif text-4xl font-bold tracking-tight text-white sm:text-5xl animate-fade">
            Get in Touch
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/90 animate-fade">
            Have a question or want to work with us? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Info */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-gray-800">Contact Information</h2>
              <p className="mt-4 text-gray-600">
                Reach out to us through any of the channels below. We typically respond
                within 24 hours.
              </p>

              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-teal text-white">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Email</h3>
                    <a
                      href="mailto:hello@townconnect.co.za"
                      className="mt-1 text-teal hover:underline"
                    >
                      hello@townconnect.co.za
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-teal text-white">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Location</h3>
                    <p className="mt-1 text-gray-600">South Africa</p>
                  </div>
                </div>
              </div>

              {/* Partner Interest */}
              <div className="mt-12 card rounded-2xl p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal text-white">
                    <Users className="h-5 w-5" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-gray-800">
                    Become an Area Partner
                  </h3>
                </div>
                <p className="mt-4 text-gray-600">
                  Interested in operating TownConnect in your town or neighbourhood? We work with trusted
                  partners to expand our network across South Africa.
                </p>
                <p className="mt-3 text-gray-600">
                  This is a family business model - Area Partners share in the revenue while
                  benefiting from our platform, technology, and support.
                </p>
                <p className="mt-4 text-sm font-medium text-gray-800">
                  Select "Become an Area Partner" in the contact form to learn more.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              {submitted ? (
                <div className="card rounded-2xl p-8 text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-teal-50">
                    <Check className="h-6 w-6 text-teal" />
                  </div>
                  <h3 className="mt-4 font-serif text-lg font-semibold text-gray-800">
                    Message Sent!
                  </h3>
                  <p className="mt-2 text-gray-600">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  className="card rounded-2xl p-8"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <p className="hidden">
                    <label>
                      Don't fill this out: <input name="bot-field" />
                    </label>
                  </p>

                  <h2 className="font-serif text-xl font-bold text-gray-800">Send us a message</h2>
                  <p className="mt-2 text-sm text-gray-600">
                    Fill out the form below and we'll be in touch soon.
                  </p>

                  <div className="mt-6 space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
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
                        Phone (Optional)
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-800 placeholder-gray-400 focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal"
                      />
                    </div>

                    <div>
                      <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700">
                        Inquiry Type *
                      </label>
                      <select
                        id="inquiryType"
                        name="inquiryType"
                        required
                        value={formData.inquiryType}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-800 focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal"
                      >
                        <option value="">Select inquiry type</option>
                        {inquiryTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-800 placeholder-gray-400 focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal"
                        placeholder="How can we help you?"
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn-primary w-full rounded-lg px-6 py-3.5 text-base font-semibold"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
