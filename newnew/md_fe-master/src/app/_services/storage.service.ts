import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenService } from './token.service';




const AUTH_API = 'http://localhost:8080/'; // TODO mit Envirement ersetzen


@Injectable({ providedIn: 'root' })
export class StorageService {
   
    

  
    
    constructor(private http: HttpClient, private token: TokenService){
         
    }
   
  headers = new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*')
  .set('Authorization',`Bearer ${ this.token.getToken()}`)
  .set( 'Access-Control-Allow-Methods', "GET,POST,OPTIONS,DELETE,PUT" );

    getAllDocs(){
        
        console.log(`Bearer ${ this.token.getToken()}`)
        return this.http.get(AUTH_API + 'storage/files', 
           {headers : this.headers});
           
    }
}