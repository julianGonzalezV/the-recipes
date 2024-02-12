import { Component } from '@angular/core';
import { Recipe } from '../../types';
import { RouterLink } from '@angular/router';
import { RecipeService } from '../../service/recipe.service';

@Component({
  selector: 'app-my-recipes',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './my-recipes.component.html',
  styleUrl: './my-recipes.component.css'
})
export class MyRecipesComponent {
  recipes: Recipe[] = [];

  constructor(private recipeService: RecipeService){}

  ngOnInit(){
    this.loadAll();
  }

  private loadAll(){
    this.recipeService.getAllRecipes().subscribe(response => this.recipes = response);
  }

  onDelete(recipeId: string):void{
    this.recipeService.detele(recipeId).subscribe( () => this.recipes = this.recipes.filter(recipe => recipe.code !==recipeId));
  }

}
