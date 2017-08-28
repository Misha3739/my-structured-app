import {Injectable} from "@angular/core";
import {RecipeService} from "../recipes/recipe.service";
import 'rxjs/Rx';
import {Recipe} from "../recipes/recipe.model";
import {Authservice} from "../auth/authservice";
import {HttpClient} from '@angular/common/http';

@Injectable()
export class DataStorage {
  header = new Headers({'Content-Type': 'application/json'});

  constructor(private httpClient: HttpClient, private  recipeService: RecipeService,private authService: Authservice) {}

  storeRecipes()
  {
    const token = this.authService.getToken();
   return this.httpClient.put(
     'https://ng-recipe-book-3e445.firebaseio.com/recipes.json?auth=' + token,this.recipeService.getRecipes());
  }

  getRecipes()
  {
    const token = this.authService.getToken();

    this.httpClient.get<Recipe[]>('https://ng-recipe-book-3e445.firebaseio.com/recipes.json?auth=' + token).
      map(
        (recipes) => {
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

