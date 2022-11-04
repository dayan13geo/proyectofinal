import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product.model';
import { StoreService } from 'src/app/services/store.service';


@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  products: Product[] = [
  ];
  constructor(private storeServices: StoreService){
    this.products = storeServices.products;
  }
  ngOnInit(): void {
  }

}
