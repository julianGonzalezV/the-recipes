import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../types';
import { RouterLink } from '@angular/router';
import { RecipeService } from '../../service/recipe.service';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
//import { CommonModule } from '@angular/common'; required to old ngFor implementation, also include it 
// ino imports: [] bellow
// The imported  class AsyncPipe  unsubscribe() and subscribe() under the hood by ourselves avoiding adding to the code this logic when calling the server eg
// this.recipeService.getAllRecipes().subscribe(reciped => this.recipes = recipes)

@Component({
  selector: 'app-recipes-list',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, AsyncPipe,],
  providers: [RecipeService],
  templateUrl: './recipes-list.component.html',
  styleUrl: './recipes-list.component.css'
})
export class RecipesListComponent implements OnInit {
  recipes$!: Observable<Recipe[]>;

  searchForm:any;

  constructor(private recipeService: RecipeService,
    private formBuilder: FormBuilder){}

  ngOnInit(){
    this.loadAll();
    this.searchFormSetup();
  }

  private searchFormSetup(){
    this.searchForm = this.formBuilder.group({
      name: ['', Validators.required]
    });
  }

  private loadAll(){
    this.recipes$ = this.recipeService.getAllRecipes();
  }

  loadByName(){
    if(this.searchForm?.valid){
      console.warn('Your recipe has been submitted', this.searchForm.value.name);
      console.warn(this.searchForm.value);
      console.warn(this.searchForm.value.name);
      this.recipes$ = this.recipeService.getAllByName(this.searchForm.value.name);
    }else{
      this.loadAll();
    }    
  }

}
