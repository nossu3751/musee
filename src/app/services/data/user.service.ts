import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  getUser(uid:number):Observable<any>{
    return this.http.get(`http://localhost:5000/api/demo/users/${uid}`)
  }
}
