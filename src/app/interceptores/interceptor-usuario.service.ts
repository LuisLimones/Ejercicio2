import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InterceptorUsuarioService implements HttpInterceptor{

  constructor() { }

  intercept(req, next){
    let authReq=req.clone({
      setHeaders: {
        Authorization: 'Bearer Mientras.No.Sirve'
      }
    })
    return next.handle(authReq);
  }
}
