import { Component, OnInit, TemplateRef } from '@angular/core';
import{BsModalRef,BsModalService}from'ngx-bootstrap/modal';
import { Category } from 'src/app/model/category.model';
import { Product } from 'src/app/model/product.model';
import { StoreService } from 'src/app/services/store.service';
@Component({
  selector: 'app-venta',
  templateUrl: './venta.component.html',
  styleUrls: ['./venta.component.scss']
})
export class VentaComponent implements OnInit {
  ngOnInit(): void {
  }

  modalRef?: BsModalRef;
  salvados: Product[] = [
  ];
  constructor(private modalService: BsModalService, private storeService: StoreService) {
    for (const property in this.salvados) {
      console.log(property);
      const newProduct ={
        id: property[0],
        name: property[1],
        description: property[2],
        price: parseInt(property[3]),
        stock: parseInt(property[4]),
        image: property[5],
        categoria: this.category[0],
      }
      this.products.push(newProduct);
    } 
    
  }
  posicionActualizar:number = 0;
  posicionVer:number =0;
  open(template: TemplateRef<any>,position :number) {
    this.modalRef = this.modalService.show(template);
    this.posicionActualizar=position;
    this.d_nombre=this.products[this.posicionActualizar].name;
    this.d_descripcionn=this.products[this.posicionActualizar].description;
    this.d_Stoke=this.products[this.posicionActualizar].stock;
    this.d_Precio=this.products[this.posicionActualizar].price;
  }
  open1(template1: TemplateRef<any>,position :number) {
    this.modalRef = this.modalService.show(template1);
    this.posicionVer=position;
    this.d_descripcionn=this.products[this.posicionVer].description;
    this.d_nombre=this.products[this.posicionVer].name;
    this.d_Stoke=this.products[this.posicionVer].stock;
    this.d_Precio=this.products[this.posicionVer].price;
  
  }
  d_nombre: string ="";
  d_descripcionn: string="";
  d_Stoke?: number = 0;
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
  
  actComprobante(): void{
    
    const replace: any ={
      id: "",
      name: this.d_nombre,
      description: this.d_descripcionn,
      price: this.d_Precio,
      stock: this.d_Stoke,
      image: "",
      categoria: this.category[0],
    }
    this.products.splice(this.posicionActualizar,1,replace);
    this.d_nombre ="";
    this.d_descripcionn="";
    this.d_Stoke= 0;
    this.d_Precio= 0;
  }
  eliminarProduct(posicion: number): void {
      this.products.splice(posicion, 1);
     }


}
