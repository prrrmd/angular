import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  LoginUser(signInForm: NgForm) {

    /*3ways to validation
    #1 : using css file
    #2 : using disable submit buttom
    #3 : using ngModel variable checking*/

    console.log(signInForm.value.email);
    console.log(signInForm.value.password);
  }

}
