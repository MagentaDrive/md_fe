import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { TokenService } from './token.service';

import { environment } from '@environments/environment';
import { User } from '@app/_models';

const AUTH_API = 'http://localhost:8081/'; // TODO mit Envirement ersetzen
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class AccountService {


  constructor(

    private http: HttpClient,
  ) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'login', {
      username,
      password
    }, httpOptions);
  }

  signUp(vorname: string, nachname: string, hochschule: string, username: string, email: string, password: string, course: number): Observable<any> {
    return this.http.post(AUTH_API + 'auth/user', {
      vorname,
      nachname,
      hochschule,
      username,
      email,
      password,
      course
    }, httpOptions);
  }





  getAll() {
    //return this.http.get<User[]>(`${environment.apiUrl}/users`);
  }

  getById(id: string) {
    //return this.http.get<User>(`${environment.apiUrl}/users/${id}`);
  }

  update(id, params) {
    //return this.http.put(`${environment.apiUrl}/users/${id}`, params)
    //    .pipe(map(x => {
    //        // update stored user if the logged in user updated their own record
    //        if (id == this.userValue.id) {
    //            // update local storage
    //            const user = { ...this.userValue, ...params };
    //            localStorage.setItem('user', JSON.stringify(user));

    //            // publish updated user to subscribers
    //            this.userSubject.next(user);
    //        }
    //        return x;
    //    }));
  }

  delete(id: string) {
    //return this.http.delete(`${environment.apiUrl}/users/${id}`)
    //    .pipe(map(x => {
    //        // auto logout if the logged in user deleted their own record
    //        if (id == this.userValue.id) {
    //            this.logout();
    //        }
    //        return x;
    //    }));
  }
}
