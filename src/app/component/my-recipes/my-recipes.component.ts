import { Component } from '@angular/core';
import { Recipe } from '../../types';
import { fakeRecipes } from '../../fake-data';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-my-recipes',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './my-recipes.component.html',
  styleUrl: './my-recipes.component.css'
})
export class MyRecipesComponent {
  recipes: Recipe[] = [];

  constructor(){}

  ngOnInit(){
    this.loadData();
  }

  private loadData(){
    this.recipes = fakeRecipes;
  }

  onDelete(recipeId: String):void{
    alert(`Se va a eliminar la receta ${recipeId}`)
  }

}
