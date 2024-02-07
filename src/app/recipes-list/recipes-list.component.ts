import { Component, OnInit } from '@angular/core';
import { Recipe } from '../types';
import { fakeRecipes } from '../fake-data';
import { RouterLink } from '@angular/router';
//import { CommonModule } from '@angular/common'; required to old ngFor implementation, also include it 
// ino imports: [] bellow

@Component({
  selector: 'app-recipes-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './recipes-list.component.html',
  styleUrl: './recipes-list.component.css'
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [];

  constructor(){}

  ngOnInit(){
    this.loadData();
  }

  private loadData(){
    this.recipes = fakeRecipes;
  }

}
