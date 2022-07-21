import { Injectable } from '@angular/core';
import { HttpInterceptor,HttpRequest,HttpHandler,HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import {Router} from '@angular/router';
import {tap} from 'rxjs/operators';
import { Users } from 'src/app/model/users.model';

@Injectable()
export class XhrInterceptor implements HttpInterceptor {

  user = new Users();
  constructor(private router: Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let httpHeaders = new HttpHeaders();
    this.user = JSON.parse(<string>sessionStorage.getItem('userdetails'));
    if(this.user && this.user.userPassword && this.user.userName){
      httpHeaders = httpHeaders.append('Authorization', 'Basic ' + btoa(this.user.userName + ':' + this.user.userPassword));
    }else{
      let authorization = sessionStorage.getItem('Authorization');
      if(authorization){
        httpHeaders = httpHeaders.append('Authorization', authorization);  
      }
    }
    
    httpHeaders = httpHeaders.append('X-Requested-With', 'XMLHttpRequest');
    const xhr = req.clone({
      headers: httpHeaders
    });
  return next.handle(xhr).pipe(tap(() => {},
      (err: any) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status !== 401) {
            return;
          }
          this.router.navigate(['home']);
        }
      }));
  }
}