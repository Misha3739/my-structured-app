import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {RecipesComponent} from "./recipes/recipes.component";
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import {RecipesListComponent} from "./recipes/recipes-list/recipes-list.component";
import {RecipeStartComponent} from "./recipes/recipe-start/recipe-start.component";
import {RecipesDetailComponent} from "./recipes/recipes-detail/recipes-detail.component";
import {RecipeEditComponent} from "./recipes/recipe-edit/recipe-edit.component";
import {SignupComponent} from "./auth/signup/signup.component";
import {SigninComponent} from "./auth/signin/signin.component";
import {AuthGuard} from "./auth/auth-guard.service";

const appRoutes: Routes = [
  {path: '', redirectTo: '/signin', pathMatch:'full'},
  {path: 'recipes',component: RecipesComponent,children:[
    {path: '',component: RecipeStartComponent },
    {path: 'new', component: RecipeEditComponent, canActivate: [AuthGuard]},
    {path: ':id',component: RecipesDetailComponent },
    {path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuard] },
  ]},
  {path:'shopping-list', component: ShoppingListComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'signin', component: SigninComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
