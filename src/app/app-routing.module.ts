import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DistributionComponent } from './pages/admin/distribution/distribution.component';
import { ProductionComponent } from './pages/admin/production/production.component';
import { VentaComponent } from './pages/admin/venta/venta.component';
import { ProductsComponent } from './pages/admin/products/products.component';
import { HomeComponent } from './pages/admin/home/home.component';
import { GaleriaPedidosComponent } from './components/galeria-pedidos/galeria-pedidos.component';
import { ListaProduccionComponent } from './components/lista-produccion/lista-produccion.component';
import { ShoppingCartComponent } from './pages/user/shopping-cart/shopping-cart.component';
import { PedidoComponent } from './pages/user/pedido/pedido.component';
import { LoginComponent } from './pages/login/login.component';




const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'lista-produccion', component: ListaProduccionComponent },
  { path: 'galeria-pedidos', component: GaleriaPedidosComponent },
  { path: 'distribution', component: DistributionComponent },
  { path: 'production', component: ProductionComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'venta', component: VentaComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent },
  { path: 'pedido', component: PedidoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
