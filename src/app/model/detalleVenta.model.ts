import { Product } from "./product.model";
import { Sale } from "./venta.model";

export interface DetailSale{
    id: string;
    cantidad: number;
    price: number;
    subtotal: number;
    producto: Product;
    Venta?: Sale;
}