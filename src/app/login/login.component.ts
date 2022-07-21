import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Users } from '../model/users.model';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model = new Users();

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  validateUser(loginForm: NgForm) {
    this.loginService.validateLoginDetails(this.model).subscribe(
      responseData => {
        console.log(responseData);
        
        window.sessionStorage.setItem("Authorization",<string>responseData.headers.get('Authorization'));
        this.model = <any> responseData.body;
        this.model.authStatus = 'AUTH';
        window.sessionStorage.setItem("userdetails",JSON.stringify(this.model));
        this.router.navigate(['home']);
      }, error => {
        console.log("Right Here");
        
        console.log(error);
      });

  }

  getCookie(name:string) {
    let cookie:any = {};
    document.cookie.split(';').forEach(function(el) {
      let [k,v] = el.split('=');
      cookie[(k.trim())] = v;
    })
    return cookie[name];
  }


}
