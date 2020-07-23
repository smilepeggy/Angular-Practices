import { Component, OnInit } from "@angular/core";
import { Recipe } from "./recipe-list/recipe.model";

@Component({
  selector: "app-recipes",
  templateUrl: "./recipes.component.html",
  styleUrls: ["./recipes.component.css"],
})
export class RecipesComponent implements OnInit {
  selectedRecipes: Recipe;
  constructor() {}

  ngOnInit() {}
  getSelectedRecipes(recipe: Recipe) {
    // console.log(recipe);
    this.selectedRecipes = recipe;
  }
}
