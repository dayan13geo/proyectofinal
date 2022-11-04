import { Injectable } from '@angular/core';
import { Category } from '../model/category.model';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor() { }

  category: Category[] = [{
    id: "C001",
    name: "Piso",
    description: "Insumo para usar en pisos"
  },
  {
    id: "C002",
    name: "Pared",
    description: "Insumo para usar en paredes"
  },
  {
    id: "C003",
    name: "Complementario",
    description: "Insumo para usar de complemento"
  }
];
  products: Product[] = [{
    id: "P001",
    name: "parquet",
    description: "Paquete de Parquet  x24 unidades",
    price: 28,
    stock: 10,
    image: "/assets/img/parquet.jpg",
    categoria: this.category[0],
  },
  {
    id: "P002",
    name: "Socalo",
    description: "Paquete de Socalos  x12 unidades",
    price: 28,
    stock: 10,
    image: "/assets/img/zócalo.jpg",
    categoria: this.category[0],
    
    
  }
];
salvados: Product[] = [];
agregarSalvado(elemento: Product): void{
  this.salvados.push(elemento);
}
seleccionados: Product[] = [];
agregarSeleccionado(elemento: Product): void{
  this.seleccionados.push(elemento);
}
  
}
