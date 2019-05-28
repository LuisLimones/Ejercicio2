import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../clases/usuario';
import { UsuarioService } from '../../servicios/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verusuario',
  templateUrl: './verusuario.component.html',
  styleUrls: ['./verusuario.component.css']
})
export class VerusuarioComponent implements OnInit {

  usuarios: Usuario[];

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit() {
    this.getUsuarios();
  }
  
  getUsuarios(){
    this.usuarioService.getUsuarios().subscribe(usuarios => this.usuarios=usuarios);
  }
  eliminarUsuario(id){
    console.log("Llega metodo "+id);
    this.usuarioService.deleteUsuario(id).subscribe();
    alert("Usuario Eliminado");
    this.router.navigateByUrl('#');
  }
}
