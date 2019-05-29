import { Component, OnInit } from '@angular/core';
import { AutenticService } from './autentic.service';

import { Usuario } from './usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private usuario: Usuario = new Usuario();
  constructor(private autenticService: AutenticService) { }

  ngOnInit() {
  }

  fazerLogin(){
    this.autenticService.fazerLogin(this.usuario);
  }
}
