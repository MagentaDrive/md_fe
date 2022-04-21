import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DocumentUploadRequest } from '../storage/upload/document-upload-request';


const API = 'http://localhost:8080';
@Injectable({ providedIn: 'root' })
export class StorageService {

  constructor(
    private router: Router,
    private http: HttpClient) { }

    getDocsByUser(){

    }

    
    getDocInformation(){

    }
    getAllDocs(){

    }
    uploadDoc(request : DocumentUploadRequest) {
      return this.http.post(`${API}/storage/uplaodDoc`, request)

    }
}
