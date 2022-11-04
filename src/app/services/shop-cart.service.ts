import { Injectable } from '@angular/core';
import { DetailSale } from '../model/detalleVenta.model';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ShopCartService {

  carrito: DetailSale[]=[];
  constructor() { }
  addElementCart(product: Product, cantidad:number):void{
    let newElement = this.newElementCart();
    newElement.id="0";
    newElement.producto = product;
    newElement.cantidad = cantidad; 
    newElement.subtotal = cantidad*newElement.producto.price; 
    newElement.price=0;
    this.carrito.push(newElement);
    
  }
  newElementCart(): DetailSale{

    return{
      id: "",
      cantidad: 0,
      price: 0,
      subtotal: 0,
      producto: {
        id: "",
        name: "",
        description: "",
        price: 0,
      },
      // Venta: {
      //   id: "",
      //   costo: 0,
      //   delivery: "",
      //   dateDelivery: new Date("2020-05-12T23:50:21.817Z"),
      //   dateSale: new Date('December 17, 1995 03:24:00'),
      // },
    }
  }
}
