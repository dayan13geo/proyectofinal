import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/model/product.model';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Category } from 'src/app/model/category.model';


@Component({
  selector: 'app-lista-produccion',
  templateUrl: './lista-produccion.component.html',
  styleUrls: ['./lista-produccion.component.scss']
})
export class ListaProduccionComponent implements OnInit {

  constructor(){}

  ngOnInit(): void {
  }
  modalRef?: BsModalRef;
  posicionActualizar:number = 0;
  posicionVer:number =0;
 
  @Input() categoryP: Category= {
    id: "",
    name: "",
    description: ""
  };

  @Input() production: Product= {
    id: "",
    name: "",
    description: "",
    price: 0,
    stock: 0,
    image: "",
  };

  @Output() pressSalvar = new EventEmitter();
  salvarVenta(id: string): void{
    this.pressSalvar.emit(id); 
  }

  
}
