import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import {ShoppingListService} from "./shopping-list/shoppinglist.service";
import {AppRoutingModule} from "./app-routing-module";
import {HttpModule} from "@angular/http";
import {RecipeService} from "./recipes/recipe.service";
import {DataStorage} from "./shared/data-storage";
import {Authservice} from "./auth/authservice";
import {AuthGuard} from "./auth/auth-guard.service";
import {SharedModule} from "./shared/shared.module";
import {FormsModule} from "@angular/forms";
import {ShoppingListModule} from "./shopping-list/shopping-list.module";
import {AuthModule} from "./auth/auth.module";
import {CoreModule} from "./core/core.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    SharedModule,
    ShoppingListModule,
    AuthModule,
    CoreModule
  ],
  providers: [ShoppingListService, RecipeService, DataStorage, Authservice, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
