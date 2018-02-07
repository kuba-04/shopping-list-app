import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from '../recipes/recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is a test', 
      'https://c.pxhere.com/photos/9a/90/food_gastronomy_meat_tasty_dinner_restaurant_meal-1376098.jpg!d',
      [ 
        new Ingredient('meat', 2),
        new Ingredient('fries', 20)
      ]),
    new Recipe('Another test recipe', 'This is a test', 
      'https://c.pxhere.com/photos/9a/90/food_gastronomy_meat_tasty_dinner_restaurant_meal-1376098.jpg!d',
      [
        new Ingredient('meat', 1),
        new Ingredient('salad', 1)
      ])
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
      return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingrediens: Ingredient[]) {  
    this.shoppingListService.addIngredients(ingrediens);

  }
}