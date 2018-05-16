import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SignupCredentials, UserService } from '../api/user.service';

@Component({
  selector: 'app-request-signup',
  templateUrl: './request-signup.component.html',
  styleUrls: ['./request-signup.component.css']
})
export class RequestSignupComponent implements OnInit {

  signupCreds: SignupCredentials = new SignupCredentials();

  constructor(
    public userTruc: UserService,
    private resTruc: Router
  ) { }

  ngOnInit() {
  }

  signupSubmit() {
    this.userTruc.postSignup(this.signupCreds)
      .then((result) => {
        this.resTruc.navigateByUrl('/');
      })
      .catch((err) => {
        console.log('Submission error');
        console.log(err);
      });
  }

}
