// ProductInterface.ts
import { JSX } from "react";

// ProductInterface.ts
export default interface Product {
  id: string; // Add an id property
  img: string;
  title: string;
  star: JSX.Element;
  reviews: string;
  prevPrice: number;
  newPrice: number;
  company: string;
  color: string;
  category: string;
}

