import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { User } from '../interfaces/user';


@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(private http:HttpClient) { }

  getUsers(){
    let token = localStorage.getItem('token') as string
    return this.http.get('http://localhost:5000/user', {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'token': token
      })
    })

    // console.log(res);
    
  }

  createUser (user: User){
    return this.http.post('http://localhost:5000/user/register', user).subscribe(res=>{
      console.log(res);
      
    })
  }
}