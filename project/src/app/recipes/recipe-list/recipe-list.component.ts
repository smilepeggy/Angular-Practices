import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { Recipe } from "./recipe.model";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"],
})
export class RecipeListComponent implements OnInit {
  @Output() selectedRecipesLi = new EventEmitter<Recipe>();
  public recipes: Recipe[] = [
    new Recipe(
      "Test Recipe1",
      "test",
      "https://img.taste.com.au/lBkXelJZ/w643-h428-cfill-q90/taste/2018/02/mar-18_creamy-fettuccine-with-chicken-3000x2000-135690-1.jpg"
    ),
    new Recipe(
      "Test Recipe2",
      "test",
      "https://img.taste.com.au/lBkXelJZ/w643-h428-cfill-q90/taste/2018/02/mar-18_creamy-fettuccine-with-chicken-3000x2000-135690-1.jpg"
    ),
  ];
  constructor() {}

  ngOnInit() {}

  onRecipeSelected(recipe: Recipe) {
    // console.log(recipe);
    this.selectedRecipesLi.emit(recipe);
  }
}
