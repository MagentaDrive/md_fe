import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {TextValueAccessorDirective} from '../directives/text-value-accessor';
import {CheckedValueAccessorDirective} from '../directives/checked-value-accessor';
import {NumberValueAccessorDirective} from '../directives/number-value-accessor';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './SignUp/sign_up.component';
import {HomeComponent} from './home/home.component';
import {ProfileComponent} from './profile/profile.component';


import {authInterceptorProviders} from './_helpers/auth.interceptor';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        SignupComponent,
        HomeComponent,
        ProfileComponent,
        TextValueAccessorDirective,
        CheckedValueAccessorDirective,
        NumberValueAccessorDirective,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule

    ],
    providers: [authInterceptorProviders],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {
}
