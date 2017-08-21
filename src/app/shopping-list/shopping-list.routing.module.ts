import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Route, RouterModule} from "@angular/router";
import {ShoppingListComponent} from "./shopping-list.component";

const shoppingListRoutes:Route[] = [
  {path:'shopping-list', component: ShoppingListComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(shoppingListRoutes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class ShoppingListRoutingModule { }
