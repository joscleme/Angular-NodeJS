import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {

  insertarForm: FormGroup;

  constructor(private usuarioServicio: UsuarioService, private router: Router) { 
    
    this.insertarForm = new FormGroup({

      nombre: new FormControl('', Validators.required),
      apellidos: new FormControl('', Validators.required),
      edad: new FormControl('', Validators.required)
    
    }) 
  
  }

  insertarUsuario() {

    this.usuarioServicio.crearUsuario(this.insertarForm.value).subscribe((usuario_creado) => {

      if (usuario_creado) {

        this.router.navigate(['/']);

      }

    })

  }

  ngOnInit(): void {
  }

}
