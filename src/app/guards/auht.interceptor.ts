import {Injectable} from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthTokenInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('currentUser');
    console.log('token=='+token)
    if (!!token) {
     req = req.clone({
       setHeaders: {
         Authorization: 'Bearer '+token
       }
     });
   }
   return next.handle(req);
 }
}