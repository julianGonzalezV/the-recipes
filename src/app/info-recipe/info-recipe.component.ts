import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { fakeRecipes } from '../fake-data';
import { Recipe } from '../types';

@Component({
  selector: 'app-info-recipe',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './info-recipe.component.html',
  styleUrl: './info-recipe.component.css'
})
export class InfoRecipeComponent implements OnInit{

  @Input('id') recipeId!:string;
  
   recipe!:Recipe;

  /**
   * ActivatedRoute Provides access to information about a route associated with a 
   * component that is loaded in an outlet (in this case the :id of the specific recipe)
   * @param route 
   */
  constructor(){

  }


  ngOnInit(): void {
    this.recipe = fakeRecipes.find((recipe:Recipe) => recipe.id === this.recipeId)!;
  }

}
