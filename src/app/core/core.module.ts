import { NgModule } from '@angular/core';
import {HomeComponent} from "./home/home.component";
import {HeaderComponent} from "./header/header.component";
import {SharedModule} from "../shared/shared.module";
import {AppRoutingModule} from "../app-routing-module";
import {CommonModule} from "@angular/common";

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
  ]
})
export class CoreModule { }
