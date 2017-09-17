import {Action} from "@ngrx/store";
import {Ingredient} from "../shared/ingredient.model";

export const ADD_INGREDIENT = 'ADD_INGREDIENT';

const  initialState = {
  ingredients:  [
    new Ingredient('egg', 5),
    new Ingredient('apple', 3)
  ]
};

export function shoppingListReducer(state = initialState, action: Action)
{
  switch (action.type)
  {
    case ADD_INGREDIENT:
      return {
        ...state,
        ingredients: [...state.ingredients, action.type]
      };
  }
  return state;
}
