import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { UserAcees } from '../Model/user-acees';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }
  tokenresp: any;
  apiurl = 'https://localhost:8080'
  AUTH_API = 'http://localhost:8080/api/auth/';
  private _updatemenu = new Subject<void>();
  get updatemenu() {
    return this._updatemenu;
  }
  login(username: string, password: string): Observable<any> {
    return this.http.post(this.AUTH_API+ 'signin', {
      username,
      password
    }, httpOptions);
  }

  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(this.AUTH_API + 'signup', {
      username,
      email,
      password
    }, httpOptions);
  }

  get userMenues(){
    console.info("Manu items should be loaded on construtour ")
    var REST_URL= 'http://localhost:8080'
   return this.http.post(REST_URL + '/api/auth/menus/','')
      
  }

  getUserAccess():Observable<UserAcees[]>{
    return this.http.get<UserAcees[]>('http://localhost:3000/access-control');
  }

  GetRolebyToken(token: any) {
    let _token = token.split('.')[1];
    this.tokenresp = JSON.parse(atob(_token))
    return this.tokenresp.role;
  }

  getMenubyrole(role: any) {
    console.log('menu from table='+role)
    console.log('apiurl from table='+this.apiurl)
    return this.http.get(this.AUTH_API + 'menus/GetMenubyRole/' + role)
  }
  HaveAccess(role: any, menu: any) {
    return this.http.get(this.AUTH_API + 'HaveAccess?role=' + role + '&menu=' + menu);
  }
}
