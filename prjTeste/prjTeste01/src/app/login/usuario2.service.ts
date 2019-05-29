import { HttpClient } from '@angular/common/http';
import { CrudService } from './../shared/crud-service';
import { Injectable } from '@angular/core';
import { Usuario } from './usuario';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Usuario2Service extends CrudService<Usuario>{

  constructor(public http: HttpClient) {
    super(http,"http://localhost:3000/usuarios");
  }

}
