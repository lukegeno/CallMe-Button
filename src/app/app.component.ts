import { Component } from '@angular/core';
import { UserService } from './api/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(
    public userTruc: UserService
  ) {}

  ngOnInit() {
    //check if visitor is logged in immediately
    this.userTruc.check()
      .catch((err) => {
        console.log("App login check error");
        console.log(err);
      });
  }

  logoutClick() {
    this.userTruc.logout()
      .catch((err) => {
        console.log("LOGOUT error");
        console.log(err);
      });
  }
}
