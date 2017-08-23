import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {SignupComponent} from "./auth/signup/signup.component";
import {SigninComponent} from "./auth/signin/signin.component";
import {HomeComponent} from "./home/home.component";

const appRoutes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'recipes', loadChildren : './recipes/recipes.module#RecipesModule'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
