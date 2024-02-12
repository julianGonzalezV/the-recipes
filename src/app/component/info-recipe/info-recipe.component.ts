import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Recipe } from '../../types';
import { RecipeService } from '../../service/recipe.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-info-recipe',
  standalone: true,
  imports: [RouterLink, AsyncPipe],
  templateUrl: './info-recipe.component.html',
  styleUrl: './info-recipe.component.css'
})
export class InfoRecipeComponent implements OnInit{
  lisLoading: boolean=true;

  @Input('id') recipeId!:string;
  
   recipe$!:Observable<Recipe>;

  /**
   * ActivatedRoute Provides access to information about a route associated with a 
   * component that is loaded in an outlet (in this case the :id of the specific recipe)
   * @param route 
   */
  constructor(private recipeService: RecipeService){

  }


  ngOnInit(): void {
    this.recipe$ = this.recipeService.getByRefCode(this.recipeId);
  }

}
