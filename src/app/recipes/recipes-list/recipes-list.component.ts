import {Component, OnInit, Output, EventEmitter, OnDestroy} from '@angular/core';
import {Recipe} from '../recipe.model';
import {RecipeService} from "../recipe.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit, OnDestroy {

  recipesChanged:Subscription;

  recipes: Recipe[];

  constructor(
    private recipeService: RecipeService,
    private  router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.recipesChanged = this.recipeService.recipesChanged.subscribe((value: Recipe[]) => {
      this.recipes = value;
    });
    this.recipes = this.recipeService.getRecipes();
  }

  onRecipeSelected(recipe: Recipe)
  {
    //this.recipeService(recipe);
  }

  onNewRecipe()
  {
    this.router.navigate(['new'],{relativeTo: this.route});
  }

  ngOnDestroy()
  {
    this.recipesChanged.unsubscribe();
  }

}
