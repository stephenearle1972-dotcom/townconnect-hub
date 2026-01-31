export interface Town {
  id: string;
  name: string;
  region: string;
  description: string;
  population?: string;
  businessCount: string;
  categories: string[];
  siteUrl: string;
  listingUrl?: string;
  whatsappUrl?: string;
  isActive: boolean;
  launchDate?: string;
  lat?: number;
  lng?: number;
}

export const towns: Town[] = [
  {
    id: 'vaalwater',
    name: 'Vaalwater',
    region: 'Limpopo',
    description: 'Rural bushveld community gateway to the Waterberg',
    population: '~5,000',
    businessCount: '11',
    categories: ['Restaurants', 'Services', 'Accommodation', 'Retail'],
    siteUrl: 'https://vaalwaterconnect.co.za',
    listingUrl: 'https://vaalwaterconnect.co.za/#/add-business',
    whatsappUrl: 'https://wa.me/27xxxxxxxxx',
    isActive: true,
    lat: -24.2967,
    lng: 28.0731,
  },
  {
    id: 'menlyn',
    name: 'Menlyn',
    region: 'Gauteng',
    description: 'Premier shopping and business district in Pretoria East',
    population: '~50,000',
    businessCount: '0',
    categories: ['Shopping', 'Restaurants', 'Services', 'Entertainment'],
    siteUrl: 'https://menlynconnect.netlify.app',
    listingUrl: 'https://menlynconnect.netlify.app/#/add-business',
    whatsappUrl: 'https://wa.me/27xxxxxxxxx',
    isActive: true,
    lat: -25.7823,
    lng: 28.2753,
  },
  {
    id: 'portalfred',
    name: 'Port Alfred',
    region: 'Eastern Cape',
    description: 'Coastal town at the mouth of the Kowie River',
    population: '~25,000',
    businessCount: '0',
    categories: ['Tourism', 'Restaurants', 'Services', 'Property'],
    siteUrl: 'https://portalfredconnect-live.netlify.app',
    listingUrl: 'https://portalfredconnect-live.netlify.app/#/add-business',
    whatsappUrl: 'https://wa.me/27xxxxxxxxx',
    isActive: true,
    lat: -33.5906,
    lng: 26.8867,
  },
  {
    id: 'modimolle',
    name: 'Modimolle',
    region: 'Limpopo',
    description: 'Heart of the Waterberg - gateway to game farms and nature reserves',
    businessCount: '0',
    categories: ['Tourism', 'Restaurants', 'Services'],
    siteUrl: 'https://modimolleconnect.netlify.app',
    listingUrl: 'https://modimolleconnect.netlify.app/#/add-business',
    isActive: true,
    lat: -24.7000,
    lng: 28.4000,
  },
  {
    id: 'parklands',
    name: 'Parklands',
    region: 'Western Cape',
    description: 'Family & Services Hub',
    businessCount: '0',
    categories: ['Services', 'Retail', 'Health & Medical'],
    siteUrl: 'https://parklandsconnect.netlify.app',
    listingUrl: 'https://parklandsconnect.netlify.app/#/add-business',
    isActive: true,
    lat: -33.8100,
    lng: 18.5000,
  },
  {
    id: 'blouberg',
    name: 'Blouberg',
    region: 'Western Cape',
    description: 'West Coast Lifestyle Hub',
    businessCount: '0',
    categories: ['Tourism', 'Restaurants', 'Services', 'Lifestyle'],
    siteUrl: 'https://bloubergconnect.netlify.app',
    listingUrl: 'https://bloubergconnect.netlify.app/#/add-business',
    isActive: true,
    lat: -33.7900,
    lng: 18.4700,
  },
  {
    id: 'garsfontein',
    name: 'Garsfontein',
    region: 'Gauteng',
    description: "Pretoria East's Family Suburb",
    businessCount: '0',
    categories: ['Services', 'Retail', 'Health & Medical', 'Education'],
    siteUrl: 'https://garsfonteinconnect.netlify.app',
    listingUrl: 'https://garsfonteinconnect.netlify.app/#/add-business',
    isActive: true,
    lat: -25.8000,
    lng: 28.3100,
  },
  {
    id: 'stellenbosch',
    name: 'Stellenbosch',
    region: 'Western Cape',
    description: 'City of Oaks',
    businessCount: '0',
    categories: ['Wine', 'Tourism', 'Restaurants', 'Education', 'Services'],
    siteUrl: 'https://stellenboschconnect.netlify.app',
    listingUrl: 'https://stellenboschconnect.netlify.app/#/add-business',
    isActive: true,
    lat: -33.9366,
    lng: 18.8663,
  },
];

export const upcomingTowns: Town[] = [
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
    lat: -23.6833,
    lng: 27.7000,
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
