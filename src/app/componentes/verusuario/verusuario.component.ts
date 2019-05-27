import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../clases/usuario';
import { UsuarioService } from '../../servicios/usuario.service';

@Component({
  selector: 'app-verusuario',
  templateUrl: './verusuario.component.html',
  styleUrls: ['./verusuario.component.css']
})
export class VerusuarioComponent implements OnInit {

  usuarios: Usuario[];

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.getUsuarios();
  }
  
  getUsuarios(){
    this.usuarioService.getUsuarios().subscribe(usuarios => this.usuarios=usuarios);
  }
  eliminarUsuario(id){
    console.log("Llega metodo "+id);
    this.usuarioService.deleteUsuario(id).subscribe();
  }
}
