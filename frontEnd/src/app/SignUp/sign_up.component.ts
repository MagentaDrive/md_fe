import {Component, OnInit} from '@angular/core';
import {AuthService} from '../_services/auth.service';
import {FormControl, Validators} from "@angular/forms";

@Component({
    selector: 'app-register',
    templateUrl: './sign_up.component.html',
    styleUrls: ['./sign_up.component.css']
})

export class SignupComponent implements OnInit {

    username: string = ""
    isSuccessful = false;
    isSignUpFailed = false;
    errorMessage = '';
    password = new FormControl('', [Validators.required, Validators.minLength(8)]);
    email = new FormControl('', [Validators.required, Validators.email]);
    vorname = new FormControl('', [Validators.required, Validators.minLength(3)]);
    nachname = new FormControl('', [Validators.required, Validators.minLength(3)]);
    hochschule = new FormControl('', [Validators.required, Validators.minLength(3)]);

    constructor(private authService: AuthService) {
    }

    ngOnInit(): void {
    }

    /** Bei Buttom click werden die einzelnen Variablen gesetzt
     *  und dann die Methode des auth.service aufgerufen zum Registrieren*/
    onSubmit(): void {
        this.errorMessage = ""
        if (!this.vorname.valid) {
            this.errorMessage = "Vorname darf nicht leer sein und mind. 3 Zeichen lang";
            return;
        }
        if (!this.nachname.valid) {
            this.errorMessage = "Nachname darf nicht leer sein und mind. 3 Zeichen lang";
            return;
        }
        if (!this.hochschule.valid) {
            this.errorMessage = "Hochschule darf nicht leer sein und mind. 3 Zeichen lang";
            return;
        }
        if (!this.email.valid) {
            this.errorMessage = "Es muss eine gültige E-mail sein";
            return;
        }
        if (!this.password.valid) {
            this.errorMessage = "Passwort muss mind. 8 Zeichen lang sein";
            return;
        }
        this.authService.signUp(this.vorname.value, this.nachname.value, this.username, this.hochschule.value, this.email.value, this.password.value).subscribe(
            data => {
                this.isSuccessful = true;
                this.isSignUpFailed = false;

            },
            err => {
                this.errorMessage = err.error.message;
                this.isSignUpFailed = true;
            }
        );


    }

    setPasswordEvent(event: any) {
        this.password.setValue(event.target.value);
    }

    setEmailEvent(event: any) {
        this.email.setValue(event.target.value);
        this.username = event.target.value;
    }

    setHochschuleEvent(event: any) {
        this.hochschule.setValue(event.target.value);
    }

    setNachnameEvent(event: any) {
        this.nachname.setValue(event.target.value);
    }

    setVornameEvent(event: any) {
        this.vorname.setValue(event.target.value);
    }


}
