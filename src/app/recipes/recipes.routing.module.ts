import { NgModule } from '@angular/core';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import {RecipesComponent} from "./recipes.component";
import {RecipeEditComponent} from "./recipe-edit/recipe-edit.component";
import {RecipesDetailComponent} from "./recipes-detail/recipes-detail.component";
import {AuthGuard} from "../auth/auth-guard.service";
import {RouterModule, Routes} from "@angular/router";

const  recipeRoutes: Routes = [{path: '',component: RecipesComponent,children:[
  {path: '',component: RecipeStartComponent },
  {path: 'new', component: RecipeEditComponent, canActivate: [AuthGuard]},
  {path: ':id',component: RecipesDetailComponent },
  {path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuard] },
]}];

@NgModule({
  imports:[
    RouterModule.forChild(recipeRoutes)
  ],
  declarations: [

  ],
  exports: [RouterModule],
  providers : [
    AuthGuard
  ]
})
export class RecipesRoutingModule { }
