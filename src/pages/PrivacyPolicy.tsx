import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function PrivacyPolicy() {
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

        <h1 className="font-serif text-4xl font-bold text-gray-800 mb-2">Privacy Policy</h1>
        <p className="text-lg text-teal font-medium mb-4">POPIA Compliant</p>
        <p className="text-gray-500 mb-12">Effective Date: January 2025</p>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-8">
            This Privacy Policy is compliant with the Protection of Personal Information Act, 2013 (POPIA) of South Africa.
          </p>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-800 mb-4">1. Information We Collect</h2>
            <p className="text-gray-600 mb-4">We collect the following types of information:</p>
            <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
              <li><strong>Business Information:</strong> Business name, contact details (phone, email, address), website, social media links, business description, and photos</li>
              <li><strong>Personal Information:</strong> Name, email address, and phone number when you submit a form or application</li>
              <li><strong>Usage Data:</strong> Information about how you interact with our Platform, including pages visited and features used</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-800 mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-600 mb-4">We use the collected information for the following purposes:</p>
            <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
              <li>To display business listings on our directory network</li>
              <li>To process business registration and Area Partner applications</li>
              <li>To respond to inquiries and support requests</li>
              <li>To improve our Platform and services</li>
              <li>To send relevant communications (with your consent)</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-800 mb-4">3. Legal Basis for Processing (POPIA)</h2>
            <p className="text-gray-600 mb-4">Under POPIA, we process your personal information based on:</p>
            <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
              <li><strong>Consent:</strong> When you voluntarily submit information through our forms</li>
              <li><strong>Contractual Necessity:</strong> To provide our directory services to listed businesses</li>
              <li><strong>Legitimate Interest:</strong> To improve our services and maintain Platform security</li>
              <li><strong>Legal Compliance:</strong> When required by South African law</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-800 mb-4">4. Data Sharing</h2>
            <p className="text-gray-600 mb-4">We do not sell your personal information. We may share information with:</p>
            <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
              <li><strong>Area Partners:</strong> Who operate local directories within our network and may contact businesses in their area</li>
              <li><strong>Service Providers:</strong> Who assist in operating our Platform (e.g., hosting, form processing, analytics)</li>
              <li><strong>Law Enforcement:</strong> Or government agencies when required by law</li>
              <li><strong>Third Parties:</strong> With your explicit consent</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-800 mb-4">5. Data Retention</h2>
            <p className="text-gray-600 mb-4">
              We retain personal information for as long as necessary to fulfill the purposes outlined in this policy,
              or as required by law. Business listings remain active until the business requests removal or fails to
              maintain their subscription.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-800 mb-4">6. Your Rights Under POPIA</h2>
            <p className="text-gray-600 mb-4">As a data subject under POPIA, you have the right to:</p>
            <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
              <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal requirements)</li>
              <li><strong>Object:</strong> Object to the processing of your personal information</li>
              <li><strong>Withdraw Consent:</strong> Withdraw consent where processing is based on consent</li>
              <li><strong>Complaint:</strong> Lodge a complaint with the Information Regulator</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-800 mb-4">7. Cookies</h2>
            <p className="text-gray-600 mb-4">
              Our Platform may use cookies and similar technologies to enhance user experience. These may include
              essential cookies for Platform functionality and analytics cookies to understand usage patterns.
              You can manage cookie preferences through your browser settings. For more information, see our{' '}
              <Link to="/cookies" className="text-teal hover:underline">Cookie Policy</Link>.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-800 mb-4">8. Security Measures</h2>
            <p className="text-gray-600 mb-4">
              We implement appropriate technical and organizational measures to protect personal information against
              unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over
              the Internet is 100% secure.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-800 mb-4">9. Changes to This Policy</h2>
            <p className="text-gray-600 mb-4">
              We may update this Privacy Policy from time to time. We will notify you of any material changes by
              posting the new policy on this page with an updated effective date.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-800 mb-4">10. Information Officer Contact</h2>
            <p className="text-gray-600 mb-4">
              For any privacy-related inquiries or to exercise your rights under POPIA, please contact our Information Officer:
            </p>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <ul className="list-none text-gray-600 space-y-2">
                <li><strong>Name:</strong> Stephen Phillip Earle</li>
                <li><strong>Email:</strong> <a href="mailto:hello@townconnect.co.za" className="text-teal hover:underline">hello@townconnect.co.za</a></li>
                <li><strong>Phone:</strong> <a href="tel:+27688986081" className="text-teal hover:underline">068 898 6081</a></li>
                <li><strong>Location:</strong> South Africa</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
