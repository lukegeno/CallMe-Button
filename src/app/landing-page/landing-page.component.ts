import { Component, OnInit, Input } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
  animations: [
    trigger('flyInOut', [
      state('out', style({ opacity: 0 })),
      state('in', style({ opacity: 1 })),
      transition('out => in', animate('0.2s ease-in')),
      transition('in => out', animate('0.2s 0.1s ease-out'))
    ])
  ]
})
export class LandingPageComponent implements OnInit {

  callState: string = 'out';

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      console.log('doin it');
      this.callState = 'in';
    }, 3000);
  }

}
