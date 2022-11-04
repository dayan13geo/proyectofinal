import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product.model';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  salvados: Product[] =[];
  constructor(private storeService: StoreService) {
    this.salvados = storeService.salvados;
  }

  ngOnInit(): void {
  }

}
