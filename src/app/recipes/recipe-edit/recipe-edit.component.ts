import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {RecipeService} from "../recipe.service";
import {Recipe} from "../recipe.model";
@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  recipeForm: FormGroup;

  constructor(private route: ActivatedRoute, private  recipeStrvice: RecipeService) { }

  ngOnInit() {
    this.route.params.subscribe(
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
      const recipe =  this.recipeStrvice.getRecipe(this.id);
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
      this.recipeStrvice.updateRecipe(this.id, newRecipe);
    }
    else
    {
      this.recipeStrvice.addRecipe(newRecipe);
    }

  }

  onAddIngredient()
  {
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(null, [Validators.required]),
        'amount': new FormControl(null,[Validators.required, Validators.pattern(/^[1-9+[0-9]*$/)])
      }));
  }
}
