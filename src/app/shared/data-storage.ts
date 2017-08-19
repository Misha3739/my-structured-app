import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {RecipeService} from "../recipes/recipe.service";
import {Observable} from "rxjs/Observable";
import 'rxjs/Rx';
import {Recipe} from "../recipes/recipe.model";

@Injectable()
export class DataStorage {
  header = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http, private  recipeService: RecipeService) {}

  storeRecipes()
  {
   return this.http.put('https://ng-recipe-book-3e445.firebaseio.com/recipes.json',this.recipeService.getRecipes());
  }

  getRecipes()
  {
    this.http.get('https://ng-recipe-book-3e445.firebaseio.com/recipes.json').
      map((response) => {
        const recipes: Recipe[] = response.json();
        for(let recipe of recipes)
        {
          if(!recipe['ingredients'])
          {
            recipe['ingredients'] = [];
          }
        }
        return recipes;
    }).
      subscribe(
      (recipes: Recipe[]) => {

        this.recipeService.setRecipes(recipes);
      }
     );
  }


}

