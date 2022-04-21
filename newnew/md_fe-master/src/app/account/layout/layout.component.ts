import { Component } from '@angular/core';
import { Router } from '@angular/router';

import  {TokenService } from '@app/_services';

@Component({ templateUrl: 'layout.component.html' })
export class LayoutComponent {
  constructor(
    private router: Router,
    private tokenService: TokenService
    
  ) {
    const token = this.tokenService.getToken();
    console.log(token);
    if ( token) {
      console.log(token);
      this.router.navigate(['/']);
    }
  }
}

