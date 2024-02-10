import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../types';
import { RouterLink } from '@angular/router';
import { RecipeService } from '../../service/recipe.service';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
//import { CommonModule } from '@angular/common'; required to old ngFor implementation, also include it 
// ino imports: [] bellow
// The imported  class AsyncPipe  unsubscribe() and subscribe() under the hood by ourselves avoiding adding to the code this logic when calling the server eg
// this.recipeService.getAllRecipes().subscribe(reciped => this.recipes = recipes)

@Component({
  selector: 'app-recipes-list',
  standalone: true,
  imports: [RouterLink, AsyncPipe],
  providers: [RecipeService],
  templateUrl: './recipes-list.component.html',
  styleUrl: './recipes-list.component.css'
})
export class RecipesListComponent implements OnInit {
  recipes$!: Observable<Recipe[]>;

  constructor(private recipeService: RecipeService){}

  ngOnInit(){
    this.loadData();
  }

  private loadData(){
    this.recipes$ = this.recipeService.getAllRecipes();
  }

}
