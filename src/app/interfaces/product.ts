export interface Product {
    id: number;
    name: string;
    category: string;
    imageUrl: string;
    description: string;
    oldPrice: number;
    newPrice: number;
    badge?: string;
  }