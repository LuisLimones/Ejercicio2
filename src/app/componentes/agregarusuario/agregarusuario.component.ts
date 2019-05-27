import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../clases/usuario';
import { UsuarioService } from '../../servicios/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregarusuario',
  templateUrl: './agregarusuario.component.html',
  styleUrls: ['./agregarusuario.component.css']
})
export class AgregarusuarioComponent implements OnInit {

  constructor(private usuarioService: UsuarioService) { }

  user: Usuario={
    id: null,
    usuario: null,
    calle: null,
    colonia: null,
    numero: null,
    correo: null,
    telefono: null,
    imagen: null
  };
  _router: Router;

  ngOnInit() {
  }

  submitAgregar(){
    this.usuarioService.postUsuario(this.user).subscribe();
  }
}
