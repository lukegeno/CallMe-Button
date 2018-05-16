import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../api/user.service';

@Component({
  selector: 'app-logged-in',
  templateUrl: './logged-in.component.html',
  styleUrls: ['./logged-in.component.css']
})
export class LoggedInComponent implements OnInit {

  constructor(
    public userTruc: UserService,
    private resTruc: Router
  ) { }

  ngOnInit() {
    this.userTruc.check()
    .catch((err) => {
      console.log(err)
    })

  }

}