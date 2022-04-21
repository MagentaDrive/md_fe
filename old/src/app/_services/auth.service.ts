import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

const AUTH_API = 'http://localhost:8081/api/auth/';

const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    constructor(private http: HttpClient) {
    }

    login(username: string, password: string): Observable<any> {
        return this.http.post(AUTH_API + 'signin', {
            username,
            password
        }, httpOptions);
    }

    signUp(vorname: string, nachname: string, username: string, hochschule: string, email: string, password: string): Observable<any> {
        return this.http.post(AUTH_API + 'signup', {
            vorname,
            nachname,
            hochschule,
            username,
            email,
            password
        }, httpOptions);
    }
}
