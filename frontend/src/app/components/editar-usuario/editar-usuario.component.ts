import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {

  editarForm: FormGroup;
  id: string = "";
  usuario: Usuario = {
    _id: '',
    nombre: '',
    apellidos: '',
    edad: 0
  };

  constructor(private usuarioServicio: UsuarioService, private router: Router,
    private activatedRoute: ActivatedRoute) { 
    
    this.editarForm = new FormGroup ({
      
      _id: new FormControl('', Validators.required),
      nombre: new FormControl('', Validators.required),
      apellidos: new FormControl('', Validators.required),
      edad: new FormControl('', Validators.required)
    
    })

  }

  editarUsuario(id: string, usuario_nuevo: Usuario) {

    usuario_nuevo = this.editarForm.value;

    this.usuarioServicio.editarUsuario(id, usuario_nuevo).subscribe((usuario_editado) => {

      if (usuario_editado) {

        this.router.navigate(['/']);

      }

    })

  }

  ngOnInit(): void {

    const params = this.activatedRoute.snapshot.params;
    this.id = params['id'];

    this.usuarioServicio.obtenerUsuario(this.id).subscribe((usuario_seleccionado) => {

      this.editarForm.setValue({

        _id: usuario_seleccionado._id,
        nombre: usuario_seleccionado.nombre,
        apellidos: usuario_seleccionado.apellidos,
        edad: usuario_seleccionado.edad 

      })

    })

  }

}
