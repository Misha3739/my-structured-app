import {Component, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingListService} from "../shoppinglist.service";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('f')form: FormControl;

  constructor(private  shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddItem(form: FormControl)
  {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);

    this.shoppingListService.addIngredient(newIngredient);
  }
}
