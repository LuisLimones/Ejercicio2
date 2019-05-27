import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from '../clases/usuario';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }
  url:string="http://localhost:3000/usuarios";
  httpOptions={
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };

  getUsuarios(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.url);
  }
  postUsuario(usuario: Usuario):Observable<Usuario>{
    return this.http.post<Usuario>(this.url,usuario,this.httpOptions);
  }
  getUsuario(id: string): Observable<Usuario>{
    return this.http.get<Usuario>(this.url+"/"+id);
  }
  deleteUsuario(id: string){
    console.log("Llega servicio detele "+id);
    return this.http.delete<Usuario>(this.url+'/'+id, this.httpOptions);
  }

}
