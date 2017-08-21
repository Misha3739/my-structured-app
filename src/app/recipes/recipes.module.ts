import { NgModule } from '@angular/core';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import {RecipesComponent} from "./recipes.component";
import {RecipesListComponent} from "./recipes-list/recipes-list.component";
import {RecipeEditComponent} from "./recipe-edit/recipe-edit.component";
import {RecipesDetailComponent} from "./recipes-detail/recipes-detail.component";
import {RecipeItemComponent} from "./recipes-list/recipe-item/recipe-item.component";
import {ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {RecipesRoutingModule} from "./recipes.routing.module";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  imports:[
    CommonModule,
    RecipesRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [
    RecipesComponent,
    RecipeStartComponent,
    RecipesListComponent,
    RecipeEditComponent,
    RecipesDetailComponent,
    RecipeItemComponent,
  ]
})
export class RecipesModule { }
