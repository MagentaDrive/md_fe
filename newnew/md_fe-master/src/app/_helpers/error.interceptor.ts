import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import  { TokenService, AccountService } from '@app/_services';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private tokenss: TokenService) {}

    

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
          if ([401, 403].includes(err.status) //&& this.accountService.userValue TODO
          ) {
                // auto logout if 401 or 403 response returned from api
            this.tokenss.logOut();
            }

            const error = err.error?.message || err.statusText;
            console.error(err);
            return throwError(error);
        }))
    }
}
