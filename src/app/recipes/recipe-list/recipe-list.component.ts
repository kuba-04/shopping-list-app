import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is a test', 
    'https://c.pxhere.com/photos/9a/90/food_gastronomy_meat_tasty_dinner_restaurant_meal-1376098.jpg!d'),
    new Recipe('Another test recipe', 'This is a test', 
    'https://c.pxhere.com/photos/9a/90/food_gastronomy_meat_tasty_dinner_restaurant_meal-1376098.jpg!d')

  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe)
  }

}
