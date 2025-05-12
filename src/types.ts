export interface Property {
  id: number;
  title: string;
  type: string;
  location: string;
  price: number;
  description: string;
  size?: string;
  beds?: number;
  baths?: number;
  images: string[];
  featured: boolean;
  features?: string[];
}

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  comment: string;
  avatar: string;
}