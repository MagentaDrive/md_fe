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
  .set('authorization',`Bearer ${ this.token.getToken()}`)


    getAllDocs(){
        
      
        console.log(`bearer ${ this.token.getToken()}`)
        return this.http.get(AUTH_API + 'storage/files', 
           {headers : this.headers});
           
    }

    uploud(file: any, bucketName: string, uploader, postId, uni, course){
      return this.http.post(AUTH_API +"storage/files",{}, {headers: this.headers})
    }
}