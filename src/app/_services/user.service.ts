import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

const API_URL = 'http://localhost:8080/api/test/';
const TEXT_RESPONSE = 'text';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    constructor(private http: HttpClient) {
    }

    getUserBoard(): Observable<any> {
        return this.http.get(API_URL + 'user', {responseType: TEXT_RESPONSE});
    }

    getAdminBoard(): Observable<any> {
        return this.http.get(API_URL + 'admin', {responseType: TEXT_RESPONSE});
    }
}
