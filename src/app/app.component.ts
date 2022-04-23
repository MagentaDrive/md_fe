import { Component, OnInit } from '@angular/core';

import { TokenService,  AccountService } from './_services';
import { User } from './_models';

@Component({ selector: 'app', templateUrl: 'app.component.html' })
export class AppComponent implements OnInit {
  isLoggedIn = false;

  username?: string;


  constructor(private tokenStorageService: TokenService) {
  }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      


    }

  }

  logout(): void {
    this.tokenStorageService.logOut();
    this.isLoggedIn = !!this.tokenStorageService.getToken();
  }
}
