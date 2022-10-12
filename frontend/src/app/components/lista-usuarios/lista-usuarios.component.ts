import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {

  usuarios:Usuario[] = [];

  constructor(private usuarioServicio: UsuarioService) { }

  obtenerUsuarios() {

    this.usuarioServicio.obtenerUsuarios().subscribe((datos) => {

      this.usuarios = datos;

    })

  }

  eliminarUsuario(id: string, i: any) {

    this.usuarioServicio.eliminarUsuario(id).subscribe(() => {

        this.usuarios.splice(i, 1);

      });

  }

  ngOnInit(): void {

    this.obtenerUsuarios();
    
}
 

}

