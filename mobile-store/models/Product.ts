export interface Product {
  id: number;
  title: string;
  description?: string;
  comments: string[];
  rate: number;
  price: number;
  currency: number;
  stock: number;
  seller: number;
  itemLocation: string;
  soldQuantityInLastMonth: number;
  maxQuantityPerCustomer: number;
  portraitImageUrl: string;
  images: string[];
  isAvailable: boolean;
  soldDate: Date;

}

export interface ProductFeedCard {
  product: Pick<Product, "title" | "price"|"portraitImageUrl">,
  liked:boolean
}

export interface ProductComment {
  id: number;
  userId: number;
  content: string;
  date: Date;
  productId: number;
  likes: number;
  replies?: string[];
}
