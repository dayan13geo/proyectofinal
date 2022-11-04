import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category } from 'src/app/model/category.model';
import { Product } from 'src/app/model/product.model';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.scss']
})
export class CardProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() categoryP: Category= {
    id: "",
    name: "",
    description: ""
  };

  @Input() product: Product= {
    id: "",
    name: "",
    description: "",
    price: 0,
    stock: 0,
    image: "",
    categoria: this.categoryP,

  };

  @Output() pressSelect = new EventEmitter();
  selectProduct(id: string): void{
    this.pressSelect.emit(id); 
  }

}
