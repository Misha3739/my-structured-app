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

const appRoutes: Routes = [
  {path: '', redirectTo: '/recipes', pathMatch:'full'},
  {path: 'recipes',component: RecipesComponent,children:[
    {path: '',component: RecipeStartComponent },
    {path: 'new', component: RecipeEditComponent},
    {path: ':id',component: RecipesDetailComponent },
    {path: ':id/edit', component: RecipeEditComponent},
  ]},
  {path:'shopping-list', component: ShoppingListComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'signin', component: SignupComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
