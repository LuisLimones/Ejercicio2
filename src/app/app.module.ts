import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VerusuarioComponent } from './componentes/verusuario/verusuario.component';
import { AgregarusuarioComponent } from './componentes/agregarusuario/agregarusuario.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { NoEncontradoComponent } from './componentes/no-encontrado/no-encontrado.component';
import { DetalleUsuarioComponent } from './componentes/detalle-usuario/detalle-usuario.component';
import { UsuarioService } from './servicios/usuario.service';
import { InterceptorUsuarioService } from './interceptores/interceptor-usuario.service';

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
  providers: [UsuarioService, {
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorUsuarioService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
