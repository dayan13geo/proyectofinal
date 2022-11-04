import { Component, OnInit} from '@angular/core';
import { Category } from 'src/app/model/category.model';
import { Product } from 'src/app/model/product.model';

@Component({
  selector: 'app-distribution',
  templateUrl: './distribution.component.html',
  styleUrls: ['./distribution.component.scss']
})
export class DistributionComponent implements OnInit {
 
 // constructor() {}
  constructor(){}
  ngOnInit(): void {
  }
 
  d_nombre: string ="";
  d_descripcionn: string="";
  d_Stoke: number = 0;
  d_Precio: number = 0;
 
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
  addProducto(): void{
    const newProduct ={
      id: "",
      name: this.d_nombre,
      description: this.d_descripcionn,
      price: this.d_Precio,
      stock: this.d_Stoke,
      image: "",
      categoria: this.category[0],
    }
    this.products.push(newProduct);
    this.d_nombre ="";
    this.d_descripcionn="";
    this.d_Stoke= 0;
    this.d_Precio= 0;
  }
  deleteProduct(position: number): void{
    this.products.splice(position,1);
  }
  
}
