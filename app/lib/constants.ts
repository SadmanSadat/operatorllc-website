import type { CaseStudy, ServiceItem, Testimonial } from '@/app/types';

export const siteConfig = {
  name: 'Operator LLC',
  title: 'OperatorLLC - Digital Growth Architects for Corporate & Local Markets',
  description:
    'OperatorLLC bridges corporate-scale digital growth with local-market agility from Austin, Texas.',
  location: 'Austin, Texas, USA',
  email: 'hello@operatorllc.com',
  phone: '+1 (512) 555-0149'
};

export const navigation = [
  { label: 'Corporate', href: '#corporate' },
  { label: 'Local', href: '#local' },
  { label: 'AI Services', href: '#ai' },
  { label: 'Case Studies', href: '#cases' },
  { label: 'Contact', href: '#contact' }
];

export const services: ServiceItem[] = [
  { id: 1, category: 'Digital Growth Engine', title: 'B2B Digital Strategy & Market Penetration' },
  { id: 2, category: 'Digital Growth Engine', title: 'Industrial SEO & Technical Optimization' },
  { id: 3, category: 'Digital Growth Engine', title: 'LinkedIn Marketing & Executive Personal Branding' },
  { id: 4, category: 'Digital Growth Engine', title: 'Account-Based Marketing (ABM) Campaigns' },
  { id: 5, category: 'Digital Growth Engine', title: 'Corporate Website Development (Next.js/Headless CMS)' },
  { id: 6, category: 'Digital Growth Engine', title: 'Conversion Rate Optimization (CRO) for High-Ticket Sales' },
  { id: 7, category: 'Digital Growth Engine', title: 'Marketing Automation & CRM Integration' },
  { id: 8, category: 'Digital Growth Engine', title: 'Data Analytics & Predictive Lead Scoring' },
  { id: 9, category: 'Brand Building & PR', title: 'Corporate Brand Strategy & Positioning' },
  { id: 10, category: 'Brand Building & PR', title: 'Media Relations & Industry Publication Placement' },
  { id: 11, category: 'Brand Building & PR', title: 'Reputation Management & Review Systems' },
  { id: 12, category: 'Brand Building & PR', title: 'Crisis Communication & Digital PR' },
  { id: 13, category: 'Brand Building & PR', title: 'Thought Leadership Content Programs' },
  { id: 14, category: 'Brand Building & PR', title: 'Award Submission & Industry Recognition' },
  { id: 15, category: 'App & Product Development', title: 'Custom Web Application Development' },
  { id: 16, category: 'App & Product Development', title: 'Mobile App Strategy (iOS/Android)' },
  { id: 17, category: 'App & Product Development', title: 'SaaS Product Design & MVP Development' },
  { id: 18, category: 'App & Product Development', title: 'E-commerce Platform Development' },
  { id: 19, category: 'App & Product Development', title: 'Internal Business Tools & Dashboards' },
  { id: 20, category: 'Local Growth Solutions', title: 'Local SEO & Google Business Profile Optimization' },
  { id: 21, category: 'Local Growth Solutions', title: 'Small Business Social Media Management' },
  { id: 22, category: 'Local Growth Solutions', title: 'Local Influencer & Community Partnerships' },
  { id: 23, category: 'Local Growth Solutions', title: 'Hyper-Targeted PPC for Local Markets' },
  { id: 24, category: 'Local Growth Solutions', title: 'E-commerce Growth Marketing' },
  { id: 25, category: 'AI-Powered Services', title: 'GEO (Generative Engine Optimization)' },
  { id: 26, category: 'AI-Powered Services', title: 'LLM Brand Presence' },
  { id: 27, category: 'AI-Powered Services', title: 'AI-Driven Content Systems' },
  { id: 28, category: 'AI-Powered Services', title: 'Predictive Lead Intelligence' },
  { id: 29, category: 'AI-Powered Services', title: 'Conversational AI' },
  { id: 30, category: 'AI-Powered Services', title: 'AI Creative Production' },
  { id: 31, category: 'AI-Powered Services', title: 'Autonomous Marketing Agents' }
];

export const caseStudies: CaseStudy[] = [
  { market: 'Corporate', client: 'Keystone Holdings LTD', result: '217% qualified pipeline growth in 8 months.' },
  { market: 'Corporate', client: 'Austin Steel Systems', result: '4.8x increase in inbound enterprise RFQs.' },
  { market: 'Corporate', client: 'MetroBuild Partners', result: '31% uplift in high-ticket conversion rate.' },
  { market: 'Local', client: 'Oleander Leather', result: '183% marketplace revenue growth with local ad funnels.' },
  { market: 'Local', client: 'Saree Elysium', result: 'From 0 to 10k followers with conversion-focused creative.' }
];

export const testimonials: Testimonial[] = [
  {
    market: 'Corporate',
    quote: 'OperatorLLC rebuilt our digital ecosystem and made our leadership visible to decision makers.',
    name: 'Managing Director, Keystone Holdings LTD'
  },
  {
    market: 'Local',
    quote: 'They handled everything from social content to paid campaigns and our monthly sales doubled.',
    name: 'Founder, Oleander Leather'
  }
];
