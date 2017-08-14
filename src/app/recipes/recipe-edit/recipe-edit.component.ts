import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {RecipeService} from "../recipe.service";
import {Recipe} from "../recipe.model";
import {Subscription} from "rxjs/Subscription";
@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit, OnDestroy {
  id: number;
  editMode = false;
  recipeForm: FormGroup;

  subscription: Subscription;

  constructor(private route: ActivatedRoute, private  recipeService: RecipeService, private  router: Router) { }

  ngOnInit() {
   this.subscription =  this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];

        this.editMode = params['id'] != null ? true : false;
        this.initForm();
    });
  }

  initForm()
  {
    let recipeName = '', recipeImagePath = '', recipeDescription='';
    let recipeIngredients = new FormArray([]);
    if(this.editMode)
    {
      const recipe =  this.recipeService.getRecipe(this.id);
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.description;


      if(recipe['ingredients'])
      {
        for(let ingredient of recipe.ingredients)
        {
          recipeIngredients.push(new FormGroup({
            'name': new FormControl(ingredient.name,[Validators.required]),
            'amount': new FormControl(ingredient.amount,[Validators.required, Validators.pattern(/^[1-9+[0-9]*$/)])
          }));
        }
      }
    }
    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName, [Validators.required]),
      'imagePath': new FormControl(recipeImagePath,[Validators.required]),
      'description': new FormControl(recipeDescription,[Validators.required]),
      'ingredients': recipeIngredients

    });
  }

  onSubmit()
  {
    /*const newRecipe = new Recipe(
      this.recipeForm.value['name'],
      this.recipeForm.value['description'],
      this.recipeForm.value['imagePath'],
      this.recipeForm.value['ingredients'],
    );*/

    const newRecipe = this.recipeForm.value;

    if(this.editMode)
    {
      this.recipeService.updateRecipe(this.id, newRecipe);
    }
    else
    {
      this.recipeService.addRecipe(newRecipe);
    }
    this.onCancel();
  }

  onAddIngredient()
  {
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(null, [Validators.required]),
        'amount': new FormControl(null,[Validators.required, Validators.pattern(/^[1-9+[0-9]*$/)])
      }));
  }

  onDeleteIgredient(id: number)
  {
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(id);
  }

  onCancel()
  {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  ngOnDestroy()
  {
    this.subscription.unsubscribe();
  }
}
