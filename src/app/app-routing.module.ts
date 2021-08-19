import { LoginGuard } from './guards/login.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaProductoComponent } from './producto/lista-producto.component';
import { DetalleProductoComponent } from './producto/detalle-producto.component';
import { NuevoProductoComponent } from './producto/nuevo-producto.component';
import { EditarProductoComponent } from './producto/editar-producto.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './auth/login.component';
import { RegistroComponent } from './auth/registro.component';
import { ProdGuardService } from './guards/prod-guard.service';
import { ContenidoComponent } from './contenido/contenido.component';
import { FooterComponent } from './footer/footer.component';
import {DetallecontenidoComponent} from './detallecontenido/detallecontenido.component';
import { PruebasComponent } from './pruebas/pruebas.component';
import { CardsComponent } from './cards/cards.component';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';


const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: '', component: DefaultComponent, canActivate: [ProdGuardService], data: { expectedRol: ['admin'] },children:[
    {path: 'cpanel',component: DashboardComponent},
    {path: 'lista',component: ListaProductoComponent},
    {path: 'nuevo',component: NuevoProductoComponent},
    {path: 'editar/:id',component: EditarProductoComponent},
    {path: 'detalle/:id',component: DetalleProductoComponent}
  ]},
  { path: 'login', component: LoginComponent, canActivate: [LoginGuard] },
  { path: 'registro', component: RegistroComponent, canActivate: [LoginGuard] },
  { path: 'lista', component: ListaProductoComponent, canActivate: [ProdGuardService], data: { expectedRol: ['admin', 'user'] } },
  { path: 'contenido', component: ContenidoComponent, canActivate: [ProdGuardService], data: { expectedRol: ['admin', 'user'] } },
  { path: 'Detallecontenido/:id', component: DetallecontenidoComponent, canActivate: [ProdGuardService], data: { expectedRol: ['admin', 'user'] } },
  { path: 'footer', component: FooterComponent},
  { path: 'pruebas', component: PruebasComponent},
  { path: 'cards', component: CardsComponent},

  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
