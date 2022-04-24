import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { Post } from "../_models/post"
@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) {}

  getPost(): Observable<Post> {
    return this.http.get<Post>(`localhost:8084/post/1`);
  }
}
