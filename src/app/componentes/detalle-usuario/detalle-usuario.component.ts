import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { Usuario } from '../../clases/usuario';

@Component({
  selector: 'app-detalle-usuario',
  templateUrl: './detalle-usuario.component.html',
  styleUrls: ['./detalle-usuario.component.css']
})
export class DetalleUsuarioComponent implements OnInit {

  constructor(private route: ActivatedRoute, private usuarioService: UsuarioService) { }

  usuario: Usuario;
  id: string;

  ngOnInit() {
    this.id =this.route.snapshot.paramMap.get('id');
    this.usuarioService.getUsuario(this.id).subscribe(usuario => this.usuario=usuario);
  }

}
