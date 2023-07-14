import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { UserDetailsEntity } from '../board-initiator/user-details-entity';

const AUTH_API = 'http://localhost:8080/product/';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) { }

  getDemandAll(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post(AUTH_API + 'viewAll', httpOptions);
    
  }
  

  getDemandByUser(postId=''): Observable<UserDetailsEntity[]> {
    const headers = {
      'Content-type': 'application/json'
    };
    //var param = new HttpParams().set('postId', postId);
    const body = { postId: postId};
   var AUTH_API1='http://localhost:8080/product/viewProdcutByCreator/?postId='+postId
    return <Observable<UserDetailsEntity[]>> this.http.post(AUTH_API1,body).pipe(
      map(res => { return res })
  );
  }

  approveProduct(postId='2'):  Observable<any[]>{
    const URLApprovelProd='http://localhost:8080/product/approvePost/?postId='+postId
     return <any> this.http.post(URLApprovelProd,"").pipe(
      map(res => { return res })
  );
    }
  
}
