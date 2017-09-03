import { NgModule } from '@angular/core';
import {HomeComponent} from "./home/home.component";
import {HeaderComponent} from "./header/header.component";
import {SharedModule} from "../shared/shared.module";
import {AppRoutingModule} from "../app-routing-module";
import {Authservice} from "../auth/authservice";
import {DataStorage} from "../shared/data-storage";
import {ShoppingListService} from "../shopping-list/shoppinglist.service";
import {RecipeService} from "../recipes/recipe.service";
import {AuthInterceptor} from "../shared/auth-interceptor";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {LoggingInterceptor} from "../shared/logging-interceptor";

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
    Authservice,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoggingInterceptor,
      multi: true
    }
    ]
})
export class CoreModule { }
