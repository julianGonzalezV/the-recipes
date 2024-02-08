import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RecipeDataFormComponent } from '../recipe-data-form/recipe-data-form.component';

@Component({
  selector: 'app-new-recipe',
  standalone: true,
  imports: [FormsModule, RecipeDataFormComponent],
  templateUrl: './new-recipe.component.html',
  styleUrl: './new-recipe.component.css'
})
export class NewRecipeComponent implements OnInit{
  
  constructor(private router:Router){

  }

  ngOnInit(): void {
    
  }


  onSubmit():void {
    alert('Creando mi receta...');
    this.router.navigateByUrl('/my-recipes');
  }
}
