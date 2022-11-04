import { Component, Input, OnInit } from '@angular/core';
import { DetailSale } from 'src/app/model/detalleVenta.model';
import { ShopCartService } from 'src/app/services/shop-cart.service';

@Component({
  selector: 'app-card-cart',
  templateUrl: './card-cart.component.html',
  styleUrls: ['./card-cart.component.scss']
})
export class CardCartComponent implements OnInit {

  @Input() element: DetailSale = this.shopCartService.newElementCart();
  constructor(private shopCartService: ShopCartService) {

   }

  ngOnInit(): void {
  }

}
