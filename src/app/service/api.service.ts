import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {login} from '.././login/login.model'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

// postlogins(login : login){
//   return this.http.post<login>('http://192.168.200.33:3000/posts', login)
// }

getlogins(){
  return this.http.get<login[]>('http://localhost:3000/login')
}

editlogins(data:any,id:number){
  return this.http.put<any>('http://localhost:3000/posts/' +id,data)
}

deletelogins(id: string){
  return this.http.delete('http://localhost:3000/posts' + '/' +id)
}

}
