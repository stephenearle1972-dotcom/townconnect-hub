import { CreditCard } from 'lucide-react'

interface PayFastButtonProps {
  amount: number;
  itemName: string;
  itemDescription?: string;
  className?: string;
  children?: React.ReactNode;
}

// PayFast configuration
const PAYFAST_CONFIG = {
  merchantId: '21277768',
  merchantKey: 'njgu8qqv2cidc',
  passphrase: 'TransFer123_',
  // Use sandbox for testing, change to www.payfast.co.za for production
  baseUrl: 'https://www.payfast.co.za/eng/process',
  returnUrl: 'https://townconnect-hub.netlify.app/#/thank-you',
  cancelUrl: 'https://townconnect-hub.netlify.app/#/business',
  notifyUrl: 'https://townconnect-hub.netlify.app/.netlify/functions/payfast-itn',
};

// Note: Signature generation would be done server-side in production
// PayFast validates on their end for simple integrations

export default function PayFastButton({
  amount,
  itemName,
  itemDescription,
  className = '',
  children
}: PayFastButtonProps) {
  const handlePayment = () => {
    // Build PayFast URL with parameters
    const paymentId = `TCH-${Date.now()}`;

    const params = new URLSearchParams({
      merchant_id: PAYFAST_CONFIG.merchantId,
      merchant_key: PAYFAST_CONFIG.merchantKey,
      return_url: PAYFAST_CONFIG.returnUrl,
      cancel_url: PAYFAST_CONFIG.cancelUrl,
      notify_url: PAYFAST_CONFIG.notifyUrl,
      m_payment_id: paymentId,
      amount: amount.toFixed(2),
      item_name: itemName,
      item_description: itemDescription || itemName,
    });

    const paymentUrl = `${PAYFAST_CONFIG.baseUrl}?${params.toString()}`;

    // Redirect to PayFast
    window.location.href = paymentUrl;
  };

  return (
    <button
      onClick={handlePayment}
      className={`inline-flex items-center justify-center gap-2 ${className}`}
    >
      {children || (
        <>
          <CreditCard className="h-4 w-4" />
          Pay Now
        </>
      )}
    </button>
  );
}

// Helper component for displaying price with PayFast button
export function PricingCard({
  name,
  price,
  period,
  description,
  features,
  popular = false,
}: {
  name: string;
  price: number;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
}) {
  return (
    <div className={`card relative rounded-2xl p-8 ${popular ? 'ring-2 ring-amber' : ''}`}>
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="inline-flex items-center gap-1 rounded-full bg-amber px-4 py-1 text-sm font-semibold text-white">
            Most Popular
          </span>
        </div>
      )}
      <div className="text-center">
        <h3 className="font-serif text-xl font-bold text-gray-800">{name}</h3>
        <div className="mt-4">
          <span className="text-4xl font-bold text-gray-800">R{price}</span>
          <span className="text-gray-500">{period}</span>
        </div>
        <p className="mt-4 text-sm text-gray-600">{description}</p>
      </div>
      <ul className="mt-8 space-y-4">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <svg className="h-5 w-5 flex-shrink-0 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-sm text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      <PayFastButton
        amount={price}
        itemName={`TownConnect ${name} Listing - Monthly`}
        itemDescription={`Monthly subscription for ${name} tier listing`}
        className={`mt-8 block w-full rounded-lg py-3 text-center font-semibold transition-all ${
          popular
            ? 'bg-teal text-white hover:bg-teal-dark'
            : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
        }`}
      >
        Get Started
      </PayFastButton>
    </div>
  );
}
