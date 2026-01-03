
export interface NavItem {
  label: string;
  href: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  clinic: string;
  quote: string;
  initials: string;
  color: string;
}

export interface PricingPlan {
  name: string;
  price: number | string;
  description: string;
  features: string[];
  recommended?: boolean;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}
