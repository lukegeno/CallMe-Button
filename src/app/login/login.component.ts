import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginCredentials, UserService } from '../api/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  ifErrMsg: boolean = false;
  displayMsg: string;

  formCreds: LoginCredentials = new LoginCredentials();

  constructor(
    public userTruc: UserService,
    private resTruc: Router
  ) { }

  ngOnInit() {
  }

  loginSubmit() {
    this.userTruc.postLogin(this.formCreds)
      .then((result) => {
        this.resTruc.navigateByUrl('/main');
        //I want to take them to a secret logged-in page, not the sales landing page
      })
      .catch((err) => {
        console.log('Login error');
        console.log(err.error.message)
        this.ifErrMsg = true;
        this.displayMsg = err.error.message;
        console.log(err);
      });
  }

}
