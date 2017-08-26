import { NgModule } from '@angular/core';
import {HomeComponent} from "./home/home.component";
import {HeaderComponent} from "./header/header.component";
import {SharedModule} from "../shared/shared.module";
import {AppRoutingModule} from "../app-routing-module";
import {Authservice} from "../auth/authservice";
import {DataStorage} from "../shared/data-storage";
import {ShoppingListService} from "../shopping-list/shoppinglist.service";
import {RecipeService} from "../recipes/recipe.service";

@NgModule({
  imports: [

    SharedModule,
    AppRoutingModule
  ],
  declarations: [
    HomeComponent,
    HeaderComponent
  ],
  exports: [
    AppRoutingModule,
    HeaderComponent
  ],
  providers: [
    ShoppingListService,
    RecipeService,
    DataStorage,
    Authservice]
})
export class CoreModule { }
