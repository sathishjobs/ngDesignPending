import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  showHide:boolean;
  Signshow:boolean;

  constructor() {
    this.showHide = false;
    this.Signshow = false;
  }

  ngOnInit() {
  }

}
