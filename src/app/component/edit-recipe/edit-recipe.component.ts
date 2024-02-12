import { Component, Input, OnInit } from '@angular/core';
import { RecipeDataFormComponent } from '../recipe-data-form/recipe-data-form.component';
import { Router } from '@angular/router';
import { Recipe } from '../../types';
import { fakeRecipes } from '../../fake-data';


@Component({
  selector: 'app-edit-recipe',
  standalone: true,
  imports: [RecipeDataFormComponent],
  templateUrl: './edit-recipe.component.html',
  styleUrl: './edit-recipe.component.css'
})
export class EditRecipeComponent implements OnInit{

  @Input('id') recipeId!:string;

  currentRecipe!:Recipe;


  constructor(private router: Router){

  }

  ngOnInit(): void {
    this.currentRecipe = fakeRecipes.find( recipe => recipe.code===this.recipeId)!;
  }

  onSubmit(){
    alert('Guardando cambios');
    this.router.navigateByUrl('/my-recipes');
  }

}
