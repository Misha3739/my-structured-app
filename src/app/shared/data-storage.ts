import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {RecipeService} from "../recipes/recipe.service";

@Injectable()
export class DataStorage {
  header = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http, private  recipeService: RecipeService) {}

  storeRecipes()
  {
   return this.http.put('https://ng-recipe-book-3e445.firebaseio.com/recipes.json',this.recipeService.getRecipes());
  }
}

