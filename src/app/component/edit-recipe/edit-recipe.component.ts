import { Component, Input, OnInit } from '@angular/core';
import { RecipeDataFormComponent } from '../recipe-data-form/recipe-data-form.component';
import { Router } from '@angular/router';
import { Recipe } from '../../types';
import { RecipeService } from '../../service/recipe.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';


@Component({
  selector: 'app-edit-recipe',
  standalone: true,
  imports: [RecipeDataFormComponent, AsyncPipe],
  templateUrl: './edit-recipe.component.html',
  styleUrl: './edit-recipe.component.css'
})
export class EditRecipeComponent implements OnInit{

  @Input('id') recipeId!:string;

  recipe$!:Observable<Recipe>;


  constructor(private router: Router, private recipeService: RecipeService){

  }

  ngOnInit(): void {
    this.recipe$ = this.recipeService.getByRefCode(this.recipeId);
  }

  updateRecipe(recipe:Recipe){
    this.recipeService.update(recipe).subscribe(() => this.router.navigateByUrl('/my-recipes'));
  }

}
