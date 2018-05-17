import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/operator/toPromise';

import { environment } from '../../environments/environment';

@Injectable()
export class UserService {

  currentUser: User;

  constructor(
    private ajaxTruc: HttpClient
  ) { }


//checkLogin
  check() {
    return this.ajaxTruc
      .get(`${environment.backUrl}/api/checkLogin`, { withCredentials: true })
      .toPromise()
      .then((apiResponse: any) => {
        this.currentUser = apiResponse.userInfo;
        return apiResponse;
      });
  }

//signup
  postSignup(creds: SignupCredentials) {
    return this.ajaxTruc
      .post(
        `${environment.backUrl}/api/signup`,
        creds,
        { withCredentials: true }
      )
      .toPromise()
      .then((apiResponse: any) => {
        this.currentUser = apiResponse.userInfo;
        return apiResponse;
      });
  }

//login
postLogin(creds: LoginCredentials) {
  return this.ajaxTruc
    .post(
      `${environment.backUrl}/api/login`,
      creds,
      { withCredentials: true }
    )
    .toPromise()
    .then((apiResponse: any) => {
      this.currentUser = apiResponse.userInfo;
      return apiResponse;
    });
}

//logout
logout () {
  return this.ajaxTruc
    .get(`${environment.backUrl}/api/logout`, { withCredentials: true })
    .toPromise()
    .then((apiResponse: any) => {
      this.currentUser = apiResponse.userInfo;
      return apiResponse;
    });
}
}

export class User {
  _id: string;
  email: string;
  updated_at: Date;
  created_at: Date;
}

export class LoginCredentials {
  email: string;
  password: string;
}

export class SignupCredentials {
  fullName: string;
  company: string;
  email: string;
  phoneNumber: string;
  planType: string;
}