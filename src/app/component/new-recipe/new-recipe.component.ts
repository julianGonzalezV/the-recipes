import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RecipeDataFormComponent } from '../recipe-data-form/recipe-data-form.component';
import { RecipeService } from '../../service/recipe.service';
import { Recipe } from '../../types';

@Component({
  selector: 'app-new-recipe',
  standalone: true,
  imports: [FormsModule, RecipeDataFormComponent],
  templateUrl: './new-recipe.component.html',
  styleUrl: './new-recipe.component.css'
})
export class NewRecipeComponent implements OnInit{
  
  constructor(private router:Router, private recipeService: RecipeService){

  }

  ngOnInit(): void {
    
  }


  addRecipe(recipe:Recipe):void {
    console.log('recipe to crate ', recipe);
    this.recipeService.createNew(recipe).subscribe(() => this.router.navigateByUrl('/my-recipes'));
  }
}
