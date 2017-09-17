import {Component, OnDestroy, OnInit} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from "./shoppinglist.service";
import {Subscription} from "rxjs/Subscription";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  shoppingListState: Observable<{ingredients: Ingredient[]}>;
  private subscription: Subscription;

  constructor(private  shoppingListService: ShoppingListService, private  store: Store<{
    shoppingList: {
      ingredients: Ingredient[]
  }}>) {

  }

  ngOnInit() {
    this.shoppingListState = this.store.select('shoppingList');

  /*this.subscription =  this.shoppingListService.ingredientsChanged.subscribe((ingredientsList: Ingredient[])=>{
      this.ingredients = ingredientsList;
    });*/
  }


  onShoppingItemAdded(eventData: Ingredient)
  {
    this.shoppingListService.addIngredient(eventData);
  }

  onEditItem(id: number)
  {
    this.shoppingListService.startedEditing.next(id);
  }

  ngOnDestroy()
  {
    //this.subscription.unsubscribe();
  }

}
