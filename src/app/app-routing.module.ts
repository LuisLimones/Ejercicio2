import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VerusuarioComponent } from './componentes/verusuario/verusuario.component';
import { AgregarusuarioComponent } from './componentes/agregarusuario/agregarusuario.component';
import { NoEncontradoComponent } from './componentes/no-encontrado/no-encontrado.component';
import { DetalleUsuarioComponent } from './componentes/detalle-usuario/detalle-usuario.component';

const routes: Routes = [
  {path: '', redirectTo: '/usuarios', pathMatch: 'full'},
  {path: 'usuarios', component: VerusuarioComponent},
  {path: 'agregar', component: AgregarusuarioComponent},
  {path: 'usuario/:id', component: DetalleUsuarioComponent},
  {path: '**', component: NoEncontradoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
