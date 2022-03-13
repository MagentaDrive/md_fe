import {Component, OnInit} from '@angular/core';
import {AuthService} from '../_services/auth.service';
import {TokenStorageService} from '../_services/token-storage.service';
import {FormControl, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    isLoggedIn = false;
    isLoginFailed = false;
    errorMessage: string | undefined;
    roles: string[] = [];

    password = new FormControl('', [Validators.required, Validators.minLength(8)]);
    email = new FormControl('', [Validators.required, Validators.email]);

    constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private router: Router) {
    }

    ngOnInit(): void {
        if (this.tokenStorage.getToken()) {
            this.roles = this.tokenStorage.getUser().roles;
        }
    }

    setPasswordEvent(event: any): void {
        this.password.setValue(event.target.value);
    }

    setEmailEvent(event: any) {
        this.email.setValue(event.target.value);
    }


    onSubmit(): void {
        this.errorMessage = ''
        if (!this.email.valid) {
            this.errorMessage = "Es muss eine gültige E-mail sein";
            return;
        }
        if (!this.password.valid) {
            this.errorMessage = "Passwort muss mind. 8 Zeichen lang sein";
            return;
        }


        this.authService.login(this.email.value, this.password.value).subscribe(
            data => {
                this.tokenStorage.saveToken(data.accessToken);
                this.tokenStorage.saveUser(data);
                this.isLoginFailed = false;
                this.isLoggedIn = true;
                this.roles = this.tokenStorage.getUser().roles;
                this.reloadPage()


            },
            err => {
                this.errorMessage = err.error.message;
                this.isLoginFailed = true;
            }
        );

    }

    reloadPage(): void {
        window.location.reload();

    }
}
