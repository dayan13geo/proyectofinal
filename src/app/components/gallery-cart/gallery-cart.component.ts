import { Component, Input, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { DetailSale } from 'src/app/model/detalleVenta.model';
import { ShopCartService } from 'src/app/services/shop-cart.service';

@Component({
  selector: 'app-gallery-cart',
  templateUrl: './gallery-cart.component.html',
  styleUrls: ['./gallery-cart.component.scss']
})
export class GalleryCartComponent implements OnInit {



  //elementsCart: DetailSale = this.shopCartService.newElementCart();

  elementsCart: DetailSale[] = []; 

  cartTotal = 0;

  constructor(public modalService: BsModalService, private shopCartService: ShopCartService){
    this.elementsCart = shopCartService.carrito;
  };
  ngOnInit(): void {
    this.elementsCart.forEach(item =>{
      this.cartTotal += (item.cantidad*item.price)
    })
  }

}
