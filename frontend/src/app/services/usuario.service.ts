import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  urlUsuarios = "http://localhost:4000/api/usuarios";

  constructor(private http: HttpClient) { }

  obtenerUsuarios():Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.urlUsuarios);
  }

  obtenerUsuario(id: string):Observable<Usuario> {
    return this.http.get<Usuario>("http://localhost:4000/api/usuarios/" + id);
  }

  crearUsuario(usuario: Usuario) {
    return this.http.post(this.urlUsuarios, usuario);
  }

  editarUsuario(id: string, usuario: Usuario) {
    return this.http.put("http://localhost:4000/api/usuarios/" + id, usuario);
  }

  eliminarUsuario(id: string) {
    return this.http.delete("http://localhost:4000/api/usuarios/" + id);  
  }

}
