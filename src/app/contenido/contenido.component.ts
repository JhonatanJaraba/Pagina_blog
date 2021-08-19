import { Component, OnInit } from '@angular/core';
import { CargarScriptsService } from "./../cargar-scripts.service"
import { Producto } from '../models/producto';
import { ProductoService } from '../service/producto.service';
import { ToastrService } from 'ngx-toastr';
import { TokenService } from '../service/token.service';
@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css']
})
export class ContenidoComponent implements OnInit {
  
  productos: Producto[] = [];
  isAdmin = false;

  constructor(
    private productoService: ProductoService,
    private toastr: ToastrService,
    private tokenService: TokenService
  ) { }
  pageActual: number = 1;
  ngOnInit() {
    this.cargarProductos();
    this.isAdmin = this.tokenService.isAdmin();
  }

  cargarProductos(): void {
    this.productoService.lista().subscribe(
      data => {
        this.productos = data;
      },
      err => {
        console.log(err);
      }
    );
  }

}
