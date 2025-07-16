export interface Product {
  id: string;
  name: string;
  grade: string;
  sizes?: number[];
  specifications?: {
    yieldStrength: string;
    tensileStrength: string;
    elongation: string;
    bendTest: string;
  };
  applications?: string[];
  category?: string;
  images: string[];
  dataSheet?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  position: string;
  content: string;
  image: string;
  rating: number;
}

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  department: string;
  image: string;
  bio: string;
  experience: string;
}

export interface ContactInfo {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
  productInterest?: string;
  quantity?: string;
}

export interface Office {
  id: string;
  name: string;
  address: string;
  phone: string;
  email: string;
  coordinates: [number, number];
  timezone: string;
  hours: string;
}