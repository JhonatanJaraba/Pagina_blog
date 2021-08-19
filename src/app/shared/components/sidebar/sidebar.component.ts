import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  nombreUsuario: string;
  email: string;

  constructor(private tokenService: TokenService) { }

  ngOnInit() {
    this.nombreUsuario = this.tokenService.getUserName();
    
  }
}
