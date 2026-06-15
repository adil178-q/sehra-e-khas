export interface Announcement {
  id: string;
  text: string;
  link?: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
}

export interface Product {
  id: string;
  title: string;
  price: number; // in USD or equivalent
  currencySymbol: string;
  originalPrice?: number;
  images: string[]; // multi-image archival angles
  category: string;
  collectionId: string;
  description: string;
  shortDescription: string;
  specifications: string[];
  materials: string;
  care: string[];
  sizeGuide: { size: string; chest: string; length: string; shoulder: string }[];
  isNewArrival?: boolean;
  isSoldOut?: boolean;
  unitsTotal: number;
  unitsLeft: number;
  availableSizes?: string[];
  extraStory?: string;
}

export interface Collection {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  description: string;
}

export interface CartItem {
  product: Product;
  selectedSize: string;
  quantity: number;
}
