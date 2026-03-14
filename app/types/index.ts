export interface ServiceItem {
  id: number;
  category: string;
  title: string;
}

export interface CaseStudy {
  market: 'Corporate' | 'Local';
  client: string;
  result: string;
}

export interface Testimonial {
  market: 'Corporate' | 'Local';
  quote: string;
  name: string;
}

export interface ContactPayload {
  name: string;
  email: string;
  company?: string;
  message: string;
  inquiryType: 'corporate' | 'local';
}
