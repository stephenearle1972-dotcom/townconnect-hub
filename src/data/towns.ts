export interface Town {
  id: string;
  name: string;
  region: string;
  description: string;
  population?: string;
  businessCount: string;
  categories: string[];
  siteUrl: string;
  whatsappUrl?: string;
  isActive: boolean;
  launchDate?: string;
}

export const towns: Town[] = [
  {
    id: 'vaalwater',
    name: 'Vaalwater',
    region: 'Limpopo',
    description: 'Rural bushveld community gateway to the Waterberg',
    population: '~5,000',
    businessCount: '30+',
    categories: ['Restaurants', 'Services', 'Accommodation', 'Retail'],
    siteUrl: 'https://vaalwaterconnect.co.za',
    whatsappUrl: 'https://wa.me/27xxxxxxxxx',
    isActive: true,
  },
  {
    id: 'menlyn',
    name: 'Menlyn',
    region: 'Gauteng',
    description: 'Premier shopping and business district in Pretoria East',
    population: '~50,000',
    businessCount: '40+',
    categories: ['Shopping', 'Restaurants', 'Services', 'Entertainment'],
    siteUrl: 'https://comfy-paprenjak-68fb7b.netlify.app/',
    whatsappUrl: 'https://wa.me/27xxxxxxxxx',
    isActive: true,
  },
  {
    id: 'portalfred',
    name: 'Port Alfred',
    region: 'Eastern Cape',
    description: 'Coastal town at the mouth of the Kowie River',
    population: '~25,000',
    businessCount: '35+',
    categories: ['Tourism', 'Restaurants', 'Services', 'Property'],
    siteUrl: 'https://wonderful-kheer-842fe7.netlify.app/',
    whatsappUrl: 'https://wa.me/27xxxxxxxxx',
    isActive: true,
  },
];

export const upcomingTowns: Town[] = [
  {
    id: 'modimolle',
    name: 'Modimolle',
    region: 'Limpopo',
    description: 'Growing agricultural town in the Waterberg district',
    businessCount: 'Coming soon',
    categories: ['Services', 'Agriculture', 'Retail'],
    siteUrl: '',
    isActive: false,
    launchDate: 'Q2 2025',
  },
  {
    id: 'lephalale',
    name: 'Lephalale',
    region: 'Limpopo',
    description: 'Mining and energy hub of the Waterberg',
    businessCount: 'Coming soon',
    categories: ['Mining', 'Services', 'Retail'],
    siteUrl: '',
    isActive: false,
    launchDate: 'Q2 2025',
  },
];

export const businessCategories = [
  'Accommodation',
  'Agriculture',
  'Automotive',
  'Beauty & Wellness',
  'Construction',
  'Education',
  'Entertainment',
  'Financial Services',
  'Food & Dining',
  'Health & Medical',
  'Home & Garden',
  'Professional Services',
  'Property',
  'Retail',
  'Tourism',
  'Transport',
  'Other',
];
