import {Recipe} from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shoppinglist.service";

@Injectable()
export  class RecipeService
{

  private  recipies: Recipe[] = [
    new Recipe(
    'A Meat Recipe',
    'This is the meat',
    'https://grist.files.wordpress.com/2015/07/meat-feature-v1.jpg' ,
    [
      new Ingredient('beef',300),
      new Ingredient('onion',2)
    ]),

    new Recipe(
      'A Salad Recipe',
      'This is the salad',
      'http://noblepig.com/images/2016/06/Avocado-and-Three-Bean-Salad-is-perfect-for-a-summertime-barbecue-side-dish.JPG',
  [
    new Ingredient('apple',5),
  new Ingredient('tomato',8)
])
  ];

  constructor(private  shoppingListService: ShoppingListService)
  {

  }

  getRecipes()
  {
    return this.recipies.slice();
  }

  getRecipe(id: number)
  {
    return this.recipies.slice()[id];
  }

  addIngredientToShoppingList(ingredient: Ingredient[])
  {
    this.shoppingListService.addIngredients(ingredient);
  }


}
