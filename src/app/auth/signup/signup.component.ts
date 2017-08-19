import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {Authservice} from "../authservice";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private  authService: Authservice) { }

  ngOnInit() {
  }

  onSignUp(form: NgForm)
  {
    const email = form.value.email;
    const password = form.value.password;

    this.authService.signUpUser(email,password);
  }
  
}
