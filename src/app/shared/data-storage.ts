import {Injectable} from "@angular/core";
import {RecipeService} from "../recipes/recipe.service";
import 'rxjs/Rx';
import {Recipe} from "../recipes/recipe.model";
import {Authservice} from "../auth/authservice";
import {HttpClient, HttpParams, HttpRequest} from '@angular/common/http';

@Injectable()
export class DataStorage {
  header = new Headers({'Content-Type': 'application/json'});

  constructor(private httpClient: HttpClient, private  recipeService: RecipeService,private authService: Authservice) {}

  storeRecipes()
  {
   const  request = new HttpRequest(
     'PUT',
     'https://ng-recipe-book-3e445.firebaseio.com/recipes.json',
     this.recipeService.getRecipes(),
     {
       reportProgress: true
     });
    return this.httpClient.request(request);
  }

  getRecipes()
  {
    const token = this.authService.getToken();

    this.httpClient.get<Recipe[]>('https://ng-recipe-book-3e445.firebaseio.com/recipes.json',
    {
      observe: 'body'
    }).
      map(

        (recipes) => {
          console.log(recipes);
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

