import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function Disclaimer() {
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

        <h1 className="font-serif text-4xl font-bold text-gray-800 mb-4">Legal Disclaimer</h1>
        <p className="text-gray-500 mb-12">Effective Date: January 2025</p>

        <div className="prose prose-lg max-w-none">
          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-800 mb-4">1. No Warranty on Business Listings</h2>
            <p className="text-gray-600 mb-4">
              TownConnect and its network of local directories provide business listings for informational purposes only.
              We make no representations or warranties of any kind, express or implied, regarding:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
              <li>The accuracy, reliability, or completeness of any business information</li>
              <li>The quality, safety, or legality of products or services offered by listed businesses</li>
              <li>The qualifications, certifications, or credentials of business owners or employees</li>
              <li>The availability of listed businesses or their services</li>
              <li>The pricing information displayed for any products or services</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-800 mb-4">2. Third-Party Content</h2>
            <p className="text-gray-600 mb-4">
              Business listings, descriptions, photos, and other content on TownConnect are provided by the businesses
              themselves, Area Partners, or third parties. TownConnect does not endorse, verify, or guarantee the
              accuracy of this content. Users should exercise their own judgment when engaging with listed businesses.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-800 mb-4">3. No Responsibility for Transactions</h2>
            <p className="text-gray-600 mb-4">
              TownConnect is a directory service only and is not a party to any transactions between users and listed
              businesses. We are not responsible for:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
              <li>Any disputes arising from transactions with listed businesses</li>
              <li>The quality, delivery, or performance of products or services</li>
              <li>Payment issues or refund disputes</li>
              <li>Personal injury or property damage resulting from services</li>
              <li>Any losses incurred from reliance on business information</li>
            </ul>
            <p className="text-gray-600 mb-4">
              Users engage with listed businesses entirely at their own risk and should conduct their own due diligence
              before entering into any agreements.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-800 mb-4">4. Area Partners</h2>
            <p className="text-gray-600 mb-4">
              TownConnect works with independent Area Partners who operate local directories within our network. While
              Area Partners operate under the TownConnect brand, TownConnect is not responsible for their individual
              business practices, representations, or conduct. Any agreements or transactions with Area Partners are
              between you and the Area Partner directly.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-800 mb-4">5. External Links Disclaimer</h2>
            <p className="text-gray-600 mb-4">
              Our Platform may contain links to external websites operated by third parties. TownConnect has no control
              over the content, privacy policies, or practices of these external sites and assumes no responsibility
              for them. The inclusion of any link does not imply endorsement or recommendation.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-800 mb-4">6. Service Availability</h2>
            <p className="text-gray-600 mb-4">
              TownConnect strives to maintain continuous availability of our Platform but does not guarantee uninterrupted
              access. We may modify, suspend, or discontinue any aspect of the Platform at any time without notice.
              We are not liable for any loss or inconvenience caused by Platform downtime or technical issues.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-800 mb-4">7. Limitation of Liability</h2>
            <p className="text-gray-600 mb-4">
              To the fullest extent permitted by South African law, TownConnect, its owners, operators, Area Partners,
              employees, and affiliates shall not be liable for any:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
              <li>Direct, indirect, incidental, special, or consequential damages</li>
              <li>Loss of profits, revenue, data, or business opportunities</li>
              <li>Personal injury or property damage</li>
              <li>Damages arising from the use or inability to use our Platform</li>
              <li>Damages arising from any transaction with a listed business</li>
            </ul>
            <p className="text-gray-600 mb-4">
              This limitation applies regardless of the legal theory under which such damages are sought.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-800 mb-4">8. Indemnification</h2>
            <p className="text-gray-600 mb-4">
              You agree to indemnify and hold harmless TownConnect and its affiliates from any claims, damages, losses,
              or expenses arising from your use of the Platform or violation of these terms.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-800 mb-4">9. Contact Us</h2>
            <p className="text-gray-600 mb-4">If you have questions about this Disclaimer, please contact us at:</p>
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
