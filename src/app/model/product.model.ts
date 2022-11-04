import { Category } from "./category.model";

export interface Product{
    id: string;
    name: string;
    description: string;
    price: number;
    stock?: number;
    image?: string;
    categoria?: Category;
}