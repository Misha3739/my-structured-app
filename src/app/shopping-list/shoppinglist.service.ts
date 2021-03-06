import {Ingredient} from "../shared/ingredient.model";
import {EventEmitter} from "@angular/core";
import {Subject} from "rxjs/Subject";

export class  ShoppingListService
{
 ingredientsChanged = new Subject<Ingredient[]>();
 startedEditing = new Subject<number>();

  private ingredients: Ingredient[] = [
    new Ingredient('egg', 5),
    new Ingredient('apple', 3)
  ];

  getIngredients()
  {
    return this.ingredients.slice();
  }

  getIngredient(id: number)
  {
    return this.ingredients[id];
  }

  addIngredient(ingredient: Ingredient)
  {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.getIngredients());
  }

  addIngredients(ingredients: Ingredient[])
  {
   this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.getIngredients());
  }

  updateIngredient(id: number, newIngredient: Ingredient)
  {
    this.ingredients[id] = newIngredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  deleteIngredient(id: number)
  {
    this.ingredients.splice(id, 1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
