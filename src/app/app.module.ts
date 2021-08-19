import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaProductoComponent } from './producto/lista-producto.component';
import { DetalleProductoComponent } from './producto/detalle-producto.component';
import { NuevoProductoComponent } from './producto/nuevo-producto.component';
import { EditarProductoComponent } from './producto/editar-producto.component';
import { interceptorProvider } from './interceptors/prod-interceptor.service';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// external
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { LoginComponent } from './auth/login.component';
import { RegistroComponent } from './auth/registro.component';
import { MenuComponent } from './menu/menu.component';
import { IndexComponent } from './index/index.component';
import { ContenidoComponent } from './contenido/contenido.component';

// METODO PARA SCRIPT   
import { CargarScriptsService } from "./cargar-scripts.service";

import { FooterComponent } from './footer/footer.component';
import { DetallecontenidoComponent } from './detallecontenido/detallecontenido.component';
import { PruebasComponent } from './pruebas/pruebas.component';
import { CardsComponent } from './cards/cards.component'
// external

// PAGINACION
import {NgxPaginationModule} from 'ngx-pagination';

//ANGULAR MATERIAL
import { MatButtonModule } from '@angular/material';
import { DefaultModule } from './layouts/default/default.module';


@NgModule({
  declarations: [
    AppComponent,
    ListaProductoComponent,
    DetalleProductoComponent,
    NuevoProductoComponent,
    EditarProductoComponent,
    LoginComponent,
    RegistroComponent,
    MenuComponent,
    IndexComponent,
    ContenidoComponent,
    FooterComponent,
    DetallecontenidoComponent,
    PruebasComponent,
    CardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    MatButtonModule,
    DefaultModule
  ],
  providers: [
    interceptorProvider,
    CargarScriptsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
