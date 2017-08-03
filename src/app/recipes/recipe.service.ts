import {Recipe} from './recipe.model';
import {EventEmitter} from '@angular/core';
/**
 * Created by M.Udot on 02.08.2017.
 */
export  class RecipeService
{
  recipeSelected = new EventEmitter<Recipe>();

  private  recipies: Recipe[] = [
    new Recipe(
    'A Meat Recipe',
    'This is the meat',
    'https://grist.files.wordpress.com/2015/07/meat-feature-v1.jpg' ),
    new Recipe(
      'A Salad Recipe',
      'This is the salad',
      'http://noblepig.com/images/2016/06/Avocado-and-Three-Bean-Salad-is-perfect-for-a-summertime-barbecue-side-dish.JPG' )
  ];

  getRecipes()
  {
    return this.recipies.slice();
  }
}
