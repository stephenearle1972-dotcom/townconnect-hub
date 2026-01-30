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
  Shield,
  ChevronDown
} from 'lucide-react'
import { towns } from '../data/towns'

// FAQ Data organized by sections
const faqSections = [
  {
    title: 'The Opportunity',
    questions: [
      {
        q: 'What is a TownConnect Area Partner?',
        a: 'You become the local face of TownConnect in your town or suburb. You sign up local businesses to our WhatsApp directory platform, build relationships in your community, and earn 50% of all subscription revenue from your area. It\'s a real business you can run from your phone.'
      },
      {
        q: 'How much can I earn?',
        a: 'That depends on your hustle. At R300 per business per month, with 100 businesses you\'re looking at R15,000/month in your pocket (your 50% share). Some larger towns could support 300-500 listings. The ceiling is high for motivated partners.'
      },
      {
        q: 'Do I need business experience?',
        a: 'No. If you can talk to people, use WhatsApp, and walk into a shop to introduce yourself, you have what it takes. We provide training, scripts, and support. Your main job is building relationships — we handle everything technical.'
      },
      {
        q: 'Is this a full-time or part-time opportunity?',
        a: 'Your choice. Many partners start part-time (10-15 hours/week) while building their listing base. Once established, maintenance takes less time. Some partners treat it as a side income; others build it into a full-time operation with their own sales reps.'
      },
      {
        q: 'What areas are available?',
        a: 'Most South African towns and suburbs are open. We\'ll confirm exclusivity for your chosen area before you commit. First come, first served.'
      }
    ]
  },
  {
    title: 'What You Do',
    questions: [
      {
        q: 'What does my typical day look like?',
        a: 'Morning: Check WhatsApp for any business enquiries or messages. During the day: Visit 3-5 local businesses to introduce TownConnect. Afternoon: Follow up with interested businesses, send payment links. Evening: Forward any new sign-ups to TownConnect for listing. No office. No set hours. You structure your own time.'
      },
      {
        q: 'How do I sign up businesses?',
        a: 'Walk in, introduce yourself, show them how the WhatsApp bot works on your phone. Most business owners are impressed when they see their competitor already listed. We provide you with a simple pitch script and demo video.'
      },
      {
        q: 'What do I say to businesses?',
        a: '"Hi, I\'m [name] from [Town]Connect. We\'re a local WhatsApp directory — customers text us to find businesses like yours. For R300/month, you get listed on our bot, our website, and our map. Can I show you how it works?" Then demo the bot live.'
      },
      {
        q: 'How many businesses should I approach per week?',
        a: 'We recommend 15-25 approaches per week when building your base. Expect roughly 50-60% to say yes. Once you hit 100+ listings, your focus shifts to renewals and referrals.'
      },
      {
        q: 'Do I need to join local WhatsApp groups?',
        a: 'Yes — this is where the magic happens. Join community groups, introduce TownConnect, and watch residents start using the bot. When business owners see customers finding their competitors on TownConnect, they want in.'
      },
      {
        q: 'What if a business says no?',
        a: 'No problem. Thank them, leave your details, move on. Many come back later when they see competitors listed. Don\'t push — the platform sells itself once it has momentum.'
      },
      {
        q: 'Can I hire my own sales reps?',
        a: 'Absolutely. Many partners appoint reps and pay them from their 50% share (typically 30-40% of what you earn on their sign-ups). You manage and pay your reps directly — TownConnect has no obligation to them.'
      }
    ]
  },
  {
    title: 'What TownConnect Does',
    questions: [
      {
        q: 'What does TownConnect handle?',
        a: 'All technology (website, WhatsApp bot, hosting, updates), listing management (we add/edit all business listings), payment processing and reconciliation, technical support and troubleshooting, platform improvements and new features, and network-wide marketing and brand building.'
      },
      {
        q: 'Who builds the business listings?',
        a: 'You collect the details (business name, phone, WhatsApp, services, photo). You send them to us. We create the listing within 24-48 hours. You never touch the technical side.'
      },
      {
        q: 'Who updates listings if details change?',
        a: 'Send us the updated info via WhatsApp or email. We make the change same-day. Businesses can also request changes directly through the website.'
      },
      {
        q: 'What if the website or bot breaks?',
        a: 'That\'s on us. We monitor all sites and fix issues fast. You just report it — we resolve it. You should never need to troubleshoot technology.'
      },
      {
        q: 'Do you provide marketing materials?',
        a: 'Yes. Flyers, WhatsApp messages, pitch scripts, social media templates. All branded for your town. Ready to use.'
      }
    ]
  },
  {
    title: 'Money & Payments',
    questions: [
      {
        q: 'How much does it cost to become an Area Partner?',
        a: 'R19,999 once-off Area Reservation Fee. This covers your exclusive territory, full platform setup, training, and ongoing support. No hidden fees. No monthly platform charges.'
      },
      {
        q: 'How do businesses pay?',
        a: 'Businesses pay via EFT, card, or cash. All payments go to the central TownConnect account. We reconcile monthly and pay your 50% share by the 7th of the following month.'
      },
      {
        q: 'What\'s the revenue split?',
        a: '50/50 on net revenue received. If a business pays R300 and payment processing fees are R9, the net is R291 — you get R145.50 and TownConnect gets R145.50. Simple and transparent.'
      },
      {
        q: 'When do I get paid?',
        a: 'Monthly. We reconcile all payments received during the month and pay your share by the 7th of the following month. You receive a statement showing all transactions.'
      },
      {
        q: 'What if a business pays me cash?',
        a: 'Deposit it to the TownConnect account within 48 hours and send proof of payment. Your share is calculated on what reflects in the account.'
      },
      {
        q: 'Are there any ongoing fees I pay to TownConnect?',
        a: 'No. Your only cost is the R19,999 setup fee. After that, we take our share from revenue — you never pay us out of pocket.'
      },
      {
        q: 'What happens if a business requests a refund?',
        a: 'Refunds are shared equally. If we refund R300 to a business, R150 comes from your share and R150 from TownConnect\'s share. Same split, same risk.'
      }
    ]
  },
  {
    title: 'What Businesses Get',
    questions: [
      {
        q: 'What does a business get for R300/month?',
        a: 'Listed on the WhatsApp directory bot (customers find them instantly), full business page on the town website, pin on the interactive map, click-to-call, click-to-WhatsApp, click-to-email buttons, unlimited updates to their listing, and visibility to everyone using the platform.'
      },
      {
        q: 'Are there different pricing tiers?',
        a: 'Standard listing is R300/month (or R3,000/year with 2 months free). Some smaller towns operate at R200/month based on local market conditions. Premium tiers with featured placement are coming soon.'
      },
      {
        q: 'Can businesses pay annually?',
        a: 'Yes. Annual payment saves them 2 months (R3,000/year instead of R3,600). Many businesses prefer this — and it means guaranteed revenue for you.'
      },
      {
        q: 'What categories can businesses list in?',
        a: 'Home services, automotive, health & wellness, food & drinks, retail, professional services, construction, education, tourism, pets, agriculture, and more. If it\'s a legitimate local business, it can list.'
      }
    ]
  },
  {
    title: 'Support & Daily Operations',
    questions: [
      {
        q: 'Who handles queries from listed businesses?',
        a: 'You\'re the first point of contact for relationship matters (renewals, complaints, feedback). TownConnect handles technical issues (listing errors, bot problems, website bugs).'
      },
      {
        q: 'What do I need to check daily?',
        a: 'Your WhatsApp for business enquiries, any messages from TownConnect about new sign-ups or payments, and your local WhatsApp groups for opportunities. Takes 15-30 minutes on a quiet day.'
      },
      {
        q: 'Can I see how my bot is being used?',
        a: 'Yes. You get read access to an analytics spreadsheet showing every query made to your WhatsApp bot — what people searched for, when, and whether they found a result. This helps you identify gaps (businesses people want but aren\'t listed yet) and proves value to prospective advertisers.'
      },
      {
        q: 'What if a business wants to cancel?',
        a: 'Try to understand why and solve the problem. If they insist, let TownConnect know and we\'ll process the cancellation. No hard feelings — some businesses churn, that\'s normal.'
      },
      {
        q: 'What if a customer complains about a listed business?',
        a: 'Forward the complaint to the business owner. We\'re a directory, not a review platform. We don\'t mediate disputes between customers and businesses, but persistent complaints about a listing may result in removal.'
      },
      {
        q: 'How do I contact TownConnect support?',
        a: 'WhatsApp or email. We respond within 24 hours on business days, usually much faster.'
      },
      {
        q: 'Is there a partner community?',
        a: 'Yes. All Area Partners are part of a WhatsApp group where you can share tips, ask questions, and learn from each other. TownConnect founders are active in the group.'
      }
    ]
  },
  {
    title: 'Getting Started',
    questions: [
      {
        q: 'How do I apply?',
        a: 'Complete the application form on this page. We\'ll review your preferred area, confirm availability, and schedule a call to discuss the opportunity.'
      },
      {
        q: 'How long before my site is live?',
        a: 'Within 7 days of payment. We set up your website, WhatsApp bot, and all infrastructure. You receive training and can start signing businesses immediately.'
      },
      {
        q: 'What training do I get?',
        a: 'A 1-hour onboarding call covering: how the platform works, how to demo the bot, how to pitch businesses, how to collect payments, and how to submit listings. Plus written guides and video tutorials.'
      },
      {
        q: 'What equipment do I need?',
        a: 'A smartphone with WhatsApp is essential. Basic familiarity with Excel or Google Sheets helps — you\'ll review your analytics spreadsheet to track what people are searching for and identify sales opportunities.'
      },
      {
        q: 'What\'s the minimum commitment?',
        a: '24-month agreement. You may exit after 12 months with 60 days written notice.'
      }
    ]
  },
  {
    title: 'Legal & Ownership',
    questions: [
      {
        q: 'What do I get for R19,999?',
        a: 'You receive an exclusive license to operate a fully functional TownConnect site in your area, including: a branded website, AI-powered WhatsApp directory bot, Facebook page setup assistance, Google Business profile guidance, training, and ongoing technical support. You also get a 50/50 revenue share on all business listings in your area.'
      },
      {
        q: 'Do I own the website and WhatsApp bot?',
        a: 'No. TownConnect owns all technology, websites, bots, and platform infrastructure. As an Area Partner, you receive a license to use these tools exclusively in your assigned area for the duration of your agreement. This means you focus on sales and relationships — we handle all the tech.'
      },
      {
        q: 'What about the business listings I bring in?',
        a: 'All business listings and client data are owned by TownConnect. This ensures consistency across the network and protects both you and the businesses you sign up.'
      },
      {
        q: 'What happens if I want to exit?',
        a: 'You may exit after 12 months with 60 days written notice. All listings and client relationships remain with TownConnect. You keep any earned revenue share up to your exit date. The Area Reservation Fee is non-refundable.'
      },
      {
        q: 'Why is this structure good for me?',
        a: 'You get a turnkey business with zero tech headaches. We handle hosting, updates, payment processing, and listing management. You focus purely on growing your local network. When you succeed, we both succeed — that\'s why we split 50/50.'
      },
      {
        q: 'Is this a franchise?',
        a: 'No. You\'re an independent Area Partner, not a franchisee. You determine your own working methods, hours, and local marketing approach. We provide tools and support, not a prescribed operating system.'
      },
      {
        q: 'What if TownConnect is sold or changes ownership?',
        a: 'Your agreement transfers to any successor. Your territorial rights and revenue share are protected for the term of your agreement.'
      },
      {
        q: 'Is there a formal agreement?',
        a: 'Yes. Before your site goes live, you\'ll sign an Area Partner Agreement that covers all terms, responsibilities, and protections for both parties.'
      }
    ]
  }
]

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
  const [openFaqs, setOpenFaqs] = useState<Set<string>>(new Set())

  const toggleFaq = (id: string) => {
    setOpenFaqs(prev => {
      const newSet = new Set(prev)
      if (newSet.has(id)) {
        newSet.delete(id)
      } else {
        newSet.add(id)
      }
      return newSet
    })
  }

  const scrollToApplication = () => {
    document.getElementById('partner-application')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToAreas = () => {
    document.getElementById('available-areas')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToFaq = () => {
    document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })
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

              <button
                onClick={scrollToFaq}
                className="mt-4 text-teal hover:text-teal-dark font-medium text-sm flex items-center gap-1 mx-auto transition-colors"
              >
                Read FAQs before you commit
                <ArrowRight className="h-4 w-4" />
              </button>
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

      {/* FAQ Section */}
      <section id="faq" className="py-16 lg:py-24 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Everything you need to know before becoming an Area Partner
            </p>
          </div>

          <div className="space-y-8">
            {faqSections.map((section, sectionIndex) => (
              <div key={sectionIndex}>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-teal mb-4">
                  {section.title}
                </h3>
                <div className="space-y-3">
                  {section.questions.map((item, questionIndex) => {
                    const faqId = `${sectionIndex}-${questionIndex}`
                    const isOpen = openFaqs.has(faqId)
                    return (
                      <div
                        key={questionIndex}
                        className="card rounded-xl overflow-hidden"
                      >
                        <button
                          onClick={() => toggleFaq(faqId)}
                          className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
                        >
                          <span className="font-medium text-gray-800 pr-4">{item.q}</span>
                          <ChevronDown
                            className={`h-5 w-5 text-teal flex-shrink-0 transition-transform duration-200 ${
                              isOpen ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                        <div
                          className={`overflow-hidden transition-all duration-300 ease-in-out ${
                            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                          }`}
                        >
                          <div className="px-5 pb-5 text-gray-600 border-t border-gray-100 pt-4">
                            {item.a}
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <a
              href="https://wa.me/27688986081"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center gap-2 rounded-lg px-6 py-3"
            >
              WhatsApp Us
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Partner Application Form */}
      <section id="partner-application" className="py-16 lg:py-24">
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
