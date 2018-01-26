import { Component, OnInit } from '@angular/core';

import { Recipe } from '../model/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];

  constructor() {
  }

  ngOnInit() {
    this.recipes = [
      new Recipe('A test Recipe', 'This is simply test recipe', 'https://get.pxhere.com/photo/restaurant-dish-meal-food-vegetable-recipe-meat-cuisine-asian-food-garnish-dinner-tasty-vegetarian-food-gastronomy-mediterranean-food-fried-food-animal-source-foods-middle-eastern-food-adana-kebab-mixed-grill-fat-ny-ros-1376098.jpg'),
      new Recipe('A test Recipe', 'This is simply test recipe', 'https://get.pxhere.com/photo/restaurant-dish-meal-food-vegetable-recipe-meat-cuisine-asian-food-garnish-dinner-tasty-vegetarian-food-gastronomy-mediterranean-food-fried-food-animal-source-foods-middle-eastern-food-adana-kebab-mixed-grill-fat-ny-ros-1376098.jpg')
    ];
  }

  printObjet(item:any) {
    console.log(item);    
  }

}
