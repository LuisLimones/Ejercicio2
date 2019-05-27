import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VerusuarioComponent } from './componentes/verusuario/verusuario.component';
import { AgregarusuarioComponent } from './componentes/agregarusuario/agregarusuario.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { NoEncontradoComponent } from './componentes/no-encontrado/no-encontrado.component';
import { DetalleUsuarioComponent } from './componentes/detalle-usuario/detalle-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    VerusuarioComponent,
    AgregarusuarioComponent,
    NavbarComponent,
    NoEncontradoComponent,
    DetalleUsuarioComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
