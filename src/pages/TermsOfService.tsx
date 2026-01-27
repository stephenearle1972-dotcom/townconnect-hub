import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-4xl px-4 py-16 lg:px-8 lg:py-24">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-teal hover:text-teal-dark transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        <h1 className="font-serif text-4xl font-bold text-gray-800 mb-4">Terms of Service</h1>
        <p className="text-gray-500 mb-12">Effective Date: January 2025</p>

        <div className="prose prose-lg max-w-none">
          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-800 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-600 mb-4">
              By accessing and using TownConnect and any site within the TownConnect network of local directories
              ("the Platform"), you accept and agree to be bound by these Terms of Service. If you do not agree
              to these terms, please do not use our services.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-800 mb-4">2. Description of Service</h2>
            <p className="text-gray-600 mb-4">
              TownConnect operates a network of hyperlocal business directories serving towns and neighbourhoods
              across South Africa. We provide a platform for local businesses to showcase their services and for
              users to discover and connect with these businesses. Each local directory is operated by an
              Area Partner in collaboration with TownConnect.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-800 mb-4">3. User Responsibilities</h2>
            <p className="text-gray-600 mb-4">Users of the Platform agree to:</p>
            <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
              <li>Use the Platform only for lawful purposes</li>
              <li>Not submit false, misleading, or fraudulent information</li>
              <li>Not impersonate any person or entity</li>
              <li>Not interfere with or disrupt the Platform's functionality</li>
              <li>Respect the intellectual property rights of others</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-800 mb-4">4. Business Listing Guidelines</h2>
            <p className="text-gray-600 mb-4">Businesses listed on TownConnect must:</p>
            <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
              <li>Provide accurate and truthful information about their services</li>
              <li>Maintain valid contact information</li>
              <li>Operate legally within South Africa</li>
              <li>Have a physical presence or provide services in the relevant local area</li>
              <li>Not engage in any illegal, harmful, or unethical business practices</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-800 mb-4">5. Area Partners</h2>
            <p className="text-gray-600 mb-4">
              TownConnect works with Area Partners who operate local directories within our network. Area Partners
              are independent operators who manage business relationships in their designated areas. While Area
              Partners operate under the TownConnect brand, they are responsible for their own business practices
              and compliance with applicable laws.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-800 mb-4">6. Accuracy of Information</h2>
            <p className="text-gray-600 mb-4">
              While we strive to ensure all information on our Platform is accurate and up-to-date, TownConnect
              does not guarantee the accuracy, completeness, or reliability of any business listing or information.
              Users are encouraged to verify details directly with businesses before engaging their services.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-800 mb-4">7. Intellectual Property</h2>
            <p className="text-gray-600 mb-4">
              All content on TownConnect, including but not limited to text, graphics, logos, and software, is the
              property of TownConnect or its content suppliers and is protected by South African and international
              copyright laws. Unauthorized use, reproduction, or distribution of this content is prohibited.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-800 mb-4">8. Limitation of Liability</h2>
            <p className="text-gray-600 mb-4">
              TownConnect shall not be liable for any direct, indirect, incidental, special, consequential, or
              punitive damages arising from:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
              <li>Your use or inability to use the Platform</li>
              <li>Any transactions between users and listed businesses</li>
              <li>Any content posted on the Platform</li>
              <li>Any errors or omissions in business listings</li>
              <li>Any unauthorized access to or use of our servers</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-800 mb-4">9. Termination</h2>
            <p className="text-gray-600 mb-4">
              We reserve the right to terminate or suspend access to our Platform immediately, without prior notice,
              for any reason, including breach of these Terms. Upon termination, your right to use the Platform
              will cease immediately.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-800 mb-4">10. Governing Law</h2>
            <p className="text-gray-600 mb-4">
              These Terms shall be governed by and construed in accordance with the laws of the Republic of
              South Africa. Any disputes arising from these Terms or your use of the Platform shall be subject
              to the exclusive jurisdiction of the South African courts.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-800 mb-4">11. Contact Information</h2>
            <p className="text-gray-600 mb-4">For questions about these Terms of Service, please contact us at:</p>
            <ul className="list-none text-gray-600 space-y-1">
              <li>Email: <a href="mailto:hello@townconnect.co.za" className="text-teal hover:underline">hello@townconnect.co.za</a></li>
              <li>WhatsApp: <a href="https://wa.me/27688986081" className="text-teal hover:underline">068 898 6081</a></li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}
