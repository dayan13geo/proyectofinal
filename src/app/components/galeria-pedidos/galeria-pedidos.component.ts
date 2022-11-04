import { Component, Input , TemplateRef, OnInit} from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Product } from 'src/app/model/product.model';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-galeria-pedidos',
  templateUrl: './galeria-pedidos.component.html',
  styleUrls: ['./galeria-pedidos.component.scss']
})
export class GaleriaPedidosComponent implements OnInit {

  @Input() elementos: Product[] = [];

  salvados : Product[] = [];

  constructor(public modalService: BsModalService, private storeService: StoreService){
    this.salvados = storeService.salvados;
  };

  ngOnInit(): void {
  }
  
salvarVenta(id: string): void{
  this.storeService.agregarSalvado(this.elementos[parseInt(id.charAt(3))]);
  console.log(this.salvados)
}
  modalRef?: BsModalRef;
  posicionActualizar:number = 0;
  posicionVer:number =0;
 
  openModal(template: TemplateRef<any>,position :number) {
    this.modalRef = this.modalService.show(template);
    this.posicionActualizar=position;
    this.d_nombre=this.salvados[this.posicionActualizar].name;
    this.d_descripcionn=this.salvados[this.posicionActualizar].description;
    this.d_Stoke=this.salvados[this.posicionActualizar].stock;
    this.d_Precio=this.salvados[this.posicionActualizar].price;
  }
  openModal1(template1: TemplateRef<any>,position :number) {
    this.modalRef = this.modalService.show(template1);
    this.posicionVer=position;
    this.d_descripcionn=this.salvados[this.posicionVer].description;
    this.d_nombre=this.salvados[this.posicionVer].name;
    this.d_Stoke=this.salvados[this.posicionVer].stock;
    this.d_Precio=this.salvados[this.posicionVer].price;
  
  }
  d_nombre: string ="";
  d_descripcionn: string="";
  d_Stoke?: number = 0;
  d_Precio: number = 0;
 


  title = 'angular-tarea';


  actComprobante(): void{
    
    const replace: any ={
      name: this.d_nombre,
      id: "",
      price: this.d_Precio,
      image: "",
      estado: this.d_Stoke,
      description: this.d_descripcionn,
      porcentaje: "",
    }
    this.salvados.splice(this.posicionActualizar,1,replace);
    this.d_descripcionn="";
    this.d_nombre="";
    this.d_Stoke=0;
    this.d_Precio=0;
  }

}
