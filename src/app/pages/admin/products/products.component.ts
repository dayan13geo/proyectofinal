import { TemplateRef, Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product.model';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Category } from 'src/app/model/category.model';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor( public modalService: BsModalService) { }
  ngOnInit(): void {
  }
  modalRef?: BsModalRef;
  posicionActualizar:number = 0;
  posicionVer:number =0;
  posicionAgregar =0;
  openModal(template: TemplateRef<any>,position :number) {
    this.modalRef = this.modalService.show(template);
    this.posicionActualizar=position;
    this.d_nombre=this.products[this.posicionActualizar].name;
    this.d_descripcionn=this.products[this.posicionActualizar].description;
    this.d_Stoke=this.products[this.posicionActualizar].stock;
    this.d_Precio=this.products[this.posicionActualizar].price;
  }
  openModal1(template1: TemplateRef<any>,position :number) {
    this.modalRef = this.modalService.show(template1);
    this.posicionVer=position;
    this.d_descripcionn=this.products[this.posicionVer].description;
    this.d_nombre=this.products[this.posicionVer].name;
    this.d_Stoke=this.products[this.posicionVer].stock;
    this.d_Precio=this.products[this.posicionVer].price;
  
  }
  openModal2(template2: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template2);
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
  actComprobante1(): void{
    
    const replace: any ={
      name: this.d_nombre,
      id: "",
      price: this.d_Precio,
      image: "",
      estado: this.d_Stoke,
      description: this.d_descripcionn,
      porcentaje: "",
    }
    this.products.splice(this.posicionActualizar,1,replace);
    this.d_descripcionn="";
    this.d_nombre="";
    this.d_Stoke=0;
    this.d_Precio=0;
  }
  deleteProductos(position: number): void{
    this.products.splice(position,1);
  }

}
