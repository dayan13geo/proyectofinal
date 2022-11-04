//imports relational cores
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';


//imports de terceros
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { NgxNavbarModule } from 'ngx-bootstrap-navbar';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { ModalModule } from 'ngx-bootstrap/modal';

//imports of project
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './commons/commons-admin/menu/menu.component';
import { FooterComponent } from './commons/commons-admin/footer/footer.component';
import { MenuUserComponent } from './commons/commons-user/menu-user/menu.component';
import { FooterUserComponent } from './commons/commons-user/footer-user/footer.component';
import { DistributionComponent } from './pages/admin/distribution/distribution.component';
import { ProductsComponent } from './pages/admin/products/products.component';
import { VentaComponent } from './pages/admin/venta/venta.component';
import { ProductionComponent } from './pages/admin/production/production.component';
import { HomeComponent } from './pages/admin/home/home.component';
import { GaleriaPedidosComponent } from './components/galeria-pedidos/galeria-pedidos.component';
import { ListaProduccionComponent } from './components/lista-produccion/lista-produccion.component';
import { ShoppingCartComponent } from './pages/user/shopping-cart/shopping-cart.component';
import { GalleryProductsComponent } from './components/gallery-products/gallery-products.component';
import { CardProductComponent } from './components/card-product/card-product.component';
import { PedidoComponent } from './pages/user/pedido/pedido.component';
import { CardCartComponent } from './components/card-cart/card-cart.component';
import { LoginComponent } from './pages/login/login.component';
import { FiltersComponent } from './components/filters/filters.component';
import { GalleryCartComponent } from './components/gallery-cart/gallery-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    MenuUserComponent,
    FooterUserComponent,
    DistributionComponent,
    ProductsComponent,
    VentaComponent,
    ProductionComponent,
    HomeComponent,
    GaleriaPedidosComponent,
    ListaProduccionComponent,
    ShoppingCartComponent,
    GalleryProductsComponent,
    CardProductComponent,
    PedidoComponent,
    CardCartComponent,
    LoginComponent,
    FiltersComponent,
    GalleryCartComponent
  ],
  imports: [
    ModalModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule,
    NgxNavbarModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    AppRoutingModule,
    CollapseModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
