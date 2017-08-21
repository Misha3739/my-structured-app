import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SigninComponent} from "./signin/signin.component";
import {SignupComponent} from "./signup/signup.component";
import {Route, RouterModule} from "@angular/router";

const authRoutes:Route[] = [
  {path: 'signup', component: SignupComponent},
  {path: 'signin', component: SigninComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(authRoutes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
