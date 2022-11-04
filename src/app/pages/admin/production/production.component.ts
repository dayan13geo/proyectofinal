import { Component, TemplateRef, OnInit} from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Product } from 'src/app/model/product.model';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-production',
  templateUrl: './production.component.html',
  styleUrls: ['./production.component.scss']
})
export class ProductionComponent implements OnInit {

  products: Product[] = [
  ];
  constructor(private storeServices: StoreService){
    this.products = storeServices.products;
  }
  ngOnInit(): void {
  }
  
  

}
