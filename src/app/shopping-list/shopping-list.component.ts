import {Component, OnDestroy, OnInit} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from "./shoppinglist.service";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  ingredients: Ingredient[];
  private subscription: Subscription;

  constructor(private  shoppingListService: ShoppingListService) {

  }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();

  this.subscription =  this.shoppingListService.ingredientsChanged.subscribe((ingredientsList: Ingredient[])=>{
      this.ingredients = ingredientsList;
    });
  }

  ngOnDestroy()
  {
    this.subscription.unsubscribe();
  }

  onShoppingItemAdded(eventData: Ingredient)
  {
    this.shoppingListService.addIngredient(eventData);
  }

}
