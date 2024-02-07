import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
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

   recipe:Recipe =  <Recipe>{}

  /**
   * ActivatedRoute Provides access to information about a route associated with a 
   * component that is loaded in an outlet (in this case the :id of the specific recipe)
   * @param route 
   */
  constructor(private route:ActivatedRoute){

  }


  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.recipe = fakeRecipes.find((recipe:Recipe) => recipe.id === id)!;
  }

}
